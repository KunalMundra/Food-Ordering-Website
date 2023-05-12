import Image from 'next/image';
import styles from '../styles/Slider.module.css';
import { useState } from 'react';

const Slider = () => {

    const[index, setindex] = useState(0)

    const handleArrow = (direction) => {
        if(direction === "l"){
            setindex(index !== 0 ? index-1 : 2)
        }
        if(direction === "r"){
            setindex(index !== 2 ? index+1 : 0)
        }
    }
    console.log(index)

    const images = [
        "/img/Slide1.png",
        "/img/Slide2.png",
        "/img/Slide3.png",
    ];
    return (

        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <Image src="/img/arrowl.png" alt="" fill={true} />
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i} >
                        <Image src={img} alt="" fill={true}  />
                    </div>
                ))}

            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")} >
                <Image src="/img/arrowr.png" alt="" fill={true} />
            </div>
        </div>
    )
}

export default Slider