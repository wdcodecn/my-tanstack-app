import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import Icon from "../components/Icon";

export const Route = createFileRoute("/_app/network")({
	component: NetworkPage,
});

type NetworkCategory = "hot" | "rpc" | "custom";

type Network = {
	id: string;
	name: string;
	balance: string;
	category: NetworkCategory;
	pinned?: boolean;
};

type TabId = "hot" | "rpc" | "custom";

const TABS: { id: TabId; label: string }[] = [
	{ id: "hot", label: "热门网络" },
	{ id: "rpc", label: "RPC 网络" },
	{ id: "custom", label: "自定义网络" },
];

const HOT_NETWORKS: Network[] = [
	{
		id: "xlayer",
		name: "X Layer",
		balance: "$0.00",
		category: "hot",
		pinned: true,
	},
	{
		id: "bitcoin",
		name: "Bitcoin",
		balance: "$0.00",
		category: "hot",
		pinned: true,
	},
	{
		id: "ethereum",
		name: "Ethereum",
		balance: "$59.90",
		category: "hot",
		pinned: true,
	},
	{
		id: "solana",
		name: "Solana",
		balance: "$0.00",
		category: "hot",
		pinned: true,
	},
	{ id: "tron", name: "TRON", balance: "$0.00", category: "hot", pinned: true },
	{ id: "arbitrum", name: "Arbitrum One", balance: "$0.00", category: "hot" },
	{ id: "optimism", name: "Optimism", balance: "$0.00", category: "hot" },
	{ id: "polygon", name: "Polygon", balance: "$0.00", category: "hot" },
];

const RPC_NETWORKS: Network[] = [
	{
		id: "eth-rpc",
		name: "Ethereum Mainnet",
		balance: "$59.90",
		category: "rpc",
	},
	{ id: "bsc-rpc", name: "BNB Smart Chain", balance: "$0.00", category: "rpc" },
	{
		id: "avax-rpc",
		name: "Avalanche C-Chain",
		balance: "$0.00",
		category: "rpc",
	},
	{ id: "ftm-rpc", name: "Fantom Opera", balance: "$0.00", category: "rpc" },
];

const CUSTOM_NETWORKS: Network[] = [
	{
		id: "custom-1",
		name: "Local Hardhat",
		balance: "$0.00",
		category: "custom",
	},
];

const ALL_BALANCE = "$60.65";

const INDEX_LETTERS = [
	"★",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"#",
];

function NetworkLogo({ id }: { id: string }) {
	switch (id) {
		case "all":
			return (
				<div
					style={{
						width: 40,
						height: 40,
						borderRadius: "50%",
						background: "var(--gl-surface-container-high)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						border: "1px solid var(--gl-hairline)",
						color: "var(--gl-on-surface-variant)",
					}}
				>
					<Icon name="globe" size={22} />
				</div>
			);
		case "xlayer":
			return (
				<div
					style={{
						width: 40,
						height: 40,
						borderRadius: "50%",
						background: "var(--gl-network-xlayer)",
						display: "grid",
						gridTemplateColumns: "repeat(2, 1fr)",
						gridTemplateRows: "repeat(2, 1fr)",
						padding: 10,
						gap: 3,
					}}
				>
					<span
						style={{ background: "var(--gl-background)", borderRadius: 1 }}
					/>
					<span
						style={{ background: "var(--gl-background)", borderRadius: 1 }}
					/>
					<span
						style={{ background: "var(--gl-background)", borderRadius: 1 }}
					/>
					<span
						style={{ background: "var(--gl-background)", borderRadius: 1 }}
					/>
				</div>
			);
		case "bitcoin":
			return (
				<div
					style={{
						width: 40,
						height: 40,
						borderRadius: "50%",
						background: "var(--gl-network-bitcoin)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "var(--gl-on-primary)",
						fontWeight: 700,
						fontSize: 18,
					}}
				>
					₿
				</div>
			);
		case "ethereum":
			return (
				<div
					style={{
						width: 40,
						height: 40,
						borderRadius: "50%",
						background: "var(--gl-network-ethereum)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "var(--gl-on-primary)",
						fontWeight: 700,
						fontSize: 18,
					}}
				>
					◆
				</div>
			);
		case "solana":
			return (
				<div
					style={{
						width: 40,
						height: 40,
						borderRadius: "50%",
						background: "var(--gl-network-solana)",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: 3,
					}}
				>
					<span
						style={{
							width: 18,
							height: 3,
							background: "var(--gl-on-primary)",
							borderRadius: 2,
						}}
					/>
					<span
						style={{
							width: 18,
							height: 3,
							background: "var(--gl-network-solana-secondary)",
							borderRadius: 2,
						}}
					/>
					<span
						style={{
							width: 18,
							height: 3,
							background: "var(--gl-on-primary)",
							borderRadius: 2,
						}}
					/>
				</div>
			);
		case "tron":
			return (
				<div
					style={{
						width: 40,
						height: 40,
						borderRadius: "50%",
						background: "var(--gl-network-tron)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "var(--gl-on-primary)",
						fontWeight: 700,
						fontSize: 14,
					}}
				>
					▲
				</div>
			);
		default:
			return (
				<div
					style={{
						width: 40,
						height: 40,
						borderRadius: "50%",
						background: "var(--gl-surface-container-high)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "var(--gl-on-surface-variant)",
						fontWeight: 600,
						fontSize: 14,
					}}
				>
					{id.slice(0, 1).toUpperCase()}
				</div>
			);
	}
}

