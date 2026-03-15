---
title: Yield Curve Theory
description: Expectations hypothesis, liquidity premium theory, term premium extraction (ACM model), and PCA decomposition of yield curve movements.
sidebar:
  order: 6
---

The **yield curve** — the relationship between interest rates and maturities — is one of the most information-rich objects in finance. Understanding what drives its shape, how to decompose it, and what it signals about the economy is foundational to rates and macro trading.

---

## Theories of the Yield Curve Shape

### Pure Expectations Hypothesis (PEH)

The oldest and most elegant theory: long-term rates are simply the **geometric average of expected future short-term rates**, with no additional compensation required:

$$
(1 + r_{10})^{10} = (1 + r_1) \times (1 + \mathbb{E}[r_{1,1y}]) \times \dots \times (1 + \mathbb{E}[r_{1,9y}])
$$

**Simplified notation:**
$$
10\text{Y yield} = \text{average of expected 1Y rates over the next 10 years}
$$

**Implications:**
*   **UPWARD-SLOPING curve:** market expects short rates to RISE.
*   **FLAT curve:** market expects short rates to stay stable.
*   **INVERTED curve:** market expects short rates to FALL (the classic recession signal).

**Testable prediction of PEH:**
"Forwards are unbiased predictors of future spot rates."
*   e.g., 1Y rate in 1 year (1Y1Y forward) should equal the expected 1-year rate in 1 year.

**Reality: PEH is empirically violated**
*   Forward rates consistently OVERPREDICT future rates.
*   This residual = the **term premium**.

### Liquidity Preference Theory (Keynes/Hicks)

Extends PEH by adding a **term premium** — investors demand extra compensation for bearing interest rate risk on longer-dated bonds:

$$
\text{Long-term yield} = \mathbb{E}[\text{short-term rates}] + \text{Term Premium}
$$

$$
r_{10} = \mathbb{E}[\text{avg of future } r_1 \text{ over 10 years}] + \text{TP}_{10}
$$

**Rationale:**
*   Longer-dated bonds have greater price sensitivity (**duration**).
*   If rates rise unexpectedly, longer bonds suffer more.
*   Investors require a **RISK PREMIUM** to hold long-dated bonds.

**Implication:**
*   Even if markets expect flat short rates forever, the curve will slope **UPWARD** (term premium > 0).
*   Most of the time, the term premium is **POSITIVE**.
*   But term premium can go **NEGATIVE** (e.g., massive QE pushing investors into long-term bonds).

### Market Segmentation Theory

Different investors have **PREFERRED HABITATS** in specific tenors:
*   **Insurance companies / pension funds:** long-term bonds (liability matching).
*   **Money market funds:** short-term bills and notes.
*   **Commercial banks:** medium-term (5–10Y).

Supply and demand dynamics within each maturity segment drive yields at that point, relatively independently.

**Why it matters:**
*   Central bank QE targeted at a specific maturity (e.g., 10Y) directly suppresses yields at that point.
*   The supply of Treasury bonds at each maturity affects the "local" yield → term premium responds to debt issuance.

---

## Term Premium Extraction: The ACM Model

The **Adrian-Crump-Moench (ACM)** model (New York Fed, 2013) is the most widely used framework for decomposing Treasury yields into:
1.  **Expected short rate path** (what markets price for future policy).
2.  **Term premium** (extra compensation for duration risk).

### Framework

The ACM is a 5-factor affine dynamic term structure model (DTSM).

**Output decomposition:**
$$
\text{Observed 10Y yield} = \text{Expected short rate path} + \text{Term Premium}
$$

**Example (illustrative):**
*   **US 10Y yield:** 4.80%
*   **ACM Expected short rates component:** 4.20%
*   **ACM Term premium:** 0.60%

**Interpretation:**
*   Markets price the Fed averaging 4.20% over the next 10 years.
*   Investors demand an extra 0.60% for the risk of holding 10Y bonds.

> Reference: Adrian, T., Crump, R., & Moench, E. (2013). *Pricing the Term Structure with Linear Regressions.* Journal of Financial Economics, 110(1), 110–138. NY Fed data: [newyorkfed.org](https://www.newyorkfed.org/research/data_indicators/term-premia-tabs)

### What Moves the Term Premium?

:::note[Term Premium Drivers]
**TERM PREMIUM INCREASES WHEN:**
*   Macroeconomic uncertainty rises (inflation uncertainty).
*   Treasury supply increases (fiscal deficit expansion).
*   Fed balance sheet shrinks / QT accelerates.
*   Safe haven demand for bonds FALLS (risk-on).
*   Inflation volatility increases.

**TERM PREMIUM DECREASES WHEN:**
*   Fed QE (buying long-end Treasuries compresses yield).
*   Global demand for safe assets (European/Asian demand).
*   Deflationary environment (bonds become insurance).
:::

---

## Principal Component Analysis: Level, Slope, Curvature

**PCA** on yield curve changes reveals that three factors explain ~99% of all yield curve movements:

| Factor | Name | Movement | % Variance Explained |
|---|---|---|---|
| **PC1** | **Level** | Parallel shift (all rates up/down) | ~90% |
| **PC2** | **Slope** | Twist (short rates up, long rates down, or vice versa) | ~7-8% |
| **PC3** | **Curvature** | Butterfly (belly of curve moves relative to wings) | ~1-2% |

### Trading the Curve Factors

1.  **Level Trade:** Long or short the entire curve (duration bet).
2.  **Slope Trade (Steepener/Flattener):**
    *   **Steepener:** Buy 2Y / Sell 10Y (expecting 10Y yields to rise faster than 2Y).
    *   **Flattener:** Sell 2Y / Buy 10Y.
3.  **Curvature Trade (Butterfly):**
    *   **Long Butterfly:** Buy 2Y, Sell 5Y, Buy 10Y (expecting the 5Y "belly" to outperform the wings).
