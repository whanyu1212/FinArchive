---
title: FX Forwards
description: Pricing, mechanics, and use cases of FX forward contracts using covered interest parity.
sidebar:
  order: 3
---

An **FX forward** (or forward outright) is an agreement to exchange a fixed amount of one currency for another at a specified **future date** and at a **pre-agreed rate** (the forward rate). It is the most widely used FX hedging instrument.

---

## Why Forwards Exist

Consider a US exporter who will receive €5,000,000 in three months. The EUR/USD spot rate is 1.0850 today, but the exporter doesn't know where EUR/USD will be in 3 months. To lock in today's economics, they sell EUR/USD forward — agreeing to sell €5m at a fixed rate on the future date.

---

## Covered Interest Parity (CIP)

The forward rate is **not a forecast** of where spot will be in the future. It is determined entirely by the **interest rate differential** between the two currencies — via the no-arbitrage principle known as **Covered Interest Parity (CIP)**.

> "Covered interest parity is the closest thing to a physical law in international finance."
> — BIS Quarterly Review, 2016

### The Formula

```
         (1 + r_d × T)
  F = S × ─────────────
         (1 + r_f × T)
```

Where:
- `F` = Forward rate (base/quote)
- `S` = Spot rate
- `r_d` = Domestic (quote currency) interest rate
- `r_f` = Foreign (base currency) interest rate
- `T` = Time in years

For continuous compounding:
```
  F = S × e^((r_d − r_f) × T)
```

### Numerical Example

```
  EUR/USD spot:      1.0850
  USD interest rate: 5.30% (r_d)
  EUR interest rate: 3.75% (r_f)
  Tenor:             3 months (T = 0.25)

  F = 1.0850 × (1 + 0.0530 × 0.25) / (1 + 0.0375 × 0.25)
    = 1.0850 × 1.01325 / 1.009375
    = 1.0850 × 1.003836
    = 1.0892

  Forward rate: EUR/USD 1.0892
```

EUR/USD trades at a **forward premium** for USD (USD interest rates are higher), meaning the forward EUR/USD rate is higher than spot — you get more USD per EUR at the forward date.

---

## Forward Points (Swap Points)

In practice, forwards are quoted as **forward points** added to (or subtracted from) the spot rate:

```
  Forward Points = F − S
  (expressed in pips)

  From example above:
  Forward Points = 1.0892 − 1.0850 = 0.0042 = 42 pips

  Market quote:
  EUR/USD 3M fwd:  Spot 1.0850 + 42 fwd pts = 1.0892
```

### Premium vs. Discount

| Condition | Forward Points | Meaning |
|---|---|---|
| `r_d > r_f` | Positive (added to spot) | Base currency at **discount** |
| `r_d < r_f` | Negative (subtracted from spot) | Base currency at **premium** |
| `r_d = r_f` | Zero | Forward = Spot |

> **Intuition**: If USD rates are higher than EUR rates, an investor can earn more holding USD than EUR. To prevent arbitrage, EUR/USD forward must be higher than spot — compensating the EUR holder for the rate differential forgone.

---

## The No-Arbitrage Proof

If the forward rate deviated from CIP, a **risk-free arbitrage** would exist:

```
  Scenario: F > CIP-implied forward

  Step 1: Borrow EUR at r_f
  Step 2: Convert EUR to USD at spot (S)
  Step 3: Invest USD at r_d
  Step 4: Lock in forward sale of USD back to EUR at F

  Net profit = F − CIP forward > 0, risk-free

  → Arbitrage pressure pushes F back to CIP level
```

Since 2008, **CIP has persistently broken down** due to balance sheet constraints on banks (Basel III), creating the **cross-currency basis**. See the Cross-Currency Swaps page for details.

---

## Forward Rate Visualization

