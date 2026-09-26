import { useEffect, useState } from "react";
import { getBlogPosts } from "../services/api.js";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then(setPosts).catch(() => {});
  }, []);

  return (
    <div className="container-x py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">Blog and Events</p>
        <h1 className="mt-2 text-4xl font-extrabold">Stories from the field</h1>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="card p-6">
            <p className="text-xs text-ink/50">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <h3 className="mt-3 text-lg font-bold">{post.title}</h3>
            <p className="mt-3 text-sm text-ink/70">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
