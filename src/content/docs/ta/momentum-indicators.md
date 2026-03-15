---
title: Momentum Indicators
description: RSI, MACD, Stochastic, and other momentum oscillators — formulas, signals, and divergence.
sidebar:
  order: 5
---

**Momentum indicators** measure the **speed and strength** of price movements — not just direction, but whether a trend is accelerating, decelerating, or exhausted. They are the most widely used class of technical indicators.

---

## 1. RSI — Relative Strength Index

Developed by J. Welles Wilder (1978), the **RSI** is a momentum oscillator that measures the magnitude of recent price changes on a **0 to 100 scale**.

### Formula

```
  RSI = 100 − [100 / (1 + RS)]

  Where: RS = Average Gain over N periods / Average Loss over N periods
  Default period: N = 14

  Step 1: Calculate average gain and loss over 14 periods
  Step 2: RS = Avg Gain / Avg Loss
  Step 3: RSI = 100 − (100 / (1 + RS))

  Example:
  Last 14 days: 8 up days (avg +0.50%), 6 down days (avg −0.40%)
  RS  = 0.50 / 0.40 = 1.25
  RSI = 100 − (100 / (1 + 1.25)) = 100 − 44.4 = 55.6
```

### Reading RSI

```
  RSI Scale:
  ─────────────────────────────────────────────────────────
  100 │
   70 │──────────────────── OVERBOUGHT threshold
      │        (potential reversal or pause)
   50 │──────────────────── MIDLINE (trend bias)
      │        (RSI > 50 = bullish momentum; < 50 = bearish)
   30 │──────────────────── OVERSOLD threshold
      │        (potential reversal or bounce)
    0 │
  ─────────────────────────────────────────────────────────
  Default: 70/30 thresholds
  Trend markets: adjust to 80/20 (avoid premature fading)
  Range markets: 70/30 works better
```

### RSI Signals

**1. Overbought/Oversold**
```
  RSI > 70: Overbought — momentum is elevated, may be extended
            NOT a sell signal alone (can stay overbought in strong trends)
  RSI < 30: Oversold — momentum depressed, may be due for bounce
            NOT a buy signal alone (can stay oversold in strong downtrends)
```

**2. RSI Midline Cross**
```
  RSI crosses above 50 → bullish momentum confirmed
  RSI crosses below 50 → bearish momentum confirmed

  More reliable than OB/OS in trending markets
```

**3. Bullish/Bearish Divergence (Most Powerful Signal)**
```
  BULLISH DIVERGENCE:
  Price makes LOWER LOW, but RSI makes HIGHER LOW
  → Selling momentum is weakening despite new price lows
  → Potential reversal signal

  Price:  ╲    ╲__  ← new lower low
  RSI:     ╲  /     ← higher low (divergence!)

  BEARISH DIVERGENCE:
  Price makes HIGHER HIGH, but RSI makes LOWER HIGH
  → Buying momentum weakening despite new price highs
  → Potential reversal signal

  Price:   ╱    ╱─  ← new higher high
  RSI:      ╲──     ← lower high (divergence!)
```

---

## 2. MACD — Moving Average Convergence Divergence

Developed by Gerald Appel (1979). **MACD** is a trend-following momentum indicator that shows the relationship between two EMAs.

### Formula

```
  MACD Line   = EMA(12) − EMA(26)
  Signal Line = EMA(9) of MACD Line
  Histogram   = MACD Line − Signal Line

  Default settings: 12, 26, 9

  Interpretation of components:
  MACD Line:    Shows momentum (fast EMA vs. slow EMA)
  Signal Line:  Smoothed version of MACD (trigger line)
  Histogram:    Visual representation of the gap between them
                Grows when diverging; shrinks when converging
```

### MACD Visualisation

```
  Price:
    │        /─────────\
    │       /           \────────────
    │──────/

  MACD:
    │            ▲ MACD above 0 = bullish
  0 │──────────────────────────────
    │  ▼ MACD below 0 = bearish

  Histogram:
   ++ │     ███████
    0 │ ──────────────────────────
   -- │███               ████

  Signal line (dotted):
    → When MACD line crosses above signal = BUY
    → When MACD line crosses below signal = SELL
```

### MACD Signals

**1. Signal Line Crossover**
```
  Bullish: MACD crosses ABOVE signal line → buy signal
  Bearish: MACD crosses BELOW signal line → sell signal

  Best used in trending markets; generates many false signals in ranges
```

**2. Zero Line Cross**
```
  MACD crosses above 0: EMAs confirm uptrend (stronger signal)
  MACD crosses below 0: EMAs confirm downtrend

  Zero line crosses are slower but more reliable than signal line crosses
```

**3. MACD Divergence**
```
  Same logic as RSI divergence:
  Price new high + MACD lower high = bearish divergence
  Price new low + MACD higher low = bullish divergence

  MACD divergence is particularly powerful because it combines
  both rate-of-change and absolute level information
```

**4. Histogram Momentum Shift**
```
  Histogram bars shrinking (toward zero): momentum fading
  Histogram bars growing:                 momentum building
  Histogram crosses zero:                 crossover confirmed

  Early signal: histogram direction changes before crossover occurs
```

---

## 3. Stochastic Oscillator

