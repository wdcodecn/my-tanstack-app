import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Icon from "../components/Icon";

export const Route = createFileRoute("/_app/trade")({
	component: TradePage,
});

const TOKENS = [
	{ symbol: "USDT", name: "Tether USD", iconBg: "#26A17B", iconText: "₮" },
	{ symbol: "USDC", name: "USD Coin", iconBg: "#2775CA", iconText: "$" },
	{ symbol: "ETH", name: "Ethereum", iconBg: "#627EEA", iconText: "Ξ" },
	{ symbol: "BTC", name: "Bitcoin", iconBg: "#F7931A", iconText: "₿" },
];

function TradePage() {
	const [fromToken, setFromToken] = useState(TOKENS[0]);
	const [toToken, setToToken] = useState(TOKENS[1]);
	const [fromAmount, setFromAmount] = useState("");

	const swapTokens = () => {
		setFromToken(toToken);
		setToToken(fromToken);
		setFromAmount("");
	};

	const rate =
		fromToken.symbol === "USDT" && toToken.symbol === "USDC"
			? "1 USDT ≈ 1.00 USDC"
			: fromToken.symbol === "ETH" && toToken.symbol === "USDT"
				? "1 ETH ≈ 3,512.40 USDT"
				: fromToken.symbol === "BTC" && toToken.symbol === "USDT"
					? "1 BTC ≈ 65,698.90 USDT"
					: fromToken.symbol === "USDC" && toToken.symbol === "USDT"
						? "1 USDC ≈ 1.00 USDT"
						: "—";

	return (
		<section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
			<div className="gl-balance-label gl-label-sm">
				<span>Swap</span>
			</div>

			<div
				style={{
					background: "var(--gl-surface-container-high)",
					border: "1px solid var(--gl-hairline)",
					borderRadius: "var(--gl-r-xl)",
					padding: 16,
					boxShadow: "var(--gl-micro-border-top), var(--gl-soft-shadow)",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBottom: 8,
					}}
				>
					<span
						className="gl-label-sm"
						style={{ color: "var(--gl-on-surface-variant)" }}
					>
						From
					</span>
					<span
						className="gl-label-sm"
						style={{ color: "var(--gl-on-surface-variant)" }}
					>
						Balance: 34.97
					</span>
				</div>
				<div style={{ display: "flex", gap: 12, alignItems: "center" }}>
					<input
						type="number"
						placeholder="0.00"
						value={fromAmount}
						onChange={(e) => setFromAmount(e.target.value)}
						className="gl-display-lg"
						style={{
							flex: 1,
							background: "transparent",
							border: 0,
							outline: "none",
							color: "var(--gl-on-background)",
							width: 0,
							minWidth: 0,
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
								background: fromToken.iconBg,
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#fff",
								fontSize: 12,
								fontWeight: 700,
							}}
						>
							{fromToken.iconText}
						</span>
						<span
							className="gl-label-sm"
							style={{ color: "var(--gl-on-background)" }}
						>
							{fromToken.symbol}
						</span>
						<Icon name="arrow_drop_down" size={16} />
					</button>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginBlock: -8,
					position: "relative",
					zIndex: 2,
				}}
			>
				<button
					type="button"
					className="gl-action-circle"
					onClick={swapTokens}
					aria-label="Swap from and to"
					style={{
						cursor: "pointer",
						border: "2px solid var(--gl-background)",
					}}
				>
					<Icon name="swap_vert" size={22} />
				</button>
			</div>

			<div
				style={{
					background: "var(--gl-surface-container-high)",
					border: "1px solid var(--gl-hairline)",
					borderRadius: "var(--gl-r-xl)",
					padding: 16,
					boxShadow: "var(--gl-micro-border-top), var(--gl-soft-shadow)",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBottom: 8,
					}}
				>
					<span
						className="gl-label-sm"
						style={{ color: "var(--gl-on-surface-variant)" }}
					>
						To (estimated)
					</span>
					<span
						className="gl-label-sm"
						style={{ color: "var(--gl-on-surface-variant)" }}
					>
						Balance: 0
					</span>
				</div>
				<div style={{ display: "flex", gap: 12, alignItems: "center" }}>
					<div
						className="gl-display-lg"
						style={{
							flex: 1,
							color: "var(--gl-on-surface-variant)",
							opacity: 0.5,
						}}
					>
						{fromAmount || "0.00"}
					</div>
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
								background: toToken.iconBg,
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#fff",
								fontSize: 12,
								fontWeight: 700,
							}}
						>
							{toToken.iconText}
						</span>
						<span
							className="gl-label-sm"
							style={{ color: "var(--gl-on-background)" }}
						>
							{toToken.symbol}
						</span>
						<Icon name="arrow_drop_down" size={16} />
					</button>
				</div>
			</div>

			<div
				className="gl-label-sm"
				style={{ color: "var(--gl-on-surface-variant)", textAlign: "center" }}
			>
				{rate}
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
				}}
			>
				Review Swap
			</button>
		</section>
	);
}
