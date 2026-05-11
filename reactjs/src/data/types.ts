import { LucideIcon } from 'lucide-react'

export interface ModuleSlide {
  title: string
  content: string
  code?: string
  codeBefore?: string
  codeAfter?: string
  image?: string
  animation?: 'state' | 'hooks' | 'server' | 'performance'
}

export interface Module {
  id: number
  title: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  icon: LucideIcon
  color: string
  shadow: string
  slides: ModuleSlide[]
}
