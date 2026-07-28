///|
enum CounterMsg {
  Increment
  TabMounted
}

///|
enum TabMsg {
  SwitchTab
}

///|
/// Each tab is its own `switch_by` branch. On mount the branch notifies the
/// counter store — a common observer pattern (route observers, analytics,
/// "component became active" pings). The notification is a no-op for the
/// counter model, but it runs synchronously while the render pull is
/// recomputing the incremental graph, and that corrupts the counter store's
/// dirty-flag edges.
fn tab_observer(
  tab : @rabbita.Val[Bool],
  counter_emit : @rabbita.Emit[CounterMsg],
) -> @rabbita.Val[Unit] {
  tab.switch_by(by=tab => if tab { "B" } else { "A" }, fn(_) {
    let (state, _) = @rabbita.create_state_with_init(
      init=fn(_ : @rabbita.Emit[Unit]) { ((), counter_emit(TabMounted)) },
      update=fn(_, _ : Unit, model) { (model, @rabbita.none) },
    )
    state
  })
}

///|
fn render(
  count : Int,
  tab : Bool,
  counter_emit : @rabbita.Emit[CounterMsg],
  tab_emit : @rabbita.Emit[TabMsg],
) -> @rabbita.Html {
  let button_style = [
    "font-size: 18px", "padding: 8px 20px", "margin-right: 12px",
  ]
  @html.div(style=["font-family: monospace", "padding: 16px"], [
    @html.h1("count: \{count}"),
    @html.p("current tab: \{if tab { "B" } else { "A" }}"),
    @html.div([
      @html.button(
        type_="button",
        on_click=counter_emit(Increment),
        style=button_style,
        "+1",
      ),
      @html.button(
        type_="button",
        on_click=tab_emit(SwitchTab),
        style=button_style,
        "switch tab",
      ),
    ]),
  ])
}

///|
fn app() -> @rabbita.Val[@rabbita.Html] {
  let (count, counter_emit) = @rabbita.create_pure_state(0, update=fn(
    msg,
    model,
  ) {
    match msg {
      Increment => {
        println("counter store: model is now \{model + 1}")
        model + 1
      }
      TabMounted => model
    }
  })
  let (tab, tab_emit) = @rabbita.create_pure_state(false, update=fn(
    msg,
    model,
  ) {
    match msg {
      SwitchTab => !model
    }
  })
  let observer = tab_observer(tab, counter_emit)
  count
  .map2(tab, fn(count, tab) { render(count, tab, counter_emit, tab_emit) })
  .map2(observer, fn(html, _) { html })
}

///|
fn main {
  @rabbita.new(app).mount("app")
}
