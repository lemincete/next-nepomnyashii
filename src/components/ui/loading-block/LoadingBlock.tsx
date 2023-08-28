import Loader from "../loader/Loader";

import Layout from "@/components/layout/Layout";

import styles from './LoadingBlock.module.scss';


const LoadingBlock = () => {
    return (
        <Layout>
            <section className={styles.root}>
                <Loader width={30} height={30} />
            </section>
        </Layout>
    );
}

export default LoadingBlock;