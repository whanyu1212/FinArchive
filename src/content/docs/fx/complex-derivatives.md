---
title: Complex FX Derivatives
description: Advanced FX derivative structures — variance swaps, vol swaps, correlation products, and multi-asset FX derivatives.
sidebar:
  order: 9
---

Beyond vanilla options and standard exotics, the FX market features a range of **complex, multi-dimensional derivatives** that trade on volatility, correlation, and path-dependent features. These are almost exclusively OTC, traded between sophisticated institutional counterparties.

---

## 1. FX Volatility Products

### Variance Swap

A **variance swap** is a forward contract on realised variance — allowing pure exposure to realised volatility without delta-hedging.

$$
\text{Payoff} = \text{Notional}_{\text{var}} \times (\sigma^2_{\text{realised}} - K^2_{\text{var}})
$$

**Where:**
*   $\sigma^2_{\text{realised}}$ = annualised variance of daily log returns over life
*   $K_{\text{var}}$ = variance strike (agreed at inception)
*   $\text{Notional}_{\text{var}} = \text{vega notional} / (2 \times K_{\text{var}})$

**Example:** EUR/USD 3M variance swap
*   Variance strike: 50 ($= 7.07\% \text{ vol}^2 \times 100^2 \text{ conversion}$)
*   Vega notional: USD 1,000,000
*   Var notional: USD 1,000,000 / (2 × 7.07) = USD 70,722

If 3M realised var = 64 ($= 8\% \text{ realised vol}^2 \times 100^2$):
$\text{P\&L} = 70,722 \times (64 - 50) = +\$990,108$ (long variance wins)

**Key:**
→ **Long variance** = profits if realised vol > strike
→ **Short variance** = profits if realised vol < strike (selling the spike)
→ No delta hedging required — pure vol exposure

**Why variance over vol swaps?**
Variance swaps are **statically replicable** via a strip of vanilla options (log contract), making pricing and hedging cleaner. Volatility swaps require dynamic vega hedging.

### Volatility Swap

Similar to variance swap but pays on **realised volatility** (not variance):

```
  Payoff = Notional_vega × (σ_realised − K_vol)

  More intuitive (payoff in vol terms)
  But harder to replicate → bid-offer wider than variance swaps

  Convexity adjustment:
  K_vol ≈ √(K_var) − Convexity adjustment
  (Var strike is always > square root of vol strike due to Jensen's inequality)
```

### Vol Surface Dynamics: Key Concepts

```
  The FX vol surface has three key axes:
  1. Level (ATM vol): overall vol regime
  2. Skew (Risk Reversal): directional asymmetry
  3. Convexity (Butterfly/Strangle): wing pricing

  Complex derivatives often trade on movements WITHIN the vol surface:

  ┌─────────────────────────────────────────────────────────────┐
  │  Vega:  Sensitivity to parallel vol surface shift           │
  │  Vanna: Sensitivity of delta to vol (∂Δ/∂σ)                │
  │         → Measures skew risk                                │
  │  Volga: Sensitivity of vega to vol (∂ν/∂σ)                 │
  │         → Measures convexity / wing risk                    │
  └─────────────────────────────────────────────────────────────┘
```

---

## 2. Correlation Products

### Quanto Options

A **quanto option** eliminates FX risk by fixing the exchange rate used in the payoff — the option is denominated in a currency different from the underlying, but settled at a **fixed, predetermined FX rate**.

```
  Example: S&P 500 quanto call, settled in JPY

  Underlying: S&P 500 (USD)
  Settlement: JPY at fixed rate of 150 JPY/USD (regardless of actual rate)

  If S&P 500 rises 10% and USD/JPY is actually 140 at expiry:
  → Standard option: investor gets USD profit, converts at 140 → loses on FX
  → Quanto option: investor gets JPY equivalent at fixed 150 → no FX risk

  Application in FX: USD/CNH quanto options used for offshore CNH exposure
  where the investor wants returns in a different currency

  Quanto adjustment to pricing:
  → Correlation (ρ) between FX and underlying affects forward price:
  Forward_quanto = Forward_regular × e^(−ρ × σ_FX × σ_underlying × T)
```

### Basket Options

An option on a **weighted basket of currency pairs** — typically cheaper than buying individual options on each pair (due to diversification/imperfect correlation):

```
  Example: Basket call on (EUR/USD, GBP/USD, AUD/USD)
  Weights:  40%, 35%, 25%

  Basket spot = 0.40 × EURUSD + 0.35 × GBPUSD + 0.25 × AUDUSD

  Payoff = max(Basket_T − Basket_0, 0)

  Pricing requires:
  → Individual vol for each pair
  → Pairwise correlations between all pairs
  → Correlation between EUR/USD, GBP/USD, AUD/USD is HIGH (all USD pairs)
    → Less diversification benefit → basket is more expensive than some expect
```

### Best-of / Worst-of Options

Pays based on the **best-performing** (or worst-performing) currency in a basket:

$$
\text{Best-of Call Payoff} = \max(\max(R_1, R_2, R_3) - K, 0)
$$
$$
\text{Worst-of Call Payoff} = \max(\min(R_1, R_2, R_3) - K, 0)
$$

→ **Best-of** is expensive (upside = best performer)
→ **Worst-of** is cheap (upside = capped by worst performer)

Common structure: **Worst-of digital** (pays fixed amount only if ALL currencies finish above their respective strikes)

**Correlation sensitivity:**
*   **Best-of:** Short correlation (benefits when assets diverge)
*   **Worst-of:** Long correlation (suffers when assets diverge)

