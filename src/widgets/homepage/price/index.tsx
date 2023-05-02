import styles from './styles.module.scss'
import { Headline } from '@/entities/common/headline'
import { SubscribeButton } from '@/features/subscribe-button'

export function PriceSection() {
  return (
    <section className={styles.priceContainer}>
      <Headline>Стоимость подписки</Headline>
      <span className={styles.price}>Стоимость подписки <span>100 ₽</span> в первые 48 ч</span>
      <p>Доступ к сервису предоставляется по подписке, по истечению пробного периода через 48 часов с вашей карты произойдет автоматическое списание 960 ₽ за 10 дней доступа к функционалу сервиса, в случае невозможности списания данной суммы с вашей карты спишется 460 ₽ за 7 дней или 460 ₽ за 5 дня доступа к функционалу сервиса.</p>
      <SubscribeButton />
    </section>
  )
}