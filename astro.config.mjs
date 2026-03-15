// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'FinArchive',
			description: 'A curated financial knowledge base covering FX, commodities, macro, and technical analysis.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'FX Markets',
					items: [
						{ label: 'Market Overview', slug: 'fx/overview' },
						{ label: 'Spot FX', slug: 'fx/spot' },
						{ label: 'FX Forwards', slug: 'fx/forwards' },
						{ label: 'FX Swaps', slug: 'fx/fx-swaps' },
						{ label: 'Cross-Currency Swaps', slug: 'fx/cross-currency-swaps' },
						{ label: 'Vanilla Options', slug: 'fx/vanilla-options' },
						{ label: 'Exotic Options', slug: 'fx/exotic-options' },
						{ label: 'Structured Products', slug: 'fx/structured-products' },
						{ label: 'Complex Derivatives', slug: 'fx/complex-derivatives' },
						{ label: 'Vol Surface & Smile', slug: 'fx/vol-surface' },
						{ label: 'Pricing Models', slug: 'fx/pricing-models' },
						{ label: 'XVA & Counterparty Risk', slug: 'fx/xva' },
						{ label: 'Structured Product Engineering', slug: 'fx/structured-engineering' },
					],
				},
				{
					label: 'Commodities',
					items: [
						{ label: 'Commodities Overview', slug: 'commodities/overview' },
						{ label: 'Curve Dynamics & Theory of Storage', slug: 'commodities/curve-dynamics' },
						{ label: 'The Brent Complex', slug: 'commodities/brent-complex' },
						{ label: 'Refining & Conversion Margins', slug: 'commodities/refining-margins' },
						{ label: 'Commodity Options & Skew', slug: 'commodities/commodity-options' },
					],
				},
				{
					label: 'Macro Drivers',
					items: [
						{ label: 'Macro Framework', slug: 'macro/overview' },
						{ label: 'Interest Rates & Carry', slug: 'macro/interest-rates' },
						{ label: 'Inflation & Central Banks', slug: 'macro/inflation-and-central-banks' },
						{ label: 'Risk Sentiment & Safe Havens', slug: 'macro/risk-sentiment' },
						{ label: 'Cross-Asset Relationships', slug: 'macro/cross-asset' },
						{ label: 'Yield Curve Theory', slug: 'macro/yield-curve-theory' },
						{ label: 'Advanced Monetary Policy', slug: 'macro/monetary-policy-advanced' },
						{ label: 'BoP & Long-Run FX Valuation', slug: 'macro/bop-fx-valuation' },
					],
				},
				{
					label: 'Technical Analysis',
					items: [
						{ label: 'TA Overview & Dow Theory', slug: 'ta/overview' },
						{ label: 'Trends, Support & Resistance', slug: 'ta/trends-and-structure' },
						{ label: 'Chart Patterns', slug: 'ta/chart-patterns' },
						{ label: 'Moving Averages', slug: 'ta/moving-averages' },
						{ label: 'Momentum Indicators', slug: 'ta/momentum-indicators' },
						{ label: 'Volatility Indicators', slug: 'ta/volatility-indicators' },
						{ label: 'Fibonacci & Elliott Wave', slug: 'ta/fibonacci' },
					],
				},
				{
					label: 'Market Microstructure',
					items: [
						{ label: 'Auction Market Theory', slug: 'microstructure/auction-market' },
						{ label: 'Order Flow & Limit Order Books', slug: 'microstructure/order-flow' },
						{ label: 'COT Positioning & Open Interest', slug: 'microstructure/cot-positioning' },
					],
				},
			],
		}),
	],
});
