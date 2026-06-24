export default function XIcon({ size = 24 }: { size?: number }) {
	return (
		<svg viewBox="0 0 16 16" aria-hidden="true" width={size} height={size}>
			<path
				fill="currentColor"
				d="M12.6 1h2.2L10 6.48 15.64 15h-4.41L7.78 9.82 3.23 15H1l5.14-5.84L.72 1h4.52l3.12 4.73L12.6 1zm-.77 12.67h1.22L4.57 2.26H3.26l8.57 11.41z"
			/>
		</svg>
	);
}
