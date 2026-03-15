---
title: Chart Patterns
description: Reversal and continuation chart patterns — head & shoulders, double tops, triangles, flags, and wedges.
sidebar:
  order: 3
---

**Chart patterns** are recurring formations in price charts that signal either a **continuation** of the existing trend or a **reversal**. They represent periods of consolidation and indecision that resolve into a directional breakout.

---

## Pattern Categories

```
  REVERSAL PATTERNS          CONTINUATION PATTERNS
  ───────────────────        ──────────────────────
  Head & Shoulders           Flags & Pennants
  Inverse Head & Shoulders   Triangles (symmetrical)
  Double Top                 Rectangles / Ranges
  Double Bottom              Cup & Handle
  Triple Top / Bottom        Wedges (continuation type)
  Rising/Falling Wedge
```

---

## Reversal Patterns

### Head & Shoulders (H&S)

One of the most reliable reversal patterns. Signals the end of an **uptrend**.

```
  Price
    │          ╭──╮         ← HEAD (highest point)
    │         /    \
    │   ╭──╮ /      \ ╭──╮  ← LEFT and RIGHT SHOULDERS
    │  /    ╲/        ╲   \
    │ /    neckline ─ ─ ─ ─ ╲
    │                         ╲  ← Breakdown below neckline = SIGNAL
    └──────────────────────────────── Time

  Key rules:
  → Both shoulders roughly equal height (slight asymmetry OK)
  → Head must be the highest point
  → Neckline = line connecting the two troughs between shoulders
  → SIGNAL: price breaks and closes BELOW the neckline
  → Volume: typically highest on left shoulder, lower on head,
            very low on right shoulder, spikes on breakout

  Price target after breakdown:
  Target = Neckline − (Head height − Neckline)
  (measured move = height of pattern projected downward)
```

### Inverse Head & Shoulders

Mirror image of H&S — signals **end of a downtrend** (bullish reversal):

```
  Price
    │  ╲  neckline  ─ ─ ─ ─ /
    │   ╲╭──╮        ╭──╮  /
    │    ╲   ╲      /    ╲/
    │     \    ╲──╮/      ← INVERSE HEAD (lowest point)
    └──────────────────────────────── Time

  → Breakout above neckline = BUY signal
  → Target = Neckline + (Neckline − Head)
```

---

### Double Top

A **bearish reversal** pattern — price makes two roughly equal highs, fails to break higher, then breaks support:

```
  Price
    │         ×    ×       ← Two equal highs (Tops)
    │        / \  / \
    │       /   \/   \
    │      / neckline \
    │─────────────────╲───  ← Neckline (support level)
    │                  ╲    ← Breakdown = SELL signal
    └──────────────────────────────── Time

  Confirmation: Close BELOW the neckline (swing low between two tops)
  Target: Neckline − (Top height − Neckline)
  Volume: Typically higher on first top, lower on second top
```

### Double Bottom

**Bullish reversal** — price makes two equal lows, then breaks above resistance:

```
  Price
    │─────────────────────  ← Neckline (resistance)
    │       /\             ╱  ← Breakout = BUY signal
    │      /  \           /
    │     /    \   /\    /
    │    /      \_/  \  /   ← Two equal lows (Bottoms)
    └──────────────────────────────── Time

  Confirmation: Close ABOVE the neckline
  Target: Neckline + (Neckline − Bottom)
```

---

### Rising Wedge (Bearish)

Price makes higher highs AND higher lows, but the range is **narrowing** — a sign of weakening buying pressure:

```
  Price
    │           /──────╲  ← Upper trendline (resistance, flatter slope)
    │          / ╲     /
    │         /   ╲──╱
    │        /  ← Lower trendline (support, steeper slope)
    │       /
    │      / → Both lines converging upward = bearish
    └──────────────────────────────── Time

  Breakdown below lower trendline = SELL signal
  Often seen as topping pattern after a strong uptrend
```

### Falling Wedge (Bullish)

Price makes lower highs AND lower lows, range narrowing — selling pressure weakening:

```
  Price
    │  ╲  ← Upper trendline (steeper slope)
    │   ╲──╮╲
    │       ╲  ╲──╮
    │        ╲     ╲  ← Lower trendline (flatter slope)
    │         ╲──────╱  → Converging downward = bullish
    └──────────────────────────────── Time

  Breakout above upper trendline = BUY signal
  Volume typically contracts during wedge, spikes on breakout
```

---

## Continuation Patterns

### Bull Flag / Bear Flag

Short consolidation after a sharp move — the "flag" is a brief pause before the trend resumes.

```
  BULL FLAG:
  Price
    │         /│ Flag (tight, slightly
    │        / │ downward consolidation)
    │       /  ╲    ← Parallel channel
    │      /    ╲──/
    │     /         ╲── Breakout resumes uptrend
    │    / ← "Pole" (sharp initial move)
    └────────────────────────── Time

  Rules:
  → Pole = sharp, nearly vertical move (high volume)
  → Flag = 3–5 candle consolidation (low volume)
  → Breakout above upper trendline = BUY
  → Target = Pole length added to breakout point
  → Invalidated if price retraces more than 50% of the pole
```

