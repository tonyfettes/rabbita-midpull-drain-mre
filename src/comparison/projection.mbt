///| Point 2 — change detection on a projection: the session model updates
/// constantly (heartbeat), but only a change of `user` should notify
/// anyone.

///|
pub(all) struct Session {
  user : String
  heartbeat : Int
} derive(Eq)

///|
pub(all) enum SessionMsg {
  Heartbeat
  Login(String)
}

///|
/// Elm style: the update must hand-diff the projection in every message arm
/// that could change it. Forget one arm — or a future arm added by someone
/// who does not know about the notification — and it silently goes missing.
/// If the projection is computed rather than a stored field, you compute it
/// twice, before and after.
pub fn session_elm(
  user_changed : @rabbita.Emit[String],
) -> (@rabbita.Val[Session], @rabbita.Emit[SessionMsg]) {
  @rabbita.create_state({ user: "guest", heartbeat: 0 }, update=fn(
    _,
    msg,
    model,
  ) {
    match msg {
      Heartbeat => ({ ..model, heartbeat: model.heartbeat + 1 }, @rabbita.none)
      Login(user) => {
        let notify = if user == model.user {
          @rabbita.none
        } else {
          user_changed(user)
        }
        ({ ..model, user, }, notify)
      }
    }
  })
}

///|
/// Observer style: project the `Val` and let the graph do the deduping.
/// `map`'s Eq cutoff drops the heartbeat noise, and `switch_by`'s key
/// comparison fires the branch init exactly once per distinct user — it is
/// structurally impossible for a new message arm to forget the notification.
/// Same price as always: a `Val[Unit]` anchor and a mid-pull emit.
pub fn user_observer(
  session : @rabbita.Val[Session],
  user_changed : @rabbita.Emit[String],
) -> @rabbita.Val[Unit] {
  session
  .map(model => model.user)
  .switch_by(by=user => user, fn(user) {
    let (state, _) = @rabbita.create_state_with_init(
      init=fn(_ : @rabbita.Emit[Unit]) { ((), user_changed(user)) },
      update=fn(_, _ : Unit, model) { (model, @rabbita.none) },
    )
    state
  })
}
