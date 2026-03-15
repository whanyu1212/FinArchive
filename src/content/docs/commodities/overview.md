---
title: Commodities Overview
description: Commodity markets, futures curve structure, contango, backwardation, and macro drivers for key commodity classes.
sidebar:
  order: 1
---

**Commodities** are raw materials or primary agricultural products that can be bought and sold. Unlike financial instruments, they have **physical delivery** as a baseline, which fundamentally shapes their pricing dynamics. The commodity markets bridge the physical and financial worlds — oil is priced by tanker flows as much as by fund positioning.

---

## Commodity Classification

```
  ┌──────────────────────────────────────────────────────────────┐
  │                      COMMODITIES                             │
  │                                                              │
  │  ENERGY             METALS              AGRICULTURE          │
  │  ├─ Crude Oil (WTI, │  ├─ Precious       ├─ Grains           │
  │  │  Brent)          │  │  (Gold, Silver,  │  (Wheat, Corn,    │
  │  ├─ Natural Gas     │  │  Platinum)       │  Soybeans)        │
  │  ├─ LNG             │  ├─ Base/Industrial │  ├─ Softs          │
  │  ├─ Coal            │  │  (Copper, Zinc,  │  │  (Coffee, Sugar,│
  │  └─ Refined Products│  │  Aluminium,      │  │  Cotton)        │
  │     (Gasoline,      │  │  Nickel)         │  └─ Livestock      │
  │      Diesel, Jet    │  └─ Rare Earths     │     (Cattle, Hogs) │
  │      fuel)          │                     │                   │
  └──────────────────────────────────────────────────────────────┘
```

---

## Spot vs. Futures Markets

| Feature | Spot Market | Futures Market |
|---|---|---|
| Settlement | Immediate (varies by commodity) | Standardised future date |
| Delivery | Physical (usually) | Physical or cash-settled |
| Price | Immediate supply/demand | Expectations + cost of carry |
| Participants | Producers, consumers, traders | Above + speculators, hedgers |
| Venue | OTC, physical bilateral | Exchange (CME, ICE, LME) |

---

## Cost of Carry and Futures Pricing

For financial assets, the futures price is simply spot + financing cost. For physical commodities, **storage and convenience add complexity**:

```
  F = S × e^(r + u − y)T

  Where:
  F = Futures price
  S = Spot price
  r = Risk-free rate (financing cost)
  u = Storage cost (annualised, as % of S)
  y = Convenience yield (benefit of holding physical)
  T = Time to maturity

  If y > r + u:    F < S   → Backwardation
  If y < r + u:    F > S   → Contango
```

---

## Contango vs. Backwardation

The **shape of the futures curve** tells you about current supply/demand dynamics.

### Contango (Normal Market)

```
  Futures prices HIGHER than spot

  Price
    │                              ╱
    │                         ╱───╱
    │                    ╱───╱
    │               ╱───╱
    │ Spot ────────╱
    │
    └─────────────────────────────── Time to delivery
      Spot   1M   3M   6M   12M   24M

  Causes:
  → High storage costs (oil, natural gas)
  → Abundant near-term supply
  → Normal for energy markets when supply is sufficient

  Roll cost for long futures holders:
  → Must sell expiring (cheaper) contract, buy next (more expensive) month
  → Generates NEGATIVE roll yield → ETF investors lose to roll
```

### Backwardation (Inverted Market)

```
  Futures prices LOWER than spot

  Price
    │ Spot ────────╲
    │               ╲───╲
    │                    ╲───╲
    │                         ╲───╲
    │                              ╲
    └─────────────────────────────── Time to delivery
      Spot   1M   3M   6M   12M   24M

  Causes:
  → Supply shortage / geopolitical disruption
  → High convenience yield (refiners NEED oil NOW)
  → Seasonal demand peaks (natural gas in winter)

  Roll benefit for long futures holders:
  → Sell expiring (more expensive) contract, buy next (cheaper) month
  → Generates POSITIVE roll yield
```

### Classic Example: 2020 Oil Contango

```
  April 20, 2020 (COVID demand collapse):
  WTI May futures:    −$37.63/barrel (negative!)
  WTI June futures:   +$20.75/barrel
  WTI December 2020:  +$32.00/barrel

  Super-contango: storage was completely full → traders paid
  to get rid of oil → extreme cost of carry
```

