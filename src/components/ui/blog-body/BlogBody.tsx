import { FC } from 'react';

import styles from './BlogBody.module.scss';

import { IPost } from '@/interfaces/post.interface';

import Post from '../post/Post';


interface BlogBodyProps {
    isSearch: boolean,
    posts: IPost[]
}

const BlogBody: FC<BlogBodyProps> = ({ isSearch, posts }) => {

    if (!isSearch) {
        return <></>
    }

    return (
        <section className={styles.root__list}>
            {posts.length > 0
                ? posts.map(post =>
                    <Post {...post} key={post.id} />
                )
                : <div className={styles.root__list__empty}>
                    <h3 className={styles.root__list__empty__title}>Posts not found =(</h3>
                </div>
            }
        </section>
    );
}

export default BlogBody;