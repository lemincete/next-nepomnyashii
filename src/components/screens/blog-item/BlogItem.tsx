import { FC } from 'react';

import { IPost } from '@/interfaces/post.interface';

import Layout from '../../layout/Layout';


const BlogItem: FC<IPost> = async ({ title }) => {

    return (
        <Layout>
            <div>{title}</div>
        </Layout>
    );
}

export default BlogItem;