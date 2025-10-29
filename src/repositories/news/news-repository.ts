import { NewsModel } from "@/models/post/news-model";


export interface NewsRepository {
    findAllPublic(): Promise<NewsModel[]>;
    findAll(): Promise<NewsModel[]>;
    findByID(id: string): Promise<NewsModel>;
    findBySlugPublic(slug: string): Promise<NewsModel>;

}