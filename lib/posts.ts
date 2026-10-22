import fs from "node:fs";
import path from "node:path";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  color: string;
  emoji: string;
};

export const posts: Post[] = [
  {
    slug: "can-ai-listen-to-a-classroom",
    title: "Can AI Listen to a Classroom?",
    excerpt:
      "We started scoring recorded classes against a rubric written by subject experts. Cost turned out to be the easy part. Trust is the hard part.",
    date: "2026-10-22",
    tags: ["AI", "Teaching", "Education"],
    color: "from-cyan-500 to-blue-500",
    emoji: "🎧",
  },
  {
    slug: "the-cao-who-ships-code",
    title: "The Chief Academic Officer Who Ships Code",
    excerpt:
      "I'm an education leader and a self-described pseudo-techie. With an AI coding assistant, I've started building real software. Here's what changed.",
    date: "2026-10-22",
    tags: ["AI", "Product", "Leadership"],
    color: "from-slate-600 to-indigo-600",
    emoji: "💻",
  },
  {
    slug: "building-a-house-system-for-120-schools",
    title: "Designing a House System for 120+ Schools",
    excerpt:
      "Four houses named after India's mountain ranges, shared by every school in the network. A note on designing for belonging at scale, and on rewarding more than just the winners.",
    date: "2026-10-22",
    tags: ["Schools", "Culture", "Scale"],
    color: "from-indigo-600 to-emerald-600",
    emoji: "🏔️",
  },
  {
    slug: "rubrics-teachers-trust",
    title: "Rubrics Teachers Can Trust",
    excerpt:
      "Teacher evaluation only works when it feels like coaching, not surveillance. These are the design principles I keep coming back to.",
    date: "2026-10-22",
    tags: ["Teaching", "Assessment", "Leadership"],
    color: "from-amber-500 to-rose-500",
    emoji: "📋",
  },
  {
    slug: "yosi-daily-puzzles",
    title: "What Building a Puzzle App Taught Me About How Kids Think",
    excerpt:
      "I built a daily puzzle app with eight kinds of puzzles. The hardest part was making them hard enough.",
    date: "2026-10-22",
    tags: ["Puzzles", "Kids", "Product"],
    color: "from-violet-500 to-fuchsia-500",
    emoji: "🧩",
  },
  {
    slug: "what-120-schools-taught-me-about-scale",
    title: "What 120 Schools Taught Me About Scale",
    excerpt:
      "Managing academics across 120+ schools isn't just an operational challenge — it's a lesson in how systems, culture, and people interact at scale. Here's what I've learned.",
    date: "2026-10-22",
    tags: ["Education", "Leadership", "Scale"],
    color: "from-indigo-500 to-purple-600",
    emoji: "🏫",
  },
  {
    slug: "product-builders-should-read-childrens-books",
    title: "Why Every Product Builder Should Read Children's Books",
    excerpt:
      "Children's books are the most ruthlessly edited artefacts in publishing. Clarity, empathy, and storytelling — they have a lot to teach us about product design.",
    date: "2026-10-22",
    tags: ["Product", "Books", "Storytelling"],
    color: "from-pink-500 to-rose-500",
    emoji: "📖",
  },
  {
    slug: "the-lxp-problem",
    title: "The LXP Problem: Why Most Corporate Learning Platforms Fail",
    excerpt:
      "After building and leading an LXP for enterprise IT companies, I have strong opinions about why most platforms miss the mark — and what it actually takes to drive learning at work.",
    date: "2026-10-22",
    tags: ["EdTech", "LXP", "Product"],
    color: "from-amber-500 to-orange-500",
    emoji: "🎓",
  },
  {
    slug: "raising-kids-in-a-world-full-of-screens",
    title: "On Raising Kids in a World Full of Screens",
    excerpt:
      "I've spent my career in education and technology. I've also got a kid. The tension between those two things keeps me thinking.",
    date: "2026-10-22",
    tags: ["Parenting", "Tech", "Reflection"],
    color: "from-emerald-500 to-teal-500",
    emoji: "👨‍👧",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPostBody(slug: string) {
  return fs.readFileSync(path.join(process.cwd(), "content/posts", `${slug}.md`), "utf8");
}

export function readTime(body: string) {
  return `${Math.max(1, Math.round(body.split(/\s+/).length / 220))} min read`;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
