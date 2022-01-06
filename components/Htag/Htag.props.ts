import { PropsWithChildren } from 'react'

interface HtagPropsNoChildren {
  tag: 'h1' | 'h2' | 'h3' | 'h4'
}

export type HtagProps = PropsWithChildren<HtagPropsNoChildren>