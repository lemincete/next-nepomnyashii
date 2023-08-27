import styles from './Header.module.scss';

import Link from 'next/link';
import HeaderThemeSwitch from '../../ui/header-theme-switch/HeaderThemeSwitch';


const Header = () => {
    return (
        <header className={styles.root}>
            <div className='container'>
                <div className={styles.root__body}>
                    <nav className={styles.root__menu}>
                        <ul className={styles.root__menu__list}>
                            <li className={styles.root__menu__item}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={styles.root__menu__item}>
                                <Link href="/about">About</Link>
                            </li>
                            <li className={styles.root__menu__item}>
                                <Link href="/blog">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.root__theme__body}>
                        <HeaderThemeSwitch />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;