---

## 3. Spread Options

Pays based on the **differential** between two FX rates:

**EUR/USD vs. GBP/USD spread option:**
$$
\text{Payoff} = \max(\text{EURUSD}_T - \text{GBPUSD}_T - K, 0)
$$
→ Used by cross-asset traders to express views on EUR/GBP (equivalent to an EUR/GBP option but structured differently)
→ EUR/GBP spread options allow for precise optionality on cross rates

**FX/Rate spread:**
$$
\text{Payoff} = \max(\text{USD/JPY}_T - \text{IR\_differential}_T - K, 0)
$$
→ Trades the relationship between USD/JPY and US-JP rate differential

---

## 4. Lookback Options

The payoff is based on the **optimal (best) spot rate** observed during the option's life:

**Floating strike lookback call:**
$$
\text{Payoff} = S_{\max} - S_T \quad \text{(best you could have sold vs. final spot)}
$$

**Fixed strike lookback call:**
$$
\text{Payoff} = \max(S_{\max} - K, 0)
$$

→ Very expensive (you effectively get the best possible entry)
→ Used in very specific hedging where timing risk is a major concern
→ Rarely traded due to cost; more commonly used as a benchmark

---

## 5. Corridor / Accrual Derivatives (Advanced)

### Accrual Forward

A forward where the **notional accrues** based on how many days the spot rate fixes within a corridor:

**EUR/USD 1Y Accrual Forward:**
*   **Strike:** 1.0950
*   **Corridor:** EUR/USD 1.0700 – 1.1200

For each business day EUR/USD fixes within $[1.07, 1.12]$:
→ $+\text{EUR } 50,000$ added to notional

**At expiry:**
$$
\text{Total notional} = €50\text{k} \times (\text{days in corridor})
$$
Settlement at strike 1.0950

---

## 6. FX Hybrid Structures

Complex derivatives linking FX to other asset classes:

### FX-Linked Credit Notes

**Structure:** Bond whose coupon is enhanced by FX performance
**Example:** 5Y note paying 8% p.a. if USD/BRL stays below 6.00, otherwise coupon falls to 0%

→ Investor is long a credit note and short a USD/BRL call (barrier)
→ $\text{Enhanced yield} = \text{option premium received}$

### FX-Linked Rate Structures (CMS Steepener with FX Knock-Out)

**Structure:** EUR interest rate CMS steepener note, but knocked out if EUR/USD falls below 1.0000

→ Links EUR interest rate view to EUR/USD tail risk
→ Cheaper than a pure rate note (you sell the EUR put for funding)
→ Correlation between EUR rates and EUR/USD makes this complex to price

---

## 7. FX Options Greeks: Second-Order & Cross-Greeks

For complex derivatives, first-order Greeks are insufficient. Key second-order and cross-Greeks:

```
  ┌──────────────────────────────────────────────────────────┐
  │ Vanna  = ∂²V / (∂S ∂σ) = ∂Δ/∂σ = ∂ν/∂S               │
  │   → How delta changes as vol changes                     │
  │   → Critical for barrier and skewed structures           │
  │                                                          │
  │ Volga  = ∂²V / ∂σ²                                      │
  │   → How vega changes as vol changes                      │
  │   → Critical for OTM options, butterflies               │
  │                                                          │
  │ Charm  = ∂²V / (∂S ∂T) = ∂Δ/∂T                        │
  │   → How delta changes as time passes                     │
  │   → Important for daily delta hedging                    │
  │                                                          │
  │ Speed  = ∂³V / ∂S³ = ∂Γ/∂S                             │
  │   → How gamma changes with spot                          │
  │   → Matters near barrier levels                         │
  └──────────────────────────────────────────────────────────┘
```

### Vanna-Volga Pricing

The **Vanna-Volga (VV)** method is a widely used practical approach to pricing FX exotics by adjusting vanilla option prices using market-observable vanna and volga:

```
  Exotic price ≈ BS price + x₁ × (market 25D RR cost − BS cost)
                           + x₂ × (market 25D BF cost − BS cost)

  Where x₁ weights reflect vanna exposure
        x₂ weights reflect volga exposure

  → Fast, market-consistent approach for quoting barriers/digitals
  → Not fully model-consistent but widely used for quick pricing
```

---

## Risk Management Summary for Complex Derivatives

| Derivative | Key Risk | Hedge Instrument |
|---|---|---|
| Variance Swap | Realised vol vs. strike | Strip of vanilla options (log contract) |
| Vol Swap | Realised vol, convexity | Variance swap + convexity adjustment |
| Quanto Option | Correlation between assets | Correlation swap; cross-gamma hedging |
| Basket Option | Correlation, individual vols | Individual options + correlation trades |
| Best/Worst-of | Correlation | Long/short correlation positioning |
| Lookback | Path; vol | Dynamic delta hedging; costly |
| Accrual Forward | Range breaks; barrier delta | Digitals; barrier options |

---

## Further Reading

- *FX Options and Structured Products* — Uwe Wystup (Wiley, 2006)
- *The Volatility Surface* — Jim Gatheral (Wiley Finance, 2006)
- *Foreign Exchange Options* — Cekan, Wendel & Wystup (MathFinance) — [mathfinance.com](https://www.mathfinance.com/wp-content/uploads/2024/10/EQF-FX-ForeignExchangeOptions-CekanWendelWystup.pdf)
- *Options, Futures, and Other Derivatives* — John C. Hull, Chapters 26–27
- BIS Working Papers on FX derivatives markets — [bis.org](https://www.bis.org)
