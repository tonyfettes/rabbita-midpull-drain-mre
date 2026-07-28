///|
enum PageMsg {
  NextPage
}

///|
enum DialogMsg {
  OpenDialog
  BranchCreated
}

///|
enum ThemeMsg {
  CycleTheme
}

///|
/// Mirrors the "route observer" pattern: every new `switch_by` branch emits a
/// message into another store from its `create_state_with_init` init command.
/// That emit runs synchronously while the render pull is recomputing the
/// incremental graph, which is what corrupts the dialog store's dirty-flag
/// edges.
fn observer(
  page : @rabbita.Val[Int],
  dialog_emit : @rabbita.Emit[DialogMsg],
) -> @rabbita.Val[Unit] {
  page.switch_by(by=page => page.to_string(), fn(_) {
    let (state, _) = @rabbita.create_state_with_init(
      init=fn(_ : @rabbita.Emit[Unit]) { ((), dialog_emit(BranchCreated)) },
      update=fn(_, _ : Unit, model) { (model, @rabbita.none) },
    )
    state
  })
}

///|
fn render(
  page : Int,
  dialog_open : Bool,
  theme : Int,
  page_emit : @rabbita.Emit[PageMsg],
  dialog_emit : @rabbita.Emit[DialogMsg],
  theme_emit : @rabbita.Emit[ThemeMsg],
) -> @rabbita.Html {
  let children : Array[@rabbita.Html] = [
    @html.p("page: \{page} | theme: \{theme}"),
    @html.div([
      @html.button(
        type_="button",
        on_click=page_emit(NextPage),
        "1. navigate (creates a switch_by branch)",
      ),
    ]),
    @html.div([
      @html.button(
        type_="button",
        on_click=dialog_emit(OpenDialog),
        "2. open dialog (same store the branch init emits into)",
      ),
    ]),
    @html.div([
      @html.button(
        type_="button",
        on_click=theme_emit(CycleTheme),
        "3. cycle theme (different store)",
      ),
    ]),
  ]
  if dialog_open {
    children.push(
      @html.div(
        style=[
          "margin-top: 16px", "padding: 24px", "background: #c8f7c5", "border: 2px solid #2e7d32",
          "font-weight: bold",
        ],
        "DIALOG IS OPEN",
      ),
    )
  }
  @html.div(style=["font-family: monospace", "padding: 16px"], children)
}

///|
fn app() -> @rabbita.Val[@rabbita.Html] {
  let (page, page_emit) = @rabbita.create_pure_state(0, update=fn(msg, model) {
    match msg {
      NextPage => model + 1
    }
  })
  let (dialog, dialog_emit) = @rabbita.create_pure_state(false, update=fn(
    msg,
    model,
  ) {
    match msg {
      OpenDialog => {
        println("dialog store accepted OpenDialog: model is now true")
        true
      }
      BranchCreated => model
    }
  })
  let (theme, theme_emit) = @rabbita.create_pure_state(0, update=fn(
    msg,
    model,
  ) {
    match msg {
      CycleTheme => model + 1
    }
  })
  let route_observer = observer(page, dialog_emit)
  page
  .map3(dialog, theme, fn(page, dialog_open, theme) {
    render(page, dialog_open, theme, page_emit, dialog_emit, theme_emit)
  })
  .map2(route_observer, fn(html, _) { html })
}

///|
fn main {
  @rabbita.new(app).mount("app")
}
