import { DrizzlePostRepository } from './drizzle-post-repository';
import { NewsRepository } from './news-repository';


export const postRepository: NewsRepository = new DrizzlePostRepository();