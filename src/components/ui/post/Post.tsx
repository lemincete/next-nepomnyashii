import { FC } from 'react';

import { IPost } from '@/interfaces/post.interface';

import Link from 'next/link';

import styles from './Post.module.scss';


const Post: FC<IPost> = ({ title, id }) => {
    return (
        <article className={styles.root}>
            <h3 className={styles.root__title}>
                {title}
            </h3>
            <Link href={`blog/${id}`}>Read more...</Link>
        </article>
    );
}

export default Post;