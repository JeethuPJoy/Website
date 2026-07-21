"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems, type NestedCategory } from "@/data/navigation";
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from "@/components/icons/Icons";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
        setOpenCategory(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setOpenCategory(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function toggleMenu(label: string) {
    setOpenMenu((current) => (current === label ? null : label));
    setOpenCategory(null);
  }

  function toggleMobileTop(label: string) {
    setMobileExpanded((current) => (current === label ? null : label));
    setMobileSubExpanded(null);
  }

  function toggleMobileSub(label: string) {
    setMobileSubExpanded((current) => (current === label ? null : label));
  }

  function renderNestedCategory(category: NestedCategory) {
    const hasItems = Boolean(category.items && category.items.length > 0);
    return (
      <div
        key={category.label}
        className="nlxp-header-category"
        onMouseEnter={() => hasItems && setOpenCategory(category.label)}
      >
        {hasItems ? (
          <button
            type="button"
            className={`nlxp-header-category-trigger${openCategory === category.label ? " nlxp-header-category-trigger--active" : ""}`}
            onClick={() => setOpenCategory((current) => (current === category.label ? null : category.label))}
          >
            {category.label}
            <ChevronRightIcon className="nlxp-header-chevron-right" />
          </button>
        ) : (
          <Link href={category.href ?? "#"} className="nlxp-header-category-trigger">
            {category.label}
          </Link>
        )}
      </div>
    );
  }

  return (
    <header className="nlxp-header" ref={headerRef}>
      <div className="nlxp-header-inner">
        <div className="nlxp-header-left">
          <Link href="/" className="nlxp-header-logo-link">
            <Image
              src="/images/logo_01_synapse_spark.png"
              alt="NeuroLXP"
              width={120}
              height={45}
              className="nlxp-header-logo"
              priority
            />
          </Link>

          <nav className="nlxp-header-nav">
            {navItems.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`nlxp-header-link${item.active ? " nlxp-header-link--active" : ""}`}
                  >
                    {item.label}
                    {/* {item.arrow === "up" && <ChevronUpIcon className="nlxp-header-chevron" />} */}
                    {item.arrow === "down" && <ChevronDownIcon className="nlxp-header-chevron" />}
                  </Link>
                );
              }

              const isOpen = openMenu === item.label;

              return (
                <div key={item.label} className="nlxp-header-dropdown">
                  <button
                    type="button"
                    className={`nlxp-header-link nlxp-header-dropdown-trigger${isOpen ? " nlxp-header-link--active" : ""}`}
                    onClick={() => toggleMenu(item.label)}
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    {isOpen ? (
                      <ChevronUpIcon className="nlxp-header-chevron" />
                    ) : (
                      <ChevronDownIcon className="nlxp-header-chevron" />
                    )}
                  </button>

                  {isOpen && item.type === "simple" && (
                    <div className="nlxp-header-panel nlxp-header-panel--simple">
                      {item.items.map((link) => (
                        <Link key={link.label} href={link.href} className="nlxp-header-panel-link">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {isOpen && item.type === "nested" && (
                    <div className="nlxp-header-panel nlxp-header-panel--nested">
                      {openCategory &&
                        (() => {
                          const activeCategory = item.categories.find((c) => c.label === openCategory);
                          if (!activeCategory || !activeCategory.items) return null;
                          return (
                            <div className="nlxp-header-flyout">
                              {activeCategory.items.map((link) => (
                                <Link key={link.label} href={link.href} className="nlxp-header-panel-link">
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          );
                        })()}
                      <div className="nlxp-header-category-list">
                        {item.categories.map((category) => renderNestedCategory(category))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <Link href="/signin" className="nlxp-header-signin">
          Sign in Help
        </Link>

        <button
          type="button"
          className={`nlxp-header-burger${mobileOpen ? " nlxp-header-burger--open" : ""}`}
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="nlxp-header-mobile-panel">
          {navItems.map((item) => {
            if (item.type === "link") {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="nlxp-header-mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            }

            const isExpanded = mobileExpanded === item.label;

            return (
              <div key={item.label} className="nlxp-header-mobile-group">
                <button
                  type="button"
                  className="nlxp-header-mobile-link nlxp-header-mobile-trigger"
                  onClick={() => toggleMobileTop(item.label)}
                  aria-expanded={isExpanded}
                >
                  {item.label}
                  {isExpanded ? <ChevronUpIcon className="nlxp-header-chevron" /> : <ChevronDownIcon className="nlxp-header-chevron" />}
                </button>

                {isExpanded && item.type === "simple" && (
                  <div className="nlxp-header-mobile-sublist">
                    {item.items.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="nlxp-header-mobile-sublink"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}

                {isExpanded && item.type === "nested" && (
                  <div className="nlxp-header-mobile-sublist">
                    {item.categories.map((category) => {
                      const hasItems = Boolean(category.items && category.items.length > 0);
                      if (!hasItems) {
                        return (
                          <Link
                            key={category.label}
                            href={category.href ?? "#"}
                            className="nlxp-header-mobile-sublink"
                            onClick={() => setMobileOpen(false)}
                          >
                            {category.label}
                          </Link>
                        );
                      }
                      const isSubExpanded = mobileSubExpanded === category.label;
                      return (
                        <div key={category.label}>
                          <button
                            type="button"
                            className="nlxp-header-mobile-sublink nlxp-header-mobile-subtrigger"
                            onClick={() => toggleMobileSub(category.label)}
                            aria-expanded={isSubExpanded}
                          >
                            {category.label}
                            <ChevronRightIcon
                              className={`nlxp-header-chevron-right${isSubExpanded ? " nlxp-header-chevron-right--open" : ""}`}
                            />
                          </button>
                          {isSubExpanded && (
                            <div className="nlxp-header-mobile-subsublist">
                              {category.items?.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  className="nlxp-header-mobile-subsublink"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <Link href="/signin" className="nlxp-header-mobile-signin" onClick={() => setMobileOpen(false)}>
            Sign in Help
          </Link>
        </div>
      )}
    </header>
  );
}