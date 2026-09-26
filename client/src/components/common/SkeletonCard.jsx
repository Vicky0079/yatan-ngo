export default function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
      <div className="skeleton mx-auto h-20 w-20 rounded-full" />
      <div className="skeleton mx-auto mt-5 h-4 w-24 rounded" />
      <div className="skeleton mx-auto mt-3 h-5 w-40 rounded" />
      <div className="skeleton mx-auto mt-4 h-3 w-full rounded" />
      <div className="skeleton mx-auto mt-2 h-3 w-5/6 rounded" />
    </div>
  );
}
