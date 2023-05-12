import styles from '../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src="/img/Pizza1.png"
                                        width="100"
                                        height="100"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>Farmhouse Pizza</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient,Spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>₹199</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>₹398</span>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src="/img/Pizza1.png"
                                        width="100"
                                        height="100"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>Farmhouse Pizza</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient,Spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>₹199</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>₹398</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>₹796.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>₹0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>₹796.00
                    </div>
                    <button className={styles.button}>CHECKOUT NOW!</button>
                </div>
            </div>

        </div>
    )
}

export default Cart

