import { drizzleDb } from '.';
import { newsTable } from './schemas';


(async () => {
    const news = await drizzleDb.select().from(newsTable);

    news.forEach(news => {
        console.log(news.slug);
    });
})();