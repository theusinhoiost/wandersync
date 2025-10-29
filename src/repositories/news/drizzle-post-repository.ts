
import { drizzleDb } from '@/db/drizzle';
import { logColor } from '@/utils/log-color';
import { AsyncDelay } from '@/utils/async-delay';
import { time_Value } from '@/lib/post/queries/constants';
import { NewsRepository } from './news-repository';
import { NewsModel } from '@/models/post/news-model';

export class DrizzlePostRepository implements NewsRepository {
  async findAllPublic(): Promise<NewsModel[]> {
    await AsyncDelay(time_Value, true);
    logColor('findAllPublic', Date.now());
    const news = await drizzleDb.query.news.findMany({
      orderBy: (news, { desc }) => desc(news.created_at),
      where: (news, { eq }) => eq(news.published, true),
    });
    return news;
  }

  async findBySlugPublic(slug: string): Promise<NewsModel> {
    await AsyncDelay(time_Value, true);
    logColor('findBySlugPublic', Date.now());

    const news = await drizzleDb.query.news.findFirst({
      where: (news, { eq, and }) =>
        and(eq(news.published, true), eq(news.slug, slug)),
    });

    if (!news) throw new Error('Post não encontrado para slug');

    return news;
  }

  async findAll(): Promise<NewsModel[]> {
    await AsyncDelay(time_Value, true);
    logColor('findAll', Date.now());

    const news = await drizzleDb.query.news.findMany({
      orderBy: (news, { desc }) => desc(news.created_at),
    });

    return news;
  }

  async findByID(id: string): Promise<NewsModel> {
    await AsyncDelay(time_Value, true);
    logColor('findById', Date.now());

    const news = await drizzleDb.query.news.findFirst({
      where: (news, { eq }) => eq(news.id, id),
    });

    if (!news) throw new Error('Post não encontrado para ID');

    return news;
  }
}

// (async () => {
//   //   como-a-tecnologia-impacta-nosso-bem-estar false
//   // os-desafios-do-trabalho-remoto-moderno true
//   //   6b204dab-2312-4525-820a-a0463560835f false
//   // 76396dd3-9581-43b5-856d-fe1a78714e8c true
//   const repo = new DrizzlePostRepository();
//   // const posts = await repo.findAllPublic();
//   // posts.forEach(post => console.log(post.id, post.published));
//   const post = await repo.findBySlugPublic(
//     'os-desafios-do-trabalho-remoto-moderno ',
//   );
//   console.log(post);
// })();