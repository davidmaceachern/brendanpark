import Image from 'next/image'
import { bgWrap } from '../styles.module.css'

const Index = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="Frost covered field"
        src="/background.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </div>
)

export default Index
