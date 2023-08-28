import { useQuery } from '@tanstack/react-query';
import { PostServices } from '@/services/post.service';

export const useFetchPosts = (search: string) => {
    return useQuery(['posts', search], () => PostServices.getPosts(search), {
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });
}