# Elm-style Cmds vs `Val[Unit]` observers

The buggy pattern in this MRE — a `switch_by` branch whose init emits into
another store — is not something people write for fun. It is the idiom that
grows around a gap in rabbita: **update's returned Cmd can only fire when that
store receives a message**, and `create_state_with_input` explicitly does not
message on input changes. When the interesting change lives in a *derived
`Val`*, there is no sanctioned way to turn it into a message — so users build
`Val[Unit]` observers.

`src/comparison/` contains three type-checked pairs showing exactly what the
observer buys over the orthodox Elm shape. All files compile
(`moon check --target js`); they are illustrations, not mounted in the demo
app.

## 1. Decoupling — `decoupling.mbt`

*Task: the audit store must learn whenever the click counter changes.*

| | Elm (`clicks_elm`) | Observer (`clicks_observer` + `audit_observer`) |
|---|---|---|
| Producer signature | must accept `audit_emit` — root wires producer → consumer | untouched; exposes only its public `Val` |
| Adding a 2nd consumer | touch the producer signature or compose a batched emit at the root | attach another observer; producer never knows |
| Emit timing | inside a drain, **outside the render pull** — safe | during graph evaluation — the mid-pull bug |

The Elm version costs constructor plumbing. The observer version costs
correctness.

## 2. Change detection on a projection — `projection.mbt`

*Task: the session model updates constantly (heartbeat), but only a change of
`user` should notify.*

| | Elm (`session_elm`) | Observer (`user_observer`) |
|---|---|---|
| Dedup | hand-diff `user` in **every** message arm that could change it | free: `map`'s Eq cutoff + `switch_by`'s key comparison |
| New message arm added later | can silently forget the notification | structurally cannot miss — any path that changes the projection fires it |
| Computed projections | computed twice (before/after) | computed once, memoized |

This is the strongest genuine argument for the observer: **the incremental
graph is the framework's only change-detection machinery**, and the observer
is how you borrow it.

## 3. Multi-store join — `join.mbt`

*Task: notify when the (user, wide-layout) pair changes; the halves live in
two different stores.*

| | Elm (3 functions) | Observer (`pair_observer`) |
|---|---|---|
| Plumbing | both producers forward to a third coordinator store, which duplicates their state and hand-diffs the joint key | one expression: `map2` + `switch_by` over two untouched stores |
| Why so heavy | a store's update sees only its own model — neither producer can compute the joint key alone | the graph joins values natively |

## Scorecard

The observer wins on ergonomics precisely where the graph's machinery
(Eq cutoffs, key comparison, joins) replaces hand-written bookkeeping. It
loses on one thing only — but it is the load-bearing thing: **it keys a side
effect to graph evaluation**, whose timing (lazy, memoized, batched into rAF)
is an implementation detail. That is the category error behind the corruption
this repository reproduces: a *pull* (pure recomputation) suddenly performs
*writes*.

Practical guidance until upstream provides a safe primitive:

- If the change moment is already known inside some store's update (point 1,
  and every case like "the route store just computed a location change"),
  prefer the Elm shape — the plumbing is annoying but the timing is safe.
- If you genuinely need the graph's change detection or joins (points 2–3),
  keep the observer but defer its init emit out of the pull:

  ```moonbit
  init=fn(_ : @rabbita.Emit[Unit]) {
    (
      (),
      @cmd.custom_cmd(
        fn(scheduler) { scheduler.add(user_changed(user)) },
        kind=@cmd.after_render,
      ),
    )
  }
  ```

The real fix belongs in the framework: either guard `drain_message` during
pulls, or provide a first-class "subscribe to a `Val`'s changes as messages"
API so nobody has to encode lifecycle hooks as `Val[Unit]` stores.
