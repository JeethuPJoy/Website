'use client';

import { useEffect, useRef, useState } from 'react';

const VIDEO_SRC = '/videos/interview.mp4';
const TABLET_MIN = 768;

function CareerBadge() {
  return <div className={`sectionBadge frameChild19`}>Career Growth</div>;
}

export default function InterviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollExpanded, setScrollExpanded] = useState(false);
  const [enableScrollFx, setEnableScrollFx] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${TABLET_MIN}px)`);
    const updateMode = () => setEnableScrollFx(media.matches);
    updateMode();
    media.addEventListener('change', updateMode);
    return () => media.removeEventListener('change', updateMode);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!enableScrollFx) {
      setScrollExpanded(false);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.55;
      const end = viewport * 0.05;
      const progress = (start - rect.top) / (start - end);
      setScrollExpanded(progress > 0.45);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [enableScrollFx]);

  return (
    <section
      ref={sectionRef}
      className={`interviewSection ${
        scrollExpanded ? 'interviewSectionExpanded' : ''
      }`}
      aria-label="Prepare for technical interviews"
    >
      <div className={'interviewLayout'}>
        <div className={'interviewMediaWrap'}>
          <div className={'interviewMediaFrame'}>
            <div className={'interviewMediaInner'}>
              <video
                ref={videoRef}
                className={'interviewVideo'}
                src={VIDEO_SRC}
                muted
                playsInline
                loop
                preload="metadata"
                aria-label="Technical interview preparation video"
              />
            </div>
          </div>
        </div>

        <div className={'interviewText'}>
          <div className={'interviewTextTop'}>
            <CareerBadge />
            <b className={'prepareForTechnical'}>Prepare for Technical Interviews</b>
          </div>
          <div className={'practiceCodingChallenges'}>
            Practice coding challenges to build confidence for technical interviews and coding
            assessments.
          </div>
        </div>
      </div>
    </section>
  );
}
