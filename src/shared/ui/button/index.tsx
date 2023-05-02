import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

export function Button({ children }: PropsWithChildren) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}