function CheckIndicator({ active }: { active: boolean }) {
	if (!active) return null;
	return (
		<div
			style={{
				width: 22,
				height: 22,
				borderRadius: "50%",
				background: "var(--gl-primary)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "var(--gl-on-primary)",
				flexShrink: 0,
			}}
		>
			<Icon name="check" size={14} />
		</div>
	);
}

function SectionHeader({ label }: { label: string }) {
	return (
		<div
			className="gl-label-sm"
			style={{
				color: "var(--gl-on-surface-variant)",
				padding: "20px 0 8px",
				fontWeight: 500,
			}}
		>
			{label}
		</div>
	);
}

function NetworkRow({
	network,
	selected,
	onSelect,
}: {
	network: Network;
	selected: boolean;
	onSelect: (id: string) => void;
}) {
	return (
		<button
			type="button"
			key={network.id}
			className="gl-list-row"
			style={{ width: "100%", textAlign: "left" }}
			onClick={() => onSelect(network.id)}
		>
			<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
				<NetworkLogo id={network.id} />
				<div>
					<div
						className="gl-body-md"
						style={{
							fontWeight: 500,
							color: "var(--gl-on-background)",
						}}
					>
						{network.name}
					</div>
					<div
						className="gl-data-tabular"
						style={{
							color: "var(--gl-on-surface-variant)",
							marginTop: 2,
							fontSize: 13,
						}}
					>
						{network.balance}
					</div>
				</div>
			</div>
			<CheckIndicator active={selected} />
		</button>
	);
}

function IndexBar({ onIndex }: { onIndex: (letter: string) => void }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 2,
				padding: "4px 0",
			}}
		>
			{INDEX_LETTERS.map((letter) => (
				<button
					key={letter}
					type="button"
					onClick={() => onIndex(letter)}
					style={{
						width: 18,
						height: 18,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: 10,
						fontWeight: 500,
						color: "var(--gl-on-surface-variant)",
						background: "transparent",
						border: 0,
						padding: 0,
						cursor: "pointer",
					}}
				>
					{letter}
				</button>
			))}
		</div>
	);
}

