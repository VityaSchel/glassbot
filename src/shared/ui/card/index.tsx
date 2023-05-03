import styles from './styles.module.scss'
import Info from './info.svg'

export default function Card(props: { title: string, content: string }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}><Info />{props.title}</h2>
      <p className={styles.content}>{props.content}</p>
    </div>
  )
}