import { Link } from "react-router-dom";
import SectionHeading from "../components/common/SectionHeading.jsx";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

const WORKING_IMG = "https://yatan.org/wp-content/uploads/2026/04/WhatsApp-Image-2024-10-31-at-08.50.22_96766353.jpg";
const VISION_ICON = "https://yatan.org/wp-content/uploads/2026/04/eye.png";
const MISSION_ICON = "https://yatan.org/wp-content/uploads/2026/04/mission.png";
const FOUNDER_IMG = "https://yatan.org/wp-content/uploads/2026/04/IMG-20240903-WA0007-768x803.jpg";

const awards = [
  "Haryana Garima Award",
  "Best Women Social Worker by Leadership Icon Awards 2020",
  "Inspiring Woman of Humanity & Social Service by Brandvoltz Icon Indian Business award",
  "All India Human Rights Certificate Of Appreciation",
  "Human Rights Council of India Certificate Of Appreciation",
  "Corona Warrior from Sarva Jagruk Sanghtan, Apna Gurgaon & G express news",
  "The Real Super Woman Award by Forever Star India",
  "Letter of Acknowledgement from Municipal Corporation of Gurugram",
  "1000 women of Asia award by Womennovator",
];

export default function About() {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      {/* ==================== HERO ==================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-cream to-white">
        <span className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="container-x relative py-16 md:py-24">
          <div className="reveal text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold tracking-wider text-brand-700 ring-1 ring-brand-100">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-600" />
              ABOUT US
            </span>
            <h1 className="h-display mt-6 font-extrabold text-ink-900">
              Working{" "}
              <span className="relative inline-block text-brand-600">
                Together
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-brand-100" />
              </span>
            </h1>
            <p className="p-lead mx-auto mt-6 max-w-3xl text-ink-600">
              Yatan is a non profit society working since 2015 to empower underprivileged children, youth and women — while building a greener, zero-waste society.
            </p>
          </div>

          <div className="reveal reveal-d1 mt-12">
            <div className="img-zoom mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-2xl shadow-black/10 ring-1 ring-black/5">
              <img src={WORKING_IMG} alt="Yatan team working together" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VISION + MISSION ==================== */}
      <section className="section-py">
        <div className="container-x">
          <div className="reveal">
            <SectionHeading
              eyebrow="WHAT DRIVES US"
              title="Vision & Mission"
            />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* VISION CARD */}
            <div className="reveal reveal-d1 card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-soft ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift hover:ring-brand-200 sm:p-10">
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-600 via-brand-500 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-50 to-orange-50 ring-1 ring-brand-100/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <img src={VISION_ICON} alt="Vision" className="h-12 w-12 object-contain" />
              </div>

              <p className="mt-6 text-xs font-bold tracking-wider text-brand-600">
                VISION
              </p>
              <h3 className="mt-1 text-2xl font-extrabold text-ink-900">
                Our Vision
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-ink-700">
                Work as a catalyst in brining sustainable change in the lives of
                underprivileged children, youth and women with a life-cycle
                approach of development.
              </p>
            </div>

            {/* MISSION CARD */}
            <div className="reveal reveal-d2 card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-soft ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift hover:ring-brand-200 sm:p-10">
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-600 via-brand-500 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-50 to-orange-50 ring-1 ring-brand-100/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <img src={MISSION_ICON} alt="Mission" className="h-12 w-12 object-contain" />
              </div>

              <p className="mt-6 text-xs font-bold tracking-wider text-brand-600">
                MISSION
              </p>
              <h3 className="mt-1 text-2xl font-extrabold text-ink-900">
                Our Mission
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-ink-700">
                To empower underprivilege children, youth and women through
                relevant education, skill development and market focused
                livelihood programs. It parallelly seeks to establish a green
                and zero waste society by spreading awareness amongst the youth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== YATAN MEANS AN EFFORT ==================== */}
      <section className="relative overflow-hidden bg-ink-50 section-py">
        <span className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="container-x relative">
          <div className="reveal mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="OUR NAME"
              title="Yatan means 'an effort'"
            />
            <p className="mt-6 leading-relaxed text-ink-700">
              Yatan is a non profit society registered under the societies
              registration act of 1850.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              Founded in 2015 by a group of academicians, teachers, entrepreneurs
              and youth with the aim of empowering children and women of
              economically weaker sections, through relevant education and
              vocational training using modern teaching concepts and technical
              assistance.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FOUNDER ==================== */}
      <section className="section-py">
        <div className="container-x grid items-start gap-12 md:grid-cols-5 md:gap-16">
          {/* founder image */}
          <div className="reveal relative md:col-span-2">
            <span className="pointer-events-none absolute -bottom-3 -right-3 hidden h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-orange-400/70 md:block" />
            <span className="pointer-events-none absolute -left-3 -top-3 hidden h-20 w-20 rounded-tl-3xl border-l-4 border-t-4 border-brand-600/70 md:block" />
            <div className="img-zoom overflow-hidden rounded-2xl shadow-xl shadow-black/10 ring-1 ring-black/5 sm:rounded-3xl">
              <img src={FOUNDER_IMG} alt="Ms. Shalini Kapoor" className="w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-6 rounded-2xl bg-brand-600 p-5 text-white shadow-lift">
              <p className="text-2xl font-extrabold">10,000+</p>
              <p className="mt-1 text-[11px] font-bold tracking-wider opacity-90">
                CHILDREN &amp; WOMEN EMPOWERED
              </p>
            </div>
          </div>

          {/* founder text */}
          <div className="reveal reveal-d1 md:col-span-3">
            <SectionHeading
              eyebrow="MEET OUR FOUNDER"
              title="Ms. Shalini Kapoor"
              center={false}
            />
            <p className="mt-2 text-sm font-semibold tracking-wider text-brand-600">
              FOUNDER &amp; PRESIDENT
            </p>

            <p className="mt-6 leading-relaxed text-ink-700">
              An educationist and dedicated social worker, Ms. Shalini Kapoor is
              the founder and president of YATAN – An Effort, which was started
              in 2015. YATAN has reached out to around 10,000 underprivileged
              children and women by providing relevant education, rendering
              nutrition, health, vocational training through modern technical
              assistance and teaching concepts. She is also empowering women
              through her skill development.
            </p>

            <h3 className="mt-10 text-lg font-bold text-ink-900">
              Awards &amp; Recognition
              <span className="mt-2 block h-1 w-12 rounded-full bg-brand-600" />
            </h3>
            <ul className="mt-5 space-y-3">
              {awards.map((a, i) => (
                <li key={i} className="flex items-start gap-3 leading-relaxed text-ink-700">
                  <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
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
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
