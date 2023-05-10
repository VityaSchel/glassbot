import styles from './styles.module.scss'
import { Headline } from '@/entities/common/headline'
import { SubscribeButton } from '@/features/subscribe-button'

export function PriceSection() {
  return (
    <section className={styles.priceContainer}>
      <Headline>Стоимость подписки</Headline>
      <span className={styles.price}>Стоимость подписки <span>29 ₽</span> в первые 24 ч</span>
      <p>Доступ к сервису предоставляется по подписке, по истечению пробного периода через 24 часов с вашей карты произойдет автоматическое списание 2023 ₽ за 7 дней доступа к функционалу сервиса, в случае невозможности списания данной суммы с вашей карты спишется 889 ₽ за 7 дней, 589 ₽ за 3 дня или 289 за 1 день доступа к функционалу сервиса.</p>
      <SubscribeButton />
    </section>
  )
}