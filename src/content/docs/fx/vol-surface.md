---
title: Volatility Surface & Smile Mechanics
description: Advanced FX volatility dynamics — smile construction, skew economics, delta quoting conventions, and the term structure of implied volatility.
sidebar:
  order: 10
---

The **volatility surface** is a three-dimensional mapping of implied volatility across all strikes and maturities for a given currency pair. Understanding its construction and dynamics is a prerequisite for pricing any exotic FX option or managing a book of vanilla options.

---

## Why a Smile Exists: The Economic Drivers

Black-Scholes assumes **constant volatility** across all strikes — reality disagrees sharply. The smile exists because markets price in risks that a log-normal model cannot capture:

```
  DRIVER 1: FAT TAILS (Leptokurtosis)
  ─────────────────────────────────────────────────────────
  Empirical FX returns have fatter tails than the normal distribution.
  → OTM options (which benefit from fat-tail events) are more expensive
    than Black-Scholes implies
  → Both OTM calls AND puts get a vol premium → the "smile" shape

  DRIVER 2: JUMP RISK
  ─────────────────────────────────────────────────────────
  Spot can gap discontinuously (e.g., SNB CHF shock 2015, Brexit 2016)
  → Cannot be hedged by continuous delta hedging
  → Market demands premium for jump-to-default style risk
  → Amplifies OTM option pricing, especially puts (gap-down risk)

  DRIVER 3: STOCHASTIC VOLATILITY
  ─────────────────────────────────────────────────────────
  Volatility itself is random and mean-reverts
  → When vol spikes, it tends to correlate with spot direction
  → This correlation creates SKEW: asymmetric smile
```

---

## The Volatility Smile vs. Skew

```
  SYMMETRIC SMILE (FX majors, short-dated):
  Implied vol
    │     ╲       /
    │      ╲     /   (wings are more expensive than ATM)
    │       ╲   /
    │        ╲ /
    │─────────────── Strike (delta)
    25D put  ATM  25D call

  SKEWED SMILE (USD/EM pairs, equities):
  Implied vol
    │ ╲
    │  ╲
    │   ╲__________  (put wing expensive, call wing cheap)
    │─────────────── Strike
    25D put  ATM  25D call

  PUT SKEW (negative): Vol(25D put) > Vol(25D call)
    → Market fears downside more than upside
    → Classic in USD/EM pairs (EM currency depreciation fear)
    → Also in EUR/USD (flight-to-quality USD bids)

  CALL SKEW (positive): Vol(25D call) > Vol(25D put)
    → Market fears upside more than downside
    → Classic in USD/JPY when BoJ is intervening
    → Agricultural commodities (supply-shock fear on upside)
```

### Why USD/EM Pairs Have Persistent Put Skew

```
  For USD/BRL (quoting USD per BRL):
  → "Put" on BRL = sell BRL / buy USD at strike
  → Market constantly fears BRL depreciation:
      - External debt denominated in USD
      - Capital flight in risk-off
      - Current account vulnerabilities
      - Political risk (elections, policy uncertainty)
  → Demand for BRL puts (USD calls in USDBRL terms) persistently elevated
  → Vol(25D USD call) >> Vol(25D USD put) → positive risk reversal for USD
```

---

## Market Quoting Convention: The Three Pillars

The FX vol market is quoted using **three instruments per maturity** — not a grid of individual option prices:

### 1. ATM (At-the-Money) Volatility

```
  ATM convention in FX: "Delta-neutral straddle"
  Strike where: Δ_call = |Δ_put|  (or equivalently, call delta = 0.50 adjusted)

  This is NOT the forward rate strike in most cases —
  it is the strike that makes the straddle delta-neutral.

  ATM vol = the baseline level; sets the overall vol regime
```

### 2. Risk Reversal (RR)

```
  25D RR = Vol(25D call) − Vol(25D put)
  10D RR = Vol(10D call) − Vol(10D put)

  Positive RR: call more expensive → market fears spot rally (base currency up)
  Negative RR: put more expensive → market fears spot decline

  Example: EUR/USD 1M 25D RR = −0.5%
  → EUR/USD 25D put vol is 0.5 vols above 25D call
  → Market slightly fears EUR weakness (USD strength)

  Risk reversals are the SKEW parameter of the surface
```

