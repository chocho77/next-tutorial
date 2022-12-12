import Link from "next/link";
import Head from "next/head";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChochoTech Next Tutorial</title>
      </Head>
      <Link href="/about">About</Link>
      <h1>Hello World</h1>
     
    </div>
  );
}
