import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
      <div className={styles.red}>This is red</div>
    </div>
  )
}
