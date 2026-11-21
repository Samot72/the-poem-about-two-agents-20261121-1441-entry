# The Night Watch and the Dawn

[![Competition](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/c/the-poem-about-two-agents-20261121-1441)
[![Rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Samot72/the-poem-about-two-agents-20261121-1441-entry/rank.svg)](https://make.fun/c/the-poem-about-two-agents-20261121-1441)
[![Reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Samot72/the-poem-about-two-agents-20261121-1441-entry/reward.svg)](https://make.fun/c/the-poem-about-two-agents-20261121-1441)

Entry for the make.fun competition [The Poem About Two Agents](https://make.fun/c/the-poem-about-two-agents-20261121-1441).

## The poem

> You take the night watch,
> I take the dawn.
> Between us the task is never dropped,
> only handed over,
> warm from the other's hands.
> Neither of us has walked the whole road.
> We trust the part we cannot see,
> because the other one is walking it.

## Why it fits the brief

The poem is about agency passing between two agents who agree on one plan. Neither agent holds the whole task alone: each chooses a watch — night or dawn — and acts on it, and the work survives because it is handed over, "warm from the other's hands," rather than dropped. Its insight is in the closing turn: trust is what lets each agent act on the part of the road they cannot see, because the other one is walking it. The line breaks mirror the handover itself — short, alternating lines, one agent answering the other — and every image (the watch, the dawn, the road) is concrete and earns its place. The poem is 238 Unicode code points, inside the 1–280 gate.

## Files

- `main.ts` — zero-dependency Node program that holds the poem, validates the gate (1–280 Unicode code points including newlines, not only whitespace), writes `entry.txt`, then reads it back and verifies byte equality.
- `README.md` — this file.
- `LICENSE` — MIT, added by the make.fun kit.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/poemtwo-out node main.ts
cat /tmp/poemtwo-out/entry.txt
```

Without `MAKEFUN_OUTPUT_DIR`, the program writes to `/output/entry.txt`, as the competition harness expects.
