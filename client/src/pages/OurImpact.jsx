import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getImpactStories } from "../services/api.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import { useCountUp } from "../hooks/useCountUp.js";

const HERO_IMAGES = [
  "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-14.43.34_b4b86fdf-768x576.jpg",
  "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-14.52.19_65f5d7cf-768x576.jpg",
  "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-14.56.31_afe54aa9-768x576.jpg",
  "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-15.10.20_4c1bb596-768x576.jpg",
];

const STORY_IMAGES = {
  Deepak:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-11.52.18_646fa1a4-1024x1024.jpg",
  Gayatri:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-11.52.18_a8a5e732-1024x1024.jpg",
  Jyoti:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-11.52.19_07587953-1024x1024.jpg",
  Annu:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-11.52.19_be63a50f-1024x1024.jpg",
  Muskan:
    "https://yatan.org/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-03-at-11.52.20_3161ad04-1024x1024.jpg",
};

const FALLBACK_STORIES = [
  {
    name: "Deepak",
    program: "विद्या विनयम्",
    story:
      "My Name is Deepak. I was always curious about technology, so I took Computer classes at Pathshala 2.0. Today, I've started my own computer repair shop, where I fix and maintain computers. What I learned here became the foundation for my business and my future.",
  },
  {
    name: "Gayatri",
    program: "प्रोत्साहन",
    story:
      "My Name is Gayatri. I learned stitching at Pathshala 2.0 during my time at this school. What started as a simple hobby has now become my career. I've opened my own stitching shop, where I teach others and also earn from my work. It feels wonderful to turn my learning into something that supports me and helps others too.",
  },
  {
    name: "Jyoti",
    program: "विद्या विनयम्",
    story:
      "My Name is Jyoti. I joined English classes at Pathshala 2.0 here to improve my communication skills. That small step changed my life! Now, I not only teach English at home but also work as a teacher at BBM School. I'm proud to share my knowledge and confidence with others.",
  },
  {
    name: "Annu",
    program: "विद्या विनयम्",
    story:
      "My Name is Annu. I took English classes from Pathshala 2.0 and those classes helped me gain a lot of confidence in speaking and presenting myself. With that confidence, I'm now proudly working at VLCC. I'm grateful to my teachers for helping me believe in myself.",
  },
  {
    name: "Muskan",
    program: "प्रोत्साहन",
    story:
      "My name is Muskan. I have always loved dancing and acting, so I joined the Dance and Drama classes at Pathshala 2.0. The support and guidance I received inspired me so much that today, I've opened my own Dance Institute, where I teach others to express themselves through dance — just like I learned here.",
  },
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

/* ============ HERO CAROUSEL ============ */
function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () =>
    setIndex((i) => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  const next = () => setIndex((i) => (i + 1) % HERO_IMAGES.length);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/10 ring-1 ring-black/5 sm:rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative aspect-[4/3]">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Impact slide ${i + 1}`}
            className={
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 " +
              (i === index ? "opacity-100" : "opacity-0")
            }
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        {/* Soft gradient at bottom for controls */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Prev button */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink-900 shadow-md backdrop-blur transition hover:bg-white hover:scale-110 sm:h-11 sm:w-11"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink-900 shadow-md backdrop-blur transition hover:bg-white hover:scale-110 sm:h-11 sm:w-11"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={
              "h-2 rounded-full transition-all duration-300 " +
              (i === index
                ? "w-8 bg-white shadow-md"
                : "w-2 bg-white/60 hover:bg-white/90")
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function OurImpact() {
  const [stories, setStories] = useState(FALLBACK_STORIES);

  useEffect(() => {
    getImpactStories()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setStories(data);
      })
      .catch(() => {});
  }, []);

  useScrollReveal();

  return (
    <div className="overflow-x-hidden bg-white">
      {/* ==================== HERO ==================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-cream to-white">
        <span className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="container-x relative py-16 md:py-24">
          <div className="reveal text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold tracking-wider text-brand-700 ring-1 ring-brand-100">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-600" />
              STORIES OF CHANGE
            </span>
            <h1 className="h-display mt-6 font-extrabold text-ink-900">
              Our{" "}
              <span className="relative inline-block text-brand-600">
                Impact
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-brand-100" />
              </span>
            </h1>
            <p className="p-lead mx-auto mt-6 max-w-3xl text-ink-600">
              Real people. Real change. Behind every program is a person whose
              life was transformed through education, skill and dignity.
            </p>
          </div>

          <div className="reveal reveal-d1 mx-auto mt-12 max-w-4xl">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* ==================== STATS STRIP ==================== */}
      <section className="border-y border-black/5 bg-ink-900 py-10 text-white">
        <div className="container-x grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {[
            { value: 10000, suffix: "+", label: "Lives Touched" },
            { value: 500, suffix: "+", label: "Blankets Distributed" },
            { value: 5000, suffix: "+", label: "Children Educated" },
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

      {/* ==================== STORIES ==================== */}
      <section className="section-py">
        <div className="container-x">
          <div className="reveal mb-14 text-center">
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-bold tracking-wider text-brand-600 ring-1 ring-brand-100">
              VOICES OF CHANGE
            </span>
            <h2 className="h-section mt-4 font-extrabold text-ink-900">
              Real stories from real people
              <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-brand-600" />
            </h2>
          </div>

          <div className="space-y-12 md:space-y-16">
            {stories.map((s, i) => {
              const isEven = i % 2 === 0;
              const img = STORY_IMAGES[s.name] || s.image;
              return (
                <div
                  key={s._id || s.name}
                  className={`reveal reveal-d${(i % 3) + 1} grid items-center gap-8 md:grid-cols-2 md:gap-14`}
                >
                  {/* image */}
                  <div
                    className={`relative ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <span
                      className={`pointer-events-none absolute hidden h-24 w-24 border-brand-600/70 md:block ${
                        isEven
                          ? "-left-3 -top-3 rounded-tl-3xl border-l-4 border-t-4"
                          : "-right-3 -top-3 rounded-tr-3xl border-r-4 border-t-4"
                      }`}
                    />
                    <div className="img-zoom overflow-hidden rounded-2xl shadow-xl shadow-black/10 ring-1 ring-black/5 sm:rounded-3xl">
                      {img ? (
                        <img
                          src={img}
                          alt={s.name}
                          className="w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="grid aspect-square place-items-center bg-gradient-to-br from-brand-50 to-orange-50">
                          <span className="text-7xl font-extrabold text-brand-200">
                            {s.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* text */}
                  <div
                    className={`${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold tracking-wider text-brand-600 ring-1 ring-brand-100">
                      {s.program}
                    </span>
                    <h3 className="mt-3 text-2xl font-extrabold text-ink-900 sm:text-3xl">
                      {s.name}
                    </h3>
                    <span className="mt-2 block h-1 w-12 rounded-full bg-brand-600" />
                    <svg
                      className="mt-6 h-6 w-6 text-brand-200"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H5.83A3.17 3.17 0 019 8V6zm10 0A5.17 5.17 0 0012 11.17V18h6.83v-6.83h-3A3.17 3.17 0 0118.83 8V6z" />
                    </svg>
                    <p className="mt-2 leading-relaxed text-ink-700">
                      {s.story}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="container-x pb-20">
        <div className="reveal relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 text-center text-white md:px-16">
          <span className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="h-section font-extrabold">
              Your support makes stories like these possible.
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
                to="/support-our-cause"
                className="btn-ghost !border-white/80 !text-white hover:!bg-white hover:!text-ink-900"
              >
                Explore Causes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
