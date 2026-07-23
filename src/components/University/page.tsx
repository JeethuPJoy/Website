"use client";

import Image from "next/image";
import "./University.css";

function UniversityHero() {
  return (
    <section className="univ-hero-section">
      <div className="univ-hero-card">
        <div className="univ-hero-content">
          <span className="univ-hero-badge">Universities</span>
          <h1 className="univ-hero-heading">Empowering Universities with Modern Learning Platforms</h1>
          <p className="univ-hero-subtext">NeuroLXP enables universities to deliver flexible, engaging learning that enhances academic excellence and career readiness.</p>
        </div>
        <div className="univ-hero-photo-frame">
          <Image src="/images/pexels-jay-brand-1763356224-33281155.jpg" alt="University students on campus" fill sizes="(max-width: 768px) 100vw, 1242px" className="univ-hero-photo" />
        </div>
      </div>
    </section>
  );
}

export default function UniversityPage() {
  return (
    <>
      <UniversityHero />
    </>
  );
}