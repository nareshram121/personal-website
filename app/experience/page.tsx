const experiences = [
  {
    company: "Company Name",
    role: "Senior Software Engineer",
    period: "2022 – Present",
    location: "Remote",
    description:
      "Led development of core product features serving thousands of users. Mentored junior engineers and drove architectural decisions.",
    highlights: [
      "Reduced page load time by 40% through performance optimizations",
      "Architected and shipped a real-time collaboration feature",
      "Led a team of 4 engineers to deliver a major product milestone",
    ],
    color: "from-indigo-500 to-purple-600",
  },
  {
    company: "Previous Company",
    role: "Software Engineer",
    period: "2020 – 2022",
    location: "San Francisco, CA",
    description:
      "Full-stack engineer on a fast-growing startup. Built and maintained customer-facing features and internal tooling.",
    highlights: [
      "Built an analytics dashboard used by the entire sales team",
      "Improved API response times by 60% through caching strategies",
      "Contributed to open-source projects used by the company",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    company: "First Job Inc.",
    role: "Junior Developer",
    period: "2018 – 2020",
    location: "New York, NY",
    description:
      "Started my career here, worked on front-end development and learned the ropes of professional software development.",
    highlights: [
      "Developed responsive UI components used across the product",
      "Participated in code reviews and agile sprint planning",
      "Shipped 10+ features from design to production",
    ],
    color: "from-amber-500 to-orange-500",
  },
];

const education = [
  {
    institution: "University Name",
    degree: "B.S. Computer Science",
    period: "2014 – 2018",
    note: "Graduated with honors",
  },
];

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
  "Tools & Infra": ["Git", "Docker", "AWS", "CI/CD", "Linux"],
};

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4">
          My <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-gray-500 text-lg">Where I&apos;ve worked and what I&apos;ve built</p>
      </div>

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-pink-400" />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16">
                <div
                  className={`absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} shadow-md -translate-x-1/2`}
                />
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{exp.role}</h3>
                      <p className="text-indigo-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-500">{exp.period}</p>
                      <p className="text-xs text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm my-3 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-indigo-500 mt-0.5 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
        {education.map((edu, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-indigo-600 font-semibold">{edu.institution}</p>
                <p className="text-gray-400 text-sm mt-1">{edu.note}</p>
              </div>
              <span className="text-sm text-gray-500 font-medium">{edu.period}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
