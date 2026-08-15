"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import type { SimpleLink } from "@/data/navigation";
import styles from "./Footer.module.css";

export default function FooterAboutLink({ link }: { link: SimpleLink }) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const hashIndex = link.href.indexOf("#");
    if (hashIndex === -1) return;

    const targetPath = link.href.slice(0, hashIndex) || "/";
    const targetId = link.href.slice(hashIndex + 1);
    if (pathname !== targetPath) return;

    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    event.preventDefault();
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", link.href);
  };

  return (
    <Link href={link.href} className={styles["nlxp-footer-link"]} onClick={handleClick}>
      {link.label}
    </Link>
  );
}