---
title: Refining & Conversion Margins
description: Crack spreads (3-2-1, 5-3-2), spark spreads, dark spreads, clean dark spreads, and the economics of fuel switching between energy sources.
sidebar:
  order: 4
---

**Conversion margins** measure the profitability of transforming one energy commodity into another — crude into products, gas into power, coal into power. They are simultaneously commercial KPIs for energy producers and tradeable derivatives in their own right.

---

## Crack Spreads: Refining Economics

A **crack spread** is the difference between the price of crude oil inputs and the refined petroleum products output — measuring the gross refining margin.

### The 3-2-1 Crack Spread

The most widely traded crack spread approximates a simplified refinery that processes **3 barrels of crude** into **2 barrels of gasoline** and **1 barrel of heating oil (or distillate)**:

```
  3-2-1 Crack Spread:
  ─────────────────────────────────────────────────────────
  OUTPUTS:  2 barrels RBOB Gasoline + 1 barrel Heating Oil
  INPUT:    3 barrels WTI Crude Oil

  Formula:
  Crack = [(2 × RBOB) + (1 × HO) − (3 × WTI)] / 3

  All prices in $/barrel (RBOB and HO quoted in $/gallon → × 42)

  Example:
  WTI:  $80.00/bbl
  RBOB: $2.50/gallon × 42 = $105.00/bbl
  HO:   $2.80/gallon × 42 = $117.60/bbl

  3-2-1 Crack = [(2 × $105) + (1 × $117.60) − (3 × $80)] / 3
              = [$210 + $117.60 − $240] / 3
              = $87.60 / 3
              = $29.20/bbl

  → A refinery earns approximately $29.20/bbl over crude costs
  → This is the GROSS margin; operating costs are on top
  → Typical refinery opex: $3–8/bbl (energy, labour, maintenance)
  → Net margin ≈ $21–26/bbl in this example
```

### The 5-3-2 Crack Spread

A variation used for refineries with higher distillate yields:

```
  5-3-2 Crack Spread:
  INPUT:    5 barrels crude
  OUTPUTS:  3 barrels gasoline + 2 barrels distillate

  = [(3 × Gasoline) + (2 × Distillate) − (5 × Crude)] / 5

  Why 5-3-2 vs 3-2-1?
  → Complex refineries (with cokers, hydrocrackers) achieve higher
    distillate yield (jet, diesel, heating oil)
  → European refineries often use 1-1 crack (1:1 crude to diesel)
    because European demand is more diesel-heavy than gasoline
  → Seasonal: winter = higher distillate demand → 5-3-2 more relevant
```

### Seasonal Crack Spread Dynamics

```
  GASOLINE CRACK SPREADS:
  → Peak demand: May–September (US driving season)
  → Seasonal pre-build: refinery maintenance February–March
    → Supply falls → gasoline cracks spike in spring
  → RBOB crack: typically highest April–May

  DISTILLATE (HEATING OIL / DIESEL / JET) CRACK SPREADS:
  → Peak demand: October–February (northern hemisphere winter heating)
  → Also high: summer jet fuel demand
  → Distillate crack spikes: cold snaps, supply disruptions

  2022 Diesel Crack Spike:
  → European diesel supply disrupted (Russia sanctions)
  → Diesel crack spread reached $60–90/bbl (vs. historical $15–25/bbl)
  → Refineries ran at max capacity; new refinery capacity lagged
  → Structural shortage of complex distillate-heavy refinery capacity

  Typical range (2015–2022 average):
  3-2-1 crack: $12–20/bbl (average)
  Post-2022:  $25–40/bbl (structural margin expansion)
```

### Trading Crack Spreads

```
  NYMEX Crack Spread Futures:
  → CME offers "crack spread" combinations as single instruments
  → Or: leg it manually (short crude futures, long product futures)

  Long crack = long products, short crude
  → Benefits when refining margins EXPAND
  → Classic trade: ahead of driving season (buy gasoline crack)
  → Or: ahead of winter (buy heating oil crack)

  Short crack = short products, long crude
  → Benefits when refining margins CONTRACT
  → Typical when crude input costs rise faster than product prices
  → Or: refinery capacity returns after maintenance

  Factors driving crack spread changes:
  ┌─────────────────────────────────────────────────────────┐
  │ Bullish crack spreads (margins expand):                  │
  │ → Refinery outages (hurricane season; maintenance)       │
  │ → Seasonal demand pickup                                 │
  │ → Crude grade differentials favouring complex refiners   │
  │ → Supply disruptions (war, sanctions)                    │
  │                                                         │
  │ Bearish crack spreads (margins contract):                │
  │ → New refinery capacity comes online                     │
  │ → Demand weakness (recession, high pump prices)          │
  │ → Crude price spikes faster than product repricing       │
  │ → Mild winter (distillate demand disappoints)            │
  └─────────────────────────────────────────────────────────┘
```

---

## Spark Spreads: Gas-to-Power Economics

The **spark spread** measures the profitability of burning natural gas to generate electricity:

```
  Spark Spread = Electricity Price − (Gas Price × Heat Rate)

  Where:
  Electricity Price = $/MWh (power market)
  Gas Price         = $/MMBtu (natural gas)
  Heat Rate         = MMBtu of gas needed per MWh of electricity
                      (efficiency measure; typical CCGT: 7–8 MMBtu/MWh)

  Example (UK NBP/N2EX market):
  Gas price:        100 p/therm = ~$13.50/MMBtu (converting units)
  Power price:      £120/MWh
  Heat rate:        7.5 MMBtu/MWh

  Spark spread = £120 − (£3.93 × 7.5)  [converting gas to £/MMBtu]
               = £120 − £29.48
               = £90.52/MWh  ← EXTREMELY profitable (2022 energy crisis)

  Normal range (UK): £5–20/MWh
  2022 peak:         £80–150/MWh
```