function NetworkPage() {
	const [activeTab, setActiveTab] = useState<TabId>("hot");
	const [query, setQuery] = useState("");
	const [selected, setSelected] = useState<string>("all");

	const networks = useMemo(() => {
		switch (activeTab) {
			case "rpc":
				return RPC_NETWORKS;
			case "custom":
				return CUSTOM_NETWORKS;
			default:
				return HOT_NETWORKS;
		}
	}, [activeTab]);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return networks;
		return networks.filter((n) => n.name.toLowerCase().includes(q));
	}, [networks, query]);

	const handleIndex = (letter: string) => {
		const id =
			letter === "★"
				? "pinned"
				: letter === "#"
					? "custom"
					: letter.toLowerCase();
		const el = document.getElementById(`network-group-${id}`);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const pinnedNetworks = filtered.filter((n) => n.pinned);
	const otherNetworks = filtered.filter((n) => !n.pinned);
	const firstLetter = otherNetworks[0]?.name[0]?.toUpperCase();

	return (
		<div style={{ display: "flex", gap: 8, position: "relative" }}>
			<div
				style={{
					flex: 1,
					minWidth: 0,
					display: "flex",
					flexDirection: "column",
					gap: 8,
				}}
			>
				{/* Search */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 10,
						padding: "12px 16px",
						borderRadius: 999,
						background: "var(--gl-surface-container-low)",
						border: "1px solid var(--gl-hairline)",
					}}
				>
					<Icon name="search" size={20} />
					<input
						type="text"
						placeholder="搜索"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						style={{
							flex: 1,
							background: "transparent",
							border: 0,
							outline: "none",
							fontSize: 15,
							color: "var(--gl-on-background)",
						}}
					/>
				</div>

				{/* Tabs */}
				<div
					className="gl-no-scrollbar"
					style={{ display: "flex", gap: 10, padding: "4px 0" }}
				>
					{TABS.map((tab) => {
						const active = activeTab === tab.id;
						return (
							<button
								key={tab.id}
								type="button"
								onClick={() => setActiveTab(tab.id)}
								style={{
									padding: "8px 18px",
									borderRadius: 999,
									fontSize: 13,
									fontWeight: 500,
									whiteSpace: "nowrap",
									cursor: "pointer",
									border: 0,
									background: active
										? "var(--gl-primary)"
										: "var(--gl-surface-container-low)",
									color: active
										? "var(--gl-on-primary)"
										: "var(--gl-on-surface-variant)",
									transition: "all 180ms ease",
								}}
							>
								{tab.label}
							</button>
						);
					})}
				</div>

				{/* All networks */}
				{activeTab === "hot" && (
					<div className="gl-list" style={{ marginTop: 8 }}>
						<button
							type="button"
							className="gl-list-row"
							style={{ width: "100%", textAlign: "left" }}
							onClick={() => setSelected("all")}
						>
							<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
								<NetworkLogo id="all" />
								<div>
									<div
										className="gl-body-md"
										style={{
											fontWeight: 500,
											color: "var(--gl-on-background)",
										}}
									>
										全部网络
									</div>
									<div
										className="gl-data-tabular"
										style={{
											color: "var(--gl-on-surface-variant)",
											marginTop: 2,
											fontSize: 13,
										}}
									>
										{ALL_BALANCE}
									</div>
								</div>
							</div>
							<CheckIndicator active={selected === "all"} />
						</button>
					</div>
				)}

				{/* Network list */}
				{activeTab === "hot" && filtered.length > 0 && (
					<div id="network-group-pinned">
						<SectionHeader label="热门网络" />
						<div className="gl-list">
							{pinnedNetworks.map((n) => (
								<NetworkRow
									key={n.id}
									network={n}
									selected={selected === n.id}
									onSelect={setSelected}
								/>
							))}
						</div>
					</div>
				)}

				{activeTab === "hot" && otherNetworks.length > 0 && (
					<div id={`network-group-${firstLetter?.toLowerCase() ?? "more"}`}>
						<SectionHeader label={firstLetter ?? "更多网络"} />
						<div className="gl-list">
							{otherNetworks.map((n) => (
								<NetworkRow
									key={n.id}
									network={n}
									selected={selected === n.id}
									onSelect={setSelected}
								/>
							))}
						</div>
					</div>
				)}

				{activeTab === "rpc" && filtered.length > 0 && (
					<div className="gl-list" style={{ marginTop: 8 }}>
						{filtered.map((n) => (
							<NetworkRow
								key={n.id}
								network={n}
								selected={selected === n.id}
								onSelect={setSelected}
							/>
						))}
					</div>
				)}

				{activeTab === "custom" && (
					<div
						style={{
							marginTop: 16,
							display: "flex",
							flexDirection: "column",
							gap: 12,
						}}
					>
						{filtered.length > 0 ? (
							<div className="gl-list">
								{filtered.map((n) => (
									<NetworkRow
										key={n.id}
										network={n}
										selected={selected === n.id}
										onSelect={setSelected}
									/>
								))}
							</div>
						) : (
							<div
								style={{
									textAlign: "center",
									padding: "48px 16px",
									color: "var(--gl-on-surface-variant)",
								}}
							>
								<Icon name="settings_network" size={40} />
								<p style={{ marginTop: 12, fontSize: 14 }}>暂无自定义网络</p>
								<p style={{ marginTop: 4, fontSize: 12, opacity: 0.7 }}>
									点击右上角添加 RPC 网络
								</p>
							</div>
						)}
						<button
							type="button"
							className="gl-chip"
							style={{
								width: "100%",
								justifyContent: "center",
								padding: "12px 24px",
							}}
						>
							<Icon name="add_circle" size={16} />
							添加自定义网络
						</button>
					</div>
				)}
			</div>

			{/* Alphabet index */}
			<div
				style={{
					position: "sticky",
					top: 0,
					alignSelf: "flex-start",
					zIndex: 10,
				}}
			>
				<IndexBar onIndex={handleIndex} />
			</div>
		</div>
	);
}
