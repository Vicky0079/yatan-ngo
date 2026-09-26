import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPrograms } from "../services/api.js";
import ProgramCard from "../components/programs/ProgramCard.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import SkeletonCard from "../components/common/SkeletonCard.jsx";
import { fallbackPrograms } from "../data/fallbackPrograms.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { useCountUp } from "../hooks/useCountUp.js";

const HERO = "https://i0.wp.com/yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-13.51.50_481339d8.jpg?ssl=1&resize=1628%2C1222";
const STORY = "https://yatan.org/wp-content/uploads/2025/11/IMG-20240903-WA0008.jpg";
const CONTRIBUTION_IMG = "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-12.12.36_0ea9a03b-768x1024.jpg";

function StatNumber({ end, suffix = "+" }) {
  const { value, ref } = useCountUp(end);
  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [programs, setPrograms] = useState(fallbackPrograms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPrograms()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setPrograms(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-cream to-white">
        {/* background accents */}
        <span className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="container-x relative grid gap-12 py-12 md:grid-cols-2 md:items-center md:gap-16 md:py-20">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold tracking-wider text-brand-700 ring-1 ring-brand-100">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-600" />
              EST. 2015 · GURUGRAM, INDIA
            </span>
            <h1 className="h-display mt-6 font-extrabold text-ink-900">
              Turning compassion into{" "}
              <span className="relative inline-block text-brand-600">
                action
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-brand-100" />
              </span>
              , one life at a time.
            </h1>
            <p className="p-lead mt-6 max-w-xl text-ink-600">
              Yatan empowers underprivileged children, youth and women through
              education, skill development and sustainable change — while
              building a greener, zero-waste society.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link to="/donate" className="btn-primary btn-shine group">
                <span>Donate Now</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
              <Link to="/support-our-cause" className="btn-ghost">
                Explore Causes
              </Link>
            </div>

            {/* trust strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold tracking-wider text-ink-500">
              <span className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand-600">✓</span>
                80G TAX EXEMPTION
              </span>
              <span className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand-600">✓</span>
                REGISTERED SOCIETY
              </span>
              <span className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand-600">✓</span>
                3 STATES
              </span>
            </div>
          </div>

          {/* hero visual */}
          <div className="reveal reveal-d2 relative">
            <div className="img-zoom overflow-hidden rounded-3xl shadow-2xl shadow-black/10 ring-1 ring-black/5">
              <img src={HERO} alt="Children at Yatan" className="w-full object-cover" />
            </div>

            {/* floating stat — bottom left */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white p-5 shadow-lift ring-1 ring-black/5 md:block">
              <p className="text-3xl font-extrabold text-brand-600">
                <StatNumber end={10000} />
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-wider text-ink-500">
                LIVES TOUCHED
              </p>
            </div>

            {/* floating stat — top right */}
            <div className="absolute -top-4 -right-4 hidden rounded-2xl bg-brand-600 p-4 text-white shadow-lift md:block">
              <p className="text-2xl font-extrabold">10+</p>
              <p className="mt-0.5 text-[10px] font-bold tracking-wider opacity-90">
                YEARS ACTIVE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="border-y border-black/5 bg-ink-900 py-12 text-white">
        <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: 10000, suffix: "+", label: "Lives Touched" },
            { value: 6, suffix: "", label: "Active Programs" },
            { value: 3, suffix: "", label: "States Reached" },
            { value: 10, suffix: "+", label: "Years of Service" },
          ].map((s, i) => (
            <div key={s.label} className={`reveal reveal-d${i + 1} text-center`}>
              <p className="text-3xl font-extrabold text-brand-500 sm:text-4xl">
                <StatNumber end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-bold tracking-wider text-ink-300 sm:text-sm">
                {s.label.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== STORY BEHIND YATAN ==================== */}
      <section className="section-py">
        <div className="container-x grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="reveal relative">
            <span className="pointer-events-none absolute -left-3 -top-3 hidden h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-brand-600/70 md:block" />
            <span className="pointer-events-none absolute -bottom-3 -right-3 hidden h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-orange-400/70 md:block" />
            <div className="img-zoom relative overflow-hidden rounded-2xl shadow-xl shadow-black/10 ring-1 ring-black/5 sm:rounded-3xl">
              <img src={STORY} alt="Yatan journey" className="w-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="reveal reveal-d1">
            <SectionHeading
              eyebrow="OUR STORY"
              title="Story behind Yatan"
              center={false}
            />
            <p className="mt-6 border-l-4 border-brand-600/40 pl-5 text-base italic leading-relaxed text-ink-700 sm:text-lg">
              "Real change begins the moment you decide that someone else's child deserves the same chance as your own."
            </p>
            <p className="mt-6 leading-relaxed text-ink-700">
              For Shalini Kapoor, teaching didn't end in the classroom. It truly began on the streets — when she saw the children of migrant workers with dreams bigger than their circumstances, yet no access to schooling. Their curiosity, their innocence, and their silent plea for opportunity touched her deeply.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              Yatan NGO started as her promise to them — a promise to turn compassion into action, and dreams into possibilities.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              Shalini Kapoor who is a teacher by profession, believes that –
            </p>
            <p className="mt-5 rounded-r-lg border-l-4 border-brand-600 bg-brand-50/70 py-3 pl-5 pr-4 text-base font-semibold italic text-ink-900 sm:text-lg">
              "Education should not be privilege. Education is the right of every child."
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SUPPORT OUR CAUSE ==================== */}
      <section className="relative overflow-hidden bg-ink-50 section-py">
        <span className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="container-x relative">
          <div className="reveal">
            <SectionHeading
              eyebrow="OUR PROGRAMS"
              title="Support Our Cause"
              subtitle="Great things are never done by one person. They're done by a team of people. We have that dynamic group of peoples."
            />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {loading && programs.length === 0
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : programs.map((p, i) => (
                  <div key={p.slug} className={`reveal reveal-d${(i % 3) + 1}`}>
                    <ProgramCard program={p} index={i} />
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTRIBUTION ==================== */}
      <section className="section-py bg-gradient-to-b from-cream to-white">
        <div className="container-x grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="reveal relative">
            <div className="img-zoom overflow-hidden rounded-2xl shadow-2xl shadow-black/10 ring-1 ring-black/5 sm:rounded-3xl">
              <img src={CONTRIBUTION_IMG} alt="Children receiving food at Yatan" className="w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -left-5 -top-5 hidden rounded-2xl bg-white p-5 shadow-lift ring-1 ring-black/5 md:block">
              <p className="text-3xl font-extrabold text-brand-600">
                <StatNumber end={10000} />
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-wider text-ink-500">
                CHILDREN &amp; WOMEN
              </p>
            </div>
          </div>

          <div className="reveal reveal-d1">
            <SectionHeading
              eyebrow="MAKE A DIFFERENCE"
              title="Your smallest contribution makes a big difference to underprivileged children's lives."
              center={false}
            />
            <p className="mt-6 leading-relaxed text-ink-700">
              Your smallest contribution makes a big difference to children's lives. We count on the generosity of people like you to be able to create real change for India's children!
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link to="/donate" className="btn-primary btn-shine group">
                <span>Donate Now</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
              <Link to="/support-our-cause" className="btn-ghost">
                Explore Causes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MAP ==================== */}
      <section className="section-py bg-white">
        <div className="container-x">
          <div className="reveal">
            <SectionHeading
              eyebrow="FIND US"
              title="Visit us in Gurugram"
              subtitle="83, Mata Chowk, Cartarpuri Alias Daulatpur Nas, Block F, Cartarpuri Village, Sector 23A, Gurugram, Haryana 122017"
            />
          </div>
          <div className="reveal reveal-d1 mt-10 overflow-hidden rounded-2xl border border-black/5 shadow-lift sm:rounded-3xl">
            <iframe
              title="Yatan NGO Location"
              src="https://www.google.com/maps?q=83%20Mata%20Chowk%20Cartarpuri%20Block%20F%20Sector%2023A%20Gurugram%20Haryana%20122017&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
