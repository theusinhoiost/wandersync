"use server";

import { findAllPublicPostsCached } from "@/lib/post/queries/public";
import CardNews from "./cardNews";
export default async function News() {
  const posts = await findAllPublicPostsCached();

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center text-gray-500">
        Nenhuma notícia encontrada.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      {posts.map((post) => (
        <CardNews
          key={post.id}
          id={post.id}
          title={post.title}
          text={post.content}
          date={new Date(post.created_at)}
          coverImageUrl={post.coverImageUrl}
        />
      ))}
    </div>
  );
}
