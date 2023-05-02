import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

export function Button({ children, ...props }: PropsWithChildren & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}