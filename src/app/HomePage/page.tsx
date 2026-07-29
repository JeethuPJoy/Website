"use client";

import Image from "next/image";
import Link from "next/link";
import { flushSync } from "react-dom";
import { useEffect, useRef, useState, type JSX, type CSSProperties, type RefObject } from "react";
import dynamic from "next/dynamic";
import { LightbulbIcon, CursorClickIcon, TargetIcon, UsersIcon, SmartphoneIcon, GraduationCapIcon, SettingsGearIcon, LibraryIcon, BuildingIcon, ContentWritingIcon, BrainIcon, AnalyticsUpIcon, UniversityIcon, HandshakeIcon, LandmarkIcon, UserIcon, PlayIcon } from "@/components/icons/Icons";
import BookADemo from "@/components/Bookademo/Bookademo";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type HeroSlide = { id: number; type: "image"; image: string; heading: string } | { id: number; type: "video"; src: string; heading: string };

const heroSlides: HeroSlide[] = [
  { id: 1, type: "image", image: "/images/brainstorm-meeting.jpg", heading: "Empowering Lifelong learning" },
  { id: 2, type: "image", image: "/images/student-online-young-cute-girl-glasses-orange-sweater-studying-computer-with-headphones.jpg", heading: "Transform Your Learning, Transform Your Future" },
  { id: 3, type: "video", src: "/videos/asking-doubts-to-teacher.mp4", heading: "Every Question Leads to Growth" },
  { id: 4, type: "image", image: "/images/businesswoman-with-tablet-pc-meeting.jpg", heading: "Learn Beyond Limits" },
  { id: 5, type: "image", image: "/images/college-graduates-smiling-camera.jpg", heading: "Unlock Your Full Potential" },
  { id: 6, type: "video", src: "/videos/discussing-in-class.mp4", heading: "Where Great Ideas Take Shape Together" },
  { id: 7, type: "image", image: "/images/group-different-people-volunteering-foodbank.jpg", heading: "Empowering Communities Through Learning." },
  { id: 8, type: "image", image: "/images/8595828.jpg", heading: "Transform the Way the World Learns" },
];

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    intervalRef.current = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, activeSlide, prefersReducedMotion]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="hero-section" aria-roledescription="carousel" aria-label="NeuroLXP highlights" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={() => setIsPaused(false)}>
      <div className="hero-frame">
        <div className="hero-image-stage">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className={`hero-slide${index === activeSlide ? " hero-slide-active" : ""}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${heroSlides.length}`} aria-hidden={index !== activeSlide}>
              {slide.type === "video" ? (
                <video className="hero-slide-image hero-slide-video" autoPlay muted loop playsInline aria-hidden="true">
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <Image src={slide.image} alt="" fill priority={index === 0} sizes="(min-width: 1312px) 1208px, 100vw" className="hero-slide-image" />
              )}
              <div className="hero-caption">
                <h1 className="hero-heading">{slide.heading}</h1>
                {index === activeSlide && (
                  <div className="hero-dots">
                    {heroSlides.map((dotSlide, dotIndex) => (
                      <button key={dotSlide.id} type="button" aria-label={`Go to slide ${dotIndex + 1}`} aria-current={dotIndex === activeSlide ? "true" : undefined} className={`hero-dot${dotIndex === activeSlide ? " hero-dot-active" : ""}`} onClick={() => goToSlide(dotIndex)} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {`Slide ${activeSlide + 1} of ${heroSlides.length}: ${heroSlides[activeSlide].heading}`}
        </span>
      </div>
    </section>
  );
}

const odysseyCards = [
  { id: 1, title: "Personalized Learning", description: "Personalized learning tailored to every learner", color: "#2D4CC8", Icon: LightbulbIcon },
  { id: 2, title: "Interactive Content", description: "Interactive learning that inspires active participation", color: "#BF1869", Icon: CursorClickIcon },
  { id: 3, title: "Skill Development", description: "Build practical skills for future success", color: "#861109", Icon: TargetIcon },
  { id: 4, title: "Collaborative Learning", description: "Collaborate, learn, and grow together seamlessly", color: "#907507", Icon: UsersIcon },
  { id: 5, title: "Mobile-First Design", description: "Learn anytime, anywhere, on any device", color: "#2A7308", Icon: SmartphoneIcon },
  { id: 6, title: "Career Pathways", description: "Build skills. Advance your career confidently", color: "#67096E", Icon: GraduationCapIcon },
  { id: 7, title: "Customizable Interface", description: "Customize learning your way, effortlessly", color: "#8D0884", Icon: SettingsGearIcon },
  { id: 8, title: "Learning Insights", description: "Turn insights into smarter learning decisions", color: "#052C74", Icon: LibraryIcon },
  { id: 9, title: "Multi-Tenant", description: "Manage multiple organizations from one platform", color: "#3B1D5A", Icon: BuildingIcon },
  { id: 10, title: "Content Management", description: "Manage content with complete version control", color: "#09248F", Icon: ContentWritingIcon },
  { id: 11, title: "Adaptive Learning", description: "Personalized learning that adapts to everyone", color: "#134E4A", Icon: BrainIcon },
  { id: 12, title: "Learner Tracking", description: "Track every learner's complete learning journey", color: "#4E342E", Icon: AnalyticsUpIcon },
];

function OdysseyCard({ title, description, color, Icon }: { title: string; description: string; color: string; Icon: (props: { className?: string }) => JSX.Element }) {
  return (
    <div className="odyssey-card">
      <div className="odyssey-card-inner" style={{ borderColor: color }}>
        <div className="odyssey-card-bar" style={{ background: color }} />
        <div className="odyssey-card-icon-ring" aria-hidden="true">
          <div className="odyssey-card-icon-circle">
            <Icon className="odyssey-card-icon" />
          </div>
        </div>
        <div className="odyssey-card-text" style={{ color }}>
          <h3 className="odyssey-card-title">{title}</h3>
          <p className="odyssey-card-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

function LearningOdyssey({ onBookDemoClick, bookDemoButtonRef }: { onBookDemoClick: () => void; bookDemoButtonRef: RefObject<HTMLButtonElement | null> }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [arrowAnimationData, setArrowAnimationData] = useState<object | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    fetch("/animations/arrow-down-purple.json")
      .then((response) => response.json())
      .then((data) => setArrowAnimationData(data))
      .catch(() => setArrowAnimationData(null));
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const visibleCards = odysseyCards.slice(0, 4);
  const extraCards = odysseyCards.slice(4);

  return (
    <section className="odyssey-section" aria-labelledby="odyssey-heading">
      <div className="odyssey-heading-block">
        <h2 className="odyssey-heading" id="odyssey-heading">
          Embark on a <span className="odyssey-heading-accent">Learning Odyssey</span> with NeuroLXP
        </h2>
        <p className="odyssey-subtext">NeuroLXP is more than a learning Platform it is an intelligent platform designed to help learners grow, adapt, and succeed in a rapidly transforming digital society.</p>
        <button type="button" className="odyssey-demo-button" onClick={onBookDemoClick} ref={bookDemoButtonRef}>
          Book a demo
        </button>
      </div>

      <div className="odyssey-grid">
        {visibleCards.map((card) => (
          <OdysseyCard key={card.id} {...card} />
        ))}
      </div>

      <div className={`odyssey-extra-wrapper${isExpanded ? " odyssey-extra-open" : ""}`} id="odyssey-extra-cards" aria-hidden={!isExpanded}>
        <div className="odyssey-extra-inner">
          <div className="odyssey-grid">
            {extraCards.map((card) => (
              <OdysseyCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>

      <button type="button" className="odyssey-toggle-button" onClick={() => setIsExpanded((current) => !current)} aria-expanded={isExpanded} aria-controls="odyssey-extra-cards">
        <span className="odyssey-toggle-pill">
          <span className="odyssey-toggle-label">{isExpanded ? "View Less" : "View More"}</span>
        </span>
        <span className="odyssey-toggle-badge" aria-hidden="true">
          <span className="odyssey-toggle-badge-inner">{arrowAnimationData && <Lottie animationData={arrowAnimationData} loop autoplay={!prefersReducedMotion} className={`odyssey-toggle-icon${isExpanded ? " odyssey-toggle-icon-flipped" : ""}`} />}</span>
        </span>
      </button>
    </section>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M16 8C16 8 12 5 6 5V24C12 24 16 27 16 27C16 27 20 24 26 24V5C20 5 16 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8V27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GoalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M2 16C2 16 7 7 16 7C25 7 30 16 30 16C30 16 25 25 16 25C7 25 2 16 2 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="4.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function UsersGroupIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 25C9 20.5817 12.134 17 16 17C19.866 17 23 20.5817 23 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 23C2 19.6863 3.79086 17 6 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="26" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M30 23C30 19.6863 28.2091 17 26 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SchoolIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M4 28V10L16 4L28 10V28" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 28H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 28V19H21V28" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 13V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

type StoryMissionVisionCardData = {
  id: number;
  title: string;
  description: string;
  image: string;
  accentColor: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

const storyMissionVisionCards: StoryMissionVisionCardData[] = [
  {
    id: 1,
    title: "Our Story",
    description: "NeuroLXP transforms learning through an intelligent Learning Experience Platform empowering universities, enterprises, government, and training organizations with future-ready skills.",
    image: "/images/interested-coworkers-with-new-project.jpg",
    accentColor: "#2D4CC8",
    Icon: BookOpenIcon,
  },
  {
    id: 2,
    title: "Our Mission",
    description: "To transform learning and skilling through one intelligent ecosystem that empowers academic entities, corporates, and learners to achieve measurable, future-ready success.",
    image: "/images/interested-coworkers-project.jpg",
    accentColor: "#2A7308",
    Icon: GoalIcon,
  },
  {
    id: 3,
    title: "Our Vision",
    description: "To provide the world's most comprehensive digital learning and skilling ecosystem, shaping the future of lifelong learning through innovation, excellence, and inclusive growth.",
    image: "/images/coworkers-interested.png",
    accentColor: "#67096E",
    Icon: EyeIcon,
  },
];

type PlatformStatData = {
  id: number;
  value: string;
  label: string;
  accentColor: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

const platformStats: PlatformStatData[] = [
  { id: 1, value: "1M+", label: "Active Learners", accentColor: "#2D4CC8", Icon: UsersGroupIcon },
  { id: 2, value: "1000+", label: "Organizations", accentColor: "#2A7308", Icon: SchoolIcon },
  { id: 3, value: "10K+", label: "Courses & Modules", accentColor: "#BF1869", Icon: BookOpenIcon },
];

function StoryMissionVisionCard({ title, description, image, accentColor, Icon }: StoryMissionVisionCardData) {
  return (
    <div className="smv-card">
      <div className="smv-card-icon-ring" aria-hidden="true">
        <div className="smv-card-icon-circle" style={{ borderColor: accentColor, color: accentColor }}>
          <Icon className="smv-card-icon" />
        </div>
      </div>
      <div className="smv-card-underline" style={{ background: accentColor }}>
        <span className="smv-card-underline-dot" style={{ background: accentColor }} />
      </div>
      <h3 className="smv-card-title" style={{ color: accentColor }}>
        {title}
      </h3>
      <p className="smv-card-description">{description}</p>
      <div className="smv-card-image-frame">
        <Image src={image} alt={title} fill sizes="(max-width: 480px) 100vw, 348px" className="smv-card-image" />
      </div>
    </div>
  );
}

function PlatformStat({ value, label, accentColor, Icon }: PlatformStatData) {
  return (
    <div className="smv-stat">
      <div className="smv-stat-icon-ring" style={{ borderColor: accentColor }} aria-hidden="true">
        <span className="smv-stat-icon-wrap" style={{ color: accentColor }}>
          <Icon className="smv-stat-icon" />
        </span>
      </div>
      <div className="smv-stat-text">
        <span className="smv-stat-value" style={{ color: accentColor }}>
          {value}
        </span>
        <span className="smv-stat-label">{label}</span>
      </div>
    </div>
  );
}

function StoryMissionVision() {
  return (
    <section className="smv-section" aria-labelledby="smv-heading">
      <div className="smv-heading-block">
        <span className="smv-badge">
          About NeuroLXP<sup className="smv-badge-tm">TM</sup>
        </span>
        <h2 className="smv-heading" id="smv-heading">
          Our Story! Our Mission! Our Vision
        </h2>
        <p className="smv-subtext">At NeuroLXP, we&apos;re driven by purpose and a bold vision to transform learning, empowering learners and organizations to achieve more.</p>
      </div>

      <div className="smv-cards">
        {storyMissionVisionCards.map((card) => (
          <StoryMissionVisionCard key={card.id} {...card} />
        ))}
      </div>

      <div className="smv-stats">
        <div className="smv-stats-inner">
          {platformStats.map((stat) => (
            <PlatformStat key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

const platformOverviewItems = [
  { id: 1, label: "Universities", title: "Shaping future graduates", color: "#2D4CC8", Icon: GraduationCapIcon },
  { id: 2, label: "Colleges", title: "Building career pathways", color: "#861109", Icon: UniversityIcon },
  { id: 3, label: "Corporates", title: "Empowering future-ready teams", color: "#67096E", Icon: BuildingIcon },
  { id: 4, label: "NGOs", title: "Driving meaningful social impact", color: "#BF1869", Icon: HandshakeIcon },
  { id: 5, label: "Governments", title: "Future-ready workforce skilling", color: "#2A7308", Icon: LandmarkIcon },
  { id: 6, label: "Individuals", title: "Unlocking career opportunities", color: "#086F73", Icon: UserIcon },
];

function PlatformOverview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const raw = 1 - rect.top / window.innerHeight;
      const clamped = Math.min(Math.max(raw, 0), 1);
      setScrollProgress(clamped);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseWidth = 548;
  const maxWidth = 900;

  return (
    <section className="platform-overview-section" aria-labelledby="platform-overview-heading">
      <div className="platform-overview-inner">
        <div className="platform-overview-media">
          <div className="platform-overview-media-frame">
            <video className="platform-overview-video" src="/videos/6561564-uhd_3840_2160_25fps.mp4" autoPlay muted loop playsInline />
          </div>
        </div>

        <div className="platform-overview-content">
          <span className="platform-overview-tag">Platform Overview</span>
          <h2 className="platform-overview-heading" id="platform-overview-heading">
            NeuroLXP One Platform! Many Missions! One Future
          </h2>
          <div className="platform-overview-list">
            {platformOverviewItems.map((item, index) => (
              <div key={item.id} className="platform-overview-list-item" style={{ "--item-color": item.color } as CSSProperties}>
                <div className="platform-overview-number-badge" style={{ background: item.color }}>
                  {index + 1}
                </div>
                <div className="platform-overview-capsule">
                  <div className="platform-overview-icon-circle" style={{ color: item.color }} aria-hidden="true">
                    <item.Icon className="platform-overview-icon" />
                  </div>
                  <div className="platform-overview-item-text">
                    <span className="platform-overview-item-label" style={{ color: item.color }}>
                      {item.label}
                    </span>
                    <span className="platform-overview-item-title">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type PurposePillarData = {
  id: number;
  lines: [string, string];
  color: string;
};

const purposePillars: PurposePillarData[] = [
  { id: 1, lines: ["Every Institution has a", "Mission"], color: "#BF1869" },
  { id: 2, lines: ["Every Learner has a", "Dream"], color: "#67096E" },
  { id: 3, lines: ["Every organization needs", "future-ready talent"], color: "#861109" },
];

function PurposePill({ lines, color }: { lines: [string, string]; color: string }) {
  return (
    <div className="purpose-pill" style={{ borderColor: color }}>
      <span className="purpose-pill-line">{lines[0]}</span>
      <span className="purpose-pill-highlight" style={{ color }}>
        {lines[1]}
      </span>
    </div>
  );
}

function PlatformPurpose() {
  const [topPillar, leftPillar, rightPillar] = purposePillars;

  return (
    <section className="platform-purpose-section" aria-labelledby="platform-purpose-heading">
      <h2 className="platform-purpose-heading" id="platform-purpose-heading">
        One Platform! Every Learning and Skilling Purpose
      </h2>
      <div className="platform-purpose-pillars">
        <div className="platform-purpose-top">
          <PurposePill lines={topPillar.lines} color={topPillar.color} />
        </div>
        <div className="platform-purpose-bottom">
          <PurposePill lines={leftPillar.lines} color={leftPillar.color} />
          <PurposePill lines={rightPillar.lines} color={rightPillar.color} />
        </div>
      </div>
    </section>
  );
}

function MeetNeuroLXP() {
  return (
    <section className="meet-neurolxp-section" aria-labelledby="meet-neurolxp-heading">
      <div className="meet-neurolxp-frame">
        <div className="meet-neurolxp-overlay">
          <Image src="/images/friends-learning-with-laptop.png" alt="Students collaborating on a laptop" fill sizes="(min-width: 1312px) 1216px, 100vw" className="meet-neurolxp-image" />
        </div>
        <div className="meet-neurolxp-text">
          <span className="meet-neurolxp-badge">Meet NeuroLXP</span>
          <h2 className="meet-neurolxp-heading" id="meet-neurolxp-heading">
            Next-Generation Neomorphism learning Platform
          </h2>
          <p className="meet-neurolxp-subtext">Neomorphic platform for smarter learning.</p>
        </div>
      </div>
    </section>
  );
}

type WhyChooseCardData = {
  id: number;
  title: string;
  description: string;
  dashColor: string;
  iconBg: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

function WhyChooseDiscoverIcon({ className }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M20.5708 3.13932C19.2574 2.70672 17.854 2.47266 16.3958 2.47266C9.03203 2.47266 3.0625 8.44219 3.0625 15.806C3.0625 23.1697 9.03203 29.1393 16.3958 29.1393C23.7596 29.1393 29.7292 23.1697 29.7292 15.806C29.7292 14.4124 29.5153 13.0687 29.1188 11.806" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22.6663 16.0007C22.6663 19.6825 19.6815 22.6673 15.9997 22.6673C12.3178 22.6673 9.33301 19.6825 9.33301 16.0007C9.33301 12.3188 12.3178 9.33398 15.9997 9.33398" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 5.99935L16 15.9993M26 5.99935V2.66602M26 5.99935H29.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WhyChooseExcellenceIcon({ className }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M6 12.666C6 18.1888 10.4771 22.666 16 22.666C21.5228 22.666 26 18.1888 26 12.666C26 7.14316 21.5228 2.66602 16 2.66602C10.4771 2.66602 6 7.14316 6 12.666Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13.5556C12 13.5556 13 13.5556 14 15.3333C14 15.3333 17.1765 10.8889 20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.51 20L23.4036 24.2799C23.9777 27.0297 24.2648 28.4047 23.6751 29.0564C23.0855 29.708 22.0613 29.1475 20.0132 28.0264L16.9819 26.3671C16.4979 26.1021 16.2559 25.9697 16 25.9697C15.7441 25.9697 15.5021 26.1021 15.0181 26.3671L11.9868 28.0264C9.93863 29.1475 8.91456 29.708 8.32487 29.0564C7.73519 28.4047 8.02225 27.0297 8.59641 24.2799L9.49003 20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function WhyChooseEngageIcon({ className }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M17.3337 9.33333C17.3337 12.2789 14.9458 14.6667 12.0003 14.6667C9.05481 14.6667 6.66699 12.2789 6.66699 9.33333C6.66699 6.38781 9.05481 4 12.0003 4C14.9458 4 17.3337 6.38781 17.3337 9.33333Z" stroke="currentColor" strokeWidth="2" />
      <path d="M20 14.6667C22.9455 14.6667 25.3333 12.2789 25.3333 9.33333C25.3333 6.38781 22.9455 4 20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.667 18.666H9.33366C5.65177 18.666 2.66699 21.6508 2.66699 25.3327C2.66699 26.8055 3.8609 27.9993 5.33366 27.9993H18.667C20.1398 27.9993 21.3337 26.8055 21.3337 25.3327C21.3337 21.6508 18.3489 18.666 14.667 18.666Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22.667 18.666C26.3489 18.666 29.3337 21.6508 29.3337 25.3327C29.3337 26.8055 28.1398 27.9993 26.667 27.9993H24.667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhyChooseAnalyticsIcon({ className }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M9.33301 24.0007V21.334M15.9997 24.0007V20.0007M22.6663 24.0007V17.334M3.33301 16.0007C3.33301 10.0295 3.33301 7.04397 5.18799 5.18897C7.04299 3.33398 10.0286 3.33398 15.9997 3.33398C21.9707 3.33398 24.9563 3.33398 26.8114 5.18897C28.6663 7.04397 28.6663 10.0295 28.6663 16.0007C28.6663 21.9717 28.6663 24.9573 26.8114 26.8124C24.9563 28.6673 21.9707 28.6673 15.9997 28.6673C10.0286 28.6673 7.04299 28.6673 5.18799 26.8124C3.33301 24.9573 3.33301 21.9717 3.33301 16.0007Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.98926 15.3157C10.8627 15.4115 17.3785 14.9777 21.0846 9.09575M18.6561 8.38512L21.1567 7.98264C21.4615 7.94383 21.909 8.18445 22.019 8.47129L22.6802 10.6559" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const whyChooseCards: WhyChooseCardData[] = [
  { id: 1, title: "Get Discovered", description: "Launch your White Label LMS", dashColor: "#BCCF10", iconBg: "#BCCF10", Icon: WhyChooseDiscoverIcon },
  { id: 2, title: "Deliver Excellence", description: "Innovation in Learning", dashColor: "#BA06AE", iconBg: "#E50AD7", Icon: WhyChooseExcellenceIcon },
  { id: 3, title: "Engage Learners", description: "Smart Learning Notifications", dashColor: "#2DC8BB", iconBg: "#2DC8BB", Icon: WhyChooseEngageIcon },
  { id: 4, title: "Insightful Analytics", description: "Smarter Analytics. Greater Success", dashColor: "#BF1869", iconBg: "#F270AF", Icon: WhyChooseAnalyticsIcon },
];

function WhyChooseCard({ title, description, dashColor, iconBg, Icon }: WhyChooseCardData) {
  return (
    <div className="why-choose-card" style={{ "--dash-color": dashColor } as CSSProperties}>
      <div className="why-choose-icon-ring" aria-hidden="true">
        <div className="why-choose-icon-circle" style={{ background: iconBg }}>
          <Icon className="why-choose-icon" />
        </div>
      </div>
      {/* <div className="why-choose-diamond-shape" style={{ borderColor: dashColor }} /> */}
      <div className="why-choose-diamond-inner-shape" />
      <div className="why-choose-card-content">
        <h3 className="why-choose-card-title">{title}</h3>
        <p className="why-choose-card-description">{description}</p>
      </div>
    </div>
  );
}

function WhyChooseNeuroLXP() {
  return (
    <section className="why-choose-section" aria-labelledby="why-choose-heading">
      <div className="why-choose-content">
        <div className="why-choose-blob" aria-hidden="true" />
        <span className="why-choose-badge">Why Choose NeuroLXP</span>
        <div className="why-choose-body">
          <div className="why-choose-text">
            <h2 className="why-choose-heading" id="why-choose-heading">
              Transforming the <br />
              <span className="why-choose-heading-accent">Future of Digital Learning</span>
            </h2>
            <p className="why-choose-subtext">NeuroLXP empowers learners with personalized learning, future-ready skills, and meaningful outcomes.</p>
          </div>
          <div className="why-choose-grid">
            {whyChooseCards.map((card) => (
              <WhyChooseCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const learningModuleCards = [
  {
    id: 1,
    image: "/images/education-academy-certification-curriculum-icon.jpg",
    title: "Blended Learning",
    description: "Seamlessly combine online and in-person learning for a flexible, engaging, and effective learning experience.",
  },
  {
    id: 2,
    image: "/images/elevated-view-businessman-businesswoman-stacking-each-other-s-hand-project.jpg",
    title: "Career Growth",
    description: "Develop in-demand skills, monitor your achievements, and build a successful career through continuous learning.",
  },
  {
    id: 3,
    image: "/images/young-smiling-woman-using-digital-tablet-isolated-white.jpg",
    title: "Smart Learning Paths",
    description: "Navigate personalized learning experiences designed to accelerate growth, build future-ready skills, and achieve lasting success.",
  },
  {
    id: 4,
    image: "/images/group-businesswomen-working-office.jpg",
    title: "Immersive Learning",
    description: "Experience interactive content and collaborative learning that inspire engagement, build skills, and drive meaningful outcomes.",
  },
  {
    id: 5,
    image: "/images/exchanging-business-card-posing.jpg",
    title: "Smart Onboarding",
    description: "Accelerate employee onboarding with guided learning experiences that drive faster adaptation, engagement, and productivity.",
  },
  {
    id: 6,
    image: "/images/business-team-holding-meeting.jpg",
    title: "Standards Training",
    description: "Stay compliant with confidence. Empower every team with standards-based learning.",
  },
];

const CARD_CLONE_COUNT = 2;

const extendedLearningModuleCards = [...learningModuleCards.slice(-CARD_CLONE_COUNT), ...learningModuleCards, ...learningModuleCards.slice(0, CARD_CLONE_COUNT)];

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 47 47" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M10.5596 23.0107L36.4346 23.0311" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.0922 34.5208C21.0922 34.5208 9.59897 26.0421 9.60133 23.0116C9.60369 19.9812 21.1104 11.5208 21.1104 11.5208" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 47 47" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M35.4766 23.0291L9.60158 23.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.9253 34.5195C24.9253 34.5195 36.432 26.059 36.4343 23.0286C36.4367 19.9979 24.9434 11.5195 24.9434 11.5195" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LearningModuleCard({ title, description, image, isFeatured, isTextExpanded, isClone }: { title: string; description: string; image: string; isFeatured: boolean; isTextExpanded: boolean; isClone: boolean }) {
  const TitleTag = isClone ? "p" : "h3";
  return (
    <div className={`learning-module-card${isFeatured ? " learning-module-card-featured" : ""}`}>
      <div className="learning-module-image-frame">
        <Image src={image} alt={title} fill sizes="(max-width: 375px) 230px, (max-width: 480px) 290px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px" className="learning-module-image" />
      </div>
      <div className="learning-module-text">
        <TitleTag className="learning-module-title">{title}</TitleTag>
        <div className="learning-module-description-wrapper">
          <p className={`learning-module-description${isTextExpanded ? " learning-module-description-expanded" : ""}`}>{description}</p>
        </div>
      </div>
    </div>
  );
}

function LearningModules() {
  const realCount = learningModuleCards.length;
  const [trackIndex, setTrackIndex] = useState(CARD_CLONE_COUNT + 2);
  const [settledActiveId, setSettledActiveId] = useState(extendedLearningModuleCards[CARD_CLONE_COUNT + 2].id);
  const [transitionsEnabled, setTransitionsEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [translateX, setTranslateX] = useState(0);
  const isAnimatingRef = useRef(false);

  const activeId = extendedLearningModuleCards[trackIndex].id;

  const goToPreviousOnly = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setTrackIndex((current) => current - 1);
  };

  const goToNextOnly = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setTrackIndex((current) => current + 1);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      goToNextOnly();
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, trackIndex]);

  useEffect(() => {
    const recalculate = () => {
      const viewport = viewportRef.current;
      const activeCard = cardRefs.current[trackIndex];
      if (!viewport || !activeCard) return;
      const viewportCenter = viewport.offsetWidth / 2;
      const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
      setTranslateX(viewportCenter - cardCenter);
    };

    recalculate();

    const viewport = viewportRef.current;
    const handleCardResize = (event: TransitionEvent) => {
      if (event.propertyName === "width" || event.propertyName === "height") {
        recalculate();
        setSettledActiveId(activeId);
      }
    };

    viewport?.addEventListener("transitionend", handleCardResize);
    const fallbackTimer = setTimeout(() => {
      recalculate();
      setSettledActiveId(activeId);
    }, 550);
    window.addEventListener("resize", recalculate);

    return () => {
      window.removeEventListener("resize", recalculate);
      viewport?.removeEventListener("transitionend", handleCardResize);
      clearTimeout(fallbackTimer);
    };
  }, [trackIndex, activeId]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTrackTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== "transform") return;

      const isPastEnd = trackIndex >= CARD_CLONE_COUNT + realCount;
      const isBeforeStart = trackIndex < CARD_CLONE_COUNT;

      if (isPastEnd || isBeforeStart) {
        const nextIndex = isPastEnd ? trackIndex - realCount : trackIndex + realCount;
        const viewport = viewportRef.current;
        const nextCard = cardRefs.current[nextIndex];

        flushSync(() => {
          setTransitionsEnabled(false);
          setTrackIndex(nextIndex);
          if (viewport && nextCard) {
            const viewportCenter = viewport.offsetWidth / 2;
            const cardCenter = nextCard.offsetLeft + nextCard.offsetWidth / 2;
            setTranslateX(viewportCenter - cardCenter);
          }
        });
      } else {
        isAnimatingRef.current = false;
      }
    };

    track.addEventListener("transitionend", handleTrackTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTrackTransitionEnd);
  }, [trackIndex, realCount]);

  useEffect(() => {
    if (transitionsEnabled) return;
    const raf = requestAnimationFrame(() => {
      setTransitionsEnabled(true);
      isAnimatingRef.current = false;
    });
    return () => cancelAnimationFrame(raf);
  }, [transitionsEnabled]);

  return (
    <section className="learning-modules-section" aria-labelledby="learning-modules-heading" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onFocus={() => setIsHovered(true)} onBlur={() => setIsHovered(false)}>
      <div className="learning-modules-heading-block">
        <span className="learning-modules-badge">Learning Modules</span>
        <h2 className="learning-modules-heading" id="learning-modules-heading">
          Future Ready <span className="learning-modules-heading-accent">NeuroLXP</span> Learning Solutions
        </h2>
        <p className="learning-modules-subtext">Powerful, scalable modules designed to accelerate learning, build future-ready skills, and drive organizational success.</p>
      </div>

      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {`Now showing: ${extendedLearningModuleCards[trackIndex].title}`}
      </span>

      <div className="learning-modules-viewport" ref={viewportRef}>
        <div className="learning-modules-track" ref={trackRef} style={{ transform: `translateX(${translateX}px)`, transition: transitionsEnabled ? undefined : "none" }}>
          {extendedLearningModuleCards.map((card, index) => {
            const isClone = index < CARD_CLONE_COUNT || index >= CARD_CLONE_COUNT + realCount;
            return (
              <div
                key={`${card.id}-${index}`}
                aria-hidden={isClone}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}>
                <LearningModuleCard title={card.title} description={card.description} image={card.image} isFeatured={card.id === activeId} isTextExpanded={card.id === activeId && card.id === settledActiveId} isClone={isClone} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="learning-modules-nav">
        <button type="button" className="learning-modules-nav-button" onClick={goToPreviousOnly} aria-label="Previous module">
          <ArrowLeftIcon className="learning-modules-nav-icon" />
        </button>
        <button type="button" className="learning-modules-nav-button" onClick={goToNextOnly} aria-label="Next module">
          <ArrowRightIcon className="learning-modules-nav-icon" />
        </button>
      </div>
    </section>
  );
}

type TestimonialData = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  accentColor: string;
};

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Sara Thomas",
    role: "Software Engineer",
    quote: "NeuroLXP made learning faster and more engaging. The personalized learning paths helped me build new skills with confidence.",
    image: "/images/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w.jpg",
    accentColor: "#2DC8BB",
  },
  {
    id: 2,
    name: "John Thomas",
    role: "Institute Admin",
    quote: "Managing courses and learners is now seamless. NeuroLXP has simplified administration and improved learner engagement.",
    image: "/images/happy-business-man-wearing-grey-suit-standing-isolated-white-wall.jpg",
    accentColor: "#67096E",
  },
  {
    id: 3,
    name: "Ramesh",
    role: "Lecturer",
    quote: "NeuroLXP makes course delivery effortless. Interactive learning and real-time insights keep my learners engaged.",
    image: "/images/confident-businessman.jpg",
    accentColor: "#907507",
  },
  {
    id: 4,
    name: "Joanna",
    role: "Software Engineer",
    quote: "NeuroLXP made learning faster and more engaging. The personalized learning paths helped me build new skills with confidence.",
    image: "/images/confident-young-businesswoman.jpg",
    accentColor: "#BF1869",
  },
  {
    id: 5,
    name: "Janoah",
    role: "Institute Admin",
    quote: "Managing courses and learners is now seamless. NeuroLXP has simplified administration and improved learner engagement.",
    image: "/images/young-businesswoman.jpg",
    accentColor: "#67096E",
  },
  {
    id: 6,
    name: "Aben Sabu",
    role: "Lecturer",
    quote: "NeuroLXP makes course delivery effortless. Interactive learning and real-time insights keep my learners engaged.",
    image: "/images/happy-businessman.jpg",
    accentColor: "#861109",
  },
];

const TESTIMONIAL_CLONE_COUNT = 2;

const extendedTestimonials = [...testimonials.slice(-TESTIMONIAL_CLONE_COUNT), ...testimonials, ...testimonials.slice(0, TESTIMONIAL_CLONE_COUNT)];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 17 17" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M9.16237 2.30291L10.3337 4.66963C10.4934 4.99909 10.9198 5.31531 11.2798 5.37608L13.4059 5.73396C14.7656 5.96355 15.0848 6.95851 14.1041 7.93901L12.4496 9.60451C12.1694 9.88656 12.0157 10.4308 12.102 10.8208L12.5737 12.8845C12.9457 14.518 12.0853 15.1491 10.6528 14.2944L8.66061 13.1032C8.30085 12.8879 7.70758 12.8874 7.34075 13.1022L5.34673 14.2902C3.91954 15.1427 3.05348 14.5035 3.42805 12.8773L3.90295 10.8143C3.98991 10.4245 3.83702 9.88001 3.55727 9.59752L1.90544 7.92943C0.932981 6.94739 1.24706 5.95293 2.60709 5.72548L4.7338 5.37093C5.08714 5.31072 5.51401 4.99517 5.67425 4.66597L6.8493 2.3011C7.49024 1.01789 8.53011 1.0187 9.16237 2.30291Z" fill="#BCCF10" />
    </svg>
  );
}

function TestimonialCard({ name, role, quote, image, accentColor, isClone }: TestimonialData & { isClone: boolean }) {
  const NameTag = isClone ? "p" : "h3";
  return (
    <div className="testimonial-card-wrapper">
      <div className="testimonial-photo-frame">
        <div className="testimonial-photo-inner">
          <Image src={image} alt={name} fill sizes="(max-width: 480px) 90px, (max-width: 768px) 110px, 154px" className="testimonial-photo" />
        </div>
      </div>
      <div className="testimonial-card" style={{ borderRightColor: accentColor }}>
        <div className="testimonial-rating-badge" role="img" aria-label="Rated 5 out of 5">
          <span className="testimonial-rating-number" aria-hidden="true">
            5
          </span>
          <StarIcon className="testimonial-rating-star" />
        </div>
        <div className="testimonial-content">
          <div className="testimonial-person">
            <NameTag className="testimonial-name">{name}</NameTag>
            <span className="testimonial-role">{role}</span>
          </div>
          <div className="testimonial-underline" style={{ background: accentColor }} />
          <p className="testimonial-quote">{quote}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const realCount = testimonials.length;
  const [trackIndex, setTrackIndex] = useState(TESTIMONIAL_CLONE_COUNT + 1);
  const [transitionsEnabled, setTransitionsEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [translateX, setTranslateX] = useState(0);
  const isAnimatingRef = useRef(false);

  const goToPreviousOnly = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setTrackIndex((current) => current - 1);
  };

  const goToNextOnly = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setTrackIndex((current) => current + 1);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      goToNextOnly();
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, trackIndex]);

  useEffect(() => {
    const recalculate = () => {
      const viewport = viewportRef.current;
      const activeCard = cardRefs.current[trackIndex];
      if (!viewport || !activeCard) return;
      const viewportCenter = viewport.offsetWidth / 2;
      const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
      setTranslateX(viewportCenter - cardCenter);
    };
    recalculate();
    window.addEventListener("resize", recalculate);
    return () => window.removeEventListener("resize", recalculate);
  }, [trackIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleTrackTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== "transform") return;

      const isPastEnd = trackIndex >= TESTIMONIAL_CLONE_COUNT + realCount;
      const isBeforeStart = trackIndex < TESTIMONIAL_CLONE_COUNT;

      if (isPastEnd || isBeforeStart) {
        const nextIndex = isPastEnd ? trackIndex - realCount : trackIndex + realCount;
        const viewport = viewportRef.current;
        const nextCard = cardRefs.current[nextIndex];

        flushSync(() => {
          setTransitionsEnabled(false);
          setTrackIndex(nextIndex);
          if (viewport && nextCard) {
            const viewportCenter = viewport.offsetWidth / 2;
            const cardCenter = nextCard.offsetLeft + nextCard.offsetWidth / 2;
            setTranslateX(viewportCenter - cardCenter);
          }
        });
      } else {
        isAnimatingRef.current = false;
      }
    };

    track.addEventListener("transitionend", handleTrackTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTrackTransitionEnd);
  }, [trackIndex, realCount]);

  useEffect(() => {
    if (transitionsEnabled) return;
    const raf = requestAnimationFrame(() => {
      setTransitionsEnabled(true);
      isAnimatingRef.current = false;
    });
    return () => cancelAnimationFrame(raf);
  }, [transitionsEnabled]);

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onFocus={() => setIsHovered(true)} onBlur={() => setIsHovered(false)}>
      <div className="testimonials-heading-block">
        <span className="testimonials-badge">Testimonials</span>
        <h2 className="testimonials-heading" id="testimonials-heading">
          Success Powered by <span className="testimonials-heading-accent">NeuroLXP</span>
        </h2>
        <p className="testimonials-subtext">NeuroLXP made learning engaging, simple, and truly effective for our learners.</p>
      </div>

      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {`Now showing testimonial from ${extendedTestimonials[trackIndex].name}`}
      </span>

      <div className="testimonials-viewport" ref={viewportRef}>
        <div className="testimonials-track" ref={trackRef} style={{ transform: `translateX(${translateX}px)`, transition: transitionsEnabled ? undefined : "none" }}>
          {extendedTestimonials.map((testimonial, index) => {
            const isClone = index < TESTIMONIAL_CLONE_COUNT || index >= TESTIMONIAL_CLONE_COUNT + realCount;
            return (
              <div
                key={`${testimonial.id}-${index}`}
                aria-hidden={isClone}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}>
                <TestimonialCard {...testimonial} isClone={isClone} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="testimonials-nav">
        <button type="button" className="testimonials-nav-button" onClick={goToPreviousOnly} aria-label="Previous testimonial">
          <ArrowLeftIcon className="testimonials-nav-icon" />
        </button>
        <button type="button" className="testimonials-nav-button" onClick={goToNextOnly} aria-label="Next testimonial">
          <ArrowRightIcon className="testimonials-nav-icon" />
        </button>
      </div>
    </section>
  );
}

type FAQItemData = {
  id: number;
  number: string;
  title: string;
  answer: string;
  colorStart: string;
  colorEnd: string;
};

const faqItems: FAQItemData[] = [
  {
    id: 1,
    number: "01",
    title: "What is NeuroLXP?",
    answer: "NeuroLXP™ is a next-generation Learning Experience Platform (LXP) that transforms how organizations design, deliver, and manage learning through personalized, engaging, and scalable learning experiences.",
    colorStart: "#2D4CC8",
    colorEnd: "#162562",
  },
  {
    id: 2,
    number: "02",
    title: "Who is NeuroLXP designed for?",
    answer: "NeuroLXP™ is purpose-built for academic institutions, corporates, skilling academies, NGOs, trusts, and government skill development programs.",
    colorStart: "#BF1869",
    colorEnd: "#590B31",
  },
  {
    id: 3,
    number: "03",
    title: "How is NeuroLXP different from an LMS?",
    answer: "Unlike a conventional LMS that focuses on course administration, NeuroLXP™ delivers learner-centric experiences through personalization, skill-based learning, collaboration, and continuous development.",
    colorStart: "#861109",
    colorEnd: "#200402",
  },
  {
    id: 4,
    number: "04",
    title: "Why is NeuroLXP groundbreaking?",
    answer: "NeuroLXP™ reimagines digital learning by combining intelligent personalization, modern learning experiences, scalable architecture, and data-driven insights into a unified platform built for the future of education and workforce development.",
    colorStart: "#162562",
    colorEnd: "#2D4CC8",
  },
  {
    id: 5,
    number: "05",
    title: "Does NeuroLXP support all organization size?",
    answer: "Yes. NeuroLXP™ is designed to scale effortlessly - from schools and universities to enterprises, skilling academies, NGOs, and nationwide government learning initiatives.",
    colorStart: "#67096E",
    colorEnd: "#C712D4",
  },
];

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M5.51691 10.2668L18.5199 10.277C19.3481 10.2777 20.0188 10.9499 20.0177 11.7782C20.0164 12.6057 19.345 13.2757 18.5175 13.275L5.51456 13.2648C4.68667 13.2642 4.01605 12.5925 4.01671 11.7646C4.01736 10.9367 4.68902 10.2662 5.51691 10.2668Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 25 25" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M12.017 19.5737C12.8449 19.5743 13.5166 18.9038 13.5172 18.0759L13.5212 13.0729L18.5232 13.0768C19.3507 13.0774 20.0221 12.4075 20.0233 11.58C20.0245 10.7517 19.3537 10.0794 18.5255 10.0788L13.5235 10.0749L13.5274 5.0729C13.5281 4.24539 12.8581 3.57389 12.0306 3.57269C11.2023 3.5715 10.5301 4.24228 10.5294 5.07055L10.5255 10.0725L5.52254 10.0686C4.69466 10.0679 4.02299 10.7385 4.02234 11.5664C4.02169 12.3943 4.6923 13.0659 5.52018 13.0666L10.5232 13.0705L10.5192 18.0735C10.5186 18.9014 11.1891 19.573 12.017 19.5737Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FAQItem({ item, isOpen, onToggle }: { item: FAQItemData; isOpen: boolean; onToggle: () => void }) {
  const buttonId = `faq-question-${item.id}`;
  const panelId = `faq-answer-${item.id}`;

  return (
    <div className="faq-item">
      <h3 className="faq-item-heading">
        <button type="button" id={buttonId} className="faq-item-header" onClick={onToggle} aria-expanded={isOpen} aria-controls={panelId}>
          <div className="faq-item-header-left">
            <span className="faq-item-triangle" style={{ borderLeftColor: item.colorStart }} aria-hidden="true" />
            <span className="faq-item-number" style={{ backgroundImage: `linear-gradient(180deg, ${item.colorStart} 0%, ${item.colorEnd} 100%)` }} aria-hidden="true">
              {item.number}
            </span>
            <span className="faq-item-divider" style={{ backgroundImage: `linear-gradient(180deg, ${item.colorStart} 0%, ${item.colorEnd} 100%)` }} aria-hidden="true" />
            <span className="faq-item-title">{item.title}</span>
          </div>
          <span className="faq-item-toggle" style={{ color: item.colorStart }} aria-hidden="true">
            {isOpen ? <MinusIcon className="faq-item-toggle-icon" /> : <PlusIcon className="faq-item-toggle-icon" />}
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className={`faq-item-answer-wrapper${isOpen ? " faq-item-answer-open" : ""}`} aria-hidden={!isOpen}>
        <div className="faq-item-answer-inner">
          <p className="faq-item-answer">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-card">
        <div className="faq-background-image" aria-hidden="true">
          <Image src="/images/fc52be16-4788-44b6-9212-f93370a7f939 2.png" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="faq-background-photo" />
        </div>
        <div className="faq-content">
          <div className="faq-left">
            <h2 className="faq-heading" id="faq-heading">
              Frequently Asked <span className="faq-heading-accent">Question</span>
            </h2>
            <div className="faq-illustration">
              <Image src="/images/Adobe Express - file - 2026-07-02T153440.006.png" alt="Question and answer illustration" fill sizes="(max-width: 1024px) 100vw, 432px" className="faq-illustration-image" />
            </div>
          </div>
          <div className="faq-right">
            {faqItems.map((item, index) => (
              <FAQItem key={item.id} item={item} isOpen={index === activeIndex} onToggle={() => handleToggle(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeadphonesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M20.0849 16.1582C20.5849 14.6582 21 12.595 21 11.1582C21 6.18764 16.9706 2.1582 12 2.1582C7.02944 2.1582 3 6.18764 3 11.1582C3 12.595 3.41512 14.6582 3.91512 16.1582" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.97651 18.7605L7.23857 13.7689C7.05341 13.3028 6.4617 13.0693 5.97493 13.1859C4.46441 13.6895 3.6462 15.328 4.14742 16.8457L4.58543 18.172C5.08664 19.6896 6.71747 20.5117 8.22799 20.0081C8.68896 19.8118 9.10449 19.2459 8.97651 18.7605Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.7716 20.0081L16.761 13.7689C16.9462 13.3028 17.5379 13.0693 18.0247 13.1859C19.5352 13.6895 20.3534 15.328 19.8522 16.8457L19.4142 18.172C18.913 19.6896 17.2821 20.5117 15.7716 20.0081ZM15.7716 20.0081C15.3106 19.8118 15.6436 20.4935 15.7716 20.0081Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GetInTouch() {
  return (
    <section className="get-in-touch-section" aria-labelledby="get-in-touch-heading">
      <div className="get-in-touch-blob" aria-hidden="true" />
      <div className="get-in-touch-content">
        <div className="get-in-touch-text">
          <span className="get-in-touch-badge">Get in touch</span>
          <div className="get-in-touch-copy">
            <h2 className="get-in-touch-heading" id="get-in-touch-heading">
              Learn Smarter <br />
              with <span className="get-in-touch-heading-accent">NeuroLXP</span>
            </h2>
            <p className="get-in-touch-subtext">Have questions? Our experts are here to help.</p>
          </div>
          <Link href="/contact" className="get-in-touch-button">
            <span className="get-in-touch-button-label">Contact Us</span>
            <HeadphonesIcon className="get-in-touch-button-icon" />
          </Link>
        </div>
        <div className="get-in-touch-media">
          <div className="get-in-touch-frame" />
          <div className="get-in-touch-photo-wrapper">
            <Image src="/images/smiling-blonde-business-woman-eyeglasses-with-pen-hand-having-idea-looking-away-white-wall.png" alt="Smiling businesswoman with glasses" fill sizes="(max-width: 480px) 280px, (max-width: 1024px) 380px, 677px" className="get-in-touch-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true" focusable="false">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BookDemoModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dialogRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="book-demo-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}>
      <div className="book-demo-modal-dialog" role="dialog" aria-modal="true" aria-label="Book a demo" ref={dialogRef} tabIndex={-1}>
        <button type="button" className="book-demo-modal-close" onClick={onClose} aria-label="Close book a demo form">
          <CloseIcon className="book-demo-modal-close-icon" />
        </button>
        <BookADemo />
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const bookDemoButtonRef = useRef<HTMLButtonElement>(null);

  const openBookDemo = () => setIsBookDemoOpen(true);
  const closeBookDemo = () => {
    setIsBookDemoOpen(false);
    bookDemoButtonRef.current?.focus();
  };

  return (
    <main id="main-content">
      <HeroCarousel />
      <LearningOdyssey onBookDemoClick={openBookDemo} bookDemoButtonRef={bookDemoButtonRef} />
      <StoryMissionVision />
      <PlatformOverview />
      <PlatformPurpose />
      <MeetNeuroLXP />
      <WhyChooseNeuroLXP />
      <LearningModules />
      <Testimonials />
      <FAQSection />
      <GetInTouch />
      {isBookDemoOpen && <BookDemoModal onClose={closeBookDemo} />}
    </main>
  );
}
