import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-x grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <p className="text-7xl font-extrabold text-primary-500">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <Link to="/" className="btn-primary mt-8 inline-flex">Back home</Link>
      </div>
    </div>
  );
}
