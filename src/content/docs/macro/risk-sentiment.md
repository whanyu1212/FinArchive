---
title: Risk Sentiment & Safe Havens
description: How risk appetite, the VIX, safe-haven flows, and global positioning drive FX and cross-asset behaviour.
sidebar:
  order: 4
---

**Risk sentiment** describes the collective appetite of market participants for taking on risk. It acts as a **regime amplifier** — in risk-on environments, high-beta assets surge and safe havens underperform; in risk-off environments, capital rapidly rotates into safety. For FX, this is often the fastest-moving driver.

---

## Risk-On vs. Risk-Off (RoRo)

```
  RISK-ON (Appetite for risk is HIGH)         RISK-OFF (Fear / uncertainty is HIGH)
  ─────────────────────────────────────        ──────────────────────────────────────
  ✓ Equities rally                             ✗ Equities sell off
  ✓ Credit spreads tighten                     ✗ Credit spreads widen
  ✓ EM currencies strengthen                  ✗ EM currencies weaken (capital flight)
  ✓ Commodity currencies rise (AUD, NZD, CAD) ✗ Commodity currencies sold
  ✓ Carry trades funded in JPY/CHF work well  ✗ Carry trades unwind violently
  ✗ JPY, CHF, USD weaken (safe havens sold)   ✓ JPY, CHF rally (safe haven demand)
  ✗ Gold underperforms (less fear premium)     ✓ Gold rallies (safe haven + vol hedge)
  ✗ VIX falls (low fear)                       ✓ VIX spikes (high fear)
```

---

## Safe-Haven Currencies

### Japanese Yen (JPY)

```
  Why JPY is a safe haven:

  1. Carry unwind mechanics:
     → During quiet times, JPY is borrowed cheaply (low rates)
       and sold to fund higher-yielding currencies
     → In a crisis, carry trades unwind FAST:
       - Sell AUD/JPY, NZD/JPY, USD/JPY → JPY bought aggressively
       - Leverage forced reduction → amplifies JPY moves

  2. Japan's net foreign creditor status:
     → Japan has world's largest net international investment position
     → In a crisis, Japanese investors repatriate overseas assets → buy JPY
     → Life insurers, pension funds bring money home for safety

  3. Current account surplus:
     → Japan earns more from abroad than it spends → structural JPY demand
     → Disrupted somewhat by high energy import costs (2022)

  Historical JPY safe haven episodes:
  → 2008 GFC: USD/JPY collapsed from 110 → 87 in months
  → 2011 Earthquake/Tsunami: USD/JPY hit 76 (record low)
  → 2020 COVID crash: USD/JPY fell 10% in 2 weeks
  → 2024 BoJ rate hike + carry unwind: USD/JPY 160 → 140 in weeks
```

### Swiss Franc (CHF)

```
  Why CHF is a safe haven:

  1. Political neutrality: Switzerland has not been in a war since 1815
  2. Strong institutions: stable rule of law, banking secrecy tradition
  3. Low inflation history: SNB has managed price stability credibly
  4. Current account surplus: Switzerland earns more than it spends abroad

  EUR/CHF is the key pair:
  → In European crises, EUR/CHF falls (CHF bought)
  → 2012 Eurozone crisis: EUR/CHF fell to 1.20 (SNB floor imposed)
  → 2015 SNB shock: floor removed → EUR/CHF collapsed from 1.20 → 0.85 in minutes

  SNB challenges:
  → Strong CHF hurts Swiss exporters (Nestlé, Novartis, Roche)
  → SNB has historically intervened to weaken CHF (FX reserves > 1x Swiss GDP)
  → SNB can and does buy EUR/USD to weaken CHF
```

### US Dollar (USD)