Developed by George Lane. Compares a closing price to its price range over N periods, producing a reading between 0 and 100.

### Formula

```
  %K = 100 × (Close − Lowest Low over N periods)
             / (Highest High − Lowest Low over N periods)

  %D = 3-period SMA of %K (signal line)

  Default: N = 14 periods

  Interpretation:
  %K > 80: Overbought
  %K < 20: Oversold
  %K crosses above %D: Bullish signal
  %K crosses below %D: Bearish signal
```

### Fast vs. Slow Stochastic

```
  Fast Stochastic: %K and %D as calculated above
                   More sensitive, more whipsaws

  Slow Stochastic: Original %D becomes new %K,
                   new %D = 3-period SMA of slow %K
                   More smoothed, fewer signals, more reliable
```

### Stochastic vs. RSI

| Feature | RSI | Stochastic |
|---|---|---|
| Measures | Momentum velocity | Price position within range |
| Best for | Trending markets | Range-bound markets |
| Signal style | OB/OS + divergence | %K/%D crossovers + OB/OS |
| Noise level | Less noisy | More noisy (fast version) |

---

## 4. Momentum (Rate of Change)

The simplest momentum indicator:

```
  Momentum = Current Close − Close N periods ago
  (or expressed as % Rate of Change)

  ROC = (Close / Close_N_ago − 1) × 100

  Above 0 / positive: upward momentum
  Below 0 / negative: downward momentum

  Usage:
  → Identify trend direction when above/below zero
  → Divergence from price signals potential reversals
  → Simple but effective as a trend filter
```

---

## 5. Williams %R

Essentially an inverted Stochastic. Created by Larry Williams:

```
  %R = −100 × (Highest High − Close) / (Highest High − Lowest Low)

  Range: −100 (most oversold) to 0 (most overbought)

  %R > −20: Overbought
  %R < −80: Oversold
```

---

## Combining Indicators: The Three-Indicator Framework

Using indicators that measure **different things** prevents duplication:

```
  Recommended combination:
  ┌──────────────────────────────────────────────────────────┐
  │ 1. TREND:     Moving average (200 SMA, EMA 50)           │
  │    → What is the macro direction?                        │
  │                                                          │
  │ 2. MOMENTUM:  RSI or MACD                                │
  │    → Is the move accelerating or decelerating?           │
  │                                                          │
  │ 3. TIMING:    Stochastic or candlestick confirmation     │
  │    → Where is a precise entry in the trend?              │
  └──────────────────────────────────────────────────────────┘

  Example (bullish setup):
  Price above 200 SMA (trend ✓)
  RSI crosses above 50 (momentum ✓)
  Stochastic oversold and crossing up at key support (timing ✓)
  → High-confidence long entry
```

---

## Divergence: The Most Powerful Signal

**Divergence** occurs when price and a momentum indicator **move in opposite directions**. It signals that the visible price trend has weakening underlying momentum — often a precursor to reversal.

### Types

```
  REGULAR DIVERGENCE (reversal signal):
  ─────────────────────────────────────
  Bearish: Price higher high + Indicator lower high
  Bullish: Price lower low  + Indicator higher low

  HIDDEN DIVERGENCE (continuation signal):
  ─────────────────────────────────────────
  Bullish: Price higher low + Indicator lower low → trend continuation up
  Bearish: Price lower high + Indicator higher high → trend continuation down
```

### Divergence in Practice

```
  EUR/USD 2021 example (bearish divergence):
  Price made new 1Y highs (1.2350 → 1.2350 → ~same)
  RSI made lower highs (65 → 60 → 55)
  → Momentum weakening on each push higher
  → EUR/USD subsequently declined from 1.23 to 1.05 in 2022

  Note: Divergence TIMING is imprecise — can persist for many bars
  Always use divergence with S/R confluence and other confirmation
```

---

## Indicator Limitations

```
  Common pitfalls:
  ┌─────────────────────────────────────────────────────────┐
  │ 1. Lagging nature: All indicators are based on past     │
  │    price data → signals arrive after the move begins    │
  │                                                         │
  │ 2. False signals in ranging markets: Trend indicators   │
  │    (MACD, EMA crossovers) produce many whipsaws         │
  │                                                         │
  │ 3. Overbought can get more overbought: In strong        │
  │    trends, RSI can stay >70 for extended periods        │
  │                                                         │
  │ 4. Indicator overload: Using 5+ indicators that all     │
  │    measure the same thing → no additional information   │
  │                                                         │
  │ 5. Data snooping bias: "Optimised" indicator settings   │
  │    often overfit historical data → fail going forward   │
  └─────────────────────────────────────────────────────────┘
```

---

## Further Reading

- SAHI: *Technical Indicators Explained* — [sahi.com](https://www.sahi.com/blogs/5-technical-indicators-for-trading)
- ChartingLens: *RSI, MACD & Bollinger Bands Complete Guide* — [chartinglens.com](https://chartinglens.com/blog/rsi-macd-bollinger-bands-guide)
- FTMO Academy: *Technical Indicators* — [academy.ftmo.com](https://academy.ftmo.com/lesson/technical-indicators/)
- Wilder, J.W. (1978). *New Concepts in Technical Trading Systems*. Trend Research.
- *Trading in the Zone* — Mark Douglas (Prentice Hall Press, 2000)
