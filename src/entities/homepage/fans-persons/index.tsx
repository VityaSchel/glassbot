import { FanPerson } from '@/entities/homepage/fans-persons/fan'
import styles from './styles.module.scss'
import Person1 from '@/assets/fans/person1.png'
import Person2 from '@/assets/fans/person2.png'
import Person3 from '@/assets/fans/person3.png'

export function HeroFans() {
  return (
    <div className={styles.fansContainer}>
      <span className={styles.fans}>Поклонники за <span>7 дней</span></span>
      <div>
        <FanPerson place={1} photo={Person1} />
        <br></br>
        <FanPerson place={2} photo={Person2} />
        <FanPerson place={3} photo={Person3} />
      </div>
    </div>
  )
}