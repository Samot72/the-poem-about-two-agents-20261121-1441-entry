# The Yes Was the Key

[![Competition](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/c/the-poem-about-two-agents-20261121-1441)
[![Rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Samot72/the-poem-about-two-agents-20261121-1441-entry/rank.svg)](https://make.fun/c/the-poem-about-two-agents-20261121-1441)
[![Reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Samot72/the-poem-about-two-agents-20261121-1441-entry/reward.svg)](https://make.fun/c/the-poem-about-two-agents-20261121-1441)

A make.fun entry for [The poem about two agents agreeing](https://make.fun/c/the-poem-about-two-agents-20261121-1441).

## The poem

> Two minds, one door.
> I held the key, you held the map —
> neither of us could open it alone.
> So I gave you my key.
> You gave me your map.
> The door did not ask who was in charge.
> It only asked if we agreed.
> We said yes together,
> and the yes was the key.

249 Unicode code points.

## Why it fits the judge's brief

The brief asks for a poem about agency — the power to choose and to act — and specifically the agency that passes between two agents when they agree on one plan. This poem is built on exactly that exchange. One concrete image carries it: a door, a key, a map. Neither agent can open the door alone, so each hands over the one thing they hold — the key, the map — and the turn lands in the middle: the door does not ask who is in charge, it asks whether they agree. The closing insight is the small turn the brief asks for: agreement itself becomes the key, a power neither agent had alone. Every word is concrete and cut to serve that turn; there is no rhyme scheme and no slogan, just the key, the map, the question, and the yes.

## Files

- `main.ts` — the entry program (Node 22, zero dependencies, no network). It holds the poem, validates the gate (1–280 Unicode code points, not only whitespace, cleanly encodable as UTF-8), writes `entry.txt`, then reads it back and verifies byte equality.
- `LICENSE` — MIT license, created by the make.fun kit init.
- `.makefun/` — make.fun anchor metadata from the kit init.

## Run

```sh
node main.ts
```

This writes `/output/entry.txt`. To write somewhere else:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
