import styles from './styles.module.scss'

export function Headline({ children }: React.PropsWithChildren) {
  return (
    <h1 className={styles.headline}>{children}<span className={styles.divider} /></h1>
  )
}