export default function ImpactStoryCard({ story }) {
  return (
    <div className="card flex h-full flex-col p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-100 font-bold text-primary-600">
          {story.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold">{story.name}</h4>
          <p className="hindi text-xs text-secondary-500">{story.program}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink/80">"{story.story}"</p>
    </div>
  );
}
