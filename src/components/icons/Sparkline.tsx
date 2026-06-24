import { useId } from "react";

export default function Sparkline({
	points,
	positive,
}: {
	points: number[];
	positive: boolean;
}) {
	const uid = useId();
	const w = 100;
	const h = 40;
	const max = Math.max(...points);
	const min = Math.min(...points);
	const range = max - min || 1;
	const step = w / (points.length - 1);
	const coords = points.map(
		(p, i) => `${i * step},${h - ((p - min) / range) * h}`,
	);
	const d = `M${coords.join(" L")}`;
	const area = `${d} L${w},${h} L0,${h} Z`;
	const color = positive ? "var(--gl-primary)" : "var(--gl-on-surface-variant)";
	const id = `sp-${uid}`;
	return (
		<svg
			width="100%"
			height="100%"
			viewBox={`0 0 ${w} ${h}`}
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<defs>
				<linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor={color} stopOpacity="0.4" />
					<stop offset="100%" stopColor={color} stopOpacity="0" />
				</linearGradient>
			</defs>
			<path d={area} fill={`url(#${id})`} />
			<path
				d={d}
				fill="none"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle
				cx={w}
				cy={h - ((points[points.length - 1] - min) / range) * h}
				r="2"
				fill={color}
			/>
		</svg>
	);
}
