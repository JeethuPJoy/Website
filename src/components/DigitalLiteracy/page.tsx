"use client";

import Image from "next/image";

function TopographicPattern({ className }: { className?: string }) {
  const width = 574;
  const height = 703;

  const base = {
    p0: { x: 20, y: 686 },
    c1: { x: 150, y: 540 },
    c2: { x: 270, y: 240 },
    p3: { x: 552, y: 40 },
  };

  const focal = { x: 340, y: 380 };
  const layerCount = 18;
  const minScale = 0.22;
  const maxScale = 1;

  const scalePoint = (point: { x: number; y: number }, scale: number) => ({
    x: focal.x + (point.x - focal.x) * scale,
    y: focal.y + (point.y - focal.y) * scale,
  });

  const layers = Array.from({ length: layerCount }, (_, i) => {
    const scale = minScale + ((maxScale - minScale) * i) / (layerCount - 1);
    const p0 = scalePoint(base.p0, scale);
    const c1 = scalePoint(base.c1, scale);
    const c2 = scalePoint(base.c2, scale);
    const p3 = scalePoint(base.p3, scale);
    return `M ${p0.x.toFixed(1)} ${p0.y.toFixed(1)} C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${p3.x.toFixed(1)} ${p3.y.toFixed(1)}`;
  });

  return (
    <svg className={className} viewBox={`0 0 ${width} ${height}`} fill="none" >
      {layers.map((d, i) => (
        <path key={i} d={d} stroke="rgba(45, 76, 200, 0.5)" strokeWidth="1" fill="none" />
      ))}
    </svg>
  );
}

function StarSolidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.85 8.36L22 9.27L16.7 14.14L18.18 21L12 17.27L5.82 21L7.3 14.14L2 9.27L9.15 8.36L12 2Z" />
    </svg>
  );
}

function DigitalLiteracyHero() {
  return (
    <section className="dl-hero-section">
      <div className="dl-hero-card">
        <div className="dl-hero-content">
          <span className="dl-hero-badge">Digital literacy</span>
          <h1 className="dl-hero-heading">
            Empower Every Employee with <span className="dl-hero-heading-accent">Digital Skills</span>
          </h1>
          <p className="dl-hero-subtext">NeuroLXP delivers engaging digital skills training from basics to advanced workplace tools.</p>

          <div className="dl-hero-buttons">
            <button type="button" className="dl-hero-button dl-hero-button-secondary">
              Request Demo
            </button>
            <button type="button" className="dl-hero-button dl-hero-button-primary">
              Start Learning
            </button>
          </div>

          <div className="dl-hero-stats">
            <div className="dl-hero-stat dl-hero-stat-pink">
              <span className="dl-hero-stat-value">87%</span>
              <span className="dl-hero-stat-label">Skill Adoption</span>
            </div>
            <div className="dl-hero-stat dl-hero-stat-neutral">
              <span className="dl-hero-stat-value">3x</span>
              <span className="dl-hero-stat-label">Faster Upskilling</span>
            </div>
            <div className="dl-hero-stat dl-hero-stat-green">
              <span className="dl-hero-stat-value">
                4.7 <StarSolidIcon className="dl-hero-stat-star" />
              </span>
              <span className="dl-hero-stat-label">Learner Score</span>
            </div>
          </div>
        </div>

        <div className="dl-hero-media">
          <TopographicPattern className="dl-hero-pattern" />
          <div className="dl-hero-image-frame">
            <Image src="/images/horizontal-shot-joyful-young-woman-with-glasses-posing-against-white-wall 1.png" alt="Employee learning digital skills" fill priority className="dl-hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DigitalLiteracyPage() {
  return (
    <>
      <DigitalLiteracyHero />
    </>
  );
}