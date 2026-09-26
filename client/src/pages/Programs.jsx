import { useEffect, useState } from "react";
import { getPrograms } from "../services/api.js";
import ProgramCard from "../components/programs/ProgramCard.jsx";

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    getPrograms().then(setPrograms).catch(() => {});
  }, []);

  return (
    <div className="container-x py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">Our Programs</p>
        <h1 className="mt-2 text-4xl font-extrabold">Six initiatives. One purpose.</h1>
        <p className="mt-4 text-ink/70">
          From food banks to skill development, each program addresses a
          specific need with dignity and long-term impact.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => (
          <ProgramCard key={p.slug} program={p} />
        ))}
      </div>
    </div>
  );
}
