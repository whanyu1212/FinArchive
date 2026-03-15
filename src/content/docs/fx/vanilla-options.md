---
title: Vanilla FX Options
description: Pricing, Greeks, and market conventions for plain vanilla OTC FX options using the Garman-Kohlhagen model.
sidebar:
  order: 6
---

A **vanilla FX option** gives the buyer the **right, but not the obligation**, to buy (call) or sell (put) a currency pair at a specified **strike rate** on or before an **expiry date**. Unlike forwards, options require paying an upfront **premium** for this asymmetric payoff.

---

## Call vs. Put

| Option | Right | Exercise if... |
|---|---|---|
| **Call** | Buy base / sell quote at strike | Spot > Strike (ITM for call buyer) |
| **Put** | Sell base / buy quote at strike | Spot < Strike (ITM for put buyer) |

### Payoff Diagrams

```
  LONG CALL (e.g. EUR/USD 1.0900 call)        LONG PUT (e.g. EUR/USD 1.0800 put)

  P&L                                          P&L
   │          /                                 │ ╲
   │         /                                  │  ╲
   │        /                                   │   ╲
   │───────/──── Spot                           │────╲──── Spot
   │     1.09                                   │   1.08
   │  (premium)                                 │       (premium)
   │  ↓ max loss                                │         ↓ max loss

  Max loss: premium paid                        Max loss: premium paid
  Max gain: unlimited (as spot rises)           Max gain: strike − 0 (floor at 0)
```

---

## Moneyness

| Term | Call | Put |
|---|---|---|
| **In the Money (ITM)** | Spot > Strike | Spot < Strike |
| **At the Money (ATM)** | Spot ≈ Strike | Spot ≈ Strike |
| **Out of the Money (OTM)** | Spot < Strike | Spot > Strike |

> **ATM-forward (ATMF)**: In FX markets, ATM is typically defined as the strike equal to the **forward rate** (not spot), since the forward reflects the true cost-neutral entry point.

---

## Garman-Kohlhagen Pricing Model

The **Garman-Kohlhagen (1983)** model is the FX extension of Black-Scholes-Merton, treating the foreign interest rate as a **continuous dividend yield** on the underlying currency.

### Formulas

```
  Call price:  c = S·e^(−r_f·T)·N(d₁) − K·e^(−r_d·T)·N(d₂)
  Put price:   p = K·e^(−r_d·T)·N(−d₂) − S·e^(−r_f·T)·N(−d₁)

  Where:
         ln(S/K) + (r_d − r_f + σ²/2)·T
  d₁ = ─────────────────────────────────
                   σ·√T

  d₂ = d₁ − σ·√T

  S    = Current spot rate
  K    = Strike rate
  r_d  = Domestic (quote currency) risk-free rate
  r_f  = Foreign (base currency) risk-free rate
  σ    = Implied volatility (annualised)
  T    = Time to expiry (in years)
  N(·) = Cumulative standard normal distribution
```

> **Reference**: Garman, M.B. & Kohlhagen, S.W. (1983). *Foreign Currency Option Values*. Journal of International Money and Finance, 2(3), 231–237.

---

## The Greeks

Greeks measure option sensitivity to changes in market variables. They are essential for **risk management and delta hedging**.

### Delta (Δ) — Sensitivity to Spot

```
  Call: Δ_c = e^(−r_f·T) · N(d₁)     [0 to +1]
  Put:  Δ_p = e^(−r_f·T) · (N(d₁)−1)  [−1 to 0]

  Interpretation:
  A EUR/USD call with Δ = 0.50 means:
  → Option price rises by $0.50 per $1 move in EUR/USD notional
  → Hedging requires selling 0.50 × notional EUR spot

  Delta ranges:
  ┌─────────────────────────────────────────┐
  │ Deep ITM call:    Δ ≈ 1.0               │
  │ ATM call:         Δ ≈ 0.50              │
  │ Deep OTM call:    Δ ≈ 0.0               │
  └─────────────────────────────────────────┘
```

### Gamma (Γ) — Rate of Change of Delta

```
  Γ = [e^(−r_f·T) · N'(d₁)] / (S · σ · √T)
  (same for calls and puts)

  → Highest at ATM, declines as option moves ITM or OTM
  → Highest for short-dated options (accelerating delta near expiry)

  Gamma P&L ≈ ½ · Γ · (ΔS)²
  Long gamma = profits from large moves (convexity)
  Short gamma = bleeds from time decay, profits from small moves
```

### Vega (ν) — Sensitivity to Volatility

```
  ν = S · e^(−r_f·T) · N'(d₁) · √T
  (same for calls and puts — both long options have positive vega)

  → A 1% increase in implied vol increases option value by ν
  → Vega is highest for ATM, longer-dated options
  → Long option = long vega (benefits from rising volatility)
  → Short option = short vega (suffers from rising volatility)
```

### Theta (Θ) — Time Decay

```
  → Measures daily P&L erosion from passage of time
  → Long options lose value daily (negative theta)
  → Theta accelerates as expiry approaches (especially for ATM options)

  Theta-Gamma relationship (fundamental tension):
  ┌──────────────────────────────────────────────────────┐
  │  Long gamma + negative theta = pay to be convex      │
  │  Short gamma + positive theta = get paid but bleed   │
  │  on large spot moves                                 │
  └──────────────────────────────────────────────────────┘
```

