import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPostBody, posts, readTime } from "@/lib/posts";
import { socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing by Naresh Ramamurthy on education at scale, AI in classrooms, children's books, product building, EdTech and parenting.",
};

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4">
          The <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Writing about education, books, products, parenting, and the messy overlap between them all.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover group"
          >
            <div className={`h-1.5 bg-gradient-to-r ${post.color}`} />
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{post.emoji}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>📅 {formatDate(post.date)}</span>
                    <span>⏱ {readTime(getPostBody(post.slug))}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl p-10 border border-indigo-100">
        <p className="text-2xl font-bold text-gray-800 mb-2">More on the way</p>
        <p className="text-gray-500 text-sm mb-5">
          Follow along for new posts on education, books, and building things.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {socials
            .filter((s) => s.label === "LinkedIn" || s.label === "X")
            .map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full gradient-bg text-white text-sm font-semibold shadow hover:shadow-lg transition-all"
              >
                {label}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
