"use client";

import { useState } from "react";
import TalkToOurExpert from "@/components/TalkToOurExpert/TalkToOurExpert";
import { HeadphonesIcon } from "@/components/icons/Icons";
import "./TalkToOurExpert.css";

export default function TalkToExpertButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className="talk-to-expert-fab" onClick={() => setIsOpen(true)}>
        <span className="talk-to-expert-fab-icon-ring" aria-hidden="true">
          <span className="talk-to-expert-fab-icon-circle">
            <HeadphonesIcon className="talk-to-expert-fab-icon" />
          </span>
        </span>
        <span className="talk-to-expert-fab-label">Talk to our Expert</span>
      </button>
      <TalkToOurExpert isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}