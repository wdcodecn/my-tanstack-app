import { createFileRoute } from "@tanstack/react-router";
import Icon from "../components/Icon";

export const Route = createFileRoute("/_app/discover")({
	component: DiscoverPage,
});

const DAPPS = [
	{
		icon: "swap_horiz",
		iconBg: "linear-gradient(135deg, #6366f1, #4f46e5)",
		name: "Uniswap X",
		desc: "Swap tokens across L2 chains",
		tag: "DeFi",
	},
	{
		icon: "savings",
		iconBg: "linear-gradient(135deg, #10b981, #059669)",
		name: "Aave V4",
		desc: "Lend & borrow with variable APY",
		tag: "Lending",
	},
	{
		icon: "landscape",
		iconBg: "linear-gradient(135deg, #f59e0b, #d97706)",
		name: "NFT Market",
		desc: "Discover and trade digital art",
		tag: "NFTs",
	},
	{
		icon: "shield",
		iconBg: "linear-gradient(135deg, #3b82f6, #2563eb)",
		name: "ZeroX Safety",
		desc: "Audit your wallet permissions",
		tag: "Security",
	},
	{
		icon: "bolt",
		iconBg: "linear-gradient(135deg, #a855f7, #7c3aed)",
		name: "Boost Staking",
		desc: "Stake tokens and earn rewards",
		tag: "Staking",
	},
	{
		icon: "public",
		iconBg: "linear-gradient(135deg, #ec4899, #db2777)",
		name: "Bridge+",
		desc: "Cross-chain transfers made easy",
		tag: "Bridge",
	},
];

const DEFI_METRICS = [
	{ label: "Total Value Locked", value: "$2.4B", change: "+3.2%" },
	{ label: "Active Users", value: "142.5K", change: "+8.1%" },
	{ label: "Avg. Gas (Gwei)", value: "12.8", change: "-5.4%" },
];

function DiscoverPage() {
	return (
		<>
			<section>
				<div
					className="gl-balance-label gl-label-sm"
					style={{ marginBottom: 12 }}
				>
					<span>Market Overview</span>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr",
						gap: 8,
					}}
				>
					{DEFI_METRICS.map((m) => (
						<div
							key={m.label}
							style={{
								background: "var(--gl-surface-container-high)",
								border: "1px solid var(--gl-hairline)",
								borderRadius: "var(--gl-r-lg)",
								padding: 12,
								textAlign: "center",
								boxShadow: "var(--gl-micro-border-top), var(--gl-soft-shadow)",
							}}
						>
							<div
								className="gl-data-tabular"
								style={{
									fontWeight: 600,
									color: "var(--gl-on-background)",
									fontSize: 16,
								}}
							>
								{m.value}
							</div>
							<div
								className="gl-label-sm"
								style={{ color: "var(--gl-on-surface-variant)", marginTop: 4 }}
							>
								{m.label}
							</div>
							<div
								className="gl-label-sm"
								style={{
									color: m.change.startsWith("+")
										? "var(--gl-success)"
										: "var(--gl-danger)",
									marginTop: 2,
								}}
							>
								{m.change}
							</div>
						</div>
					))}
				</div>
			</section>

			<section>
				<div
					className="gl-balance-label gl-label-sm"
					style={{ marginBottom: 12 }}
				>
					<span>DApps</span>
					<Icon name="search" size={14} />
				</div>
				<div
					style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
				>
					{DAPPS.map((dapp) => (
						<div
							key={dapp.name}
							className="gl-list-row"
							style={{
								flexDirection: "column",
								alignItems: "flex-start",
								gap: 8,
								borderRadius: "var(--gl-r-lg)",
							}}
						>
							<div
								style={{
									width: 40,
									height: 40,
									borderRadius: "var(--gl-r-lg)",
									background: dapp.iconBg,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#fff",
								}}
							>
								<Icon name={dapp.icon} size={20} />
							</div>
							<div>
								<div
									className="gl-body-md"
									style={{
										fontWeight: 500,
										fontSize: 14,
										color: "var(--gl-on-background)",
									}}
								>
									{dapp.name}
								</div>
								<div
									className="gl-label-sm"
									style={{
										color: "var(--gl-on-surface-variant)",
										marginTop: 2,
									}}
								>
									{dapp.desc}
								</div>
							</div>
							<span
								className="gl-label-sm"
								style={{
									color: "var(--gl-primary)",
									background:
										"color-mix(in oklab, var(--gl-primary) 12%, transparent)",
									padding: "2px 8px",
									borderRadius: 999,
									marginTop: 4,
								}}
							>
								{dapp.tag}
							</span>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
