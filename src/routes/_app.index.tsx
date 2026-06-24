import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "../components/Icon";
import Sparkline from "../components/icons/Sparkline";

export const Route = createFileRoute("/_app/")({
	component: AssetsPage,
});

type Token = {
	symbol: string;
	name: string;
	price: string;
	balance: string;
	balanceUsd: string;
	apy?: string;
	change?: string;
	iconBg: string;
	iconText: string;
	spark: number[];
};

const TOKENS: Token[] = [
	{
		symbol: "USDT",
		name: "Tether USD",
		price: "$1.00",
		balance: "34.97",
		balanceUsd: "$34.95",
		apy: "APY 5.62%",
		iconBg: "#26A17B",
		iconText: "₮",
		spark: [42, 40, 41, 39, 42, 40, 41, 38, 42, 40],
	},
	{
		symbol: "USDC",
		name: "USD Coin",
		price: "$1.00",
		balance: "0",
		balanceUsd: "$0.00",
		apy: "APY 6.78%",
		iconBg: "#2775CA",
		iconText: "$",
		spark: [40, 41, 39, 40, 41, 40, 39, 40, 41, 40],
	},
	{
		symbol: "BTC",
		name: "Bitcoin",
		price: "$65,698.90",
		balance: "0",
		balanceUsd: "$0.00",
		change: "+2.04%",
		iconBg: "#F7931A",
		iconText: "₿",
		spark: [38, 36, 35, 33, 30, 28, 24, 22, 18, 12],
	},
	{
		symbol: "ETH",
		name: "Ethereum",
		price: "$3,512.40",
		balance: "0.0124",
		balanceUsd: "$43.55",
		change: "+1.18%",
		iconBg: "#627EEA",
		iconText: "Ξ",
		spark: [40, 38, 36, 38, 34, 32, 28, 30, 26, 22],
	},
];

const FILTERS = ["Tokens", "DeFi", "DApp", "Auth"] as const;

const PROMOS = [
	{
		title: "X Layer Staking",
		desc: "Participate in Boost staking, share 200,000 USDC rewards pool",
		tag: "Earn 5.62% APY",
		iconText: "$",
		gradient: "linear-gradient(135deg, #60a5fa, #2563eb)",
		glowBg: "rgba(59, 130, 246, 0.2)",
	},
	{
		title: "ETH Liquid Staking",
		desc: "Stake ETH, earn up to 4.2% APY with instant liquidity",
		tag: "Earn 4.2% APY",
		iconText: "Ξ",
		gradient: "linear-gradient(135deg, #a78bfa, #7c3aed)",
		glowBg: "rgba(124, 58, 237, 0.2)",
	},
	{
		title: "USDC Yield Vault",
		desc: "Supply USDC and earn 6.78% variable APY, withdraw anytime",
		tag: "Earn 6.78% APY",
		iconText: "$",
		gradient: "linear-gradient(135deg, #34d399, #059669)",
		glowBg: "rgba(5, 150, 105, 0.2)",
	},
];

