"use client";

import { useState, type ReactElement, type CSSProperties } from "react";
import Image from "next/image";
import "./personalized-learning-paths.css";

function ArrowRightDouble() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="plp-breadcrumb-arrow">
      <path d="M8.33398 12C8.33398 12 12.334 9.05407 12.334 8C12.334 6.94587 8.33398 4 8.33398 4" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.66605 12C3.66605 12 7.66602 9.05407 7.66602 8C7.66602 6.94587 3.66602 4 3.66602 4" stroke="#31344B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type StageData = {
  number: string;
  color: string;
  stageLabel: string;
  title: string;
  subtitle: string;
  checklist: string[];
  note: string;
  mastery: number;
  ringChecklist: string[];
  modules: number;
  duration: string;
};

const stages: StageData[] = [
  {
    number: "01",
    color: "#BF1869",
    stageLabel: "STAGE 1",
    title: "Foundation",
    subtitle: "Build Core Knowledge and Conceptual Clarity",
    checklist: ["Core principles and essential knowledge", "Fundamental concepts and frameworks", "Foundational learning modules"],
    note: "This stage prepares learners for advanced skill development and deeper learning.",
    mastery: 25,
    ringChecklist: ["Core Concepts", "Frameworks", "Foundation", "Principle"],
    modules: 4,
    duration: "3 weeks",
  },
  {
    number: "02",
    color: "#2D4CC8",
    stageLabel: "STAGE 2",
    title: "Skill Development",
    subtitle: "Transform Knowledge into Practical Skills",
    checklist: ["Practical learning exercises", "Analytical thinking development", "Guided problem-solving activities"],
    note: "Learners start building real-world competencies and professional capabilities.",
    mastery: 50,
    ringChecklist: ["Problem Solving", "Analytics", "Applied Skills", "Practice"],
    modules: 6,
    duration: "4 weeks",
  },
  {
    number: "03",
    color: "#67096E",
    stageLabel: "STAGE 3",
    title: "Advanced Capability",
    subtitle: "Develop Expertise and Strategic Thinking",
    checklist: ["Complex learning scenarios", "Real-world application projects", "Strategic problem-solving frameworks"],
    note: "Learners strengthen professional confidence and advanced decision-making skills.",
    mastery: 75,
    ringChecklist: ["Strategy", "Expert Thinking", "Leadership", "Decision Making"],
    modules: 8,
    duration: "5 weeks",
  },
  {
    number: "04",
    color: "#2A7308",
    stageLabel: "STAGE 4",
    title: "Performance Readiness",
    subtitle: "Prepare for Real-World Success",
    checklist: ["Project-based learning experiences", "Real-world implementations", "Capability validation and assessment"],
    note: "Learners complete their journey ready for confident professional performance.",
    mastery: 100,
    ringChecklist: ["Capstone Projects", "Assessment", "Career Readiness", "Validation"],
    modules: 10,
    duration: "6 weeks",
  },
];

