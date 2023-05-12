import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telep.png" alt="" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>012 345 678</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listitem}>Homepage</li>
                    <li className={styles.listitem}>Products</li>
                    <li className={styles.listitem}>Menu</li>
                    <Image src="/img/Logo1.png" alt="" width="90" height="70" />
                    <li className={styles.listitem}>Events</li>
                    <li className={styles.listitem}>Blog</li>
                    <li className={styles.listitem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt="" width="30" height="30" />
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar