import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'

export function FanPerson({ photo, place }: { 
  photo: StaticImageData
  place: 1 | 2 | 3
}) {
  return (
    <figure className={styles.person}>
      <Image src={photo} alt={`Человек на ${place} месте`} />
    </figure>
  )
}