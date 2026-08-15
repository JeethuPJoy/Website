"use client";

import { useEffect } from "react";

export default function LayoutRecalc() {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return null;
}