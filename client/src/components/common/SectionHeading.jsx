export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-bold tracking-wider text-brand-600 ring-1 ring-brand-100">
          {eyebrow}
        </span>
      )}
      <h2 className="h-section mt-4 font-extrabold text-ink-900">
        {title}
        <span className={`mt-3 block h-1 w-16 rounded-full bg-brand-600 ${center ? "mx-auto" : ""}`} />
      </h2>
      {subtitle && (
        <p className={`mt-6 max-w-3xl leading-relaxed text-ink-600 ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
