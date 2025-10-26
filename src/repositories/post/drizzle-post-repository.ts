
import { drizzleDb } from '@/db/drizzle';
import { logColor } from '@/utils/log-color';
import { AsyncDelay } from '@/utils/async-delay';
import { time_Value } from '@/lib/post/queries/constants';
import { NewsModel } from '@/models/post/news-model';
import { NewsRepository } from './post-repository';

export class DrizzlePostRepository implements NewsRepository {
  async findAllPublic(): Promise<NewsModel[]> {
    await AsyncDelay(time_Value, true);
    logColor('findAllPublic', Date.now());
    const news = await drizzleDb.query.news.findMany({
      orderBy: (news, { desc }) => desc(news.createdAt),
      where: (news, { eq }) => eq(news.published, true),
    });

    return news;
  }
  async findAll(): Promise<NewsModel[]> {
    await AsyncDelay(time_Value, true);
    logColor('findAll', Date.now());

    const news = await drizzleDb.query.news.findMany({
      orderBy: (news, { desc }) => desc(news.createdAt),
    });

    return news;
  }


}

// (async () => {
//   //   como-a-tecnologia-impacta-nosso-bem-estar false
//   // os-desafios-do-trabalho-remoto-moderno true
//   //   6b204dab-2312-4525-820a-a0463560835f false
//   // 76396dd3-9581-43b5-856d-fe1a78714e8c true
//   const repo = new DrizzlePostRepository();
//   // const news = await repo.findAllPublic();
//   // news.forEach(post => console.log(post.id, post.published));
//   const post = await repo.findBySlugPublic(
//     'os-desafios-do-trabalho-remoto-moderno ',
//   );
//   console.log(post);
// })();