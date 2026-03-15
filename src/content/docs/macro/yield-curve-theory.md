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

```
  (1 + r_10)^10 = (1 + r_1) × (1 + E[r_1,1y]) × ... × (1 + E[r_1,9y])

  Simplified notation:
  10Y yield = average of expected 1Y rates over the next 10 years

  Implications:
  → UPWARD-SLOPING curve:  market expects short rates to RISE
  → FLAT curve:            market expects short rates to stay stable
  → INVERTED curve:        market expects short rates to FALL
    (the classic recession signal — CB will cut ahead)

  Testable prediction of PEH:
  "Forwards are unbiased predictors of future spot rates"
  → e.g., 1Y rate in 1 year (1Y1Y forward) should equal
    the expected 1-year rate in 1 year

  Reality: PEH is empirically violated
  → Forward rates consistently OVERPREDICT future rates
  → This residual = the term premium
```

### Liquidity Preference Theory (Keynes/Hicks)

Extends PEH by adding a **term premium** — investors demand extra compensation for bearing interest rate risk on longer-dated bonds:

```
  Long-term yield = Expected short-term rates + Term Premium

  r_10 = E[avg of future r_1 over 10 years] + TP_10

  Rationale:
  → Longer-dated bonds have greater price sensitivity (duration)
  → If rates rise unexpectedly, longer bonds suffer more
  → Investors require a RISK PREMIUM to hold long-dated bonds
  → This premium is the "liquidity premium" or "term premium"

  Implication:
  → Even if markets expect flat short rates forever,
    the curve will slope UPWARD (term premium > 0)
  → Most of the time, the term premium is POSITIVE (normal backwardation)
  → But term premium can go NEGATIVE (happened 2010–2020):
    → Massive QE pushed investors into long-term bonds
    → Safety/deflation demand suppressed term premiums to zero or below
```

### Market Segmentation Theory

```
  Different investors have PREFERRED HABITATS in specific tenors:
  → Insurance companies / pension funds: long-term bonds (liability matching)
  → Money market funds: short-term bills and notes
  → Commercial banks: medium-term (5–10Y)

  Supply and demand dynamics within each maturity segment
  drive yields at that point, relatively independently.

  Why it matters:
  → Central bank QE targeted at a specific maturity (e.g., 10Y)
    directly suppresses yields at that point
  → The supply of Treasury bonds at each maturity affects the
    "local" yield → term premium responds to debt issuance
```

---

## Term Premium Extraction: The ACM Model

The **Adrian-Crump-Moench (ACM)** model (New York Fed, 2013) is the most widely used framework for decomposing Treasury yields into:
1. **Expected short rate path** (what markets price for future policy)
2. **Term premium** (extra compensation for duration risk)

### Framework

```
  ACM is a 5-factor affine dynamic term structure model (DTSM):

  Inputs: Daily/monthly yield data for maturities 1Y through 10Y
  State variables: 5 principal components of the yield curve
  Estimation: Series of linear regressions (novel contribution vs.
               maximum likelihood, which is computationally intensive)

  Output decomposition:
  ────────────────────────────────────────────────────────────
  Observed 10Y yield = Expected short rate path + Term Premium

  Example (illustrative):
  US 10Y yield = 4.80%
  ACM Expected short rates component = 4.20%
  ACM Term premium = 0.60%

  Interpretation:
  → Markets price the Fed averaging 4.20% over the next 10 years
  → Investors demand an extra 0.60% for the risk of holding 10Y bonds
```

