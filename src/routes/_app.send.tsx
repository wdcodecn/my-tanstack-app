import { createFileRoute } from "@tanstack/react-router";
import Icon from "../components/Icon";

export const Route = createFileRoute("/_app/send")({
	component: SendPage,
});

const RECENT = [
	{ label: "0x8F3E…b2A1", name: "Alice" },
	{ label: "0x1A2B…c9D4", name: "Exchange Cold Wallet" },
	{ label: "bc1q…8f3E", name: "BTC Savings" },
];

function SendPage() {
	return (
		<section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
			<div>
				<div
					className="gl-balance-label gl-label-sm"
					style={{ marginBottom: 8 }}
				>
					<span>To</span>
				</div>
				<input
					type="text"
					placeholder="Wallet address or ENS"
					className="gl-body-md"
					style={{
						width: "100%",
						padding: "14px 16px",
						background: "var(--gl-surface-container-high)",
						border: "1px solid var(--gl-hairline)",
						borderRadius: "var(--gl-r-xl)",
						outline: "none",
						color: "var(--gl-on-background)",
					}}
				/>
			</div>

			<div>
				<div
					className="gl-balance-label gl-label-sm"
					style={{ marginBottom: 8 }}
				>
					<span>Recent</span>
				</div>
				<div className="gl-list">
					{RECENT.map((r) => (
						<button
							key={r.label}
							type="button"
							className="gl-list-row"
							style={{ width: "100%", textAlign: "left" }}
						>
							<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
								<div
									style={{
										width: 36,
										height: 36,
										borderRadius: "50%",
										background:
											"color-mix(in oklab, var(--gl-primary) 16%, transparent)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										color: "var(--gl-primary)",
									}}
								>
									<Icon name="history" size={18} />
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
										{r.name}
									</div>
									<div
										className="gl-label-sm"
										style={{
											color: "var(--gl-on-surface-variant)",
											marginTop: 2,
										}}
									>
										{r.label}
									</div>
								</div>
							</div>
						</button>
					))}
				</div>
			</div>

			<div>
				<div
					className="gl-balance-label gl-label-sm"
					style={{ marginBottom: 8 }}
				>
					<span>Amount</span>
					<span
						style={{
							marginLeft: "auto",
							color: "var(--gl-on-surface-variant)",
						}}
					>
						Balance: $78.50
					</span>
				</div>
				<div
					style={{
						background: "var(--gl-surface-container-high)",
						border: "1px solid var(--gl-hairline)",
						borderRadius: "var(--gl-r-xl)",
						padding: "14px 16px",
						display: "flex",
						alignItems: "center",
						gap: 12,
					}}
				>
					<input
						type="number"
						placeholder="0.00"
						className="gl-display-lg"
						style={{
							flex: 1,
							background: "transparent",
							border: 0,
							outline: "none",
							color: "var(--gl-on-background)",
							width: 0,
							minWidth: 0,
							fontSize: 24,
						}}
					/>
					<button
						type="button"
						className="gl-account-chip"
						style={{ flexShrink: 0 }}
					>
						<span
							style={{
								width: 24,
								height: 24,
								borderRadius: "50%",
								background: "#26A17B",
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#fff",
								fontSize: 12,
								fontWeight: 700,
							}}
						>
							₮
						</span>
						<span
							className="gl-label-sm"
							style={{ color: "var(--gl-on-background)" }}
						>
							USDT
						</span>
						<Icon name="arrow_drop_down" size={16} />
					</button>
				</div>
			</div>

			<button
				type="button"
				className="gl-chip"
				data-active="true"
				style={{
					width: "100%",
					padding: 16,
					fontSize: 14,
					textTransform: "uppercase",
					letterSpacing: "0.08em",
					marginTop: 8,
				}}
			>
				Send
			</button>
		</section>
	);
}
