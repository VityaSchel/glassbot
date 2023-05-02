import NextHead from 'next/head'

export function Head({ title }: {
  title?: string
}) {
  return (
    <NextHead>
      <title>{`${title ? `${title} — Glassbot` : 'Glassbot'}`}</title>
    </NextHead>
  )
}