
import { newsRepository } from '@/repositories/news/json.repository';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = cache(
    unstable_cache(
        async () => {
            return await newsRepository.findAllPublic();
        },
        ['news'],
        {
            tags: ['news'],
        },
    ),
);

export const findPublicPostBySlugCached = cache((slug: string) => {
    return unstable_cache(
        async (slug: string) => {
            const post = await newsRepository
                .findBySlugPublic(slug)
                .catch(() => undefined);

            if (!post) notFound();

            return post;
        },
        [`news-${slug}`],
        { tags: [`news-${slug}`] },
    )(slug);
});