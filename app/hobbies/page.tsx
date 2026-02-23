const hobbies = [
  {
    emoji: "🎸",
    title: "Music",
    description:
      "Playing guitar is my creative outlet. From strumming chords on a quiet evening to jamming along to favorite songs, music keeps me grounded.",
    tags: ["Guitar", "Listening", "Concerts"],
    color: "from-indigo-500 to-purple-600",
    bg: "from-indigo-50 to-purple-50",
    border: "border-indigo-100",
  },
  {
    emoji: "📚",
    title: "Reading",
    description:
      "I love getting lost in a good book — whether it's a sci-fi novel, a philosophy deep dive, or the latest tech release.",
    tags: ["Sci-Fi", "Non-Fiction", "Tech Books"],
    color: "from-pink-500 to-rose-500",
    bg: "from-pink-50 to-rose-50",
    border: "border-pink-100",
  },
  {
    emoji: "🏃",
    title: "Running",
    description:
      "Running clears my head. I try to hit the trails a few times a week. There's something meditative about putting one foot in front of the other.",
    tags: ["Trail Running", "5K", "Fitness"],
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
  },
  {
    emoji: "🍳",
    title: "Cooking",
    description:
      "Experimenting in the kitchen is my version of a side project. I love trying recipes from different cultures and making them my own.",
    tags: ["World Cuisine", "Baking", "Meal Prep"],
    color: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
  {
    emoji: "🎮",
    title: "Gaming",
    description:
      "A good story-driven game is hard to beat. I enjoy RPGs and strategy games that make you think — and the occasional multiplayer session.",
    tags: ["RPGs", "Strategy", "Indie Games"],
    color: "from-cyan-500 to-blue-500",
    bg: "from-cyan-50 to-blue-50",
    border: "border-cyan-100",
  },
  {
    emoji: "✈️",
    title: "Traveling",
    description:
      "Exploring new places, cultures, and cuisines is one of my greatest joys. Every trip teaches me something new about the world and myself.",
    tags: ["Backpacking", "Food Tourism", "Photography"],
    color: "from-violet-500 to-pink-500",
    bg: "from-violet-50 to-pink-50",
    border: "border-violet-100",
  },
];

export default function Hobbies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4">
          Hobbies &amp; <span className="gradient-text">Interests</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Life beyond the code — the things that make me who I am.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            className={`bg-gradient-to-br ${hobby.bg} rounded-2xl border ${hobby.border} p-6 card-hover`}
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${hobby.color} shadow-md mb-4`}>
              <span className="text-2xl">{hobby.emoji}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{hobby.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{hobby.description}</p>
            <div className="flex flex-wrap gap-2">
              {hobby.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium bg-white/70 text-gray-600 rounded-full border border-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
        <p className="text-3xl mb-3">🌟</p>
        <p className="text-xl font-bold text-gray-800 mb-2">Always Curious, Always Growing</p>
        <p className="text-gray-500 max-w-md mx-auto text-sm">
          These are just a few of my passions. I&apos;m always picking up new hobbies and interests — because life&apos;s too short to stop exploring.
        </p>
      </div>
    </div>
  );
}
