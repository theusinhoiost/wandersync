import { postRepository } from '@/repositories/post';
import { logColor } from '@/utils/log-color';
import { unstable_cache } from 'next/cache';
import { cache } from 'react';

export const findAllPublicPostsCached = cache(
  unstable_cache(
    async () => {
      logColor('findAllPublic called ✅', Date.now());
      return await postRepository.findAllPublic();


    },
    ['posts'],
    {
      tags: ['posts'],
    },
  ),
);
