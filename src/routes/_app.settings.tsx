import { createFileRoute } from "@tanstack/react-router";
import Icon from "../components/Icon";

export const Route = createFileRoute("/_app/settings")({
	component: SettingsPage,
});

const SECTIONS = [
	{
		title: "Wallet Security",
		items: [
			{ icon: "settings_backup", label: "Wallet Backup" },
			{ icon: "settings_lock", label: "Wallet Password" },
			{ icon: "settings_audit", label: "Security Audit" },
			{ icon: "settings_scan", label: "Security Scan" },
		],
	},
	{
		title: "Basic Settings",
		items: [
			{ icon: "settings_wallet", label: "Wallet Management" },
			{ icon: "settings_network", label: "Custom Networks" },
			{ icon: "settings_address", label: "Address Book" },
			{ icon: "settings_preferences", label: "Preferences" },
			{ icon: "settings_link", label: "Linked Wallets" },
			{ icon: "settings_sync", label: "Cross-Device Sync" },
		],
	},
	{
		title: "More",
		items: [
			{ icon: "settings_referral", label: "Referral" },
			{ icon: "settings_terms", label: "Terms of Service" },
			{ icon: "settings_privacy", label: "Privacy Policy" },
			{ icon: "settings_help", label: "Get Help" },
		],
	},
];

function SettingsPage() {
	return (
		<section style={{ display: "flex", flexDirection: "column", gap: 24 }}>
			{SECTIONS.map((section) => (
				<div key={section.title}>
					<div
						className="gl-balance-label gl-label-sm"
						style={{
							marginBottom: 12,
							color: "var(--gl-on-background)",
							fontSize: 16,
						}}
					>
						{section.title}
					</div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(4, 1fr)",
							gap: 12,
						}}
					>
						{section.items.map((item) => (
							<button
								key={item.label}
								type="button"
								onClick={() => {
									if (item.label === "Custom Networks") {
										navigate({ to: "/network" });
									}
								}}
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									gap: 8,
									padding: "12px 4px",
									background: "transparent",
									border: 0,
									cursor: "pointer",
									color: "var(--gl-on-surface-variant)",
								}}
							>
								<Icon name={item.icon} size={32} />
								<span
									className="gl-label-sm"
									style={{
										color: "var(--gl-on-background)",
										textAlign: "center",
										lineHeight: 1.3,
									}}
								>
									{item.label}
								</span>
							</button>
						))}
					</div>
				</div>
			))}

			{/* About card */}
			<div
				style={{
					background: "var(--gl-surface-container-high)",
					border: "1px solid var(--gl-hairline)",
					borderRadius: "var(--gl-r-xl)",
					padding: "14px 16px",
					display: "flex",
					alignItems: "center",
					gap: 12,
					boxShadow: "var(--gl-micro-border-top), var(--gl-soft-shadow)",
				}}
			>
				<Icon
					name="settings_about"
					size={24}
					style={{ color: "var(--gl-primary)" }}
				/>
				<div style={{ flex: 1 }}>
					<div
						className="gl-body-md"
						style={{ fontWeight: 500, color: "var(--gl-on-background)" }}
					>
						About Gold Label
					</div>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						color: "var(--gl-on-surface-variant)",
					}}
				>
					<span className="gl-label-sm">v1.0.0</span>
					<Icon name="chevron_right" size={18} />
				</div>
			</div>
		</section>
	);
}
