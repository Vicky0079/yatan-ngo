import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProgram } from "../services/api.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

const CAUSE_IMAGES = {
  annapatra:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-13.30.17_a158a306-768x1024.jpg",
  "paryavaran-mitravat":
    "https://yatan.org/wp-content/uploads/2026/08/IMG-20250110-WA0001-768x1024.jpg",
  snehashraya:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-13.31.37_5f909c07.jpg",
  udaan:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-13.32.37_8a1396dd.jpg",
  protsahan:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-13.51.05_cf59c9b1-768x1024.jpg",
  "vidya-vinayam":
    "https://yatan.org/wp-content/uploads/2026/08/IMG-20240513-WA0054-768x1024.jpg",
};

export default function CauseDetail() {
  const { slug } = useParams();
  const [program, setProgram] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProgram(slug).then(setProgram).catch(() => setError(true));
  }, [slug]);

  useScrollReveal();

  if (error)
    return (
      <div className="container-x py-24 text-center">
        <h1 className="text-2xl font-bold">Cause not found</h1>
        <Link to="/support-our-cause" className="btn-primary mt-6 inline-flex">
          Back to Support Our Cause
        </Link>
      </div>
    );

  if (!program)
    return (
      <div className="container-x py-24 text-center">
        <div className="skeleton mx-auto h-12 w-64 rounded" />
      </div>
    );

  const heroImg = CAUSE_IMAGES[slug];

  return (
    <div className="overflow-x-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-cream to-white">
        <span className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="container-x relative py-12 md:py-20">
          <div className="reveal">
            <Link
              to="/support-our-cause"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-500 transition hover:text-brand-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Support Our Cause
            </Link>
          </div>

          <div className="mt-8 grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <div className="reveal reveal-d1">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-50 to-orange-50 ring-1 ring-brand-100/60">
                <img
                  src={program.iconUrl}
                  alt={program.name}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <p className="hindi mt-6 text-lg font-semibold text-brand-600">
                {program.hindiName}
              </p>
              <h1 className="h-display mt-2 font-extrabold text-ink-900">
                {program.name}
              </h1>
              <p className="p-lead mt-6 leading-relaxed text-ink-700">
                {program.longDescription || program.description}
              </p>

              {/* tagline quote */}
              {program.tagline && (
                <p className="mt-6 rounded-r-lg border-l-4 border-brand-600 bg-brand-50/70 py-3 pl-5 pr-4 text-sm italic text-ink-700">
                  "{program.tagline}"
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link to="/donate" className="btn-primary btn-shine group">
                  <span>Support This Cause</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
                </Link>
                <Link to="/support-our-cause" className="btn-ghost">
                  View Other Causes
                </Link>
              </div>
            </div>

            {heroImg && (
              <div className="reveal reveal-d2 relative">
                <span className="pointer-events-none absolute -left-3 -top-3 hidden h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-brand-600/70 md:block" />
                <span className="pointer-events-none absolute -bottom-3 -right-3 hidden h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-orange-400/70 md:block" />
                <div className="img-zoom relative overflow-hidden rounded-2xl shadow-2xl shadow-black/10 ring-1 ring-black/5 sm:rounded-3xl">
                  <img
                    src={heroImg}
                    alt={program.name}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="container-x pb-20">
        <div className="reveal rounded-3xl bg-ink-900 px-8 py-14 text-center text-white md:px-16">
          <h2 className="h-section font-extrabold">
            Your smallest contribution makes a big difference.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-300">
            Tax exemption under 80G. Active for 10 years. Present in 3 states.
          </p>
          <div className="mt-8">
            <Link to="/donate" className="btn-primary btn-shine group inline-flex">
              <span>Donate Now</span>
              <span className="transition-transform duration-300 group-hover:text-white group-hover:translate-x-1" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
