import { FC } from 'react';

import Image from "next/image";
import Layout from "@/components/layout/Layout";

import styles from './Loader.module.scss';

import Loading from './images/loader.svg';

interface LoaderProps {
    width: number,
    height: number
}

const Loader: FC<LoaderProps> = (props) => {
    return <Image {...props} src={Loading} alt="loading" className={styles.root} />
}

export default Loader;