function CheckCircle({ color, size = 24 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="plp-check-icon">
      <circle cx="12" cy="12" r="10" fill={color} />
      <path d="M8 12.5L10.5 15L16 9" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightBig({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="plp-stage-arrow">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckCircleOutline({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="plp-check-icon">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <path d="M8 12.5L10.5 15L16 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDouble() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 6l7 5.5L19 6" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12.5l7 5.5 7-5.5" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClipboardCheckIcon({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M12 6H20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6a3 3 0 0 1 6 0" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 18l2.5 2.5L20 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AnalyticsUpIcon({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="5" y="5" width="22" height="22" rx="4" stroke={color} strokeWidth="2" />
      <path d="M9 20v-4M15 20v-8M21 20v-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l5-4 4 3 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="11" r="5" stroke={color} strokeWidth="2" />
      <path d="M6 27c0-5.523 4.477-9 10-9s10 3.477 10 9" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function RefreshIcon({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6 16a10 10 0 0 1 17-7.1L26 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 6v6h-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 16a10 10 0 0 1-17 7.1L6 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 26v-6h6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ActivityIcon({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M4 16h5l3-9 6 18 3-9h7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="14" cy="18" r="10" stroke={color} strokeWidth="2" />
      <circle cx="14" cy="18" r="4" stroke={color} strokeWidth="2" />
      <path d="M21 11l5-5m0 0h-4m4 0v4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MasteryRing({ percent, color }: { percent: number; color: string }) {
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="plp-mastery-ring-base">
      <div className="plp-mastery-ring">
        <svg width="176" height="176" viewBox="0 0 176 176" className="plp-mastery-ring-svg">
          <circle cx="88" cy="88" r={radius} stroke={color} strokeOpacity="0.08" strokeWidth="20" fill="none" />
          <circle cx="88" cy="88" r={radius} stroke={color} strokeWidth="20" strokeLinecap="round" fill="none" strokeDasharray={circumference} strokeDashoffset={offset} transform="rotate(-90 88 88)" />
        </svg>
        <div className="plp-mastery-ring-label">
          <span className="plp-mastery-ring-percent" style={{ color }}>
            {percent}%
          </span>
          <span className="plp-mastery-ring-text">Mastery</span>
        </div>
      </div>
    </div>
  );
}

function StageCard({ stage }: { stage: StageData }) {
  return (
    <div className="plp-stage-row">
      <div className="plp-stage-marker">
        <div className="plp-stage-circle-outer">
          <div className="plp-stage-circle" style={{ borderColor: stage.color }}>
            <span className="plp-stage-number" style={{ color: stage.color }}>
              {stage.number}
            </span>
          </div>
        </div>
      </div>

      <div className="plp-stage-card">
        <div className="plp-stage-content">
          <span className="plp-stage-label" style={{ color: stage.color }}>
            {stage.stageLabel}
          </span>
          <h3 className="plp-stage-title">{stage.title}</h3>
          <p className="plp-stage-subtitle">{stage.subtitle}</p>

          <ul className="plp-stage-checklist">
            {stage.checklist.map((item) => (
              <li key={item} className="plp-stage-checklist-item" style={{ "--stage-accent": stage.color } as CSSProperties}>
                <CheckCircle color="#2A7308" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="plp-stage-divider" style={{ borderColor: stage.color }} />

          <div className="plp-stage-note-row">
            <ArrowRightBig color={stage.color} />
            <p className="plp-stage-note">{stage.note}</p>
          </div>
        </div>

        <div className="plp-stage-side">
          <div className="plp-stage-ring-row">
            <MasteryRing percent={stage.mastery} color={stage.color} />

            <ul className="plp-stage-ring-checklist">
              {stage.ringChecklist.map((item) => (
                <li key={item} className="plp-stage-ring-checklist-item">
                  <span className="plp-ring-check-icon-wrap">
                    <CheckCircleOutline color="#2A7308" />
                  </span>
                  <span className="plp-ring-check-label">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="plp-stage-stats">
            <div className="plp-stage-stat">
              <span className="plp-stage-stat-value" style={{ color: stage.color }}>
                {stage.modules}
              </span>
              <span className="plp-stage-stat-label">Modules</span>
            </div>
            <div className="plp-stage-stat">
              <span className="plp-stage-stat-value" style={{ color: stage.color }}>
                {stage.duration}
              </span>
              <span className="plp-stage-stat-label">Duration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type HowItWorksStep = {
  key: string;
  color: string;
  title: string;
  description: string;
  Icon: (props: { color: string }) => ReactElement;
};

const howItWorksSteps: HowItWorksStep[] = [
  { key: "assess", color: "#2D4CC8", title: "Assess", description: "Understand learner needs, knowledge, and goals.", Icon: ClipboardCheckIcon },
  { key: "analyse", color: "#BF1869", title: "Analyse", description: "Use learning data to identify progress and gaps.", Icon: AnalyticsUpIcon },
  { key: "personalize", color: "#67096E", title: "Personalize", description: "Recommend relevant content and learning activities.", Icon: UserIcon },
  { key: "adapt", color: "#C05512", title: "Adapt", description: "Adjust the learning journey based on performance.", Icon: RefreshIcon },
  { key: "track", color: "#2A7308", title: "Track", description: "Monitor progress throughout the learning journey.", Icon: ActivityIcon },
  { key: "master", color: "#907507", title: "Master", description: "Build validated skills for real-world application.", Icon: TargetIcon },
];

const challengeItems = ["Clear Milestones", "Logical Progression", "Competency Development", "Continuous Analytics"];

type BenefitTab = {
  id: string;
  label: string;
  imageStyle: "cutout" | "cover";
  photo: string;
  photoAlt: string;
  checklist: string[];
};

const benefitTabs: BenefitTab[] = [
  {
    id: "learners",
    label: "For Learners",
    imageStyle: "cutout",
    photo: "/images/photot-handsome-male-student.webp",
    photoAlt: "Two students holding books",
    checklist: ["Clear learning journey", "Greater confidence", "Practical skill development", "Faster career readiness"],
  },
  {
    id: "institutions",
    label: "Educational Institutions",
    imageStyle: "cover",
    photo: "/images/handsome-male-student.webp",
    photoAlt: "Three students walking down campus steps",
    checklist: ["Structured curriculum delivery", "Competency-based learning", "Measurable learner outcomes", "Progress visibility"],
  },
  {
    id: "organizations",
    label: "Training Organizations",
    imageStyle: "cover",
    photo: "/images/hadsome-male-student-groupmate.webp",
    photoAlt: "Corporate trainer presenting to a seated group in an office",
    checklist: ["Standardized learning journeys", "Skill-based development", "Performance tracking", "Scalable training"],
  },
];

function HowItWorksCard({ step, isOpen, onToggle }: { step: HowItWorksStep; isOpen: boolean; onToggle: () => void }) {
  const { Icon } = step;
  return (
    <div className={`plp-how-card${isOpen ? " plp-how-card-open" : ""}`}>
      <button type="button" className="plp-how-card-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="plp-how-icon-title">
          <span className="plp-how-icon-circle" style={{ borderColor: step.color }}>
            <Icon color={step.color} />
          </span>
          <span className="plp-how-title" style={{ color: step.color }}>
            {step.title}
          </span>
        </span>
        <span className={`plp-how-chevron${isOpen ? " plp-how-chevron-open" : ""}`}>
          <ChevronDouble />
        </span>
      </button>

      <div className="plp-how-panel-wrap">
        <div className="plp-how-panel">
          <div className="plp-how-panel-inner">
            <p className="plp-how-panel-text">{step.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitsSection() {
  const [activeTabId, setActiveTabId] = useState("learners");
  const activeTab = benefitTabs.find((tab) => tab.id === activeTabId) ?? benefitTabs[0];

  return (
    <section className="plp-benefits">
      <span className="plp-hero-pill">Benefits</span>

      <h2 className="plp-section-heading">Benefits of Learning Paths</h2>

      <p className="plp-section-subtext">Whether you are a learner, an academic institution, or a corporate training organization NeuroLXP Learning Paths deliver measurable, transformational impact.</p>

      <div className="plp-benefits-tabs">
        {benefitTabs.map((tab) => (
          <button key={tab.id} type="button" className={`plp-benefits-tab${activeTabId === tab.id ? " plp-benefits-tab-active" : ""}`} onClick={() => setActiveTabId(tab.id)} aria-pressed={activeTabId === tab.id}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="plp-benefits-outer">
        <div className="plp-benefits-photo-wrap">
          {activeTab.imageStyle === "cutout" ? (
            <>
              <Image src="/images/personalised-learning-background.webp" alt="" fill className="plp-benefits-pattern-bg" />
              <div className="plp-benefits-cutout-photo-wrap">
                <Image src={activeTab.photo} alt={activeTab.photoAlt} fill className="plp-benefits-cutout-photo" />
              </div>
            </>
          ) : (
            <Image src={activeTab.photo} alt={activeTab.photoAlt} fill className="plp-benefits-cover-photo" />
          )}
        </div>

        <ul className="plp-benefits-checklist-grid">
          {activeTab.checklist.map((item) => (
            <li key={item} className="plp-benefits-checklist-item">
              <span className="plp-benefits-badge">
                <CheckCircle color="#2A7308" size={24} />
              </span>
              <span className="plp-benefits-item-label">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function PersonalizedLearningPathsPage() {
  const [openStep, setOpenStep] = useState<string | null>(null);

  return (
    <main className="plp-page">
      <nav className="plp-breadcrumb">
        <span className="plp-breadcrumb-item">Features</span>
        <ArrowRightDouble />
        <span className="plp-breadcrumb-item">Learning</span>
        <ArrowRightDouble />
        <span className="plp-breadcrumb-current">Personalized Learning Paths</span>
      </nav>

      <section className="plp-hero">
        <span className="plp-hero-pill">Personalized Learning Paths</span>

        <h1 className="plp-hero-heading">
          Empower <span className="plp-hero-heading-accent">Learning Journey</span> Tailored For Success
        </h1>

        <p className="plp-hero-subtext">NeuroLXP personalizes learning journeys to build skills, knowledge, and career readiness.</p>

        <div className="plp-hero-visual">
          <div className="plp-hero-image-frame">
            <div className="plp-hero-image-wrap">
              <Image src="/images/roommates-using-laptop.webp" alt="Learner using a laptop" fill className="plp-hero-image" />
            </div>
          </div>

          <div className="plp-hero-stats">
            <div className="plp-stat-card plp-stat-card-green">
              <span className="plp-stat-value plp-stat-green">20–30%</span>
              <span className="plp-stat-label">Improved Engagement</span>
            </div>
            <div className="plp-stat-card plp-stat-card-blue">
              <span className="plp-stat-value plp-stat-blue">25–35%</span>
              <span className="plp-stat-label">Enhanced Retention</span>
            </div>
            <div className="plp-stat-card plp-stat-card-purple">
              <span className="plp-stat-value plp-stat-purple">15–20%</span>
              <span className="plp-stat-label">Higher Success Rates</span>
            </div>
            <div className="plp-stat-card plp-stat-card-pink">
              <span className="plp-stat-value plp-stat-pink">60–70%</span>
              <span className="plp-stat-label">Dominant Style Learners</span>
            </div>
          </div>
        </div>
      </section>

      <section className="plp-personalization">
        <span className="plp-hero-pill">Intelligent Personalization</span>

        <h2 className="plp-section-heading">
          Learning Designed Around <span className="plp-section-heading-accent">Every Learner</span>
        </h2>

        <p className="plp-section-subtext">NeuroLXP adapts learning experiences based on learner needs, preferences, progress, and performance.</p>

        <div className="plp-personalization-grid">
          <div className="plp-personalization-card plp-personalization-card-pink">
            <h3 className="plp-personalization-title plp-title-pink">Learning Insights</h3>
            <p className="plp-personalization-desc">Understand learner needs.</p>
          </div>
          <div className="plp-personalization-card plp-personalization-card-blue">
            <h3 className="plp-personalization-title plp-title-blue">Personalized Paths</h3>
            <p className="plp-personalization-desc">Personalize learning paths.</p>
          </div>
          <div className="plp-personalization-card plp-personalization-card-purple">
            <h3 className="plp-personalization-title plp-title-purple">Adaptive Learning</h3>
            <p className="plp-personalization-desc">Deliver relevant content.</p>
          </div>
          <div className="plp-personalization-card plp-personalization-card-olive">
            <h3 className="plp-personalization-title plp-title-olive">Learning Analytics</h3>
            <p className="plp-personalization-desc">Improve outcomes with data.</p>
          </div>
        </div>
      </section>

      <section className="plp-stages">
        <span className="plp-hero-pill">Stages</span>

        <h2 className="plp-section-heading">Four Progressive Stages of Mastery</h2>

        <p className="plp-section-subtext">NeuroLXP builds knowledge and skills through structured stages toward career-ready performance.</p>

        <div className="plp-stages-timeline">
          <div className="plp-stages-track" />
          {stages.map((stage) => (
            <StageCard key={stage.number} stage={stage} />
          ))}
        </div>
      </section>

      <section className="plp-how">
        <span className="plp-hero-pill">How It Works</span>

        <h2 className="plp-section-heading">Learning Style Analysis Module</h2>

        <p className="plp-section-subtext">Learning style analysis identifies each learner&apos;s preferred learning style to deliver more effective and personalized learning.</p>

        <div className="plp-how-grid">
          {howItWorksSteps.map((step) => (
            <HowItWorksCard key={step.key} step={step} isOpen={openStep === step.key} onToggle={() => setOpenStep(openStep === step.key ? null : step.key)} />
          ))}
        </div>
      </section>

      <section className="plp-challenge">
        <div className="plp-challenge-left">
          <span className="plp-hero-pill">The Challenge</span>
          <h2 className="plp-challenge-heading">Built for Measurable Progress</h2>
          <p className="plp-challenge-subtext">NeuroLXP brings clarity, structure, and measurable progress to every learning journey.</p>
        </div>

        <ul className="plp-challenge-checklist">
          {challengeItems.map((item) => (
            <li key={item} className="plp-challenge-item">
              <span className="plp-challenge-badge-outer">
                <span className="plp-challenge-badge-inner">
                  <CheckCircle color="#2A7308" size={36} />
                </span>
              </span>
              <span className="plp-challenge-item-label">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <BenefitsSection />

      <section className="plp-cta">
        <div className="plp-cta-inner">
          <div className="plp-cta-text">
            <h2 className="plp-cta-heading">The Future of Learning Is Personalized</h2>
            <p className="plp-cta-subtext">Transform fragmented learning into a structured journey that builds knowledge, skills, and career-ready capabilities.</p>
          </div>

          <button type="button" className="plp-cta-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Explore Learning Paths
          </button>
        </div>
      </section>
    </main>
  );
}
