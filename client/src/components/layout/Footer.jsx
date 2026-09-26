import { Link } from "react-router-dom";

const LOGO = "https://yatan.org/wp-content/uploads/2025/12/cropped-348423711_977251036965716_5923899852714066798_n-300x276.jpg";

const causes = [
  { hindi: "अन्नपात्रा", en: "Food Bank" },
  { hindi: "उड़ान", en: "Menstrual Hygiene" },
  { hindi: "पर्यावरण मित्रवत", en: "Save Environment" },
  { hindi: "प्रोत्साहन", en: "Skill Development" },
  { hindi: "स्नेहाश्रय", en: "Blanket Donation" },
  { hindi: "विद्या विनयम्", en: "Child Literacy" },
];

const socials = [
  { href: "https://facebook.com", label: "Facebook", hover: "hover:bg-blue-600", path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" },
  { href: "https://instagram.com", label: "Instagram", hover: "hover:bg-pink-600", path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.87 5.87 0 00-2.12 1.38A5.87 5.87 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.12a5.87 5.87 0 002.12 1.38c.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 002.12-1.38 5.87 5.87 0 001.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 00-1.38-2.12A5.87 5.87 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm7.84-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" },
  { href: "https://linkedin.com", label: "LinkedIn", hover: "hover:bg-sky-700", path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" },
  { href: "https://youtube.com", label: "YouTube", hover: "hover:bg-red-600", path: "M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 00.5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 002.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 002.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FDF1EA] text-ink-800">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3 md:gap-12 md:py-16">
        <div>
          <img src={LOGO} alt="Yatan" className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow-sm" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-700">
            YATAN is a non profit society registered under the societies
            registration act of 1850.
          </p>
          <div className="mt-6 flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className={`grid h-9 w-9 place-items-center rounded-full bg-white text-ink-700 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:scale-110 hover:text-white ${s.hover}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wider text-ink-900">SUPPORT OUR CAUSE</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            {causes.map((c) => (
              <li key={c.hindi} className="group flex items-center gap-2 transition-colors hover:text-brand-600">
                <span className="hindi">{c.hindi}</span>
                <span className="text-ink-300">–</span>
                <span>{c.en}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wider text-ink-900">ADDRESS</h4>
          <p className="mt-4 text-sm leading-relaxed text-ink-700">
            83, Mata Chowk, Cartarpuri Alias Daulatpur Nas, Block F, Cartarpuri
            Village, Sector 23A, Gurugram, Haryana 122017
          </p>
          <p className="mt-4 text-sm text-ink-700">
            Call Us:{" "}
            <a href="tel:+919899871671" className="font-semibold transition-colors hover:text-brand-600">
              (+91) 9899871671
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-black/5 py-6 text-center text-xs text-ink-600">
        © {new Date().getFullYear()} Yatan · All Rights Reserved
      </div>
    </footer>
  );
}
