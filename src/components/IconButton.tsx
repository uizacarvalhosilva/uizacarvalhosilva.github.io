import type { ReactNode } from 'react'

export function IconButton({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return <a className="icon-button" href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a>
}