```
  USD interest rate (5.30%) > EUR interest rate (3.75%)
  → USD at discount in forward market (you get fewer USD per EUR)
  Wait — this seems confusing. Let's think in USD/EUR terms:

  EUR/USD:  Spot 1.0850 → 3M Forward 1.0892
            ↑ EUR is at a PREMIUM in the forward market
            (fewer EUR per USD at forward date)

  Interest rate rule:
  ┌─────────────────────────────────────────────────────────────┐
  │  The currency with the HIGHER interest rate trades at a     │
  │  FORWARD DISCOUNT (its forward rate is lower than spot)     │
  │                                                             │
  │  USD rate > EUR rate → USD at forward discount              │
  │  (USD/EUR forward lower than USD/EUR spot)                  │
  │  ≡ EUR/USD forward higher than EUR/USD spot ✓               │
  └─────────────────────────────────────────────────────────────┘
```

---

## Forward Tenors

Standard market tenors for forward outright trades:

| Tenor | Abbreviation |
|---|---|
| 1 week | 1W |
| 1 month | 1M |
| 2 months | 2M |
| 3 months | 3M |
| 6 months | 6M |
| 9 months | 9M |
| 1 year | 1Y |
| 2 years | 2Y |
| 5 years | 5Y |
| Broken dates | Any custom date between tenors |

---

## Use Cases

### 1. Corporate Hedging
An airline knows it will buy USD 50m worth of jet fuel (priced in USD) in 6 months. It has revenues in GBP. To remove currency risk, it buys USD/sells GBP 6M forward.

### 2. Investment Manager Currency Overlay
A fund manager holds a €200m European equity portfolio but wants to hedge EUR/USD exposure back to USD. They sell EUR forward each month and roll.

### 3. Speculative / Directional Trading
A macro fund believes USD will weaken. It sells USD/buys EUR via a forward outright — no upfront premium, full notional exposure.

### 4. Carry Trade (Uncovered)
If a trader takes a long position in a high-yielding currency via a forward without hedging, they are running an **uncovered carry trade** — exposed to the exchange rate moving against them.

---

## Delivery vs. Non-Delivery

| Type | Description | Common Use |
|---|---|---|
| **Deliverable Forward (DF)** | Physical exchange of both currencies at maturity | Corporates with underlying exposure |
| **Non-Deliverable Forward (NDF)** | Cash-settled in USD against a fixing; no physical delivery | EM currencies with capital controls (CNY, INR, KRW, BRL) |

### NDF Mechanics
```
  NDF at maturity:
  P&L = Notional × (NDF rate − Fixing rate)

  Example:
  USD/CNH NDF: Sold USD 10m at 7.1500 for 3M
  Fixing (PBOC): 7.2000 at maturity

  P&L = 10m × (7.1500 − 7.2000) = -$500,000 to client
  (Client sold USD at 7.15, fixing came in at 7.20 — USD strengthened)
```

---

## Forward vs. Futures

| Feature | OTC Forward | Exchange-Traded Future |
|---|---|---|
| Customisation | Fully flexible (date, notional) | Standardised contracts |
| Settlement | T+2, mostly deliverable | Daily MTM margin calls |
| Counterparty Risk | Bilateral (CCP for some) | Exchange-guaranteed |
| Liquidity | Deep for majors | Good for CME FX futures |
| Usage | Corporates, banks, funds | Retail, CTAs, hedge funds |

---

## Further Reading

- CME Group: *Covered Interest Parity, Implied Forward FX Swaps* — [cmegroup.com](https://www.cmegroup.com/articles/whitepapers/covered-interest-parity-implied-forward-foreign-exchange-swaps-cross-currency-basis-and-cme-estr-futures.html)
- BIS: *Covered interest parity lost* (2016) — [bis.org/publ/qtrpdf/r_qt1609e.htm](https://www.bis.org/publ/qtrpdf/r_qt1609e.htm)
- *Options, Futures, and Other Derivatives* — John C. Hull, Chapter 5
- AnalystPrep: *International Parity Conditions* — [analystprep.com](https://analystprep.com/study-notes/cfa-level-2/international-parity-conditions/)
