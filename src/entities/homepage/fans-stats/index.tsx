import styles from './styles.module.scss'

export function FansStats() {
  return (
    <div className={styles.container}>
      <span>Поклонники за месяц</span>
      <div className={styles.stats}>
        <Stat value={0.8} label='Мужчины' />
        <Stat value={0.44} label='Женщины' />
      </div>
    </div>
  )
}

function Stat({ value, label }: {
  value: number
  label: string
}) {
  return (
    <div className={styles.stat}>
      <span className={styles.value}>{value*100}%</span>
      <div className={styles.visual}>
        <div className={styles.progress}><div style={{ width: `${value*100}%` }} /></div>
        <span>{label}</span>
      </div>
    </div>
  )
}