### Rho (ρ) — Sensitivity to Interest Rates

```
  ρ_d (domestic rate): Call > 0, Put < 0
  ρ_f (foreign rate):  Call < 0, Put > 0
  (Less impactful for short-dated options)
```

---

## Greeks Summary Table

| Greek | Measures | Call | Put | Highest When |
|---|---|---|---|---|
| **Δ (Delta)** | Spot sensitivity | 0 to +1 | −1 to 0 | Deep ITM |
| **Γ (Gamma)** | Delta convexity | Always + | Always + | ATM, short-dated |
| **ν (Vega)** | Vol sensitivity | Always + | Always + | ATM, long-dated |
| **Θ (Theta)** | Time decay | Usually − | Usually − | ATM, short-dated |
| **ρ (Rho_d)** | Domestic rate | + | − | Long-dated |
| **ρ_f (Rho_f)** | Foreign rate | − | + | Long-dated |

---

## FX Option Market Conventions

### Quoting in Volatility
FX options are quoted in **implied volatility (IV)**, not in price. IV is then plugged into Garman-Kohlhagen to compute the premium.

```
  EUR/USD 1M ATM implied vol: 7.50%
  → Input into G-K model → premium in USD pips or % of notional
```

### Delta Conventions
FX options commonly use **delta-based strikes** rather than absolute strikes:
- **25-delta call** = call with delta of 0.25 (OTM)
- **25-delta put** = put with delta of −0.25 (OTM)
- **ATM-forward** = strike set at forward rate

### Premium Quoting
Depending on currency pair:
- USD/JPY: premium in USD pips per JPY notional
- EUR/USD: premium as % of EUR notional
- Some pairs: "premium included" delta (where premium is factored into delta)

---

## The Volatility Surface

In practice, implied vol is **not flat** across strikes and tenors — it forms a **3D surface**.

### Volatility Smile / Skew

```
  Implied Vol
     │     ╲       /
     │      ╲     /
     │       ╲   /     ← Smile (convex, symmetric)
     │        ╲ /
     │─────────────── Strike (delta)
    25D put  ATM  25D call

  Alternatively, the smile can be skewed (asymmetric):

     │ ╲
     │  ╲           ← Negative skew (put skew)
     │   ╲         common in USD/EM pairs
     │    ╲_____
     │─────────────── Strike
    25D put  ATM  25D call
```

### Key Vol Surface Metrics

| Metric | Meaning | Formula |
|---|---|---|
| **ATM vol** | Baseline level of volatility | — |
| **Risk Reversal (RR)** | Skew: asymmetry between calls and puts | Vol(25D call) − Vol(25D put) |
| **Butterfly (BF / Strangle)** | Wings: how much OTM options cost vs. ATM | ½[Vol(25D call) + Vol(25D put)] − ATM vol |

**Positive RR** (25D call vol > 25D put vol) = call skew = market fears upside (base currency rallying)

**Negative RR** = put skew = market fears downside (base currency falling) — common in USD/EM, where USD is the "fear" currency

---

## Put-Call Parity

A fundamental no-arbitrage relationship:

```
  c − p = e^(−r_f·T) · S − e^(−r_d·T) · K

  Where c = call price, p = put price with same K and T

  → Ensures no-arbitrage between calls, puts, forwards
  → If violated, risk-free arbitrage exists
```

---

## Key Option Strategies

### 1. EUR/USD Collar (Corporates)
Hedge downside (buy put) while capping upside cost (sell call):
```
  Exporter long EUR:
  Buys 3M EUR/USD 1.0800 put (floor)
  Sells 3M EUR/USD 1.1000 call (cap)
  Net premium: reduced (or zero-cost collar)
```

### 2. Risk Reversal (Speculative)
Buy call, sell put (or vice versa) — directional bet with no net premium:
```
  Bull view on EUR:
  Buy EUR/USD 25D call + Sell EUR/USD 25D put
  Net premium ≈ 0 (if vols balanced)
```

### 3. Straddle (Vol Play)
Buy ATM call + ATM put — profits from large moves in either direction:
```
  Long EUR/USD ATM straddle:
  Buy 1M ATM call + Buy 1M ATM put
  Profit if spot moves significantly in either direction
  Loss = both premiums if spot stays still
```

---

## Further Reading

- Garman, M.B. & Kohlhagen, S.W. (1983). *Foreign Currency Option Values*. Journal of International Money and Finance.
- *FX Options and Structured Products* — Uwe Wystup (Wiley, 2006)
- *Options, Futures, and Other Derivatives* — John C. Hull, Chapters 17–19
- Global Risk Guard: *Currency Option Pricing* — [globalriskguard.com](https://www.globalriskguard.com/resources/deriv/currency_option.pdf)
- MathFinance: *Foreign Exchange Options* — [mathfinance.com](https://www.mathfinance.com/wp-content/uploads/2024/10/EQF-FX-ForeignExchangeOptions-CekanWendelWystup.pdf)
