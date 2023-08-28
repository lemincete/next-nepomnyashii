import Image from "next/image";
import Layout from "@/components/layout/Layout";

import styles from './Loader.module.scss';

import Loading from './images/loader.svg';


const Loader = () => {
    return (
        <Layout>
            <section className={styles.root}>
                <Image src={Loading} width={30} height={30} alt="loading" className={styles.root__image} />
            </section>
        </Layout>
    );
}

export default Loader;