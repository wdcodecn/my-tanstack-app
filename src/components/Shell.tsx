import {
	Link,
	Outlet,
	useNavigate,
	useRouterState,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Icon from "../components/Icon";

type Theme = "auto" | "light" | "dark";

const THEME_CYCLE: Theme[] = ["auto", "light", "dark"];

const GL_THEME_INIT = `(function(){try{var stored=window.localStorage.getItem('gl-theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var el=document.querySelector('.gl-scope');if(el){el.setAttribute('data-gl-theme',mode);}}catch(e){}})();`;

const NAV_ITEMS = [
	{ icon: "account_balance_wallet", label: "Assets", to: "/" as const },
	{ icon: "analytics", label: "Activity", to: "/activity" as const },
	{ icon: "swap_horizontal_circle", label: "Trade", to: "/trade" as const },
	{ icon: "explore", label: "Discover", to: "/discover" as const },
];

const THEME_ICONS: Record<Theme, string> = {
	auto: "brightness_auto",
	light: "light_mode",
	dark: "dark_mode",
};

const TAB_PATHS = new Set(["/", "/activity", "/trade", "/discover"]);

const PAGE_TITLES: Record<string, string> = {
	"/send": "Send",
	"/receive": "Receive",
	"/network": "选择网络",
	"/notifications": "Notifications",
	"/settings": "Settings",
};

export default function Shell() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const navigate = useNavigate();
	const isHome = pathname === "/";
	const isTab = TAB_PATHS.has(pathname);
	const isSubPage = !isTab;
	const [theme, setTheme] = useState<Theme>("auto");

	useEffect(() => {
		const stored = window.localStorage.getItem("gl-theme") as Theme | null;
		if (stored === "light" || stored === "dark" || stored === "auto") {
			setTheme(stored);
			document
				.querySelector(".gl-scope")
				?.setAttribute("data-gl-theme", stored);
		}
	}, []);

	const cycleTheme = () => {
		const next =
			THEME_CYCLE[(THEME_CYCLE.indexOf(theme) + 1) % THEME_CYCLE.length];
		setTheme(next);
		window.localStorage.setItem("gl-theme", next);
		document.querySelector(".gl-scope")?.setAttribute("data-gl-theme", next);
	};

	return (
		<>
			<script dangerouslySetInnerHTML={{ __html: GL_THEME_INIT }} />
			<div className="gl-scope" data-gl-theme="auto">
				<div className="gl-app">
					{/* Header — only on home page */}
					{isHome && (
						<header className="gl-header">
							<button
								type="button"
								className="gl-icon-btn"
								aria-label="Menu"
								onClick={() => navigate({ to: "/settings" })}
							>
								<Icon name="grid_view" size={22} />
							</button>

							<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
								<button
									type="button"
									className="gl-icon-btn"
									onClick={cycleTheme}
									aria-label={`Theme: ${theme}`}
								>
									<Icon name={THEME_ICONS[theme]} size={22} />
								</button>
								<button
									type="button"
									className="gl-icon-btn"
									aria-label="Switch network"
									onClick={() => navigate({ to: "/network" })}
								>
									<Icon name="globe" size={22} />
								</button>
								<button
									type="button"
									className="gl-icon-btn"
									aria-label="Notifications"
									style={{ position: "relative" }}
									onClick={() => navigate({ to: "/notifications" })}
								>
									<Icon name="notifications" size={22} />
									<span
										style={{
											position: "absolute",
											top: 8,
											right: 8,
											width: 8,
											height: 8,
											borderRadius: "50%",
											background: "var(--gl-error)",
										}}
									/>
								</button>
							</div>
						</header>
					)}

					{/* Minimal header for secondary pages */}
					{isSubPage && (
						<header className="gl-header">
							<button
								type="button"
								className="gl-icon-btn"
								aria-label="Back"
								onClick={() => navigate({ to: "/" })}
							>
								<Icon name="arrow_back" size={22} />
							</button>
							<div
								className="gl-body-md"
								style={{
									fontWeight: 600,
									color: "var(--gl-on-background)",
								}}
							>
								{PAGE_TITLES[pathname] ?? ""}
							</div>
							<div style={{ width: 44 }} />
						</header>
					)}

					{/* Main content */}
					<main className="gl-main">
						<Outlet />
					</main>

					{/* Bottom nav */}
					{isTab && (
						<nav className="gl-nav">
							{NAV_ITEMS.map((n) => {
								const active = pathname === n.to;
								return (
									<Link
										key={n.label}
										to={n.to}
										className="gl-nav-item"
										data-active={active}
										aria-current={active ? "page" : undefined}
									>
										<Icon name={n.icon} size={24} />
										<span className="gl-nav-label">{n.label}</span>
									</Link>
								);
							})}
						</nav>
					)}
				</div>
			</div>
		</>
	);
}
