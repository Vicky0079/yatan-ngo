import { Link } from "react-router-dom";

export default function ProgramCard({ program, index = 0 }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <Link
      to={`/support-our-cause/${program.slug}`}
      className="group card-glow relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift hover:ring-brand-200 sm:p-8"
    >
      {/* animated top accent */}
      <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-600 via-brand-500 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />

      {/* number badge */}
      <span className="absolute right-4 top-4 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-extrabold tracking-wider text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
        {num}
      </span>

      {/* icon */}
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-50 to-orange-50 ring-1 ring-brand-100/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:ring-brand-200 sm:h-24 sm:w-24">
        <img
          src={program.iconUrl}
          alt={program.name}
          className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          loading="lazy"
        />
      </div>

      <p className="hindi mt-5 text-base font-semibold text-brand-600">
        {program.hindiName}
      </p>
      <h3 className="mt-1 text-base font-bold text-ink-900 transition-colors duration-300 group-hover:text-brand-600 sm:text-lg">
        {program.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
        {program.tagline}
      </p>

      <span className="mt-5 inline-flex items-center justify-center gap-1 text-sm font-semibold text-brand-600">
        Learn more
        <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
