---
title: Moving Averages
description: SMA, EMA, and WMA — how moving averages define trends, crossovers, and dynamic support/resistance.
sidebar:
  order: 4
---

A **moving average (MA)** smooths out price data by creating a constantly updated average price over a defined period. It removes noise and helps identify the **direction, strength, and momentum** of a trend.

---

## Types of Moving Averages

### Simple Moving Average (SMA)

The **arithmetic mean** of prices over N periods:

```
  SMA(N) = (P₁ + P₂ + P₃ + ... + P_N) / N

  Example: 5-day SMA
  Prices: 1.0800, 1.0850, 1.0820, 1.0870, 1.0840
  SMA(5) = (1.0800 + 1.0850 + 1.0820 + 1.0870 + 1.0840) / 5
         = 5.4180 / 5 = 1.0836
```

**Characteristics:**
- Equally weights all periods
- Smoother but **more lagging** than EMA
- Better for identifying long-term trend direction
- Most commonly used: **50-day, 100-day, 200-day SMA**

---

### Exponential Moving Average (EMA)

Applies **heavier weighting to more recent prices** — reacts faster to price changes:

```
  EMA(N) = Price × k + EMA_previous × (1 − k)

  Where: k = 2 / (N + 1)   (smoothing factor)

  Example: 10-day EMA (k = 2/11 = 0.1818):
  If previous EMA = 1.0850 and today's price = 1.0900:
  EMA = 1.0900 × 0.1818 + 1.0850 × 0.8182
       = 0.1982 + 0.8877 = 1.0859
```

**Characteristics:**
- More responsive to recent price moves
- Less lag than SMA → earlier signals
- More prone to **whipsaws** in choppy markets
- Most commonly used: **9, 12, 20, 26, 50, 200 EMA**

---

### Weighted Moving Average (WMA)

Linearly weights more recent prices:

```
  WMA(N) = (N×P_N + (N-1)×P_(N-1) + ... + 1×P_1) / (N + (N-1) + ... + 1)

  → More responsive than SMA but less than EMA
  → Less commonly used; VWMA (volume-weighted) more popular in equities
```

---

### EMA vs. SMA Comparison

```
  Price
    │            /–––––––––– ← Price (most volatile)
    │           /–––––– ← EMA(20) (follows closely)
    │          /–––––––––– ← SMA(20) (smoother, more lag)
    │         /
    └──────────────────────────────────── Time

  In a fast-moving market:
  EMA gives earlier signal → more profits on early entry
                           → more false signals in chop

  SMA gives later signal → fewer false signals
                         → slower to react = more slippage on entry
```

---

## Key Moving Average Periods

### Short-Term (Intraday / Swing)
| MA | Periods | Use |
|---|---|---|
| **EMA 9** | 9 | Very short-term momentum |
| **EMA 20** | 20 | Short-term trend filter |
| **EMA 50** | 50 | Medium-term trend |

### Long-Term (Position / Macro)
| MA | Periods | Use |
|---|---|---|
| **SMA 100** | 100 | Medium-term structural S/R |
| **SMA 200** | 200 | **Most-watched long-term trend indicator** |
| **EMA 200** | 200 | Same purpose, but more responsive |

---

## Moving Average as Dynamic S/R

MAs act as **dynamic support and resistance** — price tends to bounce off them in trending markets:

```
  200 SMA as support in uptrend:
  Price
    │                              /
    │                         /───╱
    │                    /───╱
    │               /───╱ ← price bounces off 200 SMA
    │──────────────╱ (200 SMA line)
    └──────────────────────────────────── Time

  Rules:
  → Price above 200 SMA = bullish regime (buyers in control)
  → Price below 200 SMA = bearish regime
  → Bounce off 200 SMA with volume + candlestick confirmation = entry
  → Break and CLOSE below 200 SMA = structural shift
```

---

## Moving Average Crossovers

When two MAs of different periods cross, it generates trend signals:

### Golden Cross (Bullish)
The **50-day SMA crosses ABOVE** the 200-day SMA — widely watched long-term bull signal:

```
  Price
    │                      /–– SMA 50 (faster)
    │                     ×  ← GOLDEN CROSS
    │                    / ╲–– SMA 200 (slower)
    │                   /
    └──────────────────────────────────── Time

  Historical examples:
  S&P 500 Golden Cross March 2020: preceded 1-year bull run
  Bitcoin Golden Cross Feb 2020: preceded crypto rally to ATH

  Limitations: lagging signal — often occurs after significant move already made
```

