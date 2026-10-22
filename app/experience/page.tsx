import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Naresh Ramamurthy's career across K12 education, EdTech and enterprise learning, including Chief Academic Officer at Orchids.",
};

const experiences = [
  {
    company: "Orchids — The International School",
    role: "Chief Academic Officer",
    period: "Present",
    location: "Bangalore, India",
    description:
      "Leading academics across a chain of 120+ private schools across India. Responsible for curriculum, academic operations, quality standards, and educator development at scale.",
    highlights: [
      "Overseeing academic strategy and execution across 120+ schools",
      "Driving curriculum innovation and learning outcome improvements",
      "Managing large-scale educator training and development programs",
    ],
    color: "from-indigo-500 to-purple-600",
  },
  {
    company: "Techademy",
    role: "Chief Platform Officer",
    period: "Prior",
    location: "India",
    description:
      "Led product strategy for an end-to-end Learning Experience Platform (LXP) for IT companies in India. The platform offered rich content, proctored assessments, mentoring, labs, community, gamification, and job postings.",
    highlights: [
      "Owned the product roadmap for a full-suite LXP serving enterprise IT clients",
      "Integrated rich content, assessments with proctoring, mentoring, and labs",
      "Drove gamification and community features to improve learner engagement",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    company: "K12 Techno Services",
    role: "Academic Operations & Business Leadership",
    period: "Prior",
    location: "India",
    description:
      "Held multiple leadership roles at the company that manages Orchids — The International School. Spanned academic operations, new business development (B2B and B2C), and branding and growth for the organisation.",
    highlights: [
      "Managed academic operations across a growing network of schools",
      "Built new B2B and B2C business lines from the ground up",
      "Led branding and growth initiatives for the Orchids network",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    company: "Book Lovers Program for Schools / MsMoochie Books",
    role: "Founder",
    period: "Earlier",
    location: "India",
    description:
      "Founded and ran a multi-faceted venture around reading and children's education. Delivered reading programs and storytelling sessions in schools, ran workshops for teachers, managed a children's publishing house, created reading apps, built IB curriculum content, ran a library and a performance space, and consulted with schools and publishing organisations.",
    highlights: [
      "Founded MsMoochie Books — a children's publishing house",
      "Created kids reading apps and IB curriculum content",
      "Ran a library, a performance space, and teacher workshops",
      "Consulted with schools and publishing organisations across India",
    ],
    color: "from-emerald-500 to-teal-500",
  },
];

const skills = {
  "Education & Academics": ["Curriculum Design", "Academic Operations", "EdTech", "LXP Platforms", "IB Curriculum", "Teacher Training"],
  "Product & Business": ["Product Strategy", "B2B & B2C", "Startup Building", "Business Development", "Brand & Growth"],
  "Creative": ["Children's Publishing", "Storytelling", "Content Creation", "Writing", "App Development"],
};

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4">
          My <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-gray-500 text-lg">Two decades across education, startups, and product leadership</p>
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

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
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
