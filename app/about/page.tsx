export default function About() {
  const skills = [
    "Product Strategy", "EdTech", "LXP Platforms", "Curriculum Design",
    "Academic Operations", "Startup Building", "Content Creation",
    "Children's Publishing", "Business Development", "Brand & Growth",
    "Community Building", "Storytelling",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4">
          About <span className="gradient-text">Me</span>
        </h1>
        <p className="text-gray-500 text-lg">Entrepreneur · Product Builder · Educator · Dad</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-48 h-48 rounded-2xl gradient-bg flex items-center justify-center shadow-xl">
            <span className="text-7xl">👨‍👧</span>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-xl text-gray-900">Naresh Ramamurthy</h2>
            <p className="text-indigo-600 font-medium text-sm">Bangalore, India</p>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-3">Hello there! 👋</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              I&apos;m Naresh — an entrepreneur, product builder, educator, and self-described pseudo-techie based out of Bangalore, India. I&apos;ve spent my career at the intersection of education and technology, building platforms, schools, startups, and a children&apos;s publishing house along the way.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              I currently serve as the Chief Academic Officer at Orchids — The International School, where I oversee academics across 120+ private schools across India. Before that, I led product at Techademy, an end-to-end LXP for IT companies in India, and held multiple leadership roles at K12 Techno Services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My earliest venture was the Book Lovers Program for Schools — a reading program, a children&apos;s publishing house (MsMoochie Books), a library, a performance space, and an IB curriculum content studio all rolled into one. I&apos;ve always loved building things from scratch.
            </p>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Based in", value: "📍 Bangalore, India" },
              { label: "Current Role", value: "🎓 Chief Academic Officer" },
              { label: "Aspires to", value: "📖 Write books & screenplays" },
              { label: "Most importantly", value: "👨‍👧 Be a good father" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</p>
                <p className="font-semibold text-gray-800 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What I talk about */}
      <div className="mt-16 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-2xl border border-indigo-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">What I Can Talk About</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {["Writing & Storytelling", "Education & EdTech", "Books & Reading", "Working with Kids with CP", "Raising Kids", "Product Building", "Entrepreneurship"].map((topic) => (
            <span key={topic} className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium text-sm border border-indigo-100 shadow-sm">
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Skills & Expertise
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
