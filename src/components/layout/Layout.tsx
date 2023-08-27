import { ReactNode, FC } from "react";

import styles from './Layout.module.scss';

import Header from "./header/Header";
import Footer from "./footer/Footer";


interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.root}>
            <Header />
            <main className={styles.root__body}>
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;