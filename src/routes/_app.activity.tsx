import { createFileRoute } from "@tanstack/react-router";
import Icon from "../components/Icon";

export const Route = createFileRoute("/_app/activity")({
	component: ActivityPage,
});

const TRANSACTIONS = [
	{
		icon: "arrow_upward",
		iconBg: "var(--gl-danger-soft)",
		iconColor: "var(--gl-danger)",
		label: "Sent USDT",
		detail: "To 0x8F3E…b2A1",
		amount: "-$24.50",
		time: "2 min ago",
		negative: true,
	},
	{
		icon: "arrow_downward",
		iconBg: "var(--gl-success-soft)",
		iconColor: "var(--gl-success)",
		label: "Received ETH",
		detail: "From 0x1A2B…c9D4",
		amount: "+$43.55",
		time: "15 min ago",
		negative: false,
	},
	{
		icon: "currency_exchange",
		iconBg: "rgba(59,130,246,0.12)",
		iconColor: "#3b82f6",
		label: "Swapped USDC → USDT",
		detail: "100 USDC → 99.98 USDT",
		amount: "",
		time: "1 hr ago",
		negative: false,
	},
	{
		icon: "local_fire_department",
		iconBg: "rgba(242,202,80,0.14)",
		iconColor: "var(--gl-primary)",
		label: "Staking Reward",
		detail: "X Layer Boost pool",
		amount: "+$1.82",
		time: "3 hr ago",
		negative: false,
	},
	{
		icon: "arrow_upward",
		iconBg: "var(--gl-danger-soft)",
		iconColor: "var(--gl-danger)",
		label: "Sent BTC",
		detail: "To bc1q…8f3E",
		amount: "-$120.00",
		time: "6 hr ago",
		negative: true,
	},
	{
		icon: "add_circle",
		iconBg: "var(--gl-success-soft)",
		iconColor: "var(--gl-success)",
		label: "Deposited USDC",
		detail: "From Coinbase",
		amount: "+$500.00",
		time: "1 day ago",
		negative: false,
	},
];

function ActivityPage() {
	return (
		<section>
			<div
				className="gl-balance-label gl-label-sm"
				style={{ marginBottom: 12 }}
			>
				<span>Recent Activity</span>
				<Icon name="filter_list" size={14} />
			</div>

			<div className="gl-list">
				{TRANSACTIONS.map((tx, i) => (
					<div key={i} className="gl-list-row">
						<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
							<div
								style={{
									width: 40,
									height: 40,
									borderRadius: "50%",
									background: tx.iconBg,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: tx.iconColor,
								}}
							>
								<Icon name={tx.icon} size={20} />
							</div>
							<div>
								<div
									className="gl-body-md"
									style={{
										fontWeight: 500,
										color: "var(--gl-on-background)",
										fontSize: 14,
									}}
								>
									{tx.label}
								</div>
								<div
									className="gl-label-sm"
									style={{
										color: "var(--gl-on-surface-variant)",
										marginTop: 2,
									}}
								>
									{tx.detail} · {tx.time}
								</div>
							</div>
						</div>
						{tx.amount && (
							<div
								className="gl-data-tabular"
								style={{
									color: tx.negative ? "var(--gl-danger)" : "var(--gl-success)",
									fontWeight: 600,
								}}
							>
								{tx.amount}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
