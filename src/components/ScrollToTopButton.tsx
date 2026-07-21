"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [arrowAnimationData, setArrowAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/animations/arrow-down-purple.json")
      .then((response) => response.json())
      .then((data) => setArrowAnimationData(data))
      .catch(() => setArrowAnimationData(null));
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-top-button${isVisible ? " scroll-top-button-visible" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <span className="scroll-top-button-inner">
        {arrowAnimationData && <Lottie animationData={arrowAnimationData} loop autoplay className="scroll-top-button-icon" />}
      </span>
    </button>
  );
}