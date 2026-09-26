import { useScrollProgress } from "../../hooks/useScrollProgress.js";

export default function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div className="fixed left-0 top-0 z-[70] h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-orange-500 transition-[width] duration-100 ease-out"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}
