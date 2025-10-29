import { resolve } from "path";
import { readFile } from "fs/promises";
import { NewsRepository } from "./news-repository";
import { NewsModel } from "@/models/post/news-model";
import { time_Value } from "@/lib/post/queries/constants";



const ROOT_DIR = process.cwd();
const JSON_NEWS_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', "news.json")


export class JsonNewsRepository implements NewsRepository {
    private async simulate() {
        if (time_Value <= 0) return;
        await new Promise(resolve => setTimeout(resolve, time_Value))
    }


    private async readFromDisc(): Promise<NewsModel[]> {
        await this.simulate()
        const jsonContent = await readFile(JSON_NEWS_FILE_PATH, "utf-8")
        const ParsedJSON = JSON.parse(jsonContent)
        const { news } = ParsedJSON
        return news
    }
    async findAllPublic(): Promise<NewsModel[]> {
        this.simulate()
        const news = await this.readFromDisc();
        return news.filter(oneNew => oneNew.published)
    }
    async findAll(): Promise<NewsModel[]> {
        this.simulate()
        const news = await this.readFromDisc();
        return news
    }

    async findByID(id: string): Promise<NewsModel> {
        const news = await this.findAllPublic();
        const oneNew = news.find(oneNew => oneNew.id === id);
        if (!oneNew) throw new Error("oneNew não encontrado");
        return oneNew
    }

    async findBySlugPublic(slug: string): Promise<NewsModel> {
        const news = await this.findAllPublic();
        const oneNew = news.find(oneNew => oneNew.slug === slug);
        if (!oneNew) throw new Error("Rota não encontrado");
        return oneNew
    }

}

export const newsRepository: NewsRepository = new JsonNewsRepository();

