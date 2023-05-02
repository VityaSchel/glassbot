import Link from 'next/link'
import styles from './styles.module.scss'
import Logo from '@/assets/logo.svg'

export function AppBar() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href='/'>
          <div className={styles.logo}>
            <Logo />
            <span>glassbot</span>
          </div>
        </Link>
      </nav>
    </header>
  )
}