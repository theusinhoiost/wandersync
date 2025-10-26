import { DrizzlePostRepository } from './drizzle-post-repository';
import { NewsRepository } from './post-repository';


export const postRepository: NewsRepository = new DrizzlePostRepository();