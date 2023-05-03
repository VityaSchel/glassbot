import { Button } from '@/shared/ui/button'
import Link from 'next/link'

export function SubscribeButton() {
  return (
    <Link href={process.env.NEXT_PUBLIC_LINK + ''}>
      <Button>Подписаться</Button>
    </Link>
  )
}