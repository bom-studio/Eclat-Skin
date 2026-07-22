"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import { StarLogo, IconCalendar } from "@/components/ui/Icons";

const SECTION_IDS = [
  "programs",
  "results",
  "director",
  "reviews",
  "location",
  "reservation",
] as const;

const HEADER_H = "h-[88px] md:h-[92px]";
const HEADER_TOP = "top-[88px] md:top-[92px]";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );
        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 border-b ${
        scrolled || open
          ? "border-border/80 shadow-none"
          : "border-transparent"
      }`}
      style={{
        backgroundColor: "rgba(251, 247, 243, 0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="container-main">
        <div
          className={`grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center ${HEADER_H}`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 text-text group justify-self-start"
            aria-label={"\u00C9CLAT SKIN STUDIO \uD648"}
            onClick={closeMenu}
          >
            <StarLogo
              size={30}
              className="text-primary transition-transform duration-300 group-hover:rotate-45"
            />
            <span className="font-display text-[23px] md:text-[26px] tracking-[0.16em] font-medium whitespace-nowrap leading-none">
              {"\u00C9"}CLAT SKIN
            </span>
          </a>

          {/* Center nav */}
          <nav
            className="hidden lg:flex items-center justify-center gap-10 xl:gap-12"
            aria-label={"\uC8FC\uC694 \uBA54\uB274"}
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative text-[15px] xl:text-[16px] tracking-[0.12em] font-normal transition-colors duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-primary"
                      : "text-text/75 hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-px bg-primary transition-all duration-300 ${
                      isActive
                        ? "w-3.5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-3.5 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex justify-self-end">
            <a
              href="#reservation"
              className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 xl:px-8 rounded-full bg-primary text-white text-[15px] tracking-[0.08em] font-medium whitespace-nowrap transition-all duration-300 hover:bg-primary-hover hover:-translate-y-px"
            >
              <IconCalendar size={18} className="text-white" />
              {"\uC628\uB77C\uC778 \uC608\uC57D"}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden justify-self-end flex flex-col justify-center gap-[6px] w-11 h-11"
            aria-label={open ? "\uBA54\uB274 \uB2EB\uAE30" : "\uBA54\uB274 \uC5F4\uAE30"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-[1.5px] w-6 bg-text transition-transform duration-300 ${open ? "translate-y-[7.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-text transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-text transition-transform duration-300 ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label={"\uBA54\uB274 \uB2EB\uAE30"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`lg:hidden fixed inset-0 ${HEADER_TOP} z-40 bg-text/20`}
              onClick={closeMenu}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`lg:hidden fixed ${HEADER_TOP} right-0 bottom-0 z-50 w-[min(100%,320px)] border-l border-border flex flex-col`}
              style={{ backgroundColor: "#FBF7F3" }}
            >
              <nav
                className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-8"
                aria-label={"\uBAA8\uBC14\uC77C \uBA54\uB274"}
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`text-[17px] tracking-[0.08em] transition-colors duration-300 ${
                      active === link.href
                        ? "text-primary"
                        : "text-text hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="px-8 pb-10 pt-4 border-t border-border">
                <a
                  href="#reservation"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center gap-2.5 h-[50px] rounded-full bg-primary text-white text-[15px] tracking-[0.08em] font-medium transition-colors duration-300 hover:bg-primary-hover"
                >
                  <IconCalendar size={18} className="text-white" />
                  {"\uC628\uB77C\uC778 \uC608\uC57D"}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