### 3. Butterfly (BF) / Vega-Weighted Butterfly (VWB)

```
  Market butterfly (broker's fly):
  25D BF = [Vol(25D call) + Vol(25D put)] / 2 − ATM vol

  → Measures the CONVEXITY of the smile (how "fat" the wings are)
  → Positive BF: wings more expensive than ATM (elevated tail risk premia)
  → BF is the KURTOSIS parameter of the surface

  Note: "Broker's fly" ≠ "Smile fly" directly —
  conversion required before plugging into smile formulas.
```

---

## Smile Reconstruction: From Quotes to a Surface

Given ATM, 25D RR, and 25D BF (and 10D versions), reconstruct the five discrete vol points:

```
  Solving the system:
  ─────────────────────────────────────────────────────────
  Known:  ATM, 25D_RR, 25D_BF
  Solve:  σ(25D call), σ(25D put)

  From the definitions:
  (1) σ(25D call) − σ(25D put) = 25D_RR
  (2) [σ(25D call) + σ(25D put)]/2 − ATM = 25D_BF (broker's fly)

  From (2): σ(25D call) + σ(25D put) = 2 × (ATM + 25D_BF)

  Adding (1) and the above:
  σ(25D call) = ATM + 25D_BF + 25D_RR/2
  σ(25D put)  = ATM + 25D_BF − 25D_RR/2
  ─────────────────────────────────────────────────────────
  Similarly for 10D:
  σ(10D call) = ATM + 10D_BF + 10D_RR/2
  σ(10D put)  = ATM + 10D_BF − 10D_RR/2

  You now have 5 discrete vol points:
  [10D put vol, 25D put vol, ATM vol, 25D call vol, 10D call vol]
```

### The Malz Approximation

For a quick analytical approximation of the vol at any delta, the **Malz (1997) formula** uses a quadratic interpolation in delta-space:

```
  σ(Δ) ≈ ATM − 2 × RR × (Δ − 0.5) + 16 × BF × (Δ − 0.5)²

  Where Δ is expressed as a value between 0 and 1

  Example: σ at 10D call (Δ = 0.10):
  σ(0.10) ≈ ATM − 2 × RR × (0.10 − 0.50) + 16 × BF × (0.10 − 0.50)²
           = ATM + 0.80 × RR + 2.56 × BF

  This is an approximation — more rigorous methods (Vanna-Volga,
  SABR, SVI) are used in production systems.
```

> Reference: Malz, A.M. (1997). *Option-Implied Probability Distributions and Currency Excess Returns.* Federal Reserve Bank of New York Staff Report.

---

## Delta Conventions: The Complexity Beneath

FX options have **multiple competing delta conventions** — a significant source of confusion:

```
  Four delta definitions:
  ┌─────────────────────────────────────────────────────────┐
  │ 1. Spot delta (Δ_spot): ∂C/∂S                          │
  │ 2. Forward delta (Δ_fwd): ∂C/∂F (F = forward price)   │
  │ 3. Premium-adjusted spot delta (Δ_pa): accounts for    │
  │    premium paid in the foreign currency                 │
  │ 4. Premium-adjusted forward delta                       │
  └─────────────────────────────────────────────────────────┘

  Market conventions by pair:
  ─────────────────────────────────────────────────────────
  EUR/USD, EUR/GBP: Forward delta, premium-adjusted
  USD/JPY, USD/CAD: Forward delta, NOT premium-adjusted
  EM pairs: Spot delta common, often premium-adjusted
  Long-dated (>1Y): Forward delta preferred
  ─────────────────────────────────────────────────────────

  This matters: different delta conventions produce different
  ATM strikes and different risk reversal values from the
  same market quotes.
```

---

## Term Structure of Implied Volatility

The **vol term structure** plots ATM implied vol against maturity. Like the yield curve, it has distinct shapes:

