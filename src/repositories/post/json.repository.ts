
import { NewsRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { time_Value } from "@/lib/post/queries/constants";
import { NewsModel } from "@/models/post/news-model";


const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', "news.json")


export class JsonPostRepository implements NewsRepository {
    private async simulate() {
        if (time_Value <= 0) return;
        await new Promise(resolve => setTimeout(resolve, time_Value))
    }


    private async readFromDisc(): Promise<NewsModel[]> {
        await this.simulate()
        const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8")
        const ParsedJSON = JSON.parse(jsonContent)
        const { posts } = ParsedJSON
        return posts
    }
    async findAllPublic(): Promise<NewsModel[]> {
        this.simulate()
        const posts = await this.readFromDisc();
        return posts.filter(post => post.published)
    }
    async findAll(): Promise<NewsModel[]> {
        this.simulate()
        const posts = await this.readFromDisc();
        return posts
    }


}

export const postRepository: NewsRepository = new JsonPostRepository();

