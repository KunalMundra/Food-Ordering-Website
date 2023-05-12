import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/Pizza1.png" alt="" height="400" width="400" />
            <h1 className={styles.title}>Farmhouse Pizza</h1>
            <span className={styles.price}>₹199</span>
            <p className={styles.desc}>Lorem ipsum, dine dien consectetur adipiscing elit, tempor incididunt </p>
        </div>
    )
}

export default PizzaCard