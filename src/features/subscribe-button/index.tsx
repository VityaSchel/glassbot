import { Button } from '@/shared/ui/button'
import Link from 'next/link'

export function SubscribeButton() {
  return (
    <Link href={process.env.LINK + ''}>
      <Button>Подписаться</Button>
    </Link>
  )
}