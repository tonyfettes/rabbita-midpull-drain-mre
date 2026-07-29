///| Point 3 — multi-store join: notify when the (user, wide-layout) pair

///| changes, where the two halves live in two different stores.

///|
pub(all) enum UserMsg {
  SetUser(String)
}

///|
pub(all) enum LayoutMsg {
  SetWide(Bool)
}

///|
pub(all) enum SyncMsg {
  UserIs(String)
  LayoutIs(Bool)
}

///|
priv struct SyncModel {
  user : String
  wide : Bool
  last_key : String?
} derive(Eq)

///|
/// Elm style needs three pieces of plumbing, because a store's update sees
/// only its own model — neither producer can compute the joint key alone.
/// Piece 1: the user store forwards every change to a coordinator.
pub fn user_store_elm(
  sync_emit : @rabbita.Emit[SyncMsg],
) -> @rabbita.Emit[UserMsg] {
  let (_, emit) = @rabbita.create_state("guest", update=fn(_, msg, _) {
    match msg {
      SetUser(user) => (user, sync_emit(UserIs(user)))
    }
  })
  emit
}

///|
/// Piece 2: the layout store forwards every change too.
pub fn layout_store_elm(
  sync_emit : @rabbita.Emit[SyncMsg],
) -> @rabbita.Emit[LayoutMsg] {
  let (_, emit) = @rabbita.create_state(false, update=fn(_, msg, _) {
    match msg {
      SetWide(wide) => (wide, sync_emit(LayoutIs(wide)))
    }
  })
  emit
}

///|
/// Piece 3: a coordinator store caches the latest pair and hand-diffs the
/// joint key. Note it duplicates both producers' state just to be able to
/// see the pair at all.
pub fn sync_coordinator_elm(
  pair_changed : @rabbita.Emit[String],
) -> @rabbita.Emit[SyncMsg] {
  let (_, emit) = @rabbita.create_state(
    { user: "guest", wide: false, last_key: None },
    update=fn(_, msg, model) {
      let updated = match msg {
        UserIs(user) => { ..model, user, }
        LayoutIs(wide) => { ..model, wide, }
      }
      let key = "\{updated.user}:\{updated.wide}"
      if model.last_key == Some(key) {
        (updated, @rabbita.none)
      } else {
        ({ ..updated, last_key: Some(key) }, pair_changed(key))
      }
    },
  )
  emit
}

///|
/// Observer style: the join is one expression over two untouched vanilla
/// stores. `map2` recomputes the key when either side changes, the Eq
/// cutoff dedupes, and `switch_by` fires once per distinct key.
pub fn pair_observer(
  user : @rabbita.Val[String],
  wide : @rabbita.Val[Bool],
  pair_changed : @rabbita.Emit[String],
) -> @rabbita.Val[Unit] {
  user
  .map2(wide, fn(user, wide) { "\{user}:\{wide}" })
  .switch_by(by=key => key, fn(key) {
    let (state, _) = @rabbita.create_state_with_init(
      init=fn(_ : @rabbita.Emit[Unit]) { ((), pair_changed(key)) },
      update=fn(_, _ : Unit, model) { (model, @rabbita.none) },
    )
    state
  })
}
