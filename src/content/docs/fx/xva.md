---
title: XVA — Value Adjustments
description: OIS discounting, CVA, DVA, FVA, and the post-2008 framework for pricing counterparty risk and funding costs into derivatives.
sidebar:
  order: 12
---

**XVA** is the collective term for a family of value adjustments (the "X" stands for any letter) applied to derivative prices to account for counterparty credit risk, funding costs, and other real-world frictions that were ignored in the pre-2008 world. These adjustments have fundamentally changed how banks price, manage, and book derivatives.

---

## The Pre-2008 World: LIBOR Discounting

Before the Global Financial Crisis, derivatives desks made two simplifying assumptions:

```
  Assumption 1: Discount at LIBOR
  → LIBOR was treated as "risk-free" (AA-rated interbank rate)
  → All derivative cash flows discounted using LIBOR-based curves

  Assumption 2: Counterparties don't default
  → Large banks were "too big to fail"
  → CVA adjustments were minimal or ignored
  → Derivatives were valued at their "risk-free" present value

  This was NOT because people didn't understand credit risk —
  it was an industry convention that everyone accepted.
```

---

## The 2008 Turning Point

```
  September 2008: Lehman Brothers files for bankruptcy
  → $700 billion in OTC derivatives outstanding with Lehman
  → Counterparties suffered massive losses on in-the-money derivatives
  → The 3-month LIBOR–OIS spread spiked to 365bps (was ~10bps pre-crisis)

  The spread reveals:
  LIBOR spread = credit risk + liquidity risk of lending to banks
  OIS rate     = nearly risk-free (overnight, reset daily, no term credit)

  Post-Lehman: Using LIBOR as "risk-free" was proven to be wrong.
  Industry began the shift to OIS discounting and explicit CVA pricing.
```

---

## OIS Discounting: The New Risk-Free Benchmark

### What is OIS?

An **Overnight Indexed Swap (OIS)** exchanges a fixed rate for the geometric compounding of an overnight benchmark rate (SOFR in USD, €STR in EUR, SONIA in GBP) over the swap term:

```
  OIS mechanics (1-month example):
  Fixed leg: pays agreed OIS rate × notional
  Floating leg: pays compounded overnight rate each business day

  Why OIS ≈ risk-free:
  → Overnight loans: minimal credit and duration risk
  → The OIS rate reflects only the near-zero credit risk
    of overnight interbank borrowing
  → Post-LIBOR: SOFR (secured, repo-based) is even more risk-free
    as it's backed by US Treasury collateral
```

### Dual-Curve Framework

After 2008, derivatives pricing adopted a **dual-curve** approach:

```
  Pre-2008:  One curve (LIBOR) for both forecasting AND discounting

  Post-2008: Two curves:
  ┌────────────────────────────────────────────────────────────────┐
  │ FORECASTING CURVE (e.g., SOFR term rates, €STR term rates)   │
  │ → Determines expected future cashflows on floating rate legs   │
  │ → Bootstrapped from FRAs, futures, and swap rates             │
  │                                                               │
  │ DISCOUNTING CURVE (OIS curve: SOFR, €STR)                    │
  │ → All cashflows (fixed and floating) discounted at OIS        │
  │ → Reflects the actual cost of collateral / risk-free rate     │
  └────────────────────────────────────────────────────────────────┘

  Impact: All derivative values changed when the industry moved
  to OIS discounting — the "Big Bang" for swaps desks circa 2012.
  LCH and CME forced OIS discounting for cleared swaps in 2010.
```

---

## CVA: Credit Valuation Adjustment

**CVA** is the monetary value of the expected credit loss from a counterparty defaulting. It converts the "clean" (risk-free) price of a derivative into the "dirty" (realistic) price:

```
  Dirty Price = Clean Price (OIS-discounted) − CVA

  CVA = cost of credit risk =
        E[loss if counterparty defaults × probability of default × exposure at default]
```

### The CVA Formula

```
  CVA ≈ (1 − Recovery Rate) × Σᵢ EE(tᵢ) × PD(tᵢ₋₁, tᵢ) × DF(tᵢ)

  Where:
  EE(tᵢ)           = Expected Exposure at time tᵢ
                      (average positive MTM value = how much is owed to us)
  PD(tᵢ₋₁, tᵢ)    = Marginal default probability in the interval
                      (derived from CDS spreads or proxy curves)
  DF(tᵢ)            = OIS discount factor to tᵢ
  (1 − Recovery)   = Loss-given-default (LGD); typically 40% recovery → LGD=60%

  Intuition:
  CVA = (what you're owed if they default) × (how likely they default) × (time value)
```

### Expected Exposure (EE) Profile

```
  EE is not constant — it evolves over the life of the trade.
  For a vanilla interest rate swap:

  EE
   │          ╱╲
   │         ╱  ╲
   │        ╱    ╲
   │       ╱      ╲
   │      ╱        ╲
   │     ╱          ╲─────────
   │────╱
   └────────────────────────────── Time (0 to maturity)

  → Exposure builds up as MTM grows in early years
  → Then declines as maturity approaches (less time remaining)
  → This "hump" shape is typical for interest rate swaps

  For FX forward:
  → Exposure grows monotonically (FX path diverges over time)
  → Much larger EE profile than interest rate derivatives
```

### CVA in Practice

```
  Example: 5-year EUR/USD cross-currency swap
  Notional: €10m / $10.85m
  Counterparty CDS spread: 150bps (BBB-rated corporate)
  Recovery rate: 40% → LGD = 60%
  Peak EE (approximate): $800,000

  Rough CVA estimate:
  CVA ≈ 60% × 800,000 × (1 − e^(−CDS_spread × T)) × discount factors
  For T=5, spread=150bps:
  Survival probability decline ≈ 1 − e^(−0.015 × 5) ≈ 7.2%

  CVA ≈ 60% × $800,000 × 7.2% ≈ $34,560

  → Bank charges client an additional ~$35k for counterparty credit risk
  → Embedded into the swap rate or quoted as an upfront fee
```

