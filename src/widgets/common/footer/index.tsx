import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import Banks from '@/assets/banks.webp'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerFooter}>
        <div>
          <span>{process.env.NEXT_PUBLIC_COMPANY_NAME}</span>
          <span>ИНН {process.env.NEXT_PUBLIC_COMPANY_INN}</span>
          <span>ОГРНИП: {process.env.NEXT_PUBLIC_COMPANY_OGRNIP}</span>
          {/*<span>E-mail: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</span>*/}
          <span>TELEGRAM: {process.env.NEXT_PUBLIC_CONTACT_TELEGRAM}</span>
          {/*<Link href='/'>Управление подпиской</Link>*/}
        </div>
        <div>
          <Link href={`${process.env.NEXT_PUBLIC_USER_AGREEMENT}`}>Пользовательское соглашение</Link>
          <Link href={`${process.env.NEXT_PUBLIC_DATA_POLICY}`}>Политика обработки данных</Link>
           <Link href='/subscription'>Отмена подписки</Link>
          <Link href={`${process.env.NEXT_PUBLIC_TARIFFS}`}>Тарифы</Link>
        </div>
      </div>
      <div className={styles.accept}>
        <span>Мы принимаем: </span>
        <Image src={Banks} alt='Банки' height={32} />
      </div>
    </footer>
  )
}