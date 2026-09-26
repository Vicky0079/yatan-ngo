import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProgram } from "../services/api.js";

export default function ProgramDetail() {
  const { slug } = useParams();
  const [program, setProgram] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProgram(slug).then(setProgram).catch(() => setError(true));
  }, [slug]);

  if (error)
    return (
      <div className="container-x py-24 text-center">
        <h1 className="text-2xl font-bold">Program not found</h1>
        <Link to="/programs" className="btn-primary mt-6 inline-flex">Back to Programs</Link>
      </div>
    );

  if (!program) return <div className="container-x py-24 text-center">Loading...</div>;

  return (
    <div className="container-x py-16">
      <Link to="/programs" className="text-sm text-ink/60 hover:text-ink">← Back to Programs</Link>
      <div className="mx-auto mt-6 max-w-3xl">
        <span className="text-5xl">{program.icon}</span>
        <h1 className="mt-4 text-4xl font-extrabold">{program.name}</h1>
        <p className="hindi mt-2 text-xl font-semibold text-primary-600">{program.hindiName}</p>
        <p className="mt-6 text-lg text-ink/70">{program.tagline}</p>
        <div className="mt-8 max-w-none text-ink/80">
          <p>{program.longDescription || program.description}</p>
        </div>
        <div className="mt-10">
          <Link to="/donate" className="btn-primary">Support this program</Link>
        </div>
      </div>
    </div>
  );
}
