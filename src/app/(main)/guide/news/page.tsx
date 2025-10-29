import CardNews from "@/components/News";
import { findPublicPostBySlugCached } from "@/lib/post/queries/public";
export default async function NewsPage() {
  // Exemplo: pegando um slug fixo (você pode mudar depois para dinâmico)
  const slug = "wanderlust-explorando-o-norte";

  const post = await findPublicPostBySlugCached(slug);

  if (!post) {
    return (
      <div className="text-center text-gray-500">Notícia não encontrada.</div>
    );
  }

  return (
    <div className="flex justify-center p-6">
      <CardNews
        title={post.title}
        text={post.content}
        date={new Date(post.created_at)}
        id={0}
        coverImageUrl={post.coverImageUrl}
      />
    </div>
  );
}
