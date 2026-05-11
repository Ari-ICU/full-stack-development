import { useState, useEffect } from 'react'
import { Module } from '@/data/modules'

export function useCourseState() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)
  const [currentSubSlide, setCurrentSubSlide] = useState(0)
  const [hydrated, setHydrated] = useState(false)

  // Restore state from localStorage after hydration
  useEffect(() => {
    try {
      const savedSlide = parseInt(localStorage.getItem('course_slide') ?? '0', 10)
      const savedModuleId = parseInt(localStorage.getItem('course_module_id') ?? '0', 10)
      const savedSubSlide = parseInt(localStorage.getItem('course_sub_slide') ?? '0', 10)

      if (savedModuleId > 0) {
        import('@/data/modules').then(({ modules }) => {
          const mod = modules.find(m => m.id === savedModuleId) ?? null
          setSelectedModule(mod)
          setCurrentSubSlide(savedSubSlide)
          setCurrentSlide(savedSlide)
          setHydrated(true)
        })
      } else {
        setCurrentSlide(savedSlide)
        setHydrated(true)
      }
    } catch {
      setHydrated(true)
    }
  }, [])

  // Persist state whenever it changes
  useEffect(() => {
    if (!hydrated) return
    localStorage.setItem('course_slide', String(currentSlide))
    localStorage.setItem('course_module_id', String(selectedModule?.id ?? 0))
    localStorage.setItem('course_sub_slide', String(currentSubSlide))
  }, [currentSlide, selectedModule, currentSubSlide, hydrated])

  const handleModuleClick = (module: Module) => {
    setSelectedModule(module)
    setCurrentSubSlide(0)
    setCurrentSlide(2) // Go to Module Detail slide
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) return 1
      if (prev === 1) return 0
      if (prev === 2) return 1
      return 0
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 1) return 0
      if (prev === 0) return 1
      if (prev === 2) return 1
      return 1
    })
  }

  const nextSubSlide = () => {
    if (selectedModule && currentSubSlide < selectedModule.slides.length - 1) {
      setCurrentSubSlide(prev => prev + 1)
    }
  }

  const prevSubSlide = () => {
    if (currentSubSlide > 0) {
      setCurrentSubSlide(prev => prev - 1)
    }
  }

  return {
    currentSlide,
    setCurrentSlide,
    selectedModule,
    setSelectedModule,
    currentSubSlide,
    setCurrentSubSlide,
    hydrated,
    handleModuleClick,
    nextSlide,
    prevSlide,
    nextSubSlide,
    prevSubSlide
  }
}
