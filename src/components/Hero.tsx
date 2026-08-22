import Starfield from "@/components/Starfield";
import AldebaranStarLayer from "@/components/AldebaranStarLayer";

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <Starfield />
      <AldebaranStarLayer />
      <div className="grain"></div>
      <div className="hero-content">
        <div className="eyebrow">Al Dabaran Trading F.Z.E. — Middle East Market Entry</div>
        <h1>
          A fixed point of reference
          <br />
          in an <em>uncertain</em> market.
        </h1>
        <p className="lede">
          We connect international manufacturers and brands with distributors,
          retailers, and consumers across the Middle East — steady, reliable,
          and focused on getting your products exactly where they need to go.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/contact">
            Chart the course
          </a>
          <a className="btn btn-ghost" href="#origin">
            Our story ↓
          </a>
        </div>
      </div>
      <div className="coords">
        <span>α TAURI — ALDEBARAN</span>
        <span>RA 04h 35m 55s · DEC +16° 30&prime; 33&Prime;</span>
      </div>
      <div className="scroll-cue">HOLD COURSE</div>
    </header>
  );
}
