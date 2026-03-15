---
title: Commodity Curve Dynamics & Theory of Storage
description: Working's Theory of Storage, convenience yield, non-linear inventory relationships, roll yield mechanics, and the financialization of commodity curves.
sidebar:
  order: 2
---

The **shape of the commodity forward curve** encodes everything the market knows about physical supply, demand, and storage costs. Understanding how to read, decompose, and trade the curve is fundamental to commodity markets.

---

## Cost of Carry: The Foundational Framework

### The Basic Cost-of-Carry Model

For storable commodities, the forward price is theoretically bounded by the cost of carrying the physical commodity to a future date:

```
  F(t,T) = S(t) × e^[(r + s − c)(T−t)]

  Where:
  F(t,T) = forward price for delivery at T
  S(t)   = current spot price
  r      = risk-free rate (financing cost)
  s      = storage cost (% of spot per year)
  c      = convenience yield (% per year)
  (T−t)  = time to delivery in years

  Rearranging for convenience yield:
  c = r + s − [ln(F/S) / (T−t)]
  → Convenience yield is the residual that makes the equation hold
```

### Contango vs. Backwardation

```
  CONTANGO (F > S):
  Futures price ABOVE spot price
  → Convenience yield < carrying cost (r + s)
  → Typical when inventories are PLENTIFUL
  → Example: Natural gas in summer (full storage tanks)
  → Curve shape: upward sloping

  ┌────────────────────────────────────────────┐
  │ Price                                       │
  │          ╱──────────── (Contango)           │
  │        ╱                                   │
  │ Spot ──                                    │
  │       M1  M2  M3  M6  M12  Months forward  │
  └────────────────────────────────────────────┘

  BACKWARDATION (F < S):
  Futures price BELOW spot price
  → Convenience yield > carrying cost
  → Typical when inventories are TIGHT / supply disrupted
  → Example: Crude oil in a supply shock; refined products
  → Curve shape: downward sloping

  ┌────────────────────────────────────────────┐
  │ Price                                       │
  │ Spot ──╲                                   │
  │          ╲──────────── (Backwardation)      │
  │                                            │
  │       M1  M2  M3  M6  M12  Months forward  │
  └────────────────────────────────────────────┘
```

---

## Working's Theory of Storage

**Holbrook Working** (1949) formalized the relationship between inventory levels and the price spread between spot and futures — the cornerstone of modern commodity curve theory.

> Reference: Working, H. (1949). *The Theory of Price of Storage.* American Economic Review, 39(6), 1254–1262.

### Working's Curve: The Non-Linear Relationship

```
  Working's key insight: convenience yield is a NON-LINEAR
  function of inventory levels.

  Convenience yield (c)
       │
   High│ ╲
       │  ╲
       │   ╲
       │    ╲──────────────────────────── (approaches zero asymptotically)
   Low │
       └──────────────────────────────────
              Low          High    Inventory level

  Interpretation:
  → At LOW inventory:  convenience yield is HIGH (scarcity premium)
      → Market is in backwardation
      → Physical holders value the optionality of the commodity
      → "Convenience" = ability to meet unexpected demand surges
  → At HIGH inventory:  convenience yield approaches ZERO
      → Market tips into contango
      → Storage costs dominate; no scarcity premium
      → Curve shape = near-linear function of carrying cost
```

### Why Convenience Yield Exists

```
  Convenience yield represents the OPTION VALUE of holding physical inventory:

  1. Production smoothing option:
     → Refineries can run continuously vs. shutting down/restarting
     → Shutdown/restart costs are significant (cracking units, vessels)
     → Holding crude avoids these operational disruptions

  2. Demand surprise option:
     → Unexpected demand spikes can be met from inventory
     → Without inventory: must wait for next delivery → lost sales

  3. Supply disruption hedge:
     → Pipeline outage, hurricane, geopolitical shock
     → Physical stock on hand prevents force majeure losses

  Working's insight: these options have economic value that declines
  as inventory increases (more options are "deep in the money" and
  thus less marginal value from incremental units)
```

### Empirical Evidence: Working's Curve in Practice

```
  Crude Oil (WTI/Brent):
  → Very low PADD 2 inventory (Cushing hub) → backwardation
  → IEA SPR releases → contango (inventory surge)
  → The Working's relationship is strongest for crude vs. products

  Natural Gas (Henry Hub):
  → Below-average storage vs. 5-year range → backwardation spikes
  → Storage at/above 5-year average → contango steepens
  → Relationship tightest with EIA weekly storage reports

  Agricultural:
  → Old-crop vs. new-crop spread driven by inventory/production
  → Pre-harvest (scarce old crop): old-crop backwardation vs. new-crop
  → Post-harvest (abundant new crop): new-crop near flat or contango
```

---

## Roll Yield: The Economics of Rolling Futures

### Mechanics of Rolling

Commodity investors holding futures must **roll** their positions before expiry — selling the front-month contract and buying the next one. The economics of this process are determined by the curve shape:

