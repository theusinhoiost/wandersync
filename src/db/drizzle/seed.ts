import { JsonPostRepository } from "@/repositories/post/json.repository"
import { drizzleDb } from ".";
import { newsTable } from "./schemas";


(async()=>{
const jsonPostRepository = new JsonPostRepository();
const news = await jsonPostRepository.findAll();
try {
    //await drizzleDb.delete(postsTable);
 await drizzleDb.insert(newsTable).values(news);   
} catch (error) {
    console.log(error)
}
})()