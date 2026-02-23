const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application that helps teams collaborate in real time. Built with Next.js, WebSockets, and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    color: "from-indigo-500 to-purple-600",
    emoji: "🚀",
    status: "Live",
  },
  {
    title: "Project Beta",
    description:
      "An open-source CLI tool that automates repetitive development workflows. Used by hundreds of developers.",
    tags: ["Node.js", "CLI", "Open Source"],
    color: "from-pink-500 to-rose-500",
    emoji: "⚙️",
    status: "Open Source",
  },
  {
    title: "Project Gamma",
    description:
      "A machine learning powered app that classifies and organizes personal data intelligently.",
    tags: ["Python", "ML", "React", "FastAPI"],
    color: "from-amber-500 to-orange-500",
    emoji: "🧠",
    status: "In Progress",
  },
  {
    title: "Project Delta",
    description:
      "A beautifully designed mobile-first e-commerce storefront with blazing fast performance.",
    tags: ["React", "Tailwind CSS", "Stripe", "Vercel"],
    color: "from-emerald-500 to-teal-500",
    emoji: "🛍️",
    status: "Live",
  },
  {
    title: "Project Epsilon",
    description:
      "A developer tool for managing and visualizing complex API schemas and relationships.",
    tags: ["TypeScript", "GraphQL", "D3.js"],
    color: "from-cyan-500 to-blue-500",
    emoji: "📊",
    status: "Beta",
  },
];

const statusColors: Record<string, string> = {
  Live: "bg-emerald-100 text-emerald-700",
  "Open Source": "bg-purple-100 text-purple-700",
  "In Progress": "bg-amber-100 text-amber-700",
  Beta: "bg-blue-100 text-blue-700",
};

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          A collection of things I&apos;ve built, shipped, and experimented with.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover flex flex-col"
          >
            <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.emoji}</span>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-white rounded-2xl border border-gray-100 shadow-sm p-10">
        <p className="text-2xl font-bold text-gray-800 mb-2">More coming soon!</p>
        <p className="text-gray-500">
          I&apos;m always building something new. Update this page with your real projects.
        </p>
      </div>
    </div>
  );
}
