import { useMemo } from 'react';

import { TSortOptions } from '@/components/screens/blog/Blog';

import { IPost } from '@/interfaces/post.interface';

export const useSortedPosts = (posts: IPost[], sort: TSortOptions): IPost[] => useMemo(() => {

    const sortedPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title))

    return sort === 'title-ASC' ? sortedPosts : [...sortedPosts].reverse();

}, [sort, posts])