function CarouselPromos() {
	const ref = useRef<HTMLDivElement>(null);
	const [activeIdx, setActiveIdx] = useState(0);

	const handleScroll = useCallback(() => {
		const el = ref.current;
		if (!el) return;
		setActiveIdx(
			Math.min(Math.round(el.scrollLeft / el.clientWidth), PROMOS.length - 1),
		);
	}, []);

	const goTo = useCallback((i: number) => {
		(ref.current?.children[i] as HTMLElement | undefined)?.scrollIntoView({
			behavior: "smooth",
			inline: "start",
			block: "nearest",
		});
	}, []);

	useEffect(() => {
		const t = setInterval(() => {
			const el = ref.current;
			if (!el) return;
			const cur = Math.round(el.scrollLeft / el.clientWidth);
			const next = (cur + 1) % PROMOS.length;
			(el.children[next] as HTMLElement | undefined)?.scrollIntoView({
				behavior: "smooth",
				inline: "start",
				block: "nearest",
			});
		}, 4000);
		return () => clearInterval(t);
	}, []);

	return (
		<section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
			<div ref={ref} className="gl-carousel" onScroll={handleScroll}>
				{PROMOS.map((p) => (
					<div key={p.title} className="gl-promo gl-carousel-card">
						<div className="gl-promo-glow" style={{ background: p.glowBg }} />
						<div
							style={{
								position: "relative",
								zIndex: 1,
								display: "flex",
								flexDirection: "column",
								gap: 4,
								justifyContent: "center",
								flex: 1,
							}}
						>
							<h3
								className="gl-body-md"
								style={{
									fontWeight: 500,
									color: "var(--gl-on-background)",
									display: "flex",
									alignItems: "center",
									gap: 8,
								}}
							>
								{p.title}
							</h3>
							<p
								className="gl-label-sm"
								style={{
									color: "var(--gl-on-surface-variant)",
									maxWidth: 220,
									letterSpacing: 0.02,
								}}
							>
								{p.desc}
							</p>
							<span
								className="gl-label-sm"
								style={{
									color: "var(--gl-primary)",
									background:
										"color-mix(in oklab, var(--gl-primary) 14%, transparent)",
									padding: "2px 8px",
									borderRadius: 999,
									alignSelf: "flex-start",
									marginTop: 4,
								}}
							>
								{p.tag}
							</span>
						</div>
						<div
							style={{
								position: "relative",
								zIndex: 1,
								display: "flex",
								alignItems: "center",
								gap: 12,
								alignSelf: "center",
							}}
						>
							<div style={{ position: "relative", width: 48, height: 48 }}>
								<div
									style={{
										position: "absolute",
										inset: 0,
										background: p.glowBg,
										borderRadius: "50%",
										filter: "blur(8px)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										inset: 0,
										background: p.gradient,
										borderRadius: "50%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										border: "1px solid rgba(255,255,255,0.1)",
										color: "#fff",
										fontWeight: 700,
										fontSize: 18,
									}}
								>
									{p.iconText}
								</div>
							</div>
							<Icon name="chevron_right" size={22} />
						</div>
					</div>
				))}
			</div>
			<div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
				{PROMOS.map((_, i) => (
					<button
						key={i}
						type="button"
						onClick={() => goTo(i)}
						style={{
							width: activeIdx === i ? 20 : 6,
							height: 6,
							borderRadius: 3,
							background:
								activeIdx === i
									? "var(--gl-primary)"
									: "var(--gl-outline-variant)",
							border: 0,
							cursor: "pointer",
							transition: "all 300ms ease",
							padding: 0,
						}}
						aria-label={`Go to slide ${i + 1}`}
					/>
				))}
			</div>
		</section>
	);
}

