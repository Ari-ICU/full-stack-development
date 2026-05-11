import { fundamentalsModule } from "./modules/fundamentals";
import { tailwindModule } from "./modules/tailwind";
import { bootstrapModule } from "./modules/bootstrap";

export interface Slide {
  id: string;
  title: string;
  content: string;
  codeSnippet?: string;
  htmlSnippet?: string;
  type: 'theory' | 'practice' | 'demo';
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  slides: Slide[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  icon?: string;
}

export const cssCurriculum: Module[] = [
  fundamentalsModule,
  tailwindModule,
  bootstrapModule
];
