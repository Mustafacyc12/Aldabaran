import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {year} AL DABARAN TRADING F.Z.E.</p>
      <div className="foot-links">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Use</Link>
      </div>
      <p>A FIXED REFERENCE IN AN UNCERTAIN SEA</p>
    </footer>
  );
}
