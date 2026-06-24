import { createFileRoute } from "@tanstack/react-router";
import Icon from "../components/Icon";

export const Route = createFileRoute("/_app/notifications")({
	component: NotificationsPage,
});

const NOTIFICATIONS = [
	{
		icon: "add_circle",
		iconBg: "var(--gl-success-soft)",
		iconColor: "var(--gl-success)",
		title: "USDC Deposit Confirmed",
		desc: "500 USDC deposited to your wallet",
		time: "2 min ago",
		unread: true,
	},
	{
		icon: "local_fire_department",
		iconBg: "rgba(242,202,80,0.14)",
		iconColor: "var(--gl-primary)",
		title: "Staking Reward Received",
		desc: "You earned 1.82 USDC from X Layer Boost",
		time: "1 hr ago",
		unread: true,
	},
	{
		icon: "currency_exchange",
		iconBg: "rgba(59,130,246,0.12)",
		iconColor: "#3b82f6",
		title: "Swap Completed",
		desc: "100 USDC → 99.98 USDT",
		time: "3 hr ago",
		unread: false,
	},
	{
		icon: "arrow_upward",
		iconBg: "var(--gl-danger-soft)",
		iconColor: "var(--gl-danger)",
		title: "USDT Sent",
		desc: "24.50 USDT sent to 0x8F3E…b2A1",
		time: "5 hr ago",
		unread: false,
	},
	{
		icon: "shield",
		iconBg: "rgba(99,102,241,0.12)",
		iconColor: "#6366f1",
		title: "Security Alert",
		desc: "New login from Chrome on Windows",
		time: "1 day ago",
		unread: false,
	},
	{
		icon: "info_outline",
		iconBg: "var(--gl-surface-container)",
		iconColor: "var(--gl-on-surface-variant)",
		title: "X Layer Upgrade",
		desc: "Network upgrade scheduled for June 30",
		time: "2 days ago",
		unread: false,
	},
];

function NotificationsPage() {
	return (
		<section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
			<div className="gl-balance-label gl-label-sm" style={{ marginBottom: 4 }}>
				<span>Notifications</span>
				<span className="gl-label-sm" style={{ color: "var(--gl-primary)" }}>
					Mark all read
				</span>
			</div>

			<div className="gl-list">
				{NOTIFICATIONS.map((n, i) => (
					<div key={i} className="gl-list-row">
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 12,
								flex: 1,
							}}
						>
							<div style={{ position: "relative" }}>
								<div
									style={{
										width: 40,
										height: 40,
										borderRadius: "50%",
										background: n.iconBg,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: n.iconColor,
									}}
								>
									<Icon name={n.icon} size={20} />
								</div>
								{n.unread && (
									<span
										style={{
											position: "absolute",
											top: 0,
											right: 0,
											width: 10,
											height: 10,
											borderRadius: "50%",
											background: "var(--gl-error)",
											border: "2px solid var(--gl-background)",
										}}
									/>
								)}
							</div>
							<div style={{ flex: 1, minWidth: 0 }}>
								<div style={{ display: "flex", alignItems: "center", gap: 6 }}>
									<div
										className="gl-body-md"
										style={{
											fontWeight: 500,
											fontSize: 14,
											color: "var(--gl-on-background)",
										}}
									>
										{n.title}
									</div>
									{n.unread && (
										<span
											style={{
												width: 6,
												height: 6,
												borderRadius: "50%",
												background: "var(--gl-primary)",
												flexShrink: 0,
											}}
										/>
									)}
								</div>
								<div
									className="gl-label-sm"
									style={{
										color: "var(--gl-on-surface-variant)",
										marginTop: 2,
									}}
								>
									{n.desc}
								</div>
								<div
									className="gl-label-sm"
									style={{
										color: "var(--gl-on-surface-variant)",
										marginTop: 4,
										opacity: 0.6,
									}}
								>
									{n.time}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