```
  CONTANGO ROLL (costly):
  ─────────────────────────────────────────────
  Front-month (M1): $80/bbl
  Next-month  (M2): $82/bbl  (contango of $2)

  Investor sells M1 at $80, buys M2 at $82
  → Pays $2 per barrel at each roll
  → If done monthly: ~$24/year on $80 crude = 30% annual drag

  This is the "roll cost" or "negative carry" of contango.

  BACKWARDATION ROLL (beneficial):
  ─────────────────────────────────────────────
  Front-month (M1): $80/bbl
  Next-month  (M2): $78/bbl  (backwardation of $2)

  Investor sells M1 at $80, buys M2 at $78
  → Collects $2 per barrel at each roll
  → "Roll yield" or "positive carry" of backwardation
```

### Total Commodity Return Decomposition

```
  TOTAL RETURN = Spot Return + Roll Yield + Collateral Return

  Spot Return:    Change in spot price (what most people track)
  Roll Yield:     Gain/loss from rolling up or down the curve
  Collateral:     Return on T-bills posted as futures margin

  Example — WTI Crude Oil (2005–2009 example):
  Spot appreciation: +80%
  Roll yield:        −35%  (persistent contango era)
  Collateral return: +15%
  Total return:      +60%  (significant drag from roll)

  Example — Oil 2022 (backwardation):
  Spot appreciation: +40%
  Roll yield:        +12%  (persistent backwardation)
  Collateral return: +3%
  Total return:      +55%  (roll enhances returns)

  This is why commodity INDEX returns diverge significantly
  from spot price returns in trending curve environments.
```

---

## The Financialization of Commodity Markets

The entry of financial investors into commodity futures markets (particularly after 2004 with the popularization of commodity indices) created structural changes in how commodity curves behave.

### The GSCI Effect

```
  S&P Goldman Sachs Commodity Index (GSCI):
  → Passive index launched 1991; became popular post-2000
  → Strategy: hold long positions in front-month futures only
  → Roll mechanically on fixed schedule (5-business-day window each month)

  Financialization statistics:
  → Commodity futures open interest grew ~10x from 2004 to 2012
  → Index investors became largest holders of many commodity futures
  → GSCI energy weighting: ~70% (crude, gasoline, heating oil, gas)
```

### Impact on Curve Structure

```
  CONTANGO AMPLIFICATION:
  → As index investors grow, front-month selling pressure increases
  → During the 5-day roll window, massive selling of M1 / buying M2
  → Creates predictable contango steepening near roll dates
  → "GSCI roll" became a known phenomenon; hedge funds would
    pre-position short M1/long M2 to front-run the roll

  Academic evidence:
  → Tang & Xiong (2012): Commodity correlations rose post-financialization
  → Roll returns became more negative as index AUM grew
  → Singleton (2014): Index trader positions significantly predicted
    crude oil returns (price impact of financial flows)

  COUNTER-ARGUMENT (Irwin & Sanders, 2012):
  → Index traders do not predict futures returns
  → Price impacts are short-lived; fundamentals dominate
  → No robust evidence of persistent manipulation

  Current consensus:
  → Financial flows affect CALENDAR SPREADS more than outright prices
  → Roll periods show statistically reliable patterns
  → Long-term price discovery remains fundamentals-driven
```

---

## Calendar Spread Analysis

### Reading the Spread

```
  Calendar spreads (M1 vs. M2, or front-year vs. back-year) are
  the purest expression of inventory fundamentals:

  WTI Calendar Spread (Dec/Dec, 1-year):
  Dec 2024 − Dec 2025 > 0: BACKWARDATION (front above back)
  Dec 2024 − Dec 2025 < 0: CONTANGO (front below back)

  Key spreads watched:
  ─────────────────────────────────────────────────────────
  Crude oil:   WTI M1-M2, CL1-CL2 spread (daily signal)
               Dec/Dec 1-year spread (structural signal)
  Nat gas:     March/April (winter/summer peak)
               October/November (storage withdrawal onset)
  Corn:        July/December (old-crop/new-crop split)
  Wheat:       May/July, July/September (harvest transitions)
  ─────────────────────────────────────────────────────────

  Spread signals:
  → Spreads TIGHTEN (less contango / more backwardation): bullish
  → Spreads WIDEN (more contango / less backwardation): bearish
  → Rapid spread changes often precede spot price moves
```

### The Prompt vs. Deferred Spread

```
  PROMPT spread = near-month spread (M1-M2)
  → Reflects IMMEDIATE supply/demand tightness
  → Most sensitive to short-term supply disruptions

  DEFERRED spread = longer-dated (M6-M12, or Dec/Dec 2-year)
  → Reflects STRUCTURAL supply/demand balance
  → More influenced by long-run production and investment

  When prompt and deferred spreads diverge:
  → Prompt backwardation + deferred contango:
    "Temporary squeeze" — near-term tightness, medium-term balanced
  → Prompt contango + deferred backwardation:
    "Temporary glut" — near-term oversupply, medium-term tight

  This divergence pattern is common in oil markets during
  OPEC production decisions or refinery turnarounds.
```

---

## Further Reading

- Working, H. (1949). *The Theory of Price of Storage.* American Economic Review.
- Kaldor, N. (1939). *Speculation and Economic Stability.* Review of Economic Studies.
- Tang, K. & Xiong, W. (2012). *Index Investment and the Financialization of Commodities.* Financial Analysts Journal.
- Gorton, G. & Rouwenhorst, G. (2006). *Facts and Fantasies about Commodity Futures.* Financial Analysts Journal.
- *Trading Natural Gas* — Fletcher Sturm (PennWell, 1997) — calendar spread mechanics in gas markets
