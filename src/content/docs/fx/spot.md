---
title: Spot FX
description: Mechanics, conventions, and market microstructure of spot foreign exchange trading.
sidebar:
  order: 2
---

A **spot FX transaction** is the purchase or sale of one currency against another for delivery on the standard settlement date — typically **T+2 business days** from the trade date. It is the foundational building block from which all other FX products are priced.

---

## How a Spot Trade Works

```
  TRADE DATE (T)               SETTLEMENT DATE (T+2)
  ──────────────               ──────────────────────
  Buyer agrees to buy          Buyer delivers USD
  EUR/USD at 1.0850            Seller delivers EUR
         │                              │
         ▼                              ▼
  Price locked in              Currencies physically exchanged
  (no cash moves yet)          via correspondent banks / SWIFT
```

### Example
> A corporate buys €10,000,000 spot against USD at EUR/USD 1.0850.
> - **EUR received**: €10,000,000
> - **USD paid**: $10,850,000
> - Settlement: 2 business days after trade date

---

## Bid / Offer Spread

Market makers quote a **two-way price**: the **bid** (price to buy base) and the **offer/ask** (price to sell base). The spread is the market maker's compensation for providing liquidity.

```
  EUR/USD:   1.08498  /  1.08502
             ───┬───     ───┬───
              BID           ASK
        (bank buys EUR)  (bank sells EUR)
        (client sells)   (client buys)

  Spread = 0.00004 = 0.4 pips
```

Spread determinants:
- **Liquidity**: EUR/USD may trade 0.1–0.5 pips; EM pairs can be 20–200+ pips
- **Volatility**: Spreads widen sharply during risk events (NFP, FOMC)
- **Deal size**: Large tickets may move through the spread or require voice execution

---

## Lot Sizes

| Lot Type | Size | Typical User |
|---|---|---|
| Standard Lot | 100,000 units of base | Institutional |
| Mini Lot | 10,000 units | Small institutional / active retail |
| Micro Lot | 1,000 units | Retail |
| Custom | Any notional | OTC / bilateral |

In the interbank market, the minimum is typically **USD 1–5 million** per ticket.

---

## Price Discovery

Spot FX prices are formed through a **continuous two-sided auction** process across:

1. **Electronic Communication Networks (ECNs)**: EBS (now CME Group), Reuters Matching — primary interdealer venues for EUR/USD, USD/JPY
2. **Single-Dealer Platforms (SDPs)**: Each major bank's proprietary e-trading platform (e.g., Citi Velocity, UBS Neo)
3. **Multi-Dealer Platforms (MDPs)**: FXall, Bloomberg FX, 360T — aggregated liquidity for clients
4. **Voice brokers**: Still used for large tickets and EM currencies

### The Spread Ecology
```
  Interbank spread (EBS/Reuters):   0.1 – 0.3 pips
  Tier 1 Bank to client:            0.3 – 1.0 pips
  Multi-dealer platform:            0.5 – 2.0 pips
  Retail broker (retail client):    1.0 – 3.0 pips
```

---

## Cross Rates

**Cross rates** are currency pairs with no USD leg, derived from two USD pairs:

```
  EUR/GBP = EUR/USD ÷ GBP/USD

  Example:
  EUR/USD = 1.0850
  GBP/USD = 1.2700
  EUR/GBP = 1.0850 / 1.2700 = 0.8543
```

**Why it matters**: In thin EM crosses (e.g., EUR/ZAR), price is derived by crossing EUR/USD × USD/ZAR. Wider compounded spreads can result.

---

## Value Dates & Settlement Conventions

| Value Date | Name | Settlement |
|---|---|---|
| T+0 | Cash / Value Today (TOD) | Same day (rare, cutoff before NY close) |
| T+1 | Value Tomorrow (TOM) | Next business day |
| T+2 | Spot | Standard for most pairs |
| T+1 | USD/CAD, USD/TRY | Special convention |

> **Cutoff times** matter: JPY cutoff is ~14:00 Tokyo time; USD settles via Fedwire by 18:00 ET.

### Settlement Infrastructure

```
  FX Settlement Flow:
  ─────────────────────────────────────────────────────
  Bank A (USD payer)                  Bank B (EUR payer)
       │                                      │
       ▼                                      ▼
  Correspondent USD Bank          Correspondent EUR Bank
       │                                      │
       └──────────► SWIFT / CLS ◄─────────────┘
                        │
                   Simultaneous
                   PvP Settlement
                  (Payment vs Payment)
```

**CLS (Continuous Linked Settlement)**: A multi-currency settlement system used by major banks that eliminates **Herstatt risk** (settlement risk). CLS settles ~$6.5 trillion per day and covers 18 currencies.

---

## FX Fixing Rates

Key daily benchmark rates used for valuing portfolios, settling derivatives, and managing hedges:

| Fix | Time | Publisher | Use |
|---|---|---|---|
| **WM/Reuters 4pm Fix** | 16:00 London | Refinitiv / LSEG | Fund valuations, index rebalancing |
| **ECB Reference Rate** | ~14:15 CET | European Central Bank | EUR-based contracts |
| **BFIX** | Multiple times | Bloomberg | Bloomberg terminal users |
| **PBOC CNY Fix** | ~09:15 Beijing | People's Bank of China | USD/CNY reference |

> **Fix hunting**: Large institutional order flows around the 4pm fix can create predictable intraday patterns — a well-known market microstructure phenomenon.

---

## Spot FX Risk

### Mark-to-Market P&L
```
  P&L = Notional × (Exit Rate − Entry Rate) × [±1 depending on direction]

  Example:
  Bought €10m at EUR/USD 1.0800
  Current rate: 1.0900
  P&L = €10m × (1.0900 − 1.0800) = +$100,000 USD
```

### Key Risks
| Risk | Description |
|---|---|
| **Market risk** | Exchange rate moves against position |
| **Settlement risk** | Counterparty fails to deliver (mitigated by CLS) |
| **Liquidity risk** | Inability to exit large position without moving market |
| **Gap risk** | Sharp overnight or weekend moves (e.g., SNB CHF shock Jan 2015) |

---

## Historical Case: SNB Shock (January 2015)

On 15 January 2015, the Swiss National Bank (SNB) unexpectedly removed the EUR/CHF floor of 1.20, causing CHF to appreciate ~30% in minutes. EUR/CHF collapsed from ~1.20 to ~0.85 intraday — an extreme illustration of **gap risk** and the limits of stop-loss orders in illiquid, fast markets.

---

## Further Reading

- BIS Triennial Survey (2022) — [bis.org/statistics/rpfx22.htm](https://www.bis.org/statistics/rpfx22.htm)
- *Foreign Exchange: A Practical Guide to the FX Markets* — Tim Weithers (Wiley, 2011)
- CLS Bank — [cls-group.com](https://www.cls-group.com)
