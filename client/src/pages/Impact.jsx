import { useEffect, useState } from "react";
import { getImpactStories } from "../services/api.js";
import ImpactStoryCard from "../components/impact/ImpactStoryCard.jsx";

export default function Impact() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getImpactStories().then(setStories).catch(() => {});
  }, []);

  return (
    <div className="container-x py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">Impact Stories</p>
        <h1 className="mt-2 text-4xl font-extrabold">Real people. Real change.</h1>
        <p className="mt-4 text-ink/70">
          Behind every program is a person whose life changed. Here are a few of their stories.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((s) => (
          <ImpactStoryCard key={s._id || s.name} story={s} />
        ))}
      </div>
    </div>
  );
}
