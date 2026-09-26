import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const LOGO = "https://yatan.org/wp-content/uploads/2025/12/cropped-348423711_977251036965716_5923899852714066798_n-300x276.jpg";

const links = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/support-our-cause", label: "SUPPORT OUR CAUSE" },
  { to: "/our-impact", label: "OUR IMPACT" },
  { to: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={
          "sticky top-0 z-[55] w-full bg-white/85 backdrop-blur-md transition-shadow duration-300 " +
          (scrolled ? "shadow-soft border-b border-black/5" : "border-b border-transparent")
        }
      >
        <div className="container-x flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="flex items-center" aria-label="Yatan home">
            <img
              src={LOGO}
              alt="Yatan"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white sm:h-14 sm:w-14"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  "relative text-[13px] font-bold tracking-wider transition-colors " +
                  (isActive ? "text-brand-600" : "text-ink-800 hover:text-brand-600")
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={
                        "absolute -bottom-1 left-0 h-[2px] bg-brand-600 transition-all duration-300 " +
                        (isActive ? "w-full" : "w-0")
                      }
                    />
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/donate"
              className="btn-shine rounded-sm bg-brand-600 px-6 py-2.5 text-[13px] font-bold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-brand-700 hover:shadow-glow hover:-translate-y-0.5"
            >
              DONATE
            </Link>
          </nav>

          <button
            className="grid h-11 w-11 place-items-center rounded-lg transition hover:bg-ink-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <div className="relative h-5 w-6">
              <span className={"absolute left-0 h-[2px] w-full bg-ink-900 transition-all duration-300 " + (open ? "top-1/2 rotate-45" : "top-0.5")} />
              <span className={"absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-ink-900 transition-all duration-300 " + (open ? "opacity-0" : "opacity-100")} />
              <span className={"absolute left-0 h-[2px] w-full bg-ink-900 transition-all duration-300 " + (open ? "top-1/2 -rotate-45" : "top-[calc(100%-2px)]")} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={
          "fixed inset-0 z-[54] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden " +
          (open ? "opacity-100" : "pointer-events-none opacity-0")
        }
        onClick={() => setOpen(false)}
      />
      <aside
        className={
          "fixed right-0 top-0 z-[56] h-full w-[78vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 md:hidden " +
          (open ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="flex h-16 items-center justify-between border-b border-black/5 px-5">
          <span className="text-sm font-bold tracking-wider text-ink-800">MENU</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-lg hover:bg-ink-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-5">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={({ isActive }) =>
                "border-b border-black/5 py-4 text-sm font-bold tracking-wider transition-all duration-300 " +
                (open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0") + " " +
                (isActive ? "text-brand-600" : "text-ink-800")
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-brand-600 py-4 text-center text-sm font-bold tracking-wider text-white shadow-lift"
          >
            DONATE
          </Link>
        </nav>
      </aside>
    </>
  );
}
