import styles from './styles.module.scss'
import { Form } from '@/features/subscription/unsubscribe/form'

export function UnsubscribeForm() {
  const handleUnsubscribe = () => {

  }

  return (
    <div className={styles.unsubscribe}>
      <h2>Для отписки введите данные карты</h2>
      <Form />
    </div>
  )
}