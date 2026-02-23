export default function About() {
  const skills = [
    "TypeScript", "React", "Next.js", "Node.js", "Python", "SQL",
    "Git", "Docker", "AWS", "Tailwind CSS",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4">
          About <span className="gradient-text">Me</span>
        </h1>
        <p className="text-gray-500 text-lg">A little bit about who I am</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Avatar placeholder */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-48 h-48 rounded-2xl gradient-bg flex items-center justify-center shadow-xl">
            <span className="text-7xl">👨‍💻</span>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-xl text-gray-900">Naresh Ramamurthy</h2>
            <p className="text-indigo-600 font-medium text-sm">Developer & Creator</p>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-3">Hello there! 👋</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              I&apos;m Naresh, a developer passionate about building elegant solutions to complex problems. I love everything from crafting beautiful user interfaces to designing robust backend systems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open source, or diving into one of my many hobbies. I believe that great software is built by people who care deeply about both the craft and the user.
            </p>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Based in", value: "🌍 Earth" },
              { label: "Focus", value: "💡 Full-Stack Dev" },
              { label: "Available for", value: "🤝 Opportunities" },
              { label: "Currently learning", value: "📚 Always something new" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</p>
                <p className="font-semibold text-gray-800 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
