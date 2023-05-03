import React, { PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

export function Button({ variant = 'contained', children, className, ...props }: PropsWithChildren<{
  className?: string
  variant?: 'contained' | 'text'
}> & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button className={cx(styles.button, {
      [styles.contained]: variant === 'contained',
      [styles.text]: variant === 'text'
    }, className)} {...props}>
      {children}
    </button>
  )
}