### Death Cross (Bearish)
The **50-day SMA crosses BELOW** the 200-day SMA — long-term bear signal:

```
  Price
    │  ╲–– SMA 50 (faster)
    │   ×  ← DEATH CROSS
    │    ╲ /–– SMA 200 (slower)
    │     ╲
    └──────────────────────────────────── Time

  Historical examples:
  S&P 500 Death Cross Dec 2018: preceded late-2018 sell-off
  S&P 500 Death Cross Mar 2022: marked much of 2022 bear market

  Also lagging — sometimes occurs near the bottom of a move
```

### Short-Term Crossovers (9/21 EMA, 12/26 EMA)
Used by active traders on 1H–4H charts for faster signals — basis of the MACD indicator.

---

## The 200-Day SMA: The Most Watched Level

The **200-day SMA** is the single most widely referenced moving average in markets:

```
  Why it matters:
  → Represents approximately 1 year of trading (200 trading days ≈ 10 months)
  → Used by institutions, algo systems, and retail traders alike
  → Self-fulfilling: because everyone watches it, orders cluster around it
  → Asset managers rebalance based on position relative to 200 SMA

  FX application:
  USD/JPY below 200-day SMA = structural JPY strength narrative
  EUR/USD above 200-day SMA = medium-term bullish on EUR
  Gold above 200-day SMA = bull market confirmed

  Key behaviour:
  ─────────────────────────────────────────────────────────
  First test of 200 SMA from above:  Strong support (high R:R long)
  Repeated tests of 200 SMA:         Level weakening (break more likely)
  Break below with volume:           Bearish regime change signal
  Reclaim above with volume:         Bullish reversal signal
  ─────────────────────────────────────────────────────────
```

---

## MA Ribbon

An **MA ribbon** plots multiple moving averages simultaneously to show trend structure:

```
  Price with EMA ribbon (9, 20, 50, 100, 200):
  ─────────────────────────────────────────────
  Strong uptrend (bullish ribbon):
  Price > EMA9 > EMA20 > EMA50 > EMA100 > EMA200
  All EMAs fanning upward, short-term above long-term

  Strong downtrend (bearish ribbon):
  Price < EMA9 < EMA20 < EMA50 < EMA100 < EMA200
  All EMAs fanning downward, short-term below long-term

  Consolidation (ribbon compression):
  All EMAs converging, tangled around price
  → No clear trend → wait for expansion before trading direction
```

---

## VWAP (Volume-Weighted Average Price)

**VWAP** is the intraday average price weighted by volume — the most important intraday level for institutional traders:

```
  VWAP = Σ(Price × Volume) / Σ(Volume)
  (resets each session)

  Institutional use:
  → Large orders executed relative to VWAP benchmark
  → Buying below VWAP = "better than average" execution
  → Selling above VWAP = "better than average" execution

  Trading signals:
  → Price above VWAP: intraday bullish bias
  → Price below VWAP: intraday bearish bias
  → VWAP rejection (price tests and reverses): fade signal
  → VWAP break with momentum: continuation signal

  Anchored VWAP (AVWAP):
  VWAP anchored to a specific date/event
  → E.g., AVWAP from last year's low = structural reference
```

---

## Practical Moving Average Framework

```
  Three-MA system for FX swing trading:
  ─────────────────────────────────────
  EMA 20:  Short-term trend (fast)
  EMA 50:  Medium-term trend (confirmation)
  SMA 200: Macro trend (filter)

  Entry rules:
  Long: Price > SMA200 (macro bullish)
        EMA20 > EMA50 (short-term bullish)
        Price pulls back to EMA20 or EMA50 (entry zone)

  Stop: Below EMA50 or below S/R level

  Exit: Price reaches next resistance or EMA20 crosses below EMA50

  This is a mean-reversion-within-trend approach
  (not counter-trend; always trading with macro direction)
```

---

## Further Reading

- ChartingLens: *RSI, MACD & Bollinger Bands Guide* — [chartinglens.com](https://chartinglens.com/blog/rsi-macd-bollinger-bands-guide)
- FTMO Academy: *Technical Indicators* — [academy.ftmo.com](https://academy.ftmo.com/lesson/technical-indicators/)
- *Technical Analysis of the Financial Markets* — John J. Murphy (NYIF, 1999)
- *Trading in the Zone* — Mark Douglas (Prentice Hall Press, 2000)
