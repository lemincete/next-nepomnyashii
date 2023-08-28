import styles from './Header.module.scss';

import Navigation from '@/components/ui/navigation/Navigation';
import HeaderThemeSwitch from '../../ui/header-theme-switch/HeaderThemeSwitch';


const Header = () => {
    return (
        <header className={styles.root}>
            <div className='container'>
                <div className={styles.root__body}>
                    <Navigation />
                    <div className={styles.root__theme__body}>
                        <HeaderThemeSwitch />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;