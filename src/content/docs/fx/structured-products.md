---
title: FX Structured Products
description: Dual currency deposits, range accruals, TARFs, PRDCs, and other structured FX notes — mechanics, payoffs, and risks.
sidebar:
  order: 8
---

**FX structured products** are packaged instruments that embed one or more FX options (or other derivatives) into a note, deposit, or forward contract. They offer investors or corporates **enhanced yields, cheaper hedges, or leveraged exposures** — typically by giving up some upside or accepting tail risk.

> "These products offer enhanced yields or better forward rates in exchange for taking on additional, often asymmetric, currency risk."
> — HedgeFlows FX Academy

---

## Framework: How Structured Products Are Built

Most FX structured products share the same construction logic:

```
  STRUCTURED PRODUCT = VANILLA BOND/DEPOSIT + EMBEDDED OPTION(S)

  Example: Capital-protected note
  ┌──────────────────────────────────────────────┐
  │  100% invested                               │
  │                                              │
  │  ├── 90% → Zero-coupon bond → 100% at T     │
  │  │         (capital protection)              │
  │  │                                           │
  │  └── 10% → FX Call Option → upside payoff   │
  │            (performance kicker)              │
  └──────────────────────────────────────────────┘

  The larger the option portion, the higher the potential
  return — but also the higher the embedded risk.
```

---

## 1. Dual Currency Deposit (DCD)

A **Dual Currency Deposit** is a short-term deposit where the investor earns a **significantly enhanced yield** in exchange for accepting the risk of being repaid in a weaker alternate currency.

### Mechanics

```
  Investor deposits USD 1,000,000 for 1 month
  Earns enhanced rate: 6.5% p.a. (vs. 5.3% standard)
  Strike: USD/JPY 148.00

  At maturity:
  ─────────────────────────────────────────────────────────
  Scenario A — USD/JPY < 148.00 (USD weakens):
    Investor repaid in JPY at 148.00
    USD 1m → JPY 148,000,000 + interest in JPY
    (If USD/JPY spot is 145.00, investor takes FX loss)

  Scenario B — USD/JPY ≥ 148.00 (USD stays strong):
    Investor repaid in USD
    Receives USD 1,000,000 + enhanced interest in USD ✓
  ─────────────────────────────────────────────────────────
```

### What the investor is really doing

```
  DCD = Normal deposit + Short USD/JPY put (at strike 148.00)
  → Investor SELLS a currency option to the bank
  → Option premium is paid as the yield enhancement
  → If USD falls sharply, repayment in depreciated JPY means a LOSS
```

### Risk Profile

```
  Yield enhancement:      +++
  Capital protection:     NO (conditionally repaid in weaker currency)
  Best case:              Enhanced yield in preferred currency
  Worst case:             Repaid in depreciated currency at fixed strike
  Suitable for:           Investors who genuinely want both currencies anyway
```

---

## 2. Accumulator / FX Forward Accumulator

An **accumulator** is a structure where a corporate or investor buys/sells currency at a **below-market rate** (or above-market rate for sellers), but with the obligation to transact on every fixing date, and sometimes at **double the notional** if spot moves adversely.

```
  Example: Exporter accumulator (selling USD, buying CNH)

  Structure:
  - Strike: USD/CNH 7.10 (below spot of 7.15 — better rate for client)
  - Knock-out: USD/CNH 7.25 (structure cancelled if USD strengthens past 7.25)
  - Knock-in (doubler): USD/CNH 6.90 (double notional if USD weakens below 6.90)
  - Tenor: 12 months, monthly fixings
  - Notional per fixing: USD 1,000,000 (or USD 2,000,000 if knocked in)

  Outcomes per monthly fixing:
  ─────────────────────────────────────────────────────────
  7.00 < spot < 7.25:  Sell USD 1m at 7.10 (good for client ✓)
  spot > 7.25:          Structure knocked out (no more fixings)
  spot < 6.90:          Sell USD 2m at 7.10 (double obligation!)
  ─────────────────────────────────────────────────────────

  Problem: If USD collapses (CNH strengthens), client must sell USD
           at 7.10 — missing the actual market rate of, say, 6.50
           → Annual loss: 12 × $2m × (7.10 − 6.50) = $14.4 million
```

> **Accumulators were nicknamed "I kill you later" in Hong Kong during the 2008 GFC**, when equity and FX accumulators wiped out large portions of HNW client wealth.

---

## 3. Target Redemption Forward (TARF / TARN)

A **TARF** is a series of forward FX transactions where the structure **automatically terminates** once cumulative gains to the client reach a pre-set **target**.

### Mechanics

```
  Structure: 12 monthly fixings, EUR/USD
  Forward rate: 1.0950 (above spot of 1.0850)
  Target gain: USD 500,000 total
  Notional per fixing: EUR 1,000,000

  Monthly settlement:
  If EUR/USD fixing > 1.0950: client gains (EUR/USD − 1.0950) × €1m
  If EUR/USD fixing < 1.0950: client LOSES (1.0950 − EUR/USD) × €1m

  Termination:
  Once cumulative gains = $500,000 → TARF terminates
  → Upside is CAPPED at the target

  But losses:
  → NO cap on losses — continue every month until maturity
  → If EUR/USD falls to 1.0000, client loses 950 pips × €1m per month!
```

### Payoff Asymmetry

```
  Client P&L over time:

  +$500k ├────────────────── TARGET HIT → terminates
         │              ╱
         │         ╱───╱
         │    ╱───╱
    $0   ├───╱───────────────────────────────────────── Months
         │╲
         │ ╲
         │  ╲──────────────────────────────────────────
  -large │  (no floor — losses accumulate every month)

  → This is NOT a balanced hedge. Upside capped, downside unlimited.
```