---

## Convenience Yield

The **convenience yield** is the implied benefit of physically holding a commodity versus holding a futures contract:

```
  High convenience yield situations:
  ─────────────────────────────────
  → Refinery needs crude oil NOW to keep operating
    (cannot wait for futures delivery — operational necessity)
  → Inventory is low → premium for immediate availability
  → Supply disruption risk (hurricanes, pipeline outages)

  Convenience yield is inversely related to inventory:
  ┌─────────────────────────────────────────────────────┐
  │  Inventory HIGH → convenience yield LOW             │
  │  (plenty of supply, no urgency to hold physical)    │
  │                                                     │
  │  Inventory LOW → convenience yield HIGH             │
  │  (scarcity premium, prefer to hold physical now)    │
  └─────────────────────────────────────────────────────┘
```

---

## Key Commodity Benchmarks

### Energy

| Benchmark | Region | Exchange | Specification |
|---|---|---|---|
| **WTI (NYMEX CL)** | North America | CME/NYMEX | Light sweet crude, Cushing OK delivery |
| **Brent (ICE)** | Global / North Sea | ICE | North Sea crude, cash settled |
| **TTF** | European gas | ICE | Dutch TTF natural gas hub |
| **Henry Hub** | US natural gas | CME | Louisiana delivery point |
| **JKM** | Asian LNG | Platts | Japan-Korea Marker, LNG spot |

**Brent-WTI Spread**: Reflects US vs. global crude differentials. When US pipelines are full (Cushing congestion), WTI trades at a **discount** to Brent.

### Metals

| Benchmark | Exchange | Settlement |
|---|---|---|
| **Gold (XAU/USD)** | COMEX / OTC LBMA | Physical or cash; LBMA fix at 10:30 & 15:00 London |
| **Silver (XAG/USD)** | COMEX / LBMA | Physical or cash |
| **Copper (HG)** | COMEX / LME | Physical; LME 3M contract most active |
| **Aluminium** | LME | Physical warrant delivery |
| **Nickel** | LME | Famous for March 2022 short squeeze (+250% in 2 days) |

### Agriculture

| Benchmark | Exchange | Units |
|---|---|---|
| **Corn (C)** | CBOT (CME) | Cents per bushel |
| **Wheat (W)** | CBOT (CME) | Cents per bushel |
| **Soybeans (S)** | CBOT (CME) | Cents per bushel |
| **Sugar No. 11** | ICE | Cents per pound |
| **Coffee C** | ICE | Cents per pound |

---

## Macro Drivers by Commodity Class

### Energy (Crude Oil)

```
  Supply drivers:
  ┌──────────────────────────────────────────────────────────┐
  │ OPEC+ production decisions (Saudi Arabia swing producer) │
  │ US shale rig count (Baker Hughes weekly data)            │
  │ Geopolitical disruptions (Middle East, Russia)           │
  │ US Strategic Petroleum Reserve (SPR) releases            │
  └──────────────────────────────────────────────────────────┘

  Demand drivers:
  ┌──────────────────────────────────────────────────────────┐
  │ Global GDP growth (especially China — world's top        │
  │ oil importer)                                            │
  │ US weekly EIA inventory data                             │
  │ Seasonal refinery demand (driving season, winter)        │
  │ Energy transition (structural headwind long term)        │
  └──────────────────────────────────────────────────────────┘

  FX linkage:
  Oil priced in USD → USD strength = negative headwind for oil
  Oil exporters (CAD, NOK, RUB) = commodity currencies
```

### Gold

```
  Gold as asset:
  ┌──────────────────────────────────────────────────────────┐
  │ Real interest rates:  KEY DRIVER                         │
  │   Real rate = Nominal rate − Expected inflation          │
  │   High real rates → opportunity cost of gold rises       │
  │                   → gold tends to FALL                   │
  │   Low / negative real rates → gold rallies               │
  │                                                          │
  │ USD index (DXY): Gold priced in USD → inverse typically  │
  │ Inflation:        Gold as inflation hedge (debated)      │
  │ Risk-off:         Safe haven demand spikes in crises     │
  │ Central bank buying: Structural long-term support        │
  │   (China, India, Turkey buying reserves since 2022)      │
  └──────────────────────────────────────────────────────────┘

  Key relationship:
  Gold (USD) ≈ inverse of US 10Y TIPS yield
  (Real yield proxy — most reliable driver over medium term)
```

