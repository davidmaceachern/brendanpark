import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles.module.css'

const Index = () => (
  <div>
    <div className={styles.bgWrap}>
      <Head>
        <title>Brendan Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        alt="Frost covered field"
        src="/background.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <header className={styles.siteHeader}>
        <div className={styles.headerWrapper}>
          <div className={styles.title}>
            <a href="https://brendanpark.co.uk/" rel="home" className={styles.titleLink}>Brendan Park</a>
          </div>
          </div>
          <nav className={styles.headerNav}>
            <ul className={styles.navItems}>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="https://soundcloud.com/flaudiolab">Sound</a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="https://www.youtube.com/channel/UCATH813AjPo_VLungWByWgg">Video</a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="https://www.instagram.com/brendan_park93/">Photo</a>
              </li>
            </ul>
          </nav>
      </header>
    </div>
  </div>
)

export default Index
// TODO
// add font:  modern sans or Microsoft Jheng Hei UI Light
// css align title with navbar 
// react three fiber effect 