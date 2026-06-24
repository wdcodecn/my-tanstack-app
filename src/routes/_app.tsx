import { createFileRoute } from "@tanstack/react-router";
import Shell from "../components/Shell";
import goldLabelCss from "../gold-label.css?url";

export const Route = createFileRoute("/_app")({
	head: () => ({
		meta: [
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover",
			},
		],
		links: [{ rel: "stylesheet", href: goldLabelCss }],
	}),
	component: Shell,
});