function AssetsPage() {
	const navigate = useNavigate();
	const [activeFilter, setActiveFilter] =
		useState<(typeof FILTERS)[number]>("Tokens");

	return (
		<>
			<section>
				<button type="button" className="gl-account-chip">
					<span
						style={{
							width: 24,
							height: 24,
							borderRadius: "50%",
							background:
								"color-mix(in oklab, var(--gl-primary) 20%, transparent)",
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Icon name="diamond" size={14} />
					</span>
					<span
						className="gl-label-sm"
						style={{ color: "var(--gl-on-background)" }}
					>
						OBSIDIAN Account
					</span>
					<Icon name="arrow_drop_down" size={16} />
				</button>
			</section>

			<section
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: 16,
					alignItems: "end",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
					<div className="gl-balance-label gl-label-sm">
						<span>Total Balance (USD)</span>
						<Icon name="visibility" size={14} />
					</div>
					<div className="gl-balance-value">$78.50</div>
					<div className="gl-balance-delta gl-data-tabular">
						+$43.55 (+1.24%)
						<span
							className="gl-label-sm"
							style={{ color: "var(--gl-on-surface-variant)", marginLeft: 4 }}
						>
							1D
						</span>
					</div>
				</div>
				<div style={{ height: 96, width: "100%", position: "relative" }}>
					<Sparkline
						points={[45, 42, 40, 38, 35, 30, 28, 22, 18, 8]}
						positive
					/>
				</div>
			</section>

			<section style={{ display: "flex", justifyContent: "space-between" }}>
				{[
					{ icon: "arrow_upward", label: "Send", to: "/send" as const },
					{ icon: "arrow_downward", label: "Receive", to: "/receive" as const },
					{ icon: "history", label: "History", to: "/activity" as const },
					{ icon: "dashboard_customize", label: "More" },
				].map((a) => (
					<button
						key={a.label}
						type="button"
						className="gl-action"
						onClick={a.to ? () => navigate({ to: a.to }) : undefined}
					>
						<span className="gl-action-circle">
							<Icon name={a.icon} size={22} />
						</span>
						<span className="gl-action-label">{a.label}</span>
					</button>
				))}
			</section>

			<CarouselPromos />

			<section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
				<div
					className="gl-no-scrollbar"
					style={{
						display: "flex",
						gap: 8,
						overflowX: "auto",
						paddingBottom: 4,
					}}
				>
					{FILTERS.map((f) => (
						<button
							key={f}
							type="button"
							className="gl-chip"
							data-active={activeFilter === f}
							onClick={() => setActiveFilter(f)}
						>
							{f}
						</button>
					))}
				</div>

				<div className="gl-list">
					{TOKENS.map((t) => {
						const positive = (t.change ?? "+0.00%").startsWith("+");
						return (
							<div key={t.symbol} className="gl-list-row">
								<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
									<div
										className="gl-token-icon"
										style={{ background: t.iconBg }}
									>
										{t.iconText}
									</div>
									<div>
										<div
											style={{ display: "flex", alignItems: "center", gap: 4 }}
										>
											<span
												className="gl-body-md"
												style={{
													fontWeight: 500,
													color: "var(--gl-on-background)",
												}}
											>
												{t.symbol}
											</span>
											<Icon name="verified_user" size={14} />
										</div>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												gap: 8,
												marginTop: 2,
											}}
										>
											<span
												className="gl-data-tabular"
												style={{
													color: "var(--gl-on-surface-variant)",
													fontSize: 12,
												}}
											>
												{t.price}
											</span>
											{t.apy && (
												<span
													className="gl-label-sm"
													style={{
														color: "var(--gl-success)",
														fontSize: 10,
														background: "var(--gl-success-soft)",
														padding: "1px 6px",
														borderRadius: 999,
													}}
												>
													{t.apy}
												</span>
											)}
											{t.change && (
												<span
													className="gl-label-sm"
													style={{
														color: positive
															? "var(--gl-success)"
															: "var(--gl-danger)",
														fontSize: 10,
													}}
												>
													{t.change}
												</span>
											)}
										</div>
									</div>
								</div>
								<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
									<div style={{ textAlign: "right" }}>
										<div
											className="gl-data-tabular"
											style={{
												fontWeight: 500,
												color: "var(--gl-on-background)",
											}}
										>
											{t.balance}{" "}
											<span
												style={{
													fontSize: 12,
													color: "var(--gl-on-surface-variant)",
													fontWeight: 400,
												}}
											>
												{t.symbol}
											</span>
										</div>
										<div
											className="gl-data-tabular"
											style={{
												color: "var(--gl-on-surface-variant)",
												fontSize: 12,
												marginTop: 2,
											}}
										>
											{t.balanceUsd}
										</div>
									</div>
									<Icon name="chevron_right" size={20} />
								</div>
							</div>
						);
					})}
				</div>

				<div
					style={{ display: "flex", justifyContent: "center", paddingTop: 4 }}
				>
					<button
						type="button"
						className="gl-chip"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 8,
							background: "var(--gl-surface-container-low)",
							border: "1px solid var(--gl-hairline)",
						}}
					>
						<Icon name="tune" size={16} />
						Manage Tokens
					</button>
				</div>
			</section>
		</>
	);
}
