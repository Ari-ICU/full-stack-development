import { LucideIcon } from 'lucide-react'

export interface Slide {
  title: string
  content: string
  code?: string
}

export interface Module {
  id: number
  title: string
  description: string
  icon: LucideIcon
  color: string
  shadow: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  slides?: Slide[]
}
