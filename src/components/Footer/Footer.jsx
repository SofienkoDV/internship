import styles from './Footer.module.scss';

function Footer() {
    return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__block}>
                    <h4 className={styles.footer__title}>Location</h4>
                    <address className={styles.footer__address}>
                        <div>Los Angeles</div>
                        <div>4651 Red Maple Drive</div>
                    </address>
                </div>
    
                <div className={styles.footer__block}>
                    <h4 className={styles.footer__title}>Standard</h4>
                   <div className={styles.footer__text}>
                        <p>Ipsum is not simply random text.</p>
                    </div>
                </div>
    
                <div className={styles.footer__block}>
                    <h4 className={styles.footer__title}>About box</h4>
                    <div className={styles.footer__text}>
                        <p>It is a long established fact that a reader will be distracted by the readable</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;