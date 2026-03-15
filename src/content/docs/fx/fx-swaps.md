---
title: FX Swaps
description: Mechanics, pricing, and use cases of FX swap transactions — the backbone of FX funding markets.
sidebar:
  order: 4
---

An **FX swap** is a simultaneous agreement to buy (or sell) a currency at the spot rate on one date (**near leg**) and to sell (or buy) it back at the forward rate on a later date (**far leg**). It is essentially a **collateralised borrowing and lending** arrangement in two different currencies.

> FX swaps are the most traded FX instrument by volume — approximately 49% of all FX turnover (BIS, 2022).

---

## Structure

```
  ┌──────────────────────────────────────────────────────┐
  │                    FX SWAP                           │
  │                                                      │
  │  NEAR LEG (today, T+2)        FAR LEG (future date)  │
  │                                                      │
  │  Party A ─── pays USD ──►     Party A ◄── pays USD ──│
  │  Party A ◄── receives EUR ─── Party A ─── pays EUR ──│
  │                                                      │
  │  Rate: SPOT                   Rate: FORWARD          │
  └──────────────────────────────────────────────────────┘
```

**Key insight**: Only the **swap points** (the difference between spot and forward) are negotiated — not the absolute levels. The swap price IS the interest rate differential.

---

## Cashflow Example

> **Trade**: Bank A does a 3M EUR/USD FX swap — buys EUR / sells USD spot, sells EUR / buys USD 3M forward.

```
  Assumptions:
  EUR/USD Spot:    1.0850
  3M Forward Pts:  +42 pips
  3M Forward Rate: 1.0892
  Notional:        €10,000,000

  ─────────────────────────────────────────────────────────
  NEAR LEG (today, T+2):
    Bank A pays:     USD 10,850,000   (= €10m × 1.0850)
    Bank A receives: EUR 10,000,000

  FAR LEG (3 months later):
    Bank A pays:     EUR 10,000,000
    Bank A receives: USD 10,892,000   (= €10m × 1.0892)

  Net difference:
    USD received at far leg vs. near leg = +42,000 USD
    This $42,000 equals the interest rate differential
    (5.30% USD - 3.75% EUR) for 3 months on €10m
  ─────────────────────────────────────────────────────────
```

---

## Why FX Swaps ≠ FX Risk

An FX swap does **not** create net FX exposure (on a mark-to-market basis at inception), because:
- The two legs offset each other in currency terms
- The net exposure is to **interest rate differentials**, not spot rate direction

This is why FX swaps are primarily a **liquidity management** and **funding** tool, not a directional FX trade.

---

## Uses of FX Swaps

### 1. Synthetic Funding / Balance Sheet Management (Banks)
Banks use FX swaps to fund themselves in one currency using surplus in another, without building long-term balance sheet exposures.

```
  A European bank has excess EUR but needs USD:

  Today:    Sell EUR / Buy USD at spot
  In 1 week: Buy EUR / Sell USD at forward

  → Effectively borrowed USD for 1 week, using EUR as collateral
```

### 2. Rolling a Forward Hedge (Corporates)
When a forward hedge matures but the underlying exposure continues, a corporate uses a **tom-next (T/N)** or monthly FX swap to roll the hedge forward without closing and re-opening.

### 3. Funding USD Assets (Foreign Banks)
Japanese banks holding USD assets fund those positions by swapping JPY into USD via FX swaps. This is the **dollar funding trade** that drives enormous demand for USD in the FX swap market.

### 4. Central Bank Dollar Swap Lines
During crises (2008 GFC, COVID-19 2020), the Federal Reserve opened **swap lines** with other central banks (ECB, BoJ, BoE, SNB, BoC) to supply dollar liquidity globally, preventing USD funding dislocations.

---

## FX Swap vs. FX Forward

| Feature | FX Swap | FX Forward Outright |
|---|---|---|
| Number of legs | 2 (near + far) | 1 (far only) |
| Net FX exposure | Near-zero (hedged legs offset) | Full notional |
| Primary purpose | Funding / liquidity management | Hedging / speculation |
| Pricing input | Swap points (rate differential) | Forward rate (spot + swap points) |
| Typical users | Banks, central banks, corporates | Corporates, funds |

---

## Tenor Conventions

The most common short-dated FX swaps:

| Label | Meaning |
|---|---|
| **O/N** | Overnight: today → tomorrow |
| **T/N** | Tom-next: tomorrow → T+2 (bridges to spot) |
| **S/N** | Spot-next: T+2 → T+3 |
| **S/W** | Spot-week: T+2 → T+9 |
| **1M, 3M, 6M, 1Y** | Standard month-end tenors from spot |

**T/N swaps** are critical for rolling positions that need to be kept at spot value date — used daily by banks and trading desks to manage settlement.

---

## FX Swap Pricing in Detail

The **swap points** are directly derived from the interest rate differential:

```
  Swap Points = S × (r_d − r_f) × T

  Approximation for small rates:
  Swap Points ≈ S × (r_d − r_f) × T

  Example (EUR/USD, 3M):
  = 1.0850 × (0.0530 − 0.0375) × 0.25
  = 1.0850 × 0.00388
  = 0.00421 ≈ 42 pips ✓
```

---

## Implied Repo Rate

You can **back out an implied interest rate** from FX swap pricing — useful for detecting arbitrage or cross-market dislocations:

```
  Implied USD rate from EUR/USD FX swap:

  r_d (implied) = [(F/S) × (1 + r_f × T) − 1] / T

  If the implied rate ≠ actual USD SOFR rate, there is
  a cross-currency basis (see Cross-Currency Swaps page)
```

---

## Risk in FX Swaps

| Risk Type | Description |
|---|---|
| **Counterparty risk** | Failure of the other party to deliver on a leg (small vs. a pure forward since only swap points are at risk on MTM basis) |
| **Settlement risk** | Asymmetric delivery (mitigated by CLS) |
| **Rollover risk** | Unable to roll a short-dated swap at maturity (funding stress) |
| **Basis risk** | Implied swap rate diverges from cash market (cross-currency basis) |

---

## Market Stress Indicator: FX Swap Basis

In periods of USD scarcity (2008 GFC, March 2020 COVID crash), the cost of synthetically borrowing USD via EUR/USD FX swaps **exploded above** the direct USD funding rate, creating a massive cross-currency basis:

```
  Normal:   EUR/USD 3M FX swap cost ≈ USD SOFR ✓
  Stressed: EUR/USD 3M FX swap cost >> USD SOFR
            (e.g., 200–300bp premium during COVID March 2020)

  This signals USD funding stress in global markets
```

---

## Further Reading

- BIS: *The basic mechanics of FX swaps and cross-currency basis swaps* — [bis.org/publ/qtrpdf/r_qt0803z.htm](https://www.bis.org/publ/qtrpdf/r_qt0803z.htm)
- BIS Triennial Survey FX turnover data — [bis.org](https://www.bis.org/statistics/rpfx22.htm)
- *Foreign Exchange: A Practical Guide to the FX Markets* — Tim Weithers (Wiley)
