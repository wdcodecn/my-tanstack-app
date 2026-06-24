import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Icon from "../components/Icon";
import QrCodeIcon from "../components/icons/QrCodeIcon";

export const Route = createFileRoute("/_app/receive")({
	component: ReceivePage,
});

function ReceivePage() {
	const [copied, setCopied] = useState(false);
	const fullAddress = "0x7A3F1c8E9b2A4D6F0a1B3C5E7D9F2B4A6C8E0D1";

	const copyAddress = () => {
		navigator.clipboard.writeText(fullAddress);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 24,
				paddingTop: 16,
			}}
		>
			<div style={{ textAlign: "center" }}>
				<div
					className="gl-headline-lg-mobile"
					style={{ color: "var(--gl-on-background)", fontWeight: 600 }}
				>
					Receive Assets
				</div>
				<p
					className="gl-label-sm"
					style={{ color: "var(--gl-on-surface-variant)", marginTop: 4 }}
				>
					Share your address to receive tokens on X Layer
				</p>
			</div>

			<div
				style={{
					width: 180,
					height: 180,
					borderRadius: "var(--gl-r-xl)",
					background: "var(--gl-surface-container-high)",
					border: "2px solid var(--gl-hairline)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
				}}
			>
				<QrCodeIcon />
			</div>

			<div
				style={{
					width: "100%",
					background: "var(--gl-surface-container-high)",
					border: "1px solid var(--gl-hairline)",
					borderRadius: "var(--gl-r-xl)",
					padding: "14px 16px",
					display: "flex",
					alignItems: "center",
					gap: 12,
				}}
			>
				<span
					className="gl-data-tabular"
					style={{
						flex: 1,
						color: "var(--gl-on-background)",
						fontSize: 13,
						wordBreak: "break-all",
					}}
				>
					{fullAddress}
				</span>
				<button
					type="button"
					className="gl-icon-btn"
					onClick={copyAddress}
					aria-label="Copy address"
					style={{ flexShrink: 0 }}
				>
					<Icon name={copied ? "check" : "content_copy"} size={20} />
				</button>
			</div>

			<div
				className="gl-label-sm"
				style={{
					color: "var(--gl-on-surface-variant)",
					textAlign: "center",
					display: "flex",
					alignItems: "center",
					gap: 6,
				}}
			>
				<Icon name="info" size={14} />
				Only send tokens on the <strong>X Layer</strong> network
			</div>
		</section>
	);
}
