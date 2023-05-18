import Image from "next/image"
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" alt="" width="1000" height="1000" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>YOU ARE INVITED TO HAVE OUR HOMEMADE PIZZA.</h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        Shop No.1, Dev complex,<br />
                        FC road, Pune, 400293 <br />
                        Tel: 463829
                    </p>
                    <p className={styles.text}>
                        Shop No.5, Raj complex,<br />
                        JM road, Pune, 400793 <br />
                        Tel: 5343829
                    </p>
                    <p className={styles.text}>
                        Shop No.7, Mangal Bhavan,<br />
                        Kharadi, Pune, 400278 <br />
                        Tel: 7938503
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        Monday to Friday<br />
                        9.00 - 22.00
                    </p>
                    <p className={styles.text}>
                        Saturday-Sunday<br />
                        12.00 - 24.00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer