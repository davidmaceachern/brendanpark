import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles.module.css'

const Index = () => (
  <div>
    <div className={styles.bgWrap}>
      <Head>
        <title>Brendan Park</title>
        <link rel="icon" href="favicon.png" />
      </Head>
      <Image
        alt="Frost covered field"
        src="/background.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
      <div className={styles.headerContainer}>
        <div className={styles.title}>
          <a href="https://brendanpark.co.uk/" rel="home" className={styles.titleLink}>Brendan Park</a>
        </div>
        <div className={styles.nav}>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="https://brendanpark.bandcamp.com/releases">Releases</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="https://www.youtube.com/channel/UCATH813AjPo_VLungWByWgg">Mixtapes</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="https://www.instagram.com/brendan_park93/">Photos</a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="https://brendanpark.bandcamp.com/contact?b=263237925&n=Brendan%20Park">Contact</a>
            </li>
          </ul>
        </div>
      </div>
  </div>
)

export default Index
// TODO
// Anything less than 1300 x 894 and the menu changes, add media query for this. 
// react three fiber effect 