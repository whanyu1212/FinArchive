---
title: Interest Rates & Carry
description: How interest rate differentials drive FX, the carry trade, and central bank policy transmission into currency markets.
sidebar:
  order: 2
---

**Interest rate differentials** are the single most important mechanical driver of FX markets over medium horizons. They determine forward rates (via CIP), drive capital flows (carry trade), and transmit central bank policy into currency valuations.

---

## Interest Rate Differential (IRD)

The **interest rate differential** between two countries is the difference between their benchmark interest rates (policy rates or market rates such as overnight rates, 2Y yields, etc.):

$$
\text{IRD} = \text{Domestic Rate} - \text{Foreign Rate}
$$

**Example:**
*   **US Fed Funds rate:** 5.25%
*   **ECB deposit rate:** 4.00%
*   **IRD (USD−EUR):** $+1.25\%$

→ **USD** pays 1.25% more per year than EUR.
→ **USD** is the "higher-yielding" currency.
→ **Forward pricing:** USD trades at forward DISCOUNT vs. EUR (CIP).
→ **Carry trade logic:** borrow EUR, invest in USD.

---

## From Policy Rate to FX: The Transmission Chain

```mermaid
graph TD
    A[CB policy decision] --> B[Money market rates (SOFR, €STR, SONIA)]
    B --> C[Short-term government bond yields (2Y, 3Y)]
    C --> D[FX forward rates (CIP pricing)]
    C --> E[Carry trade attractiveness]
    E --> F[Capital flows (into higher-yielding currency)]
    F --> G[Currency spot rate adjusts]

    classDef cb fill:#e1f5fe,stroke:#333,stroke-width:2px;
    classDef market fill:#fff3e0,stroke:#333,stroke-width:1px;
    classDef fx fill:#f3e5f5,stroke:#333,stroke-width:1px;

    class A cb;
    class B,C market;
    class D,E,F,G fx;
```

---

## Nominal vs. Real Interest Rates

For longer-term FX analysis, **real interest rates** (adjusted for inflation) matter more than nominal rates:

$$
\text{Real rate} = \text{Nominal rate} - \text{Expected inflation}
$$

:::note[Real Rate Examples]
**Example A: Country with high nominal but high inflation**
*   Nominal rate: 10.0%
*   Inflation: 9.5%
*   **Real rate: +0.5%** → LOW real rate, weak currency pull.

**Example B: Country with moderate nominal but low inflation**
*   Nominal rate: 5.0%
*   Inflation: 1.5%
*   **Real rate: +3.5%** → HIGH real rate, strong currency pull.
:::

**US 2022 example:**
*   Fed hiked to 5.25% but inflation ran at 8%+ initially.
*   Real rates were deeply negative, yet the USD still strengthened because the **rate hike trajectory** and narrative mattered more than current real rates.


---

## The Carry Trade

The **carry trade** is one of the most well-known FX strategies: borrow in a low-interest-rate currency (the **funding currency**) and invest in a high-interest-rate currency (the **target currency**), pocketing the interest rate differential.

```
  Classic carry trade (pre-2008):

  Funding currency:  JPY (0.25% rate)
  Target currency:   AUD (6.75% rate)
  Carry per annum:   6.50%

  Trade mechanics:
  1. Borrow JPY at 0.25% (e.g. ¥1 billion = ~$10m at USD/JPY 100)
  2. Convert JPY → AUD at spot
  3. Invest in AUD at 6.75% (e.g. AUD government bonds)
  4. At end of year: receive AUD at 6.75%, repay JPY at 0.25%
  5. Net carry: 6.50% — BEFORE FX move adjustment

  Profit condition: AUD must NOT depreciate by more than the carry
  (If AUD falls > 6.50% vs. JPY, carry profit is wiped out)
```

### Uncovered Interest Parity (UIP) vs. Reality

Theory (UIP) says:
```
  Expected depreciation = Interest rate differential
  → High-yield currency should depreciate to eliminate carry

  Reality (empirically proven violation of UIP):
  High-yield currencies TEND TO APPRECIATE (or remain flat)
  over short-to-medium horizons

  This "forward premium puzzle" or "UIP violation" is why
  carry trading is persistently profitable on average
```

### Carry Trade Risk Profile

```
  Carry returns:
  ────────────────────────────────────────
       │█████                 █████████
  P&L  │█████                 █████████
       │█████                 █████████
    0 ─┼─────────────────────────────────
       │         █████████
       │         █████████ (crash)
       │         █████████
  ────────────────────────────────────────
      Quiet periods  Crisis  Recovery

  Carry trade profile:
  → "Picking up nickels in front of a steamroller"
  → Small, consistent gains in quiet markets
  → Violent, sudden losses during risk-off episodes (2008, 2020)
  → Losses concentrated and correlated with equity crashes
```

---

## The Yield Curve and FX

The **shape of the yield curve** contains information about future rate expectations:

```
  2Y–10Y spread:
  ┌──────────────────────────────────────────────────────────┐
  │ Steep curve (10Y >> 2Y):   Growth expectations strong   │
  │                            → Positive for currency      │
  │                                                         │
  │ Flat curve:                 Uncertainty; policy in flux │
  │                                                         │
  │ Inverted curve (2Y > 10Y): Recession signal             │
  │   → CB likely to cut → may WEAKEN currency long-term    │
  │   → But initial reaction can be USD-positive (hawkish   │
  │     hikes caused inversion → policy credibility premia) │
  └──────────────────────────────────────────────────────────┘

  FX pairs to watch vs. yield spreads:
  → USD/JPY vs. US 10Y − Japan 10Y spread (very high correlation)
  → EUR/USD vs. Germany 2Y − US 2Y spread
  → AUD/USD vs. Australia 2Y − US 2Y spread
```

---

## 2Y Rate Differentials: The Most Watched FX Signal

Among all rate tenors, the **2-year yield differential** is the most powerful short-term FX predictor, because it best captures **near-term central bank expectations**:

```
  USD/JPY and US-Japan 2Y Spread:

  2021–2022:
  US 2Y yield:    0.25% → 4.50%
  Japan 2Y yield: 0.00% (BoJ YCC — pinned)
  Spread:         0.25% → 4.50% (+425bps)
  USD/JPY:        ~110 → ~152 (+38%)

  Nearly perfect correlation: as the spread widened (Fed hikes while
  BoJ stood pat), USD/JPY moved almost in lockstep with the spread
```

---

## Central Bank Rate Expectations: OIS and Fed Funds Futures

Markets price **future rate paths** through:

| Instrument | Use | Example |
|---|---|---|
| **Fed Funds Futures (FF)** | Price implied Fed rate at each FOMC meeting | FF June 2025 = 4.50% → market prices 4.50% rate |
| **OIS (Overnight Index Swap)** | Forward rate for overnight index (SOFR, €STR) | 3M OIS 1Y forward |
| **STIR futures (EURIBOR, SONIA)** | European and UK rate expectations | ICE SONIA futures |
| **Forward rate agreements (FRAs)** | Lock in a future borrowing rate | 3×6 FRA |

```
  Market pricing vs. "dot plot":
  If market prices FEWER cuts than the Fed's dot plot suggests:
  → Market is more hawkish than Fed → USD support

  If market prices MORE cuts than dot plot:
  → Market is more dovish → USD headwind
```

---

## Policy Divergence Trades

The most powerful FX trends occur when **two central banks are moving in opposite directions**:

```
  2014–2015: Fed tapering/hiking expectations vs. ECB QE
  → EUR/USD fell from ~1.39 to ~1.05 (-25%)

  2021–2022: Fed hawkish pivot vs. BoJ YCC (ultra-dovish)
  → USD/JPY rose from ~110 to ~152 (+38%)

  2022: BoE hiking aggressively (high UK inflation)
         vs. BoJ dovish (deflation-fighter mentality)
  → GBP/JPY surged from ~155 to ~185 (+19%)

  Framework:
  ┌─────────────────────────────────────────────────────┐
  │            CURRENCY A CENTRAL BANK                  │
  │           HAWKISH       NEUTRAL       DOVISH        │
  │ ┌─────────────────────────────────────────────────┐ │
  │ │Hawkish│  Neutral   │  A outperforms│  A strongly │ │
  │ │       │            │               │  outperforms│ │
  │ ├───────────────────────────────────────────────┤ │
  │ │Neutral│  B outperforms │  Neutral   │  A outperforms │ │
  │ │       │  slightly     │            │             │ │
  │ ├───────────────────────────────────────────────┤ │
  │ │Dovish │  B strongly   │  B out-    │  Neutral    │ │
  │ │       │  outperforms  │  performs  │             │ │
  │ └─────────────────────────────────────────────────┘ │
  │        CURRENCY B CENTRAL BANK                      │
  └─────────────────────────────────────────────────────┘
```

---

## Term Premium and Long-End Rates

Beyond short-term policy rates, **long-term yields** (10Y, 30Y) also drive FX through **term premium** — the extra return investors require for holding long-duration bonds:

```
  Rising term premium:
  → Long-end yields rise above what policy rate path alone predicts
  → Can reflect: fiscal concerns, inflation risk, supply/demand for bonds
  → USD strengthens as 10Y Treasuries become more attractive

  2023 example:
  Fed near peak (short-end anchored)
  But 10Y Treasury rose from ~3.8% → 5.0% (term premium expansion)
  → DXY rallied despite no additional Fed hikes
  → Drove USD/JPY to 150+ and USD strength across the board
```

---

## Further Reading

- LogikFX: *Interest Rate Differential Guide* — [logikfx.com](https://www.logikfx.com/post/what-is-interest-rate-differential-a-comprehensive-guide-for-traders)
- MTFX: *How Macro Trends Drive Currency Volatility* — [mtfxgroup.com](https://www.mtfxgroup.com/post/from-interest-rates-to-trade-wars-how-macro-trends-drive-currency-market-volatility/)
- CME Group: *Fed Funds Futures* — [cmegroup.com](https://www.cmegroup.com)
- *This Time Is Different* — Carmen M. Reinhart & Kenneth S. Rogoff
- *The Alchemy of Finance* — George Soros (Simon & Schuster, 1987)