> Reference: Adrian, T., Crump, R., & Moench, E. (2013). *Pricing the Term Structure with Linear Regressions.* Journal of Financial Economics, 110(1), 110–138. NY Fed data: [newyorkfed.org](https://www.newyorkfed.org/research/data_indicators/term-premia-tabs)

### What Moves the Term Premium?

```
  TERM PREMIUM INCREASES WHEN:
  ┌──────────────────────────────────────────────────────────┐
  │ → Macroeconomic uncertainty rises (inflation uncertainty) │
  │ → Treasury supply increases (fiscal deficit expansion)    │
  │ → Fed balance sheet shrinks / QT accelerates             │
  │ → Safe haven demand for bonds FALLS (risk-on)            │
  │ → Inflation volatility increases                         │
  │ → Foreign demand for Treasuries weakens (China selling)  │
  └──────────────────────────────────────────────────────────┘

  TERM PREMIUM DECREASES / GOES NEGATIVE WHEN:
  ┌──────────────────────────────────────────────────────────┐
  │ → Fed QE (buying long-end Treasuries compresses yield)   │
  │ → Global demand for safe assets (European/Asian demand)  │
  │ → Deflationary environment (bonds become insurance)      │
  │ → Low macroeconomic uncertainty (Great Moderation era)   │
  └──────────────────────────────────────────────────────────┘

  Historical example:
  2023 "Treasury Tantrum":
  → US 10Y rose from 3.8% to 5.0% in months
  → Most of the move driven by TERM PREMIUM expansion
    (not a change in expected Fed path)
  → Driven by: large Treasury issuance, fiscal concerns,
    reduced foreign demand, QT
```

---

## Principal Component Analysis: Level, Slope, Curvature

**PCA** on yield curve changes reveals that three factors explain ~99% of all yield curve movements:

### PC1: Level (Parallel Shift)

```
  A uniform shift UP or DOWN in yields across all maturities.

  Factor loadings (approx. for US Treasury curve):
  2Y: +1, 5Y: +1, 10Y: +1, 30Y: +1  (roughly equal)

  Explained variance: ~88% of total curve movement

  Driven by:
  → Inflation expectations (RHS of Taylor Rule)
  → Fed policy path (all maturities re-price when Fed changes)
  → Risk-off/on (flight to quality → all yields fall)

  Trading implication:
  → A "level" trade: duration bet (long or short all bonds)
  → DV01 hedged at one maturity to be neutral to parallel shifts
```

### PC2: Slope (Twist)

```
  Short-end and long-end move in OPPOSITE directions.
  Short-end rises, long-end falls → FLATTENING
  Short-end falls, long-end rises → STEEPENING

  Factor loadings:
  2Y: −1, 5Y: −0.5, 10Y: 0, 30Y: +0.5  (approx.)

  Explained variance: ~9% of total curve movement

  Common measure: 2Y10Y spread (or 2Y30Y, 5Y30Y)

  Driven by:
  → Central bank hiking cycle → flattens (short-end dragged up)
  → Recession fears → steepening (flight to short safety, long sold)
  → Quantitative easing targeted at long-end → flattens long-end

  "Steepener" trade:
  Long 2Y / Short 10Y (or use 2Y10Y swap spread)
  → Benefits if curve steepens (2Y falls relative to 10Y)
  → Classic "recession recovery" trade or "CB cutting cycle" trade

  "Flattener" trade:
  Short 2Y / Long 10Y
  → Benefits if curve flattens (2Y rises relative to 10Y)
  → Classic "hiking cycle" trade
```

### PC3: Curvature (Butterfly)

```
  The middle of the curve (5Y) moves in OPPOSITE direction
  to the short-end (2Y) and long-end (30Y).

  "Positive curvature" (belly up):  2Y flat, 5Y up, 30Y flat
  "Negative curvature" (belly down): 2Y flat, 5Y down, 30Y flat

  Factor loadings:
  2Y: +1, 5Y: −2, 10Y: +1  (butterfly)

  Explained variance: ~2% of total curve movement

  Butterfly trade: Short 2Y + 2× Long 5Y + Short 10Y
  (or any duration-neutral "belly vs. wings" position)

  Driven by:
  → Supply/demand dynamics in specific tenors
  → Term premium differentials
  → Specific policy actions (e.g., Operation Twist: Fed sold
    short-term Treasuries, bought long-term → flattened curve
    while compressing belly relative to wings)
```

---

## Curve Shapes and Economic Signals

```
  NORMAL (Upward-sloping):
  →  Economy growing, inflation moderate
  → Short rates below long rates (positive term premium)

  FLAT:
  → Transition: either flattening from normal (hiking) or
    steepening from inverted (cutting)

  INVERTED (2Y > 10Y):
  → RECESSION SIGNAL (historically)
  → Every US recession since 1950 was preceded by inversion
  → 2Y10Y inverted: Aug 2019 (briefly), Mar 2022–present
  → Mechanism: market prices aggressive future rate CUTS
    → short-term rates priced lower in future → long yields below short yields

  HUMPED (Bull hump / Bear hump):
  → Middle tenor (e.g., 5Y) dislocated from wings
  → Often event-driven or supply-driven
  → Less common; typically temporary

  Yield curve inversion and recession lead times (historical):
  ─────────────────────────────────────────────────────────
  1989 inversion → 1990 recession (12-18 month lag)
  2000 inversion → 2001 recession (9 month lag)
  2006 inversion → 2008 recession (18-24 month lag)
  2019 inversion → 2020 recession (8 months, accelerated by COVID)
  2022 inversion → 2024/25 recession? (still pending as of 2025)
  ─────────────────────────────────────────────────────────
```

---

## Forward Rate Curve and Implied Path

```
  The forward rate curve shows the market-implied path of rates:

  From spot rates, derive 1Y forward rates at each tenor:
  f(t, t+1) = [(1+r_t+1)^(t+1) / (1+r_t)^t] − 1

  Example (US):
  1Y spot = 5.0%
  2Y spot = 4.6%
  1Y1Y forward = [(1.046)² / (1.050)] − 1 = 4.2%

  Interpretation: Market implies that in 1 year, the 1-year rate
  will be 4.2% — a cut from current 5.0%

  The forward curve is used to:
  → Price interest rate derivatives (swaps, caps, floors)
  → Assess whether current rate expectations are priced in
  → Identify relative value (where the curve is mispriced vs. ACM)
```

---

## Further Reading

- NY Fed: *Treasury Term Premia* (ACM model, daily data) — [newyorkfed.org](https://www.newyorkfed.org/research/data_indicators/term-premia-tabs)
- NY Fed Liberty Street: *Treasury Term Premia: 1961–Present* — [libertystreeteconomics.newyorkfed.org](https://libertystreeteconomics.newyorkfed.org/2014/05/treasury-term-premia-1961-present/)
- BIS Quarterly Review: *Term Premia: Models and Stylised Facts* — [bis.org](https://www.bis.org/publ/qtrpdf/r_qt1809h.pdf)
- Federal Reserve: *The Treasury Tantrum of 2023* — [federalreserve.gov](https://www.federalreserve.gov/econres/notes/feds-notes/the-treasury-tantrum-of-2023-20240903.html)
- *Interest Rate Risk Modeling* — Sanjay Nawalkha & Gloria Soto (Wiley, 2005)