```
  USD is a safe haven — but it's complicated:

  USD as safe haven:
  → World's reserve currency → global demand during crises
  → US Treasury bills: the "risk-free" asset benchmark
  → Dollar funding stress spikes (LIBOR, XCCY basis) in crises → USD scarce

  USD vs. JPY/CHF safe havens:
  → USD tends to rally in global crises (2008, 2020)
    but can weaken vs. JPY and CHF
  → The DXY (Dollar Index) mostly measures USD vs. major G10:
    when risk-off, DXY typically rises as EUR, GBP, AUD, CAD fall
    but USD/JPY and USD/CHF may FALL (JPY and CHF even safer)

  "Dollar smile" theory (Stephen Jen):
  → USD strong when: US economy outperforms (right side of smile)
  → USD strong when: global recession/crisis (left side of smile)
  → USD weak when: global growth is synchronised without crises (middle of smile)
```

---

## The VIX (Volatility Index)

The **VIX** (CBOE Volatility Index, or "fear gauge") measures the market's expectation of 30-day implied volatility in the S&P 500, derived from option prices:

```
  VIX levels (approximate interpretation):
  ┌──────────────────────────────────────────────────────────┐
  │ VIX < 15:   Very low fear — complacency / risk-on       │
  │ VIX 15–20:  Normal range                                │
  │ VIX 20–30:  Elevated anxiety; markets pricing more risk │
  │ VIX 30–40:  High fear; risk-off positioning dominates  │
  │ VIX > 40:   Extreme fear / crisis mode (2008, 2020)     │
  └──────────────────────────────────────────────────────────┘

  Historical spikes:
  Oct 2008 (GFC):     ~80
  Mar 2020 (COVID):   ~85.5 (all-time intraday high)
  Aug 2015 (China):   ~53
  Jan 2018 (Volmageddon): ~50
  Mar 2022 (Ukraine): ~35

  FX correlations with VIX:
  VIX UP → USD/JPY DOWN (JPY rallies)
  VIX UP → AUD/USD DOWN (AUD sold)
  VIX UP → USD UP (DXY up, EM FX sold)
  VIX DOWN → carry trades supported
```

---

## Credit Spreads as Risk Indicators

**Credit spreads** (the extra yield on corporate/EM bonds over risk-free rates) are another key risk barometer:

```
  Key indicators:
  ┌─────────────────────────────────────────────────────────┐
  │ IG (Investment Grade) spreads:  100–200bps = risk-off   │
  │ HY (High Yield) spreads:        >600bps = distress      │
  │ EM USD spreads (EMBI):          >400bps = EM stress     │
  │ CDX (credit default swap index):  key real-time signal  │
  │ iTraxx (European CDS index)                             │
  └─────────────────────────────────────────────────────────┘

  Credit widening → sell EM FX, sell AUD/NZD, buy USD/JPY/CHF
  Credit tightening → buy EM FX, buy AUD, sell JPY
```

---

## Positioning and Flows

### CFTC Commitment of Traders (COT) Report

Published weekly, the **COT report** shows **speculative positioning** in FX futures by large traders (hedge funds, CTAs):

```
  How to use it:
  → Extreme long position in USD → crowded trade → vulnerable to reversal
  → Extreme short position in JPY → carry unwind risk if risk-off hits
  → Used as a contrarian signal when positioning reaches extremes

  Net speculative position:
  Long − Short = Net (positive = net long)

  Historical extreme:
  Mid-2014: record net short EUR → EUR/USD fell more
  Early 2020: record net long USD → COVID crash reversed it quickly
```

### Bank of America FX Flow Monitor, JP Morgan FX Positioning

Institutional desks track **real money flows** (fund managers adjusting hedge ratios, pension fund rebalancing):

```
  Quarter-end rebalancing (month/quarter-end):
  → Equity markets outperform in a quarter
  → US pension funds have more USD equity exposure than target
  → Must sell USD equities / buy foreign assets to rebalance
  → → USD selling pressure at quarter-end
  → Predictable seasonal pattern
```

---

## Geopolitical Risk and FX

Geopolitical events create acute, often short-lived risk-off episodes:

```
  Event                  | Key FX Moves
  ──────────────────────────────────────────────────────────
  Feb 2022 Russia-Ukraine| EUR/USD sold (European risk), CHF bought
                         | NOK/CAD rallied (oil +30%)
                         | USD/RUB gapped from 75 → 150 then reversed
                         | USD safe haven bid
  ──────────────────────────────────────────────────────────
  Oct 2023 Hamas-Israel  | Initial safe haven bid → faded quickly
  ──────────────────────────────────────────────────────────
  2018 US-China tariffs  | CNH sold, AUD sold (China trade proxy)
                         | Safe havens bid briefly
  ──────────────────────────────────────────────────────────

  Rule of thumb:
  → Regional conflicts with no G10 involvement: short-lived safe haven bid
  → Conflicts affecting energy supply or G10 economies: sustained moves
  → Nuclear/systemic risk: extreme safe haven (CHF, JPY, gold, UST)
```

---

## EM FX: Risk Sentiment Amplified

Emerging market currencies are **most sensitive** to global risk sentiment due to:

```
  1. Capital account sensitivity:
     → EM assets are held by global investors who exit in risk-off
     → "Sudden stop" risk: foreign investors pull capital quickly

  2. USD denominated debt:
     → When USD rises in risk-off, EM corporates/governments
       with USD debt face rising debt servicing costs → vicious circle

  3. Commodity dependence:
     → Many EM economies are commodity exporters (BRL, MXN, ZAR, CLP)
     → Commodity price collapse → fiscal/current account pressure

  EM risk-off playbook:
  Risk-off hits → USD strengthens → commodity prices fall
              → EM capital outflows → EM FX weakens
              → EM CBs intervene (burn reserves) or hike rates
              → If response inadequate: currency crisis
```

### Classic EM Currency Crises

| Year | Country | Cause | FX Move |
|---|---|---|---|
| 1997–98 | Asian Financial Crisis | USD peg breaks, capital flight | THB/IDR/KRW −40 to −80% |
| 1998 | Russia | Oil price collapse, default | RUB −75% |
| 2001 | Argentina | Dollar peg break | ARS −70% |
| 2018 | Turkey | Inflation + political risk | TRY −40% |
| 2018 | Argentina | CA deficit + IMF crisis | ARS −50% |
| 2022 | Sri Lanka | Reserves exhausted | LKR −44% |

---

## Risk Sentiment Indicators: A Dashboard

```
  RISK-OFF SIGNALS (monitor these for warning signs):
  ┌─────────────────────────────────────────────────────────┐
  │ ✗ VIX > 25 and rising                                   │
  │ ✗ IG/HY credit spreads widening                        │
  │ ✗ USD/JPY falling; JPY strengthening across board      │
  │ ✗ EM FX (MSCI EM currency index) declining              │
  │ ✗ AUD/JPY falling (classic risk proxy)                  │
  │ ✗ US 2Y yield below Fed Funds (market pricing cuts)    │
  │ ✗ S&P 500 falling, led by cyclicals/financials          │
  │ ✗ XCCY basis (EUR/USD basis swap) going more negative  │
  │ ✗ Gold/silver ratio rising (flight to quality metals)   │
  │ ✗ OIS-Fed Funds spread widening (banking stress signal) │
  └─────────────────────────────────────────────────────────┘

  RISK-ON SIGNALS:
  ┌─────────────────────────────────────────────────────────┐
  │ ✓ VIX < 15 and declining                                │
  │ ✓ Carry trades working (AUD/JPY, NZD/JPY rising)        │
  │ ✓ EM FX rallying, capital inflows to EM                 │
  │ ✓ USD weakening vs. high-beta currencies                │
  │ ✓ Credit spreads tight and stable                       │
  │ ✓ Equities at highs, breadth expanding                  │
  └─────────────────────────────────────────────────────────┘
```

---

## Further Reading

- Macrosynergy: *Understanding the dollar cross-currency basis* — [macrosynergy.com](https://macrosynergy.com/research/understanding-the-dollar-cross-currency-basis/)
- CBOE VIX methodology — [cboe.com](https://www.cboe.com/vix)
- ScienceDirect: *Interest Rate Differentials and FX Volatility* — [sciencedirect.com](https://www.sciencedirect.com/science/article/abs/pii/S0927539821001018)
- *Market Wizards* — Jack Schwager (Wiley, various editions)
- *The Big Short* — Michael Lewis (W.W. Norton, 2010)
