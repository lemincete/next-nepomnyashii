import { NextPage } from 'next';

import BlogItem from '@/components/screens/blog-item/BlogItem';

import { IPost } from '@/interfaces/post.interface';

import { createMetadata } from '@/utils/createMetadata';


const fetchPost = async (id: string): Promise<IPost> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });
    return response.json();
}

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
    const post = await fetchPost(id);

    return createMetadata(post.title, post.title);
}

interface BlogItemPageProps {
    params: {
        id: string
    }
}

const BlogItemPage: NextPage<BlogItemPageProps> = async ({ params: { id } }) => {

    const post = await fetchPost(id);

    return <BlogItem {...post} />
}

export default BlogItemPage;