### TARF Risk Summary

| Feature | Detail |
|---|---|
| **Upside** | Capped at target gain (structure terminates) |
| **Downside** | Uncapped — continues every settlement date until maturity |
| **Typical tenor** | 12–24 months, monthly settlements |
| **User profile** | Corporates misled into thinking it's a "cheap hedge" |
| **True function** | Selling a strip of options to finance a below-market forward rate |

> **Regulatory concern**: TARFs were widely mis-sold to Korean, Chinese, and Southeast Asian corporates pre-2008. Post-GFC losses were in the billions across Asia. The IMF noted that TARFs were "not appropriate for hedging" due to their asymmetric risk.
>
> Reference: Dodd, R. (2009). *Playing with Fire*. IMF Finance & Development — [imf.org](https://www.imf.org/external/pubs/ft/fandd/2009/06/dodd.htm)

---

## 4. Range Accrual Note

A **Range Accrual** pays a coupon for each day (or fixing period) that the reference rate (FX spot, interest rate, etc.) stays **within a defined range**. Days outside the range earn zero.

```
  Example: EUR/USD 1-year Range Accrual Note

  Principal: USD 1,000,000
  Range: EUR/USD 1.0500 – 1.1200
  Coupon if in range: 8.00% p.a.
  Coupon outside range: 0.00%

  Day counting:
  ─────────────────────────────────────────────────────────
  Trading days in year:        252
  Days EUR/USD in 1.05–1.12:   190  (75.4% of year)
  Days outside range:           62  (24.6% of year)

  Coupon earned = 8.00% × (190/252) = 6.03% p.a.
  Coupon foregone = 8.00% × (62/252) = 1.97%

  Note: if EUR/USD breaks range badly, coupon can fall to near zero
  ─────────────────────────────────────────────────────────
```

### What the investor is selling

The enhanced coupon is funded by selling a strip of digital options to the bank — essentially **selling volatility** and **selling the probability** of the spot leaving the range.

---

## 5. Power Reverse Dual Currency Note (PRDC)

One of the most complex structured FX products, heavily issued in Japan in the 2000s.

### Structure

```
  PRDC = Long-dated note (10–30 years) with:
  → Coupons paid in USD (attractive to Japanese investors)
  → Coupon formula: C = Notional × max(α × S_USD/JPY / S_0 − K, 0)

  Where:
  S_USD/JPY = USD/JPY spot at each coupon date
  S_0       = USD/JPY spot at inception
  α, K      = Structure parameters

  Mechanics:
  ─────────────────────────────────────────────────────────
  USD/JPY rises (JPY weakens):  Higher coupon ✓
  USD/JPY falls (JPY strengthens): Lower coupon (can hit zero)
  ─────────────────────────────────────────────────────────

  The note is also typically callable by the issuer → creates
  embedded Bermudan swaption-like optionality

  Embedded risks:
  → Long USD/JPY (gains if JPY weakens)
  → Short interest rate volatility (IR and FX correlation)
  → Callable: issuer calls when rates move against investor
```

### PRDC Risk in Practice

```
  PRDCs embed:
  1. FX options (long USD/JPY call strips)
  2. Interest rate sensitivity (long bond duration)
  3. FX/IR correlation risk (exacerbated by complex cross-gamma)
  4. Callable optionality

  When USD/JPY fell sharply in 2008–2012 (JPY appreciation):
  → PRDC coupons collapsed
  → Japanese retail holders suffered large MTM losses
  → Banks hedging PRDCs created self-reinforcing USD/JPY selling
```

---

## Structured Product Risk Matrix

| Product | Enhanced Yield | Capital at Risk | Key Tail Risk | Typical User |
|---|---|---|---|---|
| **DCD** | High | Yes (FX conversion) | Sharp adverse FX move | Corporate, HNW |
| **Accumulator** | Below-market rate | Yes (double notional) | Exponential loss if spot gaps | Exporter/Importer |
| **TARF** | Better forward rate | Yes (uncapped losses) | Sustained adverse move | Corporate (misuse) |
| **Range Accrual** | High coupon | Possibly | Spot breaks range entirely | Yield investor |
| **PRDC** | High USD coupon | Yes | FX reversal, rate correlation | Japanese retail |

---

## Key Principle: Know What You Are Selling

All structured FX products involve the investor or corporate **implicitly selling options** (often multiple, complex ones) to fund the enhanced yield or better rate. The premium received is embedded in the product economics — not transparently paid.

```
  Rule of thumb:
  If the product sounds "too good to be true" (high yield, low risk),
  ask: WHAT OPTIONS AM I SELLING?

  The answer reveals the true risk profile.
```

---

## Further Reading

- Financial Edge: *Dual Currency Deposit* — [fe.training](https://www.fe.training/free-resources/financial-markets/dual-currency-deposit/)
- Fincyclopedia: *FX Target Accrual Redemption Note* — [fincyclopedia.net](https://fincyclopedia.net/forex/f-forex/fx-target-accrual-redemption-note/)
- HedgeFlows: *Structured FX Products Guide* — [hedgeflows.com](https://www.hedgeflows.com/fx-academy/structured-fx-products)
- IMF Finance & Development: *Playing with Fire* — [imf.org](https://www.imf.org/external/pubs/ft/fandd/2009/06/dodd.htm)
- HKUST: *Structured Notes Primer* — [math.hkust.edu.hk](https://www.math.hkust.edu.hk/~maykwok/courses/FINA690K/06/1.2_structured.pdf)
- *FX Options and Structured Products* — Uwe Wystup (Wiley, 2006)