### Clean Spark Spread

The **clean spark spread** accounts for the carbon cost under emissions trading schemes (EU ETS, UK ETS):

```
  Clean Spark Spread = Spark Spread − (Carbon Intensity × Carbon Price)

  Carbon intensity of gas-fired power: ~0.40 tCO2/MWh (CCGT)

  Example:
  Spark spread:     £90/MWh
  Carbon price:     £50/tCO2  (EU ETS)
  Carbon cost:      0.40 × £50 = £20/MWh

  Clean Spark Spread = £90 − £20 = £70/MWh

  Why it matters:
  → Post-EU ETS, carbon cost is now a significant input
  → A clean spark spread >0 means gas generation is profitable
    AFTER paying for emissions
  → Clean spark spread <0 means gas plants run at a loss and may
    choose not to generate ("economic shutdown")
```

---

## Dark Spreads: Coal-to-Power Economics

The **dark spread** measures profitability of burning coal to generate electricity:

```
  Dark Spread = Electricity Price − (Coal Price × Heat Rate)

  Coal Heat Rate: typically 9–10 MMBtu/MWh (less efficient than gas)
  → Coal plants are less thermally efficient than modern CCGT

  Example:
  Coal price:   $150/tonne
  Heat rate:    9.5 MMBtu/MWh
  Coal per MWh: $150/tonne ÷ 26.1 MMBtu/tonne × 9.5 = $54.6/MWh
  Power price:  $80/MWh

  Dark spread = $80 − $54.6 = $25.4/MWh

  Clean Dark Spread:
  Carbon intensity of coal: ~0.95 tCO2/MWh (much higher than gas)

  Clean Dark Spread = Dark Spread − (0.95 × Carbon Price)

  At Carbon Price = $50/tCO2:
  Clean Dark Spread = $25.4 − $47.5 = −$22.1/MWh  ← LOSS
  → Coal-fired power is uneconomic when carbon prices are high
```

---

## Fuel Switching and the Spark-Dark Spread Relationship

The **spark-dark spread comparison** drives fuel switching decisions:

```
  FUEL SWITCHING THRESHOLD:

  Gas and coal both generate electricity:
  → If clean spark spread > clean dark spread: GAS PREFERRED
  → If clean dark spread > clean spark spread: COAL PREFERRED

  The switching point is reached when:
  Clean Spark = Clean Dark

  Gas price at switching = (Power price − Coal cost − Carbon differential)
                           / Gas heat rate

  In practice:
  → European gas/coal switching was a major market dynamic 2021–2022
  → High gas prices → coal switched on (coal dark spread > spark spread)
  → But high carbon prices partially offset coal advantage
  → Net result: complex interplay of all three markets

  Gas-to-coal switching analytics:
  → TTF gas price determines European power prices in gas-marginal hours
  → API2 coal price determines switching threshold
  → EUA (EU Allowance) carbon price is the tiebreaker

  This three-way relationship means:
  → Gas price rises → power price rises (gas-marginal when expensive)
  → But coal becomes more attractive IF carbon doesn't offset
  → Natural gas is more carbon-efficient, so at carbon prices >$50,
    gas retains the advantage even at higher gas prices
```

---

## The Refinery Margin and Crude Quality Premium

Different crude grades yield different product slates, creating quality differentials:

```
  CRUDE QUALITY FACTORS:
  ─────────────────────────────────────────────────────────
  API gravity (°API):
  → Higher API = lighter crude = more gasoline/naphtha yield
  → Lower API = heavier crude = more fuel oil yield

  Sulfur content:
  → "Sweet" (<0.5% sulfur): WTI, Brent, Bonny Light
  → "Sour" (>0.5% sulfur): Saudi Arab Light/Heavy, Dubai, Ural

  Yield comparison (approximate):
  ┌────────────────────────────────────────────────────────┐
  │ Product        Light Sweet (%)  Heavy Sour (%)         │
  │ LPG/Naphtha    8%               5%                     │
  │ Gasoline       22%              17%                     │
  │ Jet/Kerosene   10%              9%                      │
  │ Diesel/HO      30%              22%                     │
  │ Fuel Oil       15%              30%                     │
  │ Residue/Other  15%              17%                     │
  └────────────────────────────────────────────────────────┘

  → Light sweet crude yields more high-value products (gasoline, jet)
  → Heavy sour crude yields more low-value fuel oil
  → Simple refineries (no conversion units): prefer light sweet
  → Complex refineries (cokers, hydrocrackers): can profitably run heavy sour
    and convert fuel oil to distillates → earn the "complexity premium"

  Complexity premium:
  When crack spreads are wide, complex refineries earn more:
  → Difference between light sweet and heavy sour crude =
    "crude quality differential" (varies $5–20/bbl)
  → Nelson Complexity Index (NCI): measures refinery upgrade level
    → NCI of 3–5: simple distillation only
    → NCI of 10+: full conversion (coking, hydrocracking)
```

---

## Further Reading

- CME Group: *Crude Oil and Petroleum Products Crack Spread Handbook* — cmegroup.com
- EIA: *What Drives Crack Spreads* — eia.gov
- *An Introduction to Energy Markets* — Elsevier (various authors)
- ICIS: *European Power Market Spark and Dark Spread Analysis*
- Oxford Energy Institute: *Natural Gas and Electricity Market Interactions*
- *Energy Trading and Investing* — Davis W. Edwards (McGraw-Hill, 2009)
