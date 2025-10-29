
import { JsonNewsRepository } from "@/repositories/news/json.repository";
import { drizzleDb } from ".";
import { newsTable } from "./schemas";

(async () => {
    const jsonNewsRepository = new JsonNewsRepository();
    const news = await jsonNewsRepository.findAll();
    try {
        await drizzleDb.delete(newsTable);
        await drizzleDb.insert(newsTable).values(news);
    } catch (error) {
        console.log(error)
    }
})()