import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

export function Button({ children, className, ...props }: PropsWithChildren & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button className={cx(styles.button, className)} {...props}>
      {children}
    </button>
  )
}