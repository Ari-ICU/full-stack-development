import { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export interface Slide {
  title: string
  content: string
  code?: string
  htmlCode?: string
  language?: string
  demo?: ReactNode
}

export interface Module {
  id: string | number
  title: string
  description: string
  icon: LucideIcon
  color: string
  shadow: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  slides: Slide[]
}
