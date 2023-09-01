import styles from './Header.module.scss';

import HeaderMenu from '@/components/ui/header-menu/HeaderMenu';
import HeaderMenuBurger from '@/components/ui/header-burger-menu/HeaderMenuBurger';


const Header = () => {
    return (
        <header className={styles.root}>
            <div className='container'>
                <HeaderMenu />
                <HeaderMenuBurger />
            </div>
        </header>
    );
}

export default Header;