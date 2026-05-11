import { useState, useEffect } from "react";
import { javascriptCurriculum, Module } from "@/data/curriculum";

export function useCourseState() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedSlide = parseInt(localStorage.getItem('js_course_slide') ?? '0', 10);
      const savedModuleId = localStorage.getItem('js_course_module_id');
      
      if (savedModuleId) {
        const mod = javascriptCurriculum.find(m => String(m.id) === savedModuleId) ?? null;
        setSelectedModule(mod);
      }
      setCurrentSlide(savedSlide);
      setHydrated(true);
    } catch {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem('js_course_slide', String(currentSlide));
    localStorage.setItem('js_course_module_id', String(selectedModule?.id ?? ''));
  }, [currentSlide, selectedModule, hydrated]);

  const handleModuleClick = (module: Module) => {
    setSelectedModule(module);
    setCurrentSlide(2);
  };

  const nextSlide = () => setCurrentSlide(prev => (prev === 0 ? 1 : 0));
  const prevSlide = () => setCurrentSlide(prev => (prev === 1 ? 0 : 1));

  return {
    currentSlide,
    setCurrentSlide,
    selectedModule,
    setSelectedModule,
    hydrated,
    handleModuleClick,
    nextSlide,
    prevSlide
  };
}
