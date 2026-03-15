---
title: Technical Analysis Overview
description: Foundations of technical analysis — chart types, Dow Theory, and the principles behind reading price action.
sidebar:
  order: 1
---

**Technical analysis (TA)** is the study of historical price and volume data to forecast future price movements. Unlike fundamental analysis, which focuses on economic value, TA is based on the idea that **all known information is already reflected in the price** — and that price action itself reveals the collective behaviour and psychology of market participants.

> "The market discounts everything."
> — Charles H. Dow, foundational principle of Dow Theory

---

## TA vs. Fundamental Analysis

| Feature | Technical Analysis | Fundamental Analysis |
|---|---|---|
| Focus | Price, volume, patterns | Economic data, valuation, earnings |
| Time horizon | Short to medium term | Medium to long term |
| Tools | Charts, indicators, patterns | Financial statements, models, macro data |
| Assumption | Price reflects all information | Price can diverge from intrinsic value |
| Used by | Traders, CTAs, algo desks | Value investors, macro funds |

In practice, most institutional FX and commodity traders **combine both**: macro/fundamental analysis sets the directional bias, TA provides entry/exit timing and risk management.

---

## Dow Theory: The Foundation

**Dow Theory** was developed by Charles H. Dow (founder of the Wall Street Journal) through a series of editorials published between 1900 and 1902. It remains the philosophical bedrock of modern technical analysis.

### The Six Core Tenets

**1. The Market Discounts Everything**
All known information — economic, political, psychological — is already reflected in the price. TA does not predict the future; it reads what the collective market is pricing.

**2. Three Types of Trends**
```
  Primary trend:    Months to years (the "tide")
  Secondary trend:  Weeks to months (the "wave")
  Minor trend:      Days to weeks (the "ripple")

  ─────────────────────────────────────────────────────
  Price
    │          /\/\/\      /\/\
    │         /       \   /
    │        /         \_/    ← Secondary retracement
    │       /
    │      /  ← Primary uptrend
    └──────────────────────────────────── Time
```

**3. Primary Trends Have Three Phases**
```
  Uptrend (Bull Market):
  Phase 1 — Accumulation:    Smart money buys quietly (price flat)
  Phase 2 — Public participation: Trend becomes obvious, momentum builds
  Phase 3 — Distribution:    Euphoria; smart money sells into buyers

  Downtrend (Bear Market):
  Phase 1 — Distribution:    Smart money sells quietly
  Phase 2 — Public participation: Fear builds, trend accelerates
  Phase 3 — Panic/capitulation: Forced selling; bottoms form
```

**4. Averages Must Confirm Each Other**
Originally: Dow Jones Industrial Average and Dow Jones Transportation Average must both confirm the trend. Modern interpretation: different markets/assets should confirm each other (e.g., equities and credit should move in harmony; divergence is a warning sign).

**5. Volume Confirms the Trend**
```
  Uptrend:    Volume should be HIGHER on up days, LOWER on pullbacks ✓
  Downtrend:  Volume should be HIGHER on down days, LOWER on bounces ✓

  Warning signs:
  ✗ Price rises on declining volume (trend weakening)
  ✗ Price falls but volume spikes (potential capitulation / exhaustion)
```

**6. A Trend Is Assumed to Continue Until Proven Otherwise**
This is the core of trend-following: do not fight the trend without clear evidence of reversal.

---

## Chart Types

### 1. Line Chart
Connects closing prices. Simple but loses information about intraday range.
```
  Price
    │     .───.
    │   .╯     ╲.
    │ .╯          ╲.───.
    │                    ╲.
    └───────────────────────── Time
```

### 2. Bar Chart (OHLC)
Shows Open, High, Low, Close for each period. Full price range visible.
```
  Single OHLC bar:
      │  ← High
      │
   ───┤  ← Open (left tick)
      │
      ├──  ← Close (right tick)
      │
      │  ← Low
```

### 3. Candlestick Chart
Japanese invention (~1700s rice trading). Most widely used by FX/commodity traders.
```
  Bullish candle (Close > Open):   Bearish candle (Close < Open):
        │  ← High                        │  ← High
      ┌─┴─┐ ← Close                    ┌─┴─┐ ← Open
      │   │  (body = white/green)       │   │  (body = black/red)
      └─┬─┘ ← Open                    └─┬─┘ ← Close
        │  ← Low                         │  ← Low

  Long body = strong move
  Short body = indecision
  Long wick = rejection of extreme prices
```

### Key Candlestick Patterns
```
  REVERSAL SIGNALS:
  ─────────────────────────────────────────────────────
  Doji:        Open ≈ Close; cross shape; indecision
               ─┼─

  Hammer:      Small body at top, long lower wick
  (bullish)    Found at bottom of downtrend
               ┌─┐
               │ │
               └─┘
                │  (long lower shadow)

  Shooting Star: Small body at bottom, long upper wick
  (bearish)     Found at top of uptrend
                │  (long upper shadow)
               ┌─┐
               │ │
               └─┘

  Engulfing:   Second candle body completely engulfs first
  ─────────────────────────────────────────────────────
  ┌─┐   ┌───┐
  │ │   │   │   Bullish engulfing: large green engulfs small red
  └─┘   └───┘

  Evening/Morning Star: 3-candle reversal patterns
```

---

## Timeframe Hierarchy

TA applies to any timeframe. Institutional FX traders use multiple timeframes:

```
  Monthly/Weekly: Identify primary trend and major S/R levels
  Daily:          Primary trading timeframe for swing traders
  4H / 1H:       Entry/exit refinement; institutional FX standard
  15M / 5M:      Intraday scalping; short-term order flow
  1M / Tick:     HFT, market makers

  "Top-down" analysis:
  Monthly trend → Weekly structure → Daily setup → 4H/1H entry
```

---

## Assumptions and Limitations

### What TA Does Well
- Identifying trend direction and momentum
- Finding high-probability entry/exit levels
- Risk management (stop placement, position sizing)
- Quantifying conviction (volume, breadth)
- Short-term timing in liquid markets

### What TA Does Poorly
- Predicting fundamental turning points (recessions, policy shifts)
- Handling illiquid or manipulated markets
- Distinguishing between continuation and false breakouts consistently
- Providing edge in very long time horizons

> The academic literature is mixed on TA's predictive power in isolation. In practice, its value comes from **combining with macro context** and using it primarily for **trade management** rather than directional forecasting.

---

## Further Reading

- Wikipedia: *Technical Analysis* — [en.wikipedia.org](https://en.wikipedia.org/wiki/Technical_analysis)
- Zerodha Varsity: *Dow Theory* — [zerodha.com](https://zerodha.com/varsity/chapter/dow-theory-part-1/)
- Finviz: *Chart Patterns Guide* — [finviz.com](https://finviz.com/help/technical-analysis/charts-patterns.ashx)
- *Technical Analysis of the Financial Markets* — John J. Murphy (NYIF, 1999) — the definitive reference
- *Japanese Candlestick Charting Techniques* — Steve Nison (NYIF, 2001)
