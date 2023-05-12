import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Slider from '../Components/Slider';
import PizzaList from '../Components/PizzaList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <PizzaList />
    </div>
  )
}
