import styles from './HeaderMenu.module.scss';

import Navigation from '../navigation/Navigation';
import HeaderThemeSwitch from '../header-theme-switch/HeaderThemeSwitch';


const HeaderMenu = () => {
    return (
        <div className={styles.root}>
            <Navigation />
            <HeaderThemeSwitch />
        </div>
    );
}

export default HeaderMenu;