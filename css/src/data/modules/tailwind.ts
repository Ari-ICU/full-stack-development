import { Module } from "../curriculum";

export const tailwindModule: Module = {
  id: "m2",
  title: "Tailwind CSS",
  description: "Build modern websites faster with the world's most popular utility-first CSS framework.",
  icon: "Wind",
  lessons: [
    {
      id: "l1",
      title: "Introduction to Utility-First",
      description: "Why Tailwind changes everything.",
      slides: [
        {
          id: "s1",
          title: "Traditional vs Utility CSS",
          content: "Instead of writing custom CSS classes, Tailwind provides thousands of small, reusable utility classes that you apply directly to your HTML.",
          codeSnippet: "/* No CSS needed! */",
          htmlSnippet: `<div class="p-8 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
  <h2 class="text-2xl font-bold">I am Tailwind!</h2>
  <p class="mt-2 text-blue-100">Zero custom CSS written.</p>
</div>`,
          type: "demo"
        }
      ]
    },
    {
      id: "l2",
      title: "The Box Model & Spacing",
      description: "Padding, Margin, and Sizing.",
      slides: [
        {
          id: "s1",
          title: "Responsive Spacing",
          content: "Tailwind uses a standardized spacing scale (p-4, m-8, w-64) that ensures perfect consistency across your entire design.",
          codeSnippet: "/* Standardized spacing system */",
          htmlSnippet: `<div class="flex gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
  <div class="w-20 h-20 bg-indigo-500 rounded-lg shadow-md flex items-center justify-center text-white font-bold">p-4</div>
  <div class="w-32 h-20 bg-rose-500 rounded-lg shadow-md flex items-center justify-center text-white font-bold text-center px-2">w-32</div>
</div>`,
          type: "demo"
        }
      ]
    },
    {
      id: "l3",
      title: "Typography & Colors",
      description: "Text styling and the Tailwind palette.",
      slides: [
        {
          id: "s1",
          title: "Color Palette",
          content: "Tailwind comes with a massive, expertly curated color palette. Use classes like 'text-slate-600' or 'bg-emerald-500' to paint your UI.",
          codeSnippet: "/* 🎨 Color Utility Classes */",
          htmlSnippet: `<div class="grid grid-cols-2 gap-4">
  <div class="p-6 bg-slate-900 text-slate-100 rounded-xl font-medium">Slate 900</div>
  <div class="p-6 bg-indigo-500 text-white rounded-xl font-bold">Indigo 500</div>
  <div class="p-6 bg-rose-400 text-rose-950 rounded-xl font-black">Rose 400</div>
  <div class="p-6 bg-amber-200 text-amber-900 rounded-xl">Amber 200</div>
</div>`,
          type: "demo"
        }
      ]
    },
    {
      id: "l4",
      title: "Flex & Grid in Tailwind",
      description: "Layouts without the CSS stress.",
      slides: [
        {
          id: "s1",
          title: "Centering with Flex",
          content: "Use 'flex', 'items-center', and 'justify-center' to perfectly align elements in seconds.",
          codeSnippet: "/* 🧩 Layout Utilities */",
          htmlSnippet: `<div class="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
    <div class="font-bold text-slate-900">Antigravity AI</div>
  </div>
  <button class="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg">Follow</button>
</div>`,
          type: "demo"
        }
      ]
    },
    {
      id: "l4",
      title: "States & Interactivity",
      description: "Handling hovers, focus, and group states.",
      slides: [
        {
          id: "s1",
          title: "Hover, Focus & Active",
          content: "Tailwind makes styling states easy with prefixes. Just add 'hover:' before any utility class to change its value on mouse-over.",
          codeSnippet: "/* Interactive Modifiers */",
          htmlSnippet: `<button class="bg-blue-600 hover:bg-blue-700 active:scale-95 focus:ring-4 focus:ring-blue-300 text-white px-6 py-2 rounded-lg transition-all">
  Click Me
</button>`,
          type: "demo"
        },
        {
          id: "s2",
          title: "Group & Peer Modifiers",
          content: "Style an element based on the state of a parent (group) or sibling (peer). This is powerful for complex components like navigation menus or form validation.",
          codeSnippet: "/* Group & Peer States */",
          htmlSnippet: `<div class="group p-6 bg-white border border-slate-200 rounded-2xl hover:bg-blue-600 transition-colors cursor-pointer">
  <h3 class="text-slate-900 group-hover:text-white font-bold">Group Hover</h3>
  <p class="text-slate-500 group-hover:text-blue-100">The parent's hover state changes my text color!</p>
</div>
<div class="mt-4">
  <input type="email" class="peer border p-2 rounded w-full focus:border-blue-500 outline-none" placeholder="Email"/>
  <p class="mt-2 hidden peer-focus:block text-sm text-blue-600 font-medium italic">Please enter a valid work email.</p>
</div>`,
          type: "demo"
        }
      ]
    },
    {
      id: "l5",
      title: "Arbitrary Values & JIT",
      description: "Escape the constraints of the standard scale.",
      slides: [
        {
          id: "s1",
          title: "Square Bracket Syntax",
          content: "Sometimes you need a specific value that isn't on the standard scale. Use square brackets `[...]` to generate a one-off utility class instantly.",
          codeSnippet: "/* Custom Values on the fly */",
          htmlSnippet: `<div class="w-[327px] h-[100px] bg-[#312e81] flex items-center justify-center rounded-[17px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-white font-black italic">
  327px x 100px
</div>`,
          type: "demo"
        }
      ]
    },
    {
      id: "l6",
      title: "Dark Mode & Theming",
      description: "Building adaptive user interfaces.",
      slides: [
        {
          id: "s1",
          title: "The dark: Modifier",
          content: "Tailwind includes a first-class `dark:` modifier. When dark mode is active on the user's system (or via a class), these styles will automatically override the defaults.",
          codeSnippet: "/* adaptive UI */",
          htmlSnippet: `<div class="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl transition-colors duration-500">
  <h2 class="text-slate-900 dark:text-white text-2xl font-bold">Adaptive Card</h2>
  <p class="mt-2 text-slate-600 dark:text-slate-400">Change your system theme to see me transform!</p>
</div>`,
          type: "demo"
        }
      ]
    },
    {
      id: "l7",
      title: "Composition & Reusability",
      description: "Keeping your HTML clean.",
      slides: [
        {
          id: "s1",
          title: "The @apply Directive",
          content: "If you find yourself repeating the same long list of utilities, you can extract them into a custom CSS class using `@apply` in your CSS files.",
          codeSnippet: ".btn-primary {\n  @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;\n}",
          htmlSnippet: `<button class="btn-primary">@apply Button</button>`,
          type: "theory"
        }
      ]
    }
  ]
};
