import { NewsModel } from "@/models/post/news-model";


export interface NewsRepository {
    findAllPublic(): Promise<NewsModel[]>;
    findAll(): Promise<NewsModel[]>;

}