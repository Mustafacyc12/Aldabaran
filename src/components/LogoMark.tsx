export default function LogoMark({
  size = 28,
  color = "#2648e0",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points="100,30 110,100 100,170 90,100" fill={color} />
      <polygon points="170,100 100,110 30,100 100,90" fill={color} />
      <polygon points="167.18,32.82 104.95,104.95 32.82,167.18 95.05,95.05" fill={color} />
      <polygon points="138.89,138.89 95.76,104.24 61.11,61.11 104.24,95.76" fill={color} />
    </svg>
  );
}
