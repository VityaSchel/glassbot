import Link from 'next/link'
import { Button } from '@/shared/ui/button'
import { HeroFans } from '@/entity/homepage/fans'

export function HeroSection() {
  return (
    <section>
      <HeroFans />
      <div>
        <h1>Glassbot</h1>
        <p>Наш бот позволяет искать заинтересованных посетителей страницы ВКонтакте. Уникальная система анализа бота ищет самых активных пользователей, кто посещает страницу и взаимодействует с ней.</p>
        <Link href={process.env.LINK + ''}>
          <Button>Подписаться</Button>
        </Link>
      </div>
    </section>
  )
}