```
  CONTANGO (normal, upward-sloping):
  Implied vol
    │                    /
    │               /───/
    │          /───/
    │     /───/
    │────/
    └──────────────────────────────── Maturity
       1W  1M  3M  6M  1Y  2Y

  → Near-term vol < long-term vol
  → Normal state: uncertainty accumulates over time
  → Implied by options: long-dated options more expensive

  BACKWARDATION (inverted, event-risk):
  Implied vol
    │────╲
    │     ╲────╲
    │          ╲────╲
    │               ╲────╲
    └──────────────────────── Maturity
       1W  1M  3M  6M  1Y

  → Near-term vol > long-term vol
  → CLASSIC SIGNAL: high-impact event risk in the near term
    (e.g., central bank meeting, election, data release)
  → The near-term options price in the event jump risk
  → Post-event: vol collapses back to normal ("vol crush")
```

### Event Bumps in the Vol Surface

```
  FOMC/ECB/BoJ meeting impact on EUR/USD vol term structure:

  Pre-meeting:
  1W ATM vol: 9.5% (elevated — includes meeting day)
  1M ATM vol: 8.0%
  3M ATM vol: 7.5%
  → 1W vol "bumped" above the longer tenors (event premium)

  Post-meeting (if no surprise):
  1W ATM vol: 6.0% (crush — event passed, uncertainty resolved)
  1M ATM vol: 7.5%
  3M ATM vol: 7.5%
  → Curve returns to normal contango
```

### Calendar Spread in Volatility

```
  A vol calendar spread trades the DIFFERENCE between two tenors:
  Long 3M vol / Short 1M vol = Long vol calendar spread

  Motivation:
  → If a central bank meeting in 6 weeks inflates the 1M vol
    relative to 3M vol (backwardation between 1M and 3M):
  → Sell 1M vol, buy 3M vol
  → Post-event: 1M vol crushes → profit

  Risk: Realized vol turns out higher than implied → loss on short vol
```

---

## Vanna, Volga, and Surface Sensitivities

The vol surface itself has sensitivities — critical for managing a book:

```
  VANNA = ∂²V/(∂S ∂σ) = how delta changes when vol changes
  → Picks up skew: when spot falls, vanna P&L if vol rises (put skew)
  → Key for barrier options and structured products

  VOLGA = ∂²V/∂σ² = how vega changes when vol changes
  → Picks up curvature: OTM options are long volga
  → ATM options have low volga

  The "Vanna-Volga" pricing approach prices exotic options by:
  1. Starting with the Black-Scholes price
  2. Adding adjustments for exposure to vanna (25D RR cost)
     and volga (25D BF cost)
  → Fast, market-consistent approximation widely used for
    quoting first-generation exotics (barriers, digitals)
```

---

## Practical Vol Surface: EUR/USD Example

```
  EUR/USD implied vol surface (illustrative):
  ─────────────────────────────────────────────────────────
  Maturity │ 10D put │ 25D put │  ATM  │ 25D call │ 10D call
  ─────────┼─────────┼─────────┼───────┼──────────┼─────────
    1 week │   9.20  │   8.40  │  7.50 │   7.90   │   8.80
    1 month│   8.60  │   8.00  │  7.20 │   7.60   │   8.40
    3 month│   8.40  │   7.80  │  7.10 │   7.50   │   8.20
    6 month│   8.60  │   7.90  │  7.20 │   7.60   │   8.30
    1 year │   9.00  │   8.20  │  7.50 │   7.80   │   8.50
  ─────────────────────────────────────────────────────────
  Observations:
  → Term structure: slight contango (1W > 1M slightly due to event)
  → Skew: puts consistently > calls (negative RR, USD fear bid)
  → Wings (10D) consistently > 25D (smile curvature)
  → BF increases at the 10D level (fat tail premium)
```

---

## Further Reading

- Malz, A.M. (1997). *Option-Implied Probability Distributions and Currency Excess Returns.* NY Fed Staff Report.
- Academia.edu: *FX Volatility Smile Construction* — [academia.edu](https://www.academia.edu/29581458/FX_volatility_smile_construction)
- VolQuant: *FX Volatility Smile (Part I)* — [volquant.medium.com](https://volquant.medium.com/almost-everything-you-wanted-to-know-about-fx-volatility-smile-part-i-intro-to-the-fx-market-4a3ba8052e08)
- *FX Options and Structured Products* — Uwe Wystup (Wiley, 2006)
- *The Volatility Surface* — Jim Gatheral (Wiley Finance, 2006)