### Base Metals (Copper)

```
  Copper = "Dr. Copper" (often called a barometer of global economy)

  Key drivers:
  ┌──────────────────────────────────────────────────────────┐
  │ China PMI / industrial activity (China = 50%+ of demand) │
  │ Global manufacturing cycle (PMI surveys)                 │
  │ Energy transition demand (EVs, wind/solar use copper)    │
  │ LME inventory levels (visible supply signal)             │
  │ Mining supply (Chile, Peru — subject to labour strikes)  │
  └──────────────────────────────────────────────────────────┘
```

---

## Commodity FX Relationships

Certain currencies are highly correlated with specific commodity prices:

| Currency | Key Commodity | Relationship |
|---|---|---|
| **CAD** (Canadian dollar) | WTI Crude Oil | Positive: oil up → CAD strengthens |
| **NOK** (Norwegian krone) | Brent Crude Oil | Positive: oil up → NOK strengthens |
| **AUD** (Australian dollar) | Iron ore, Copper | Positive: metals up → AUD strengthens |
| **NZD** (New Zealand dollar) | Dairy, agriculture | Positive: dairy prices → NZD |
| **CLP** (Chilean peso) | Copper | Very high positive correlation |
| **RUB** (Russian ruble) | Oil, Natural Gas | Positive (disrupted post-sanctions 2022) |
| **ZAR** (South African rand) | Gold, Platinum | Positive, but EM risk premium dominates |

---

## Commodity Derivatives

| Instrument | Description | Common Exchange |
|---|---|---|
| **Futures** | Standardised forward contracts | CME, ICE, LME |
| **Swaps** | OTC fixed-for-floating price swaps | OTC bilateral or CCP cleared |
| **Options** | Calls/puts on futures prices | CME options, OTC |
| **Spreads** | Calendar spreads, crack spreads, spark spreads | CME, ICE |
| **CFDs** | Contracts for Difference on commodity prices | Retail |

### Crack Spread (Refining Margin)

The **crack spread** measures the profitability of refining crude oil into products:

```
  3-2-1 Crack Spread = (2 × Gasoline + 1 × Heating Oil − 3 × Crude) / 3

  Example:
  Crude (WTI):     $75/bbl
  Gasoline:        $90/bbl
  Heating oil:     $85/bbl

  Crack = (2×90 + 1×85 − 3×75) / 3 = (180 + 85 − 225) / 3 = $13.33/bbl

  → Refiners hedge this to lock in processing margins
```

---

## Seasonal Patterns

```
  ENERGY:
  Jan–Mar:  Natural gas spikes (heating demand, drawdown risk)
  May–Aug:  Gasoline demand (US driving season)
  Oct–Nov:  Diesel/heating oil builds ahead of winter

  AGRICULTURE:
  Crop cycles dominate:
  Mar–May:  Planting weather uncertainty → grain vol rises
  Jun–Aug:  Growing season weather premium
  Sep–Nov:  Harvest → prices typically ease
  Dec–Feb:  Southern hemisphere (Brazil/Argentina soy) planting

  METALS:
  Jan–Mar:  Chinese New Year → pre-holiday buying then lull
  Sep–Oct:  Post-holiday Chinese demand recovery
```

---

## Further Reading

- CME Group: *Contango and Backwardation* — [cmegroup.com](https://www.cmegroup.com/education/courses/introduction-to-ferrous-metals/what-is-contango-and-backwardation)
- NBER: *The Fundamentals of Commodity Futures Returns* — [nber.org](https://www.nber.org/system/files/working_papers/w13249/w13249.pdf)
- Schwab: *Contango and Backwardation Explained* — [schwab.com](https://www.schwab.com/learn/story/contango-and-backwardation-explained)
- *Trading Commodities and Financial Futures* — George Kleinman (FT Press)
- *The Economics of Commodity Markets* — Julien Chevallier & Florian Ielpo