---

## DVA: Debit Valuation Adjustment

**DVA** is the mirror image of CVA — it represents the value to a counterparty of the possibility that **you** might default:

```
  DVA = CVA from the counterparty's perspective

  If you default, your counterparty loses money → their CVA is your DVA

  Net adjustment: Net CVA = CVA − DVA

  Controversy around DVA:
  ┌─────────────────────────────────────────────────────────────┐
  │ DVA creates a perverse incentive: if your own credit          │
  │ deteriorates (CDS widens), DVA INCREASES, improving your     │
  │ reported P&L                                                  │
  │                                                               │
  │ This is counterintuitive: you make money when you become      │
  │ more likely to default                                        │
  │                                                               │
  │ Monetizing DVA is extremely difficult in practice —           │
  │ you cannot easily hedge your own default risk                 │
  └─────────────────────────────────────────────────────────────┘
```

---

## FVA: Funding Valuation Adjustment

**FVA** accounts for the **funding cost** (or benefit) of collateral posting:

```
  If a bank enters an uncollateralized derivative with a client
  and hedges it with a collateralized trade in the interbank market:

  Client trade (uncollateralized):  No collateral flows
  Hedge trade (collateralized):     Must post variation margin

  If the hedge is in-the-money for the bank:
  → Counterparty posts collateral to the bank → bank earns on it
  → Funding Benefit Adjustment (FBA)

  If the hedge is out-of-the-money for the bank:
  → Bank must post collateral → funding cost
  → Funding Cost Adjustment (FCA)

  FVA = FCA − FBA

  FVA debate (Hull & White, 2012):
  John Hull and Alan White argued FVA is NOT a legitimate price
  adjustment — it conflates pricing with the firm's own funding
  cost. Others (industry majority) disagree and include it.
```

---

## The Full XVA Family

```
  XVA = All "valuation adjustments" to the clean derivative price:
  ─────────────────────────────────────────────────────────────────
  CVA   Credit Valuation Adj.    Counterparty default risk
  DVA   Debit Valuation Adj.     Own default risk
  FVA   Funding Valuation Adj.   Funding cost/benefit of collateral
  MVA   Margin Valuation Adj.    Cost of initial margin (Basel III)
  KVA   Capital Valuation Adj.   Cost of regulatory capital
  ColVA Collateral Valuation Adj. Non-cash collateral optionality
  ─────────────────────────────────────────────────────────────────

  "Fully adjusted" derivative price:
  Price = Risk-Free Price − CVA − FVA − MVA − KVA (+ DVA)

  KVA has become increasingly important under Basel III/IV:
  → Banks must hold capital against derivative exposures
  → Cost of this capital must be recovered through pricing
  → For long-dated, exotic derivatives: KVA can exceed CVA
```

---

## Basel III and Regulatory CVA

Under **Basel III (2014)**, banks must hold regulatory capital against CVA volatility:

```
  SA-CVA (Standardised Approach):
  → Capital based on sensitivity of CVA to market risk factors
  → Approved by regulator; most common for large banks

  BA-CVA (Basic Approach):
  → Simplified formula based on EAD and supervisory parameters
  → For banks not approved for SA-CVA

  IMA-CVA (Internal Model Approach, Basel IV):
  → Full internal model with regulatory approval (most complex)

  Impact on derivatives pricing:
  → Products generating large CVA capital charges become expensive
  → Long-dated FX derivatives, cross-currency swaps with low-rated
    counterparties: KVA + CVA can add 100bps+ to funding cost
  → Strong incentive for clearing (CCPs hold initial margin,
    reducing CVA capital to near zero)
```

---

## XVA Desk Structure at Banks

```
  In major banks, XVA is managed by a dedicated desk:

  ┌──────────────────────────────────────────────────────────────┐
  │                      XVA DESK                                │
  │                                                              │
  │  Receives: CVA charge from trading desks (on each new trade) │
  │  Manages:  Hedging of CVA through CDS, index CDS, swaptions  │
  │  Publishes: Internal transfer pricing for FVA, MVA, KVA      │
  │  Reports:   Daily P&L on the XVA book                        │
  └──────────────────────────────────────────────────────────────┘

  FX-specific XVA considerations:
  → XCCY swaps with corporate clients: CVA is a significant charge
    due to long tenor and two-way currency exposure
  → FX barrier options: CVA depends on expected exposure PATH
    (especially if the barrier creates discontinuous exposure jumps)
  → In-the-money long-dated FX options: large EE → high CVA
```

---

## Further Reading

- Hull, J. & White, A. (2014). *LIBOR vs. OIS: The Derivatives Discounting Dilemma.* Rotman School — [rotman.utoronto.ca](https://www-2.rotman.utoronto.ca/~hull/downloadablepublications/LIBORvsOIS.pdf)
- Wikipedia: *XVA* — [en.wikipedia.org](https://en.wikipedia.org/wiki/XVA)
- CFI: *Credit Valuation Adjustment (CVA)* — [corporatefinanceinstitute.com](https://corporatefinanceinstitute.com/resources/derivatives/credit-valuation-adjustment-cva/)
- IVSC: *Credit and Debit Valuation Adjustments* — [ivsc.org](https://ivsc.org/wp-content/uploads/2021/10/Annexe-250.02-CVA-DVA.pdf)
- Gregory, J. (2015). *The xVA Challenge: Counterparty Credit Risk, Funding, Collateral, Capital and Initial Margin.* Wiley.
