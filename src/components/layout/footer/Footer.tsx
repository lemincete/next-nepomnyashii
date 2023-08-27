import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.root}>
            <div className='container'>
                <div className={styles.root__body}>
                    <span>Lemincete &copy; 2023</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;