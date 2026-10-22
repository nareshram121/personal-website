import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobbies",
  description:
    "Books, writing, movies, board games, retro games, cooking, markets and more — what Naresh Ramamurthy does for fun.",
};

const hobbies = [
  {
    emoji: "📚",
    title: "Books & Reading",
    description:
      "Books are at the core of who I am — I ran a children's publishing house and a library because I love them that much. From fiction to philosophy to kids' lit, my reading list never ends.",
    tags: ["Fiction", "Children's Books", "Non-Fiction", "IB Curriculum"],
    color: "from-indigo-500 to-purple-600",
    bg: "from-indigo-50 to-purple-50",
    border: "border-indigo-100",
  },
  {
    emoji: "✍️",
    title: "Writing",
    description:
      "I write — and aspire to write a lot more. Books and screenplays are on the bucket list. Storytelling is how I make sense of the world.",
    tags: ["Screenplays", "Books", "Storytelling", "Content"],
    color: "from-pink-500 to-rose-500",
    bg: "from-pink-50 to-rose-50",
    border: "border-pink-100",
  },
  {
    emoji: "🎬",
    title: "Movies",
    description:
      "A proper film person. Cinema is storytelling at its most visceral. I love a good screenplay as much as a great performance.",
    tags: ["Cinema", "Screenwriting", "Storytelling"],
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
  },
  {
    emoji: "🎲",
    title: "Board Games",
    description:
      "There's something wonderful about sitting around a table with real people and a well-designed game. Strategy, luck, and a lot of trash talk.",
    tags: ["Strategy", "Family Games", "Game Design"],
    color: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
  {
    emoji: "🕹️",
    title: "Retro Games & Apps",
    description:
      "Old-school games have a charm that modern AAA titles often miss. I love tinkering with apps and exploring what makes great digital experiences.",
    tags: ["Retro Gaming", "App Design", "Logic Puzzles"],
    color: "from-cyan-500 to-blue-500",
    bg: "from-cyan-50 to-blue-50",
    border: "border-cyan-100",
  },
  {
    emoji: "🍳",
    title: "Cooking",
    description:
      "Cooking is my creative outlet away from screens. I experiment with flavours and cuisines — the kitchen is just another kind of lab.",
    tags: ["World Cuisine", "Experimenting", "Family Meals"],
    color: "from-orange-400 to-red-400",
    bg: "from-orange-50 to-red-50",
    border: "border-orange-100",
  },
  {
    emoji: "📈",
    title: "Stock Market",
    description:
      "I find markets fascinating — the psychology, the patterns, the chaos. I follow global equities and enjoy the intellectual puzzle of it all.",
    tags: ["Equities", "Markets", "Investing"],
    color: "from-violet-500 to-indigo-500",
    bg: "from-violet-50 to-indigo-50",
    border: "border-violet-100",
  },
  {
    emoji: "🌍",
    title: "Global Geopolitics",
    description:
      "The world is a complex, fascinating place. I follow international affairs, power shifts, and the forces that shape how countries and people relate to each other.",
    tags: ["International Affairs", "History", "Policy"],
    color: "from-teal-500 to-cyan-500",
    bg: "from-teal-50 to-cyan-50",
    border: "border-teal-100",
  },
  {
    emoji: "🦸",
    title: "Comics & Children's Toys",
    description:
      "Comics are literature and I will die on that hill. Also, a good toy is a masterpiece of design — I have a deep appreciation for both.",
    tags: ["Comics", "Graphic Novels", "Toy Design"],
    color: "from-rose-500 to-pink-500",
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-100",
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
          Life beyond work — the things that make me who I am.
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
        <p className="text-xl font-bold text-gray-800 mb-2">Curious about everything, committed to a few.</p>
        <p className="text-gray-500 max-w-md mx-auto text-sm">
          Life&apos;s too interesting to pick just one lane. I&apos;m always reading something, watching something, or building something new.
        </p>
      </div>
    </div>
  );
}
