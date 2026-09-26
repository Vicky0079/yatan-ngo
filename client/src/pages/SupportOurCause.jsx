import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPrograms } from "../services/api.js";
import { fallbackPrograms } from "../data/fallbackPrograms.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { useCountUp } from "../hooks/useCountUp.js";

const HERO_BANNER =
  "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-14.15.50_73726c41.jpg";

const CAUSE_IMAGES = {
  annapatra:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-13.30.17_a158a306-768x1024.jpg",
  snehashraya:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-13.31.37_5f909c07.jpg",
  udaan:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-13.32.37_8a1396dd.jpg",
  protsahan:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-13.51.05_cf59c9b1-768x1024.jpg",
  "paryavaran-mitravat":
    "https://yatan.org/wp-content/uploads/2026/08/IMG-20250110-WA0001-768x1024.jpg",
  "vidya-vinayam":
    "https://yatan.org/wp-content/uploads/2026/08/IMG-20240513-WA0054-768x1024.jpg",
};

const CAUSE_TAGS = {
  annapatra: "NUTRITION",
  snehashraya: "WINTER RELIEF",
  udaan: "HEALTH",
  protsahan: "LIVELIHOOD",
  "paryavaran-mitravat": "ENVIRONMENT",
  "vidya-vinayam": "EDUCATION",
};

const ORDER = [
  "annapatra",
  "snehashraya",
  "udaan",
  "protsahan",
  "paryavaran-mitravat",
  "vidya-vinayam",
];

function Counter({ end, suffix = "+" }) {
  const { value, ref } = useCountUp(end);
  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function SupportOurCause() {
  const [programs, setPrograms] = useState(fallbackPrograms);

  useEffect(() => {
    getPrograms()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const sorted = [...data].sort(
            (a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug)
          );
          setPrograms(sorted);
        }
      })
      .catch(() => {});
  }, []);

  useScrollReveal();

  return (
    <div className="overflow-x-hidden bg-white">
      {/* ============================================================
          HERO — banner with overlay + headline
         ============================================================ */}
      <section className="relative isolate">
        {/* Banner image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={HERO_BANNER}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </div>

        <div className="container-x relative py-24 md:py-32 lg:py-40">
          <div className="reveal max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wider text-white ring-1 ring-white/25 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
              JOIN THE YATAN MOVEMENT
            </span>
            <h1 className="h-display mt-6 font-extrabold text-white drop-shadow-sm">
              Your support.{" "}
              <span className="relative inline-block text-brand-400">
                Their hope.
                <span className="absolute -bottom-1 left-0 h-[6px] w-2/3 rounded-full bg-brand-500/60" />
              </span>
            </h1>
            <p className="p-lead mt-6 max-w-xl text-white/85">
              Six causes. One mission — to empower underprivileged children,
              youth and women across India. Every rupee you give becomes a meal,
              a blanket, a book, a future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link to="/donate" className="btn-primary btn-shine group">
                <span>Donate Now</span>
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </Link>
              <a href="#causes" className="btn-ghost !border-white !text-white hover:!bg-white hover:!text-ink-900">
                Explore Causes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STATS STRIP
         ============================================================ */}
      <section className="border-y border-black/5 bg-ink-900 py-10 text-white">
        <div className="container-x grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {[
            { value: 10000, suffix: "+", label: "Lives Touched" },
            { value: 6, suffix: "", label: "Active Causes" },
            { value: 3, suffix: "", label: "States Reached" },
            { value: 10, suffix: "+", label: "Years of Service" },
          ].map((s, i) => (
            <div key={s.label} className={`reveal reveal-d${i + 1} text-center`}>
              <p className="text-3xl font-extrabold text-brand-500 sm:text-4xl">
                <Counter end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-bold tracking-wider text-ink-300 sm:text-sm">
                {s.label.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          INTRO
         ============================================================ */}
      <section className="container-x pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-bold tracking-wider text-brand-600 ring-1 ring-brand-100">
            OUR PROGRAMS
          </span>
          <h2 className="h-section mt-4 font-extrabold text-ink-900">
            Support Our Cause
            <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-brand-600" />
          </h2>
          <p className="mt-6 leading-relaxed text-ink-600">
            Great things are never done by one person. They're done by a team
            of people. We have that dynamic group of peoples.
          </p>
        </div>
      </section>

      {/* ============================================================
          CAUSE CARDS
         ============================================================ */}
      <section id="causes" className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {programs.map((p, i) => (
              <article
                key={p.slug}
                className={`reveal reveal-d${(i % 3) + 1} group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift hover:ring-brand-200`}
              >
                {/* photo */}
                <div className="relative overflow-hidden bg-ink-50">
                  <img
                    src={CAUSE_IMAGES[p.slug]}
                    alt={p.name}
                    className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {/* category tag */}
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-extrabold tracking-wider text-brand-600 shadow-sm backdrop-blur">
                    {CAUSE_TAGS[p.slug]}
                  </span>
                  {/* numbered corner */}
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-ink-900/80 text-[11px] font-extrabold text-white backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-base font-bold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-brand-600 sm:text-lg">
                    <span className="hindi">{p.hindiName}</span>
                    <span className="mx-1.5 text-ink-400">–</span>
                    <span>{p.name}</span>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                    {p.description}
                  </p>

                  {/* footer row */}
                  <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
                    <span className="text-xs font-bold tracking-wider text-ink-400">
                      HELP NOW
                    </span>
                    <Link
                      to="/donate"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      Donate
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY SUPPORT US — trust section
         ============================================================ */}
      <section className="relative overflow-hidden bg-ink-50 py-16 md:py-24">
        <span className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="container-x relative">
          <div className="reveal text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-bold tracking-wider text-brand-600 ring-1 ring-brand-100">
              WHY SUPPORT US
            </span>
            <h2 className="h-section mt-4 font-extrabold text-ink-900">
              Every rupee creates real change
              <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-brand-600" />
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🛡️",
                title: "80G Tax Exempt",
                desc: "Your donations are eligible for tax exemption under Section 80G.",
              },
              {
                icon: "📋",
                title: "Registered Society",
                desc: "Registered under the Societies Registration Act of 1850.",
              },
              {
                icon: "🎯",
                title: "100% to Programs",
                desc: "Every contribution directly funds our six core programs.",
              },
              {
                icon: "🌏",
                title: "3 States Reached",
                desc: "Active for 10 years across Haryana, Delhi-NCR and beyond.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-d${i + 1} group rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift hover:ring-brand-200`}
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-50 to-orange-50 text-2xl ring-1 ring-brand-100/60 transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-base font-bold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
         ============================================================ */}
      <section className="container-x py-16 md:py-20">
        <div className="reveal relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 text-center text-white md:px-16">
          <span className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="h-section font-extrabold">
              Your smallest contribution makes a big difference.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-300">
              Tax exemption under 80G. Active for 10 years. Present in 3 states.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/donate" className="btn-primary btn-shine group">
                <span>Donate Now</span>
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </Link>
              <Link
                to="/contact"
                className="btn-ghost !border-white/80 !text-white hover:!bg-white hover:!text-ink-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
