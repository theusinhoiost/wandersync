import { CardNewsModel } from "@/models/CardNewsModel";


export interface PostRepository {
    findAllPublic(): Promise<CardNewsModel[]>;
    findAll(): Promise<CardNewsModel[]>;
    findByID(id: string): Promise<CardNewsModel>;
    findBySlugPublic(slug: string): Promise<CardNewsModel>;

}