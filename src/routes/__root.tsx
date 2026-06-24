import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Link,
	Scripts,
	useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";
import Header from "../components/Header";

import appCss from "../styles.css?url";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

function NotFound() {
	return (
		<main
			className="page-wrap px-4 pb-8 pt-14"
			style={{ textAlign: "center", paddingTop: "20vh" }}
		>
			<h1
				className="display-title"
				style={{
					fontSize: "clamp(3rem, 10vw, 6rem)",
					lineHeight: 1,
					marginBottom: 16,
				}}
			>
				404
			</h1>
			<p style={{ color: "var(--sea-ink-soft)", marginBottom: 24 }}>
				This page doesn't exist.
			</p>
			<Link
				to="/"
				className="island-shell"
				style={{
					display: "inline-block",
					padding: "10px 24px",
					borderRadius: 999,
					fontSize: 14,
					fontWeight: 600,
					color: "var(--lagoon-deep)",
					textDecoration: "none",
				}}
			>
				Go Home
			</Link>
		</main>
	);
}

export const Route = createRootRoute({
	notFoundComponent: NotFound,
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Gold Label",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isStandalone = [
		"/",
		"/activity",
		"/trade",
		"/discover",
		"/send",
		"/receive",
		"/network",
		"/notifications",
		"/settings",
	].includes(pathname);

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
				<HeadContent />
			</head>
			<body
				className={
					isStandalone
						? "antialiased"
						: "font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]"
				}
			>
				{!isStandalone && <Header />}
				{children}
				{!isStandalone && <Footer />}
				{/*<TanStackDevtools*/}
				{/*	config={{*/}
				{/*		position: "bottom-right",*/}
				{/*	}}*/}
				{/*	plugins={[*/}
				{/*		{*/}
				{/*			name: "Tanstack Router",*/}
				{/*			render: <TanStackRouterDevtoolsPanel />,*/}
				{/*		},*/}
				{/*	]}*/}
				{/*/>*/}
				<Scripts />
			</body>
		</html>
	);
}
