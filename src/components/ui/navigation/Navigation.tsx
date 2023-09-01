'use client'

import styles from './Navigation.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinksArr } from './navigation.data';


const Navigation = () => {


    const pathname = usePathname();

    return (
        <nav className={styles.root}>
            <ul className={styles.root__list}>
                {navigationLinksArr.map(({ href, label }) =>
                    <li key={href} className={pathname === href ? styles.root__item_active : ''}>
                        <Link href={href}>{label}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;