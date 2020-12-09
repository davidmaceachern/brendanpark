import Head from 'next/head'
import Image from 'next/image'
import { bgWrap, title, titleLink, siteHeader, headerNav, navItems, navItem, navLink, headerWrapper } from '../styles.module.css'

const Index = () => (
  <div>
    <div className={bgWrap}>
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
      <header className={siteHeader}>
        <div className={headerWrapper}>
          <div className={title}>
            <a href="https://brendanpark.co.uk/" rel="home" className={titleLink}>Brendan Park</a>
          </div>
          <nav className={headerNav}>
            <ul className={navItems}>
              <li className={navItem}>
                <a className={navLink} href="https://soundcloud.com/flaudiolab">Sound</a>
              </li>
              <li className={navItem}>
                <a className={navLink} href="https://www.youtube.com/channel/UCATH813AjPo_VLungWByWgg">Video</a>
              </li>
              <li className={navItem}>
                <a className={navLink} href="https://www.instagram.com/brendan_park93/">Photo</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  </div>
)

export default Index
// TODO
// add font modern sans or Microsoft Jheng Hei UI Light
// css align menu items
// css hover effect