**Bear Flag** is the mirror image — sharp drop, brief upward consolidation, then breakdown.

---

### Pennant

Similar to a flag, but the consolidation forms a **symmetrical triangle** instead of a parallel channel:

```
  Price
    │    /
    │   / ╲╱╲╱  ← Converging lines (pennant)
    │  /        ╲── Breakout
    │ / (pole)
    └────────────────────────── Time

  Very short consolidation (few candles), low volume during pennant
  Breakout on high volume confirms continuation
```

---

### Symmetrical Triangle

Converging trendlines (descending highs + ascending lows) — **neutral** direction, breakout determines bias:

```
  Price
    │    ╲      /
    │     ╲    /
    │      ╲  /
    │       ╲/  ← Apex
    │         → Breakout direction = new trend
    └────────────────────────── Time

  Rules:
  → Neutral until breakout
  → Usually resolves in the direction of the prior trend
  → Breakout on strong volume
  → Target = height of base of triangle projected from breakout
```

### Ascending Triangle (Bullish)

Flat resistance top + rising lows — buying pressure building:

```
  Price
    │ ─────────────────  ← Flat resistance
    │       /╲    /╲
    │      /  \  /  \
    │     /    \/    ╲── Ascending support
    │    /
    └────────────────────────── Time

  → Bullish bias (buyers making higher lows = accumulation)
  → Breakout above flat resistance = BUY
```

### Descending Triangle (Bearish)

Flat support + descending highs — selling pressure building:

```
  Price
    │    ╲    ╲    ╲── Descending resistance
    │     ╲  / ╲  /
    │      ╲/   ╲/
    │ ──────────────  ← Flat support
    └────────────────────────── Time

  → Bearish bias (sellers making lower highs = distribution)
  → Breakdown below flat support = SELL
```

---

### Cup and Handle

A **bullish continuation** pattern resembling a tea cup. Typically forms over weeks to months:

```
  Price
    │ ╲                      /──
    │  ╲        U-shape     / ╲  ← Handle (small downward drift)
    │   ╲      /─────────  /   ╲──  ← Breakout
    │    ╲    /            /
    │     ╲──/  ← Cup (rounded bottom)
    └──────────────────────────────── Time

  Rules:
  → Cup = smooth, rounded base (not V-shaped)
  → Handle = small flag/pullback in upper right of cup
  → Breakout above cup rim (handle high) = BUY
  → Target = cup depth added to breakout level
  → Volume: high before cup, dries up in cup, spikes on breakout
```

---

## Pattern Reliability and Failure Rates

Not all patterns work equally. Context matters significantly:

| Pattern | Reliability | Notes |
|---|---|---|
| **H&S / Inverse H&S** | High (65–75%) | Most studied; often self-fulfilling |
| **Double Top/Bottom** | Medium–High | Common; confirmation is key |
| **Bull/Bear Flag** | High (in trending market) | Works best with strong pole |
| **Ascending/Descending Triangle** | Medium–High | Volume confirmation needed |
| **Symmetrical Triangle** | Medium | Direction uncertain until break |
| **Cup & Handle** | Medium (longer timeframe) | Better on weekly/daily charts |
| **Wedge** | Medium | Can also be continuation |

### Common Failure Modes

```
  FALSE BREAKOUT (most common failure):
  Price breaks above resistance → then immediately reverses
  ─────────────────────────────────────────────────────────
  Mitigation:
  → Wait for a CLOSE above the breakout level, not just an intraday tag
  → Confirm with volume spike (no spike = weak breakout)
  → Check if macro/fundamental environment supports the direction

  PATTERN INVALIDATION:
  → H&S: right shoulder exceeds head height → pattern invalid
  → Double top: second top significantly higher → may be uptrend, not reversal
  → Flag: retraces more than 50% of pole → flag fails
```

---

## Measured Move Targets

All chart patterns have a **measured move** — a price target based on the pattern's dimensions:

```
  General rule: Target = Breakout level ± Height of pattern

  H&S target:
  Height = Head − Neckline
  Target = Neckline − Height

  Double top target:
  Height = Top − Neckline
  Target = Neckline − Height

  Triangle target:
  Height = Widest part of triangle
  Target = Breakout level + Height

  Flag target:
  Height = Pole length
  Target = Breakout level + Pole
```

---

## Further Reading

- Fidelity: *Identifying Chart Patterns* — [fidelity.com](https://www.fidelity.com/bin-public/060_www_fidelity_com/documents/learning-center/Idenitfying-Chart-Patterns.pdf)
- Finviz: *Chart Patterns Reference* — [finviz.com](https://finviz.com/help/technical-analysis/charts-patterns.ashx)
- *Technical Analysis of the Financial Markets* — John J. Murphy (NYIF, 1999)
- *Encyclopedia of Chart Patterns* — Thomas Bulkowski (Wiley, 3rd ed.) — most comprehensive statistical study of pattern performance
