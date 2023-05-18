import Image from 'next/image';
import styles from '../../styles/Product.module.css';
import { useState } from 'react';

const Product = () => {
    const [size, setsize] = useState(0)

    const pizza = {
        id: 1,
        img: "/img/Pizza1.png",
        name: "Farmhouse Pizza",
        price: [199, 399, 599],
        desc: "Lorem ipsum, dine dien consectetur adipiscing elit, tempor incididunt"
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgcontainer}>
                    <Image src={pizza.img} alt="" fill={true} />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.name}>{pizza.name}</h1>
                <span className={styles.price}>₹{pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setsize(0)}>
                        <Image src="/img/size.png" alt="" fill={true} />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setsize(1)}>
                        <Image src="/img/size.png" alt="" fill={true} />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setsize(2)}>
                        <Image src="/img/size.png" alt="" fill={true} />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.options}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={styles.checkbox}
                        />
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className={styles.options}>
                        <input
                            type="checkbox"
                            id="cheese"
                            name="cheese"
                            className={styles.checkbox}
                        />
                        <label htmlFor="cheese">Extra cheese</label>
                    </div>
                    <div className={styles.options}>
                        <input
                            type="checkbox"
                            id="Spicy"
                            name="Spicy"
                            className={styles.checkbox}
                        />
                        <label htmlFor="Spicy">Spicy Sauce</label>
                    </div>
                    <div className={styles.options}>
                        <input
                            type="checkbox"
                            id="garlic"
                            name="garlic"
                            className={styles.checkbox}
                        />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div >
                    <input type="number" defaultValue={1} className={styles.add} />
                    <button className={styles.button}>Add</button>
                </div>
            </div>
        </div>
    )
}


export default Product