import type { ReactNode } from "react";

// Renders the small markdown subset used in content/posts:
// paragraphs, "## " headings, "- " lists, "> " quotes, **bold** and *italic*.

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export default function PostBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
      {blocks.map((block, i) => {
        const lines = block.split("\n").map((l) => l.trim());
        if (lines[0].startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl font-bold text-gray-900 pt-6">
              {inline(lines[0].slice(3))}
            </h2>
          );
        }
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-3">
                  <span className="text-indigo-500 flex-shrink-0">▸</span>
                  <span>{inline(l.slice(2))}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (lines.every((l) => l.startsWith(">"))) {
          return (
            <blockquote key={i} className="border-l-4 border-indigo-400 pl-5 italic text-gray-600">
              {inline(lines.map((l) => l.replace(/^>\s?/, "")).join(" "))}
            </blockquote>
          );
        }
        return <p key={i}>{inline(lines.join(" "))}</p>;
      })}
    </div>
  );
}
