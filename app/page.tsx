import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-pink-50 to-amber-50 opacity-60" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm font-semibold">
            Entrepreneur · Product Builder · Educator · Bangalore, India
          </div>
          <h1 className="text-6xl sm:text-7xl font-black tracking-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Naresh</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            I build products, shape education systems, and explore ideas across technology, books, and storytelling. Currently Chief Academic Officer at Orchids — The International School.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-3 rounded-full gradient-bg text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              About Me
            </Link>
            <Link
              href="/experience"
              className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200"
            >
              My Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Explore My Site
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              href: "/about",
              emoji: "👋",
              title: "About Me",
              desc: "Entrepreneur, educator, pseudo-techie, and dad. Here's the full story.",
              color: "from-indigo-500 to-purple-600",
            },
            {
              href: "/projects",
              emoji: "🚀",
              title: "Projects",
              desc: "From edtech platforms to children's books — things I've built and shipped.",
              color: "from-pink-500 to-rose-500",
            },
            {
              href: "/experience",
              emoji: "💼",
              title: "Experience",
              desc: "Two decades across education, startups, and product leadership.",
              color: "from-amber-500 to-orange-500",
            },
            {
              href: "/blog",
              emoji: "✍️",
              title: "Blog",
              desc: "Writing about education, books, parenting, and building things.",
              color: "from-emerald-500 to-teal-500",
            },
            {
              href: "/hobbies",
              emoji: "🎨",
              title: "Hobbies",
              desc: "Board games, comics, retro games, cooking, stock markets and more.",
              color: "from-cyan-500 to-blue-500",
            },
          ].map(({ href, emoji, title, desc, color }) => (
            <Link key={href} href={href} className="group card-hover">
              <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${color}`} />
                <div className="p-6">
                  <span className="text-4xl mb-4 block">{emoji}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
