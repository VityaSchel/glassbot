import styles from './styles.module.scss'
import { Headline } from '@/entities/common/headline'
import { FansStats } from '@/entities/homepage/fans-stats'

export function About() {
  return (
    <section className={styles.about}>
      <Headline>О модуле</Headline>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>С помощью функционала бота можно понять, кто из посетителей наиболее заинтересован твоей страницей и выразить ему взаимную симпатию или понять что-то о своих поклонниках.</p>
          <p>Бот работает по системе подписки и предоставляет функционал на период её действия. Фунционал бота (проверка пользователя) проводится только из открытых источников, анализу подлежат только открытые страницы ВКонтакте.</p>
        </div>
        <FansStats />
      </div>
    </section>
  )
}