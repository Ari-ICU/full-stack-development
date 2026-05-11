import { module1 } from './modules-content/m1'
import { module2 } from './modules-content/m2'
import { module3 } from './modules-content/m3'
import { module4 } from './modules-content/m4'
import { module5 } from './modules-content/m5'
import { Module } from './types'

export * from './types'

export const modules: Module[] = [
  module1,
  module2,
  module3,
  module4,
  module5
]
