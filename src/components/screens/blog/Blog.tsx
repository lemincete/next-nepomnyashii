import styles from './Blog.module.scss';

import Layout from "../../layout/Layout";

import { IPost } from '@/interfaces/post.interface';
import Post from "../../ui/post/Post";

const fetchPosts = async (): Promise<IPost[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    });

    if (!response.ok) {
        throw new Error('Unable fetch posts')
    }

    return response.json();
}

const Blog = async () => {

    const posts = await fetchPosts();

    return (
        <Layout>
            <section className={styles.root__list}>
                {posts.length > 0
                    ? posts.map(post =>
                        <Post {...post} key={post.id} />
                    )
                    : <h3>Posts not found</h3>
                }
            </section>
        </Layout>
    );
}

export default Blog;