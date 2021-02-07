import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>My app | home</title>
        <meta keyword="my app" content="my app for typicode"/>
      </Head>
    <div>
       <h1  className={styles.title}>Home</h1>
         <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatem et eligendi at necessitatibus vitae. Tempore accusantium, fugit illo consequuntur fugiat eos harum inventore atque rerum ut sunt quisquam corporis.</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatem et eligendi at necessitatibus vitae. Tempore accusantium, fugit illo consequuntur fugiat eos harum inventore atque rerum ut sunt quisquam corporis.</p>
        <Link href="/list" ><a  className={styles.btn}>See More</a></Link>
      </div>
      </>
  )
}
