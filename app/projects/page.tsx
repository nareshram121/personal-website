const projects = [
  {
    title: "Techademy LXP",
    description:
      "An end-to-end Learning Experience Platform for IT companies in India — featuring rich content libraries, proctored assessments, mentoring, virtual labs, community forums, gamification, and job postings.",
    tags: ["EdTech", "LXP", "Product", "Enterprise"],
    color: "from-indigo-500 to-purple-600",
    emoji: "🎓",
    status: "Live",
  },
  {
    title: "MsMoochie Books",
    description:
      "A children's publishing house focused on books that spark curiosity and a love of reading. Published original titles for young readers across India.",
    tags: ["Publishing", "Children's Books", "Startup"],
    color: "from-pink-500 to-rose-500",
    emoji: "📖",
    status: "Founded",
  },
  {
    title: "Book Lovers Program for Schools",
    description:
      "A reading enrichment program delivered across schools — combining storytelling sessions for kids, teacher workshops, IB curriculum content, and a running library and performance space.",
    tags: ["Education", "Reading", "Curriculum", "IB"],
    color: "from-amber-500 to-orange-500",
    emoji: "📚",
    status: "Founded",
  },
  {
    title: "Kids Reading Apps",
    description:
      "Designed and shipped mobile reading apps for children, blending interactive storytelling with early literacy tools.",
    tags: ["Mobile", "EdTech", "Kids", "Literacy"],
    color: "from-emerald-500 to-teal-500",
    emoji: "📱",
    status: "Shipped",
  },
  {
    title: "Orchids Academic Operations",
    description:
      "Overseeing academic systems, curriculum, and quality standards across 120+ private schools in India — one of the country's largest school chains.",
    tags: ["Education", "Operations", "Scale", "Curriculum"],
    color: "from-cyan-500 to-blue-500",
    emoji: "🏫",
    status: "Live",
  },
  {
    title: "K12 B2B & B2C Business Lines",
    description:
      "Built new business lines for K12 Techno Services — spanning direct-to-school B2B services and consumer-facing B2C education products.",
    tags: ["B2B", "B2C", "Business Development", "EdTech"],
    color: "from-violet-500 to-pink-500",
    emoji: "💼",
    status: "Built",
  },
];

const statusColors: Record<string, string> = {
  Live: "bg-emerald-100 text-emerald-700",
  Founded: "bg-purple-100 text-purple-700",
  Shipped: "bg-blue-100 text-blue-700",
  Built: "bg-amber-100 text-amber-700",
};

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Platforms, publishing houses, programs, and products — things I&apos;ve built from scratch.
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

      <div className="mt-16 text-center bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl border border-indigo-100 p-10">
        <p className="text-2xl font-bold text-gray-800 mb-2">Always building something new.</p>
        <p className="text-gray-500">
          Aspiring to write books and screenplays — next chapters in the making.
        </p>
      </div>
    </div>
  );
}
