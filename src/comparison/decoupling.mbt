///| Point 1 — decoupling: how does the audit store learn that the click
/// counter changed?

///|
pub(all) enum ClickMsg {
  Click
}

///|
pub(all) enum AuditMsg {
  CountChanged(Int)
}

///|
/// Elm style: the producer's update returns the notification Cmd. The
/// producer must receive the consumer's emit at construction time, so the app
/// root has to wire producer → consumer explicitly, and adding another
/// consumer means touching this signature (or composing a batched emit at the
/// root). In exchange, the emit runs inside a drain, safely outside the
/// render pull.
pub fn clicks_elm(
  audit_emit : @rabbita.Emit[AuditMsg],
) -> (@rabbita.Val[Int], @rabbita.Emit[ClickMsg]) {
  @rabbita.create_state(0, update=fn(_, msg, model) {
    match msg {
      Click => (model + 1, audit_emit(CountChanged(model + 1)))
    }
  })
}

///|
/// Observer style, producer half: the producer is closed — it exposes only
/// its public `Val` and knows nothing about consumers.
pub fn clicks_observer() -> (@rabbita.Val[Int], @rabbita.Emit[ClickMsg]) {
  @rabbita.create_pure_state(0, update=fn(msg, model) {
    match msg {
      Click => model + 1
    }
  })
}

///|
/// Observer style, consumer half: bolt an observer onto the producer's
/// public `Val` — the producer's code is untouched, and any number of
/// consumers can attach independently. The price: the returned `Val[Unit]`
/// must be map2-ed into the view spine to be pulled at all, and the emit
/// fires while the render pull is evaluating the graph — the mid-pull bug
/// this repository demonstrates.
pub fn audit_observer(
  clicks : @rabbita.Val[Int],
  audit_emit : @rabbita.Emit[AuditMsg],
) -> @rabbita.Val[Unit] {
  clicks.switch_by(by=count => count.to_string(), fn(count) {
    let (state, _) = @rabbita.create_state_with_init(
      init=fn(_ : @rabbita.Emit[Unit]) { ((), audit_emit(CountChanged(count))) },
      update=fn(_, _ : Unit, model) { (model, @rabbita.none) },
    )
    state
  })
}
