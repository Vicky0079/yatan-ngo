import { useEffect } from "react";

/**
 * Adds `.is-visible` to any element with `.reveal` when it enters viewport.
 * Falls back to marking everything visible after 1.5s so content never stays hidden.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (els.length === 0) return;

    // Safety net: after 1.5s, force-show any reveal still hidden
    const safety = setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 1500);

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return () => clearTimeout(safety);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => {
      clearTimeout(safety);
      io.disconnect();
    };
  }, []);
}
