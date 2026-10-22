import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostBody from "@/components/PostBody";
import { formatDate, getPost, getPostBody, posts, readTime } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [site.name],
      tags: post.tags,
    },
    twitter: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const body = getPostBody(post.slug);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
        ← All posts
      </Link>

      <header className="mt-8 mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4">
          <span className="mr-3">{post.emoji}</span>
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 [&>span]:whitespace-nowrap">
          <span>{site.name}</span>
          <span>📅 {formatDate(post.date)}</span>
          <span>⏱ {readTime(body)}</span>
        </div>
        <div className={`h-1.5 mt-8 rounded-full bg-gradient-to-r ${post.color}`} />
      </header>

      <PostBody body={body} />

      <div className="mt-16 pt-8 border-t border-gray-200">
        <Link href="/blog" className="text-indigo-600 font-semibold hover:text-indigo-800">
          ← Read more posts
        </Link>
      </div>
    </article>
  );
}
