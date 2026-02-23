const posts = [
  {
    title: "Why I Switched to Next.js (And Never Looked Back)",
    excerpt:
      "A deep dive into what makes Next.js so compelling for modern web development, from the App Router to server components.",
    date: "February 15, 2026",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Dev"],
    color: "from-indigo-500 to-purple-600",
    emoji: "⚡",
  },
  {
    title: "The Art of Writing Clean Code",
    excerpt:
      "Clean code isn't just about aesthetics — it's about communication. Here's what I've learned from years of reading and writing code.",
    date: "January 28, 2026",
    readTime: "8 min read",
    tags: ["Programming", "Best Practices"],
    color: "from-pink-500 to-rose-500",
    emoji: "✨",
  },
  {
    title: "Building Faster APIs: Lessons from the Trenches",
    excerpt:
      "Performance optimization is more art than science. I share the strategies that have made the biggest difference in real-world projects.",
    date: "January 10, 2026",
    readTime: "10 min read",
    tags: ["Backend", "Performance", "APIs"],
    color: "from-amber-500 to-orange-500",
    emoji: "🔥",
  },
  {
    title: "My 2025 Retrospective: What I Built and What I Learned",
    excerpt:
      "A look back at the year — the projects, the failures, the wins, and everything I'd do differently.",
    date: "December 31, 2025",
    readTime: "6 min read",
    tags: ["Reflection", "Career"],
    color: "from-emerald-500 to-teal-500",
    emoji: "🌱",
  },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4">
          The <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Thoughts on software, design, and everything in between.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post, i) => (
          <article
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover cursor-pointer"
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
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl p-10 border border-indigo-100">
        <p className="text-2xl font-bold text-gray-800 mb-2">More posts coming soon!</p>
        <p className="text-gray-500 text-sm">
          Replace these placeholder posts with your real articles. Consider using MDX for rich blog content.
        </p>
      </div>
    </div>
  );
}
