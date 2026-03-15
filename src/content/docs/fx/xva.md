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

:::note[Pre-2008 Assumptions]
1.  **Discount at LIBOR:** LIBOR was treated as "risk-free" (AA-rated interbank rate) and used for all discounting.
2.  **Counterparties don't default:** Large banks were "too big to fail"; CVA was minimal or ignored.
:::

---

## The 2008 Turning Point

**September 2008: Lehman Brothers files for bankruptcy**
*   $700$ billion in OTC derivatives outstanding with Lehman.
*   Counterparties suffered massive losses on in-the-money derivatives.
*   The 3-month LIBOR–OIS spread spiked to $365$bps (was $\approx 10$bps pre-crisis).

**The spread reveals:**
$$
\text{LIBOR spread} = \text{credit risk} + \text{liquidity risk of lending to banks}
$$
$$
\text{OIS rate} = \text{nearly risk-free (overnight, reset daily, no term credit)}
$$

Post-Lehman, using LIBOR as "risk-free" was proven to be wrong. The industry began the shift to OIS discounting and explicit CVA pricing.

---

## OIS Discounting: The New Risk-Free Benchmark

### What is OIS?

An **Overnight Indexed Swap (OIS)** exchanges a fixed rate for the geometric compounding of an overnight benchmark rate (SOFR in USD, €STR in EUR, SONIA in GBP) over the swap term.

**Why OIS $\approx$ risk-free:**
*   **Overnight loans:** minimal credit and duration risk.
*   **The OIS rate** reflects only the near-zero credit risk of overnight interbank borrowing.
*   **Post-LIBOR:** SOFR (secured, repo-based) is even more risk-free as it's backed by US Treasury collateral.

### Dual-Curve Framework

After 2008, derivatives pricing adopted a **dual-curve** approach:

:::note[Pre-2008 vs Post-2008]
**Pre-2008:** One curve (LIBOR) for both forecasting AND discounting.

**Post-2008: Two curves:**
1.  **FORECASTING CURVE** (e.g., SOFR term rates, €STR term rates)
    *   Determines expected future cashflows on floating rate legs.
    *   Bootstrapped from FRAs, futures, and swap rates.
2.  **DISCOUNTING CURVE** (OIS curve: SOFR, €STR)
    *   All cashflows (fixed and floating) discounted at OIS.
    *   Reflects the actual cost of collateral / risk-free rate.
:::

---

## CVA: Credit Valuation Adjustment

**CVA** is the monetary value of the expected credit loss from a counterparty defaulting. It converts the "clean" (risk-free) price of a derivative into the "dirty" (realistic) price:

$$
\text{Dirty Price} = \text{Clean Price (OIS-discounted)} - \text{CVA}
$$

$$
\text{CVA} = \mathbb{E}[\text{loss if counterparty defaults} \times \text{probability of default} \times \text{exposure at default}]
$$

### The CVA Formula

$$
\text{CVA} \approx (1 - \text{Recovery Rate}) \times \sum_{i} \text{EE}(t_i) \times \text{PD}(t_{i-1}, t_i) \times \text{DF}(t_i)
$$

**Where:**
*   **EE($t_i$):** Expected Exposure at time $t_i$.
*   **PD($t_{i-1}, t_i$):** Marginal Probability of Default between $t_{i-1}$ and $t_i$.
*   **DF($t_i$):** Risk-free discount factor to time $t_i$.
*   **(1 − Recovery Rate):** Also known as **LGD** (Loss Given Default).

---

## DVA: Debit Valuation Adjustment

**DVA** is CVA from the counterparty's perspective. It represents the benefit to a bank if it defaults on its own obligations.

$$
\text{Dirty Price} = \text{Clean Price} - \text{CVA} + \text{DVA}
$$

:::caution[The DVA Paradox]
As a bank's own credit quality worsens, its DVA increases, which actually *increases* its reported earnings. This "gain" cannot be easily monetised, leading to significant accounting controversy.
:::

---

## FVA: Funding Valuation Adjustment

**FVA** accounts for the cost or benefit of funding the collateral (margin) required for a derivative.

$$
\text{FVA} = \text{FCA (Funding Cost Adjustment)} - \text{FBA (Funding Benefit Adjustment)}
$$

*   **FCA:** The cost of borrowing cash to post as collateral for a derivative that is out-of-the-money.
*   **FBA:** The benefit of receiving cash as collateral for a derivative that is in-the-money.

---

## XVA Summary

| Adjustment | Source of Risk | Valuation Impact |
|---|---|---|
| **CVA** | Counterparty Credit Risk | Deduction from value |
| **DVA** | Own Credit Risk | Addition to value |
| **FVA** | Funding Costs / Collateral | Deduction/Addition based on net funding |
| **KVA** | Capital Requirements (Basel III) | Deduction based on cost of capital |
| **ColVA** | Collateral Optionality | Adjustment for different collateral types |

---

## Practical Application in FX

In the FX market, XVA is particularly significant for:
1.  **Long-dated Cross-Currency Swaps:** Large notional exchanges at maturity create massive settlement risk and significant CVA.
2.  **Corporate FX Hedging:** Corporates often trade uncollateralised (no CSA), requiring banks to charge significant CVA.
3.  **Emerging Markets:** High default probabilities and funding spreads in EM currencies make XVA a dominant part of the bid-ask spread.
