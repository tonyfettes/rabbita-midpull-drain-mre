# rabbita MRE: re-entrant `drain_message` during the render pull corrupts dirty tracking

Affects `moonbit-community/rabbita` 0.13.0 – 0.13.2 (the relevant runtime code
is unchanged across those releases).

## Symptom

A store accepts a message and updates its model, but the view does not
re-render. The stale frame persists until **a different store** is written;
that unrelated write suddenly makes the earlier update visible. Messages sent
to the *same* store never repair it.

In our production app this surfaced as a dialog-open button that "sometimes
does nothing" right after navigation, with the dialog popping up later when any
unrelated button was clicked.

## Reproduce

```sh
npm install
npm run verify   # moon build --target js --release && node verify.mjs
```

`verify.mjs` drives the built app under happy-dom. While the bug is present it
exits non-zero and prints:

```
dialog store accepted OpenDialog: model is now true
FAIL after 'open dialog' click: dialog visible = false (expected true)
ok  after 'cycle theme' click: dialog visible = true (expected true)
```

Control run (skip the navigation click; everything works): `SKIP_NAVIGATE=1
node verify.mjs`.

In a browser: `moon build --target js --release && python3 -m http.server`,
open `http://localhost:8000`, then click the buttons in order **1 → 2 → 3**.
After 2 nothing happens (the console proves the model changed); after 3 the
dialog appears. Reloading and clicking 2 directly works fine.

## Trigger

`src/main/main.mbt` mirrors a common observer pattern: a `switch_by` branch
whose `create_state_with_init` init command synchronously emits into another
store ("dialog"):

```moonbit
page.switch_by(by=page => page.to_string(), fn(_) {
  let (state, _) = @rabbita.create_state_with_init(
    init=fn(_ : @rabbita.Emit[Unit]) { ((), dialog_emit(BranchCreated)) },
    update=fn(_, _ : Unit, model) { (model, @rabbita.none) },
  )
  state
})
```

Branch creation happens while the runtime is recomputing the incremental graph
inside the `requestAnimationFrame` paint callback, so the emitted message is
drained **in the middle of that pull**.

## Mechanism

1. `Sandbox::flush` recomputes the view via `root_view.read()` inside the rAF
   callback (`internal/runtime/sandbox.mbt`). `drain_message` has no guard
   against being invoked re-entrantly during that pull, and
   `create_state_machine*` calls `scheduler.add(init_cmd)` at branch-creation
   time (`internal/runtime/stores.mbt`), so the store update runs mid-pull.
2. The update calls `set_model` → `push_dirty`
   (`internal/duplix/duplix.mbt`). `push_dirty` marks the downstream flags and
   **clears each marked flag's `parents` list**; edges are normally
   re-registered by `pull_value`'s recompute loop.
3. But `pull_value` fixed its recompute list before the write. The dialog
   store's model node (and its `model.map(unwrap)` wrapper) were clean at DFS
   time, so they are not in the list and their edges are never re-registered.
4. The next message to the *same* store finds the model node's `parents`
   empty: `push_dirty` stops immediately, the root never becomes dirty, and
   the next paint's `root_view.read()` returns the cached vnode — the update
   is never rendered. (Its own `model.read()` also re-cleans the node each
   time, so the store can never repair itself.)
5. A write to any *other* store re-dirties the shared view spine through
   intact edges; the pull then descends into the still-dirty wrapper node,
   recomputes it, and the swallowed update finally appears.

A secondary hole in the same area: `flush()` called during the paint window
(`paint_scheduled` still true) is a no-op, so model changes made inside the
rAF callback also miss their frame even when the graph bookkeeping survives.

## Workaround

Defer branch-init emits past the in-flight frame:

```moonbit
init=fn(_ : @rabbita.Emit[Unit]) {
  (
    (),
    @cmd.custom_cmd(
      fn(scheduler) { scheduler.add(dialog_emit(BranchCreated)) },
      kind=@cmd.after_render,
    ),
  )
}
```

With that change `npm run verify` passes.
