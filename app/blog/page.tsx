const posts = [
  {
    title: "What 120 Schools Taught Me About Scale",
    excerpt:
      "Managing academics across 120+ schools isn't just an operational challenge — it's a lesson in how systems, culture, and people interact at scale. Here's what I've learned.",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["Education", "Leadership", "Scale"],
    color: "from-indigo-500 to-purple-600",
    emoji: "🏫",
  },
  {
    title: "Why Every Product Builder Should Read Children's Books",
    excerpt:
      "Children's books are the most ruthlessly edited artefacts in publishing. Clarity, empathy, and storytelling — they have a lot to teach us about product design.",
    date: "Coming Soon",
    readTime: "5 min read",
    tags: ["Product", "Books", "Storytelling"],
    color: "from-pink-500 to-rose-500",
    emoji: "📖",
  },
  {
    title: "The LXP Problem: Why Most Corporate Learning Platforms Fail",
    excerpt:
      "After building and leading an LXP for enterprise IT companies, I have strong opinions about why most platforms miss the mark — and what it actually takes to drive learning at work.",
    date: "Coming Soon",
    readTime: "10 min read",
    tags: ["EdTech", "LXP", "Product"],
    color: "from-amber-500 to-orange-500",
    emoji: "🎓",
  },
  {
    title: "On Raising Kids in a World Full of Screens",
    excerpt:
      "I've spent my career in education and technology. I've also got a kid. The tension between those two things keeps me thinking.",
    date: "Coming Soon",
    readTime: "6 min read",
    tags: ["Parenting", "Tech", "Reflection"],
    color: "from-emerald-500 to-teal-500",
    emoji: "👨‍👧",
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
          Writing about education, books, products, parenting, and the messy overlap between them all.
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
        <p className="text-2xl font-bold text-gray-800 mb-2">Posts are on their way!</p>
        <p className="text-gray-500 text-sm">
          I have a lot to say about education, books, and building things. Watch this space.
        </p>
      </div>
    </div>
  );
}
