import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

const BG_IMAGE =
  "https://yatan.org/wp-content/uploads/2026/04/WhatsApp-Image-2025-12-03-at-13.29.19_8d991ed8.jpg";

const CONTACT = {
  phone: "+91 9899871671",
  phoneHref: "tel:+919899871671",
  email: "yatan.org@gmail.com",
  emailHref: "mailto:yatan.org@gmail.com",
  address:
    "83, Mata Chowk, Cartarpuri Alias Daulatpur Nas, Block F, Carterpuri Village, Sector 23A, Gurugram, Haryana 122017",
  mapQuery:
    "83%20Mata%20Chowk%20Cartarpuri%20Block%20F%20Sector%2023A%20Gurugram%20Haryana%20122017",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  useScrollReveal();

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(
        (import.meta.env.VITE_API_URL || "http://localhost:5000/api") + "/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* ============================================================
          HERO with background image + translucent card
         ============================================================ */}
      <section className="relative isolate">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={BG_IMAGE}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-white/30" />
        </div>

        <div className="container-x py-16 md:py-24">
          <div className="reveal mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white/85 shadow-2xl ring-1 ring-black/5 backdrop-blur-sm">
            <div className="grid gap-0 md:grid-cols-2">
              {/* LEFT — Contact info */}
              <div className="p-8 md:p-10">
                <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-bold tracking-wider text-brand-600 ring-1 ring-brand-100">
                  CONTACT
                </span>
                <h1 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">
                  Contact
                  <span className="mt-3 block h-1 w-14 rounded-full bg-brand-600" />
                </h1>

                <ul className="mt-8 space-y-5">
                  {/* Phone */}
                  <li>
                    <a
                      href={CONTACT.phoneHref}
                      className="group flex items-start gap-4"
                    >
                      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition group-hover:bg-brand-600 group-hover:text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-bold tracking-wider text-ink-500">
                          PHONE
                        </p>
                        <p className="mt-1 font-medium text-ink-900 transition group-hover:text-brand-600">
                          {CONTACT.phone}
                        </p>
                      </div>
                    </a>
                  </li>

                  {/* Email */}
                  <li>
                    <a
                      href={CONTACT.emailHref}
                      className="group flex items-start gap-4"
                    >
                      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition group-hover:bg-brand-600 group-hover:text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-bold tracking-wider text-ink-500">
                          EMAIL
                        </p>
                        <p className="mt-1 font-medium text-ink-900 transition group-hover:text-brand-600">
                          {CONTACT.email}
                        </p>
                      </div>
                    </a>
                  </li>

                  {/* Address */}
                  <li className="flex items-start gap-4">
                    <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-bold tracking-wider text-ink-500">
                        ADDRESS
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-700">
                        {CONTACT.address}
                      </p>
                    </div>
                  </li>
                </ul>

                {/* small info note */}
                <p className="mt-8 border-l-4 border-brand-600 bg-brand-50/70 py-3 pl-4 pr-3 text-xs italic text-ink-700">
                  YATAN is a non profit society registered under the societies
                  registration act of 1850.
                </p>
              </div>

              {/* RIGHT — Locate Us + Map */}
              <div className="border-t border-black/5 p-8 md:border-l md:border-t-0 md:p-10">
                <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-bold tracking-wider text-brand-600 ring-1 ring-brand-100">
                  FIND US
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">
                  Locate Us
                  <span className="mt-3 block h-1 w-14 rounded-full bg-brand-600" />
                </h2>

                <div className="mt-8 overflow-hidden rounded-xl border border-black/10 shadow-md">
                  <iframe
                    title="Yatan NGO Location"
                    src={`https://www.google.com/maps?q=${CONTACT.mapQuery}&output=embed`}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href={`https://www.google.com/maps?q=${CONTACT.mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                >
                  Open in Google Maps
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SEND A MESSAGE — form section below
         ============================================================ */}
      <section className="section-py bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="reveal text-center">
              <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-bold tracking-wider text-brand-600 ring-1 ring-brand-100">
                SEND A MESSAGE
              </span>
              <h2 className="h-section mt-4 font-extrabold text-ink-900">
                Get in touch
                <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-brand-600" />
              </h2>
              <p className="mt-6 leading-relaxed text-ink-600">
                Have a question, want to volunteer, or collaborate with us?
                Fill in the form below and we'll get back to you soon.
              </p>
            </div>

            <form
              onSubmit={submit}
              className="reveal reveal-d1 mt-10 space-y-5 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <input
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
              <textarea
                required
                rows={5}
                placeholder="Your message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder-ink-400 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary btn-shine group w-full disabled:opacity-60 sm:w-auto"
              >
                <span>
                  {status === "loading" ? "Sending..." : "Send Message"}
                </span>
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </button>

              {status === "success" && (
                <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                  ✅ Message sent successfully. We'll reply soon.
                </div>
              )}
              {status === "error" && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
         ============================================================ */}
      <section className="container-x pb-20">
        <div className="reveal relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 text-center text-white md:px-16">
          <span className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="h-section font-extrabold">
              Your support makes a big difference.
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
