import { NextPage } from 'next';

import BlogItem from '@/components/screens/blog-item/BlogItem';

import { PostServices } from '@/services/post.service';

import { createMetadata } from '@/helpers/createMetadata';



export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
    const post = await PostServices.getPostById(id);

    return createMetadata(post.title, post.title);
}

interface BlogItemPageProps {
    params: {
        id: string
    }
}

const BlogItemPage: NextPage<BlogItemPageProps> = async ({ params: { id } }) => {

    const post = await PostServices.getPostById(id);

    return <BlogItem {...post} />
}

export default BlogItemPage;