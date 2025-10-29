
import { newsRepository } from "@/repositories/news/json.repository";
import { cache } from "react";

export const findByIDCachedAdmin = cache(async (id: string) => await newsRepository.findBySlugPublic(id))

export const findAllNewsAdmin = cache(async () => await newsRepository.findAll())