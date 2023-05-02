import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'
import Place1 from '@/assets/fans/first-place.png'
import Place2 from '@/assets/fans/second-place.png'
import Place3 from '@/assets/fans/third-place.png'

export function FanPerson({ photo, place }: { 
  photo: StaticImageData
  place: 1 | 2 | 3
}) {
  return (
    <figure className={styles.person}>
      <Image src={photo} alt={`Человек на ${place} месте`} />
      <Image 
        src={[Place1, Place2, Place3][place-1]} alt={`${place} место`} 
        className={styles.place} 
        width={32} height={32}
      />
    </figure>
  )
}