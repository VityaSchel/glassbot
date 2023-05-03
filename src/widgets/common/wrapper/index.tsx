import styles from './styles.module.scss'

export function PageWrapper({ children }: React.PropsWithChildren) {
  return (
    <main className={styles.wrapper}>
      {children}
    </main>
  )
}