import styles from './styles.module.scss'
import { HeroFans } from '@/entities/homepage/fans-persons'
import { SubscribeButton } from '@/features/subscribe-button'

export function HeroSection() {
  return (
    <section className={styles.container}>
      <HeroFans />
      <div className={styles.info}>
        <h1>Glassbot</h1>
        <p>Наш бот позволяет искать заинтересованных посетителей страницы ВКонтакте. Уникальная система анализа бота ищет самых активных пользователей, кто посещает страницу и взаимодействует с ней.</p>
        <SubscribeButton />
      </div>
    </section>
  )
}