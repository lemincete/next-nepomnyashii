import styles from './BlogLoading.module.scss';

import Loader from "../loader/Loader";

const BlogLoading = () => {
    return (
        <section className={styles.root}>
            <Loader width={30} height={30} />
        </section>
    );
}

export default BlogLoading;