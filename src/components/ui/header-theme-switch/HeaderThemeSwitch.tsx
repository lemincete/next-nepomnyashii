'use client'

import { useThemeContext } from '@/theme/useThemeContext';

import styles from './HeaderThemeSwitch.module.scss';

const HeaderThemeSwitch = () => {

    const { activeTheme, setActiveTheme } = useThemeContext();

    return (
        <div className={styles.root}>
            <span className={styles.root__name}>Dark</span>
            <label className={styles.root__switch} htmlFor='switch-theme'>
                <input type="checkbox" checked={activeTheme === 'dark'} onChange={() => setActiveTheme(activeTheme === 'dark' ? 'light' : 'dark')} id='switch-theme' />
                <span className={styles.root__switch__button} />
            </label>
            <span className={styles.root__name}>Light</span>
        </div>
    );
}

export default HeaderThemeSwitch;