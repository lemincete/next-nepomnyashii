import styles from './HeaderMenuBurger.module.scss';

const HeaderMenuBurger = () => {
    return (
        <div className={styles.root}>
            <div className={styles.root__body}>
                <div className={styles.root__body__logo}>BLOG</div>
                <input type="checkbox" className={styles.root__body_open_flag} id="menu-open" />
                <label className={styles.root__body__icon} htmlFor='menu-open'>
                    <span></span>
                </label>
            </div>
        </div>
    );
}

export default HeaderMenuBurger;