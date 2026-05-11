import { Gauge } from 'lucide-react'
import { Module } from '../types'

export const module12: Module = {
  id: 12,
  title: "React Performance Optimization",
  level: "Advanced",
  description:
    "Learn how to build lightning-fast React applications. Master rendering cycles, memoization, and advanced loading strategies for peak performance.",

  icon: Gauge,
  color: "from-blue-500 to-cyan-600",
  shadow: "shadow-cyan-500/10",

  slides: [
    {
      title: "React Rendering Process",
      content:
        "To optimize React, you must first understand how it renders. React works in two phases: 1. Render Phase (determines what changed using the Virtual DOM). 2. Commit Phase (applies those changes to the real DOM). Most performance issues happen during the Render phase when React does unnecessary work for parts of the UI that haven't changed.",
      code:
`// Rendering Lifecycle:
// 1. State/Props change
// 2. Component Re-renders (JS calculation)
// 3. Diffing (Virtual DOM vs Old Virtual DOM)
// 4. Reconciliation (Updating the Real DOM)`
    },

    {
      title: "Performance Bottlenecks",
      content:
        "Common bottlenecks include: 1. Too many re-renders of heavy components. 2. Expensive calculations inside the component body. 3. Large JavaScript bundles that take too long to download. 4. Unoptimized images or large lists slowing down the main thread.",
      code:
`// Check for:
// - Redundant renders
// - Large DOM trees
// - Blocking Main Thread (heavy JS)
// - Network Latency (huge bundles)`
    },

    {
      title: "React.memo",
      content:
        "React.memo is a Higher Order Component that prevents a functional component from re-rendering if its props haven't changed. It uses a 'shallow comparison' of props. This is the first line of defense against unnecessary child re-renders.",
      code:
`import { memo } from 'react';

const MyChild = memo(({ name }) => {
  console.log("Child rendered");
  return <h1>{name}</h1>;
});`
    },

    {
      title: "useMemo Optimization",
      content:
        "Use 'useMemo' to cache the result of expensive calculations. For example, filtering a list of 5,000 items should only happen if the search term or the list itself changes, not on every single render cycle.",
      code:
`const sortedData = useMemo(() => {
  return data.sort((a, b) => b.value - a.value);
}, [data]); // Only re-sorts if 'data' changes`
    },

    {
      title: "useCallback Optimization",
      content:
        "When you pass a function to a memoized child component, the child will re-render because functions are re-created on every render. 'useCallback' memoizes the function instance, keeping it identical across renders and keeping the child component 'stable'.",
      code:
`const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []); // Function stays the same forever`
    },

    {
      title: "Lazy Loading Components",
      content:
        "Lazy loading allows you to download component code only when it's needed. This is essential for large apps. For example, your 'Admin Panel' code shouldn't be downloaded by regular users visiting the 'Home' page.",
      code:
`import { lazy } from 'react';

const HeavyChart = lazy(() => import('./HeavyChart'));`
    },

    {
      title: "Suspense Component",
      content:
        "When using lazy components, you must wrap them in a 'Suspense' boundary. This tells React what to show (like a loading spinner) while the code for the lazy component is being downloaded over the network.",
      code:
`import { Suspense } from 'react';

<Suspense fallback={<LoadingSpinner />}>
  <HeavyChart />
</Suspense>`
    },

    {
      title: "Code Splitting",
      content:
        "Code splitting is the process of breaking your single massive JavaScript file into multiple smaller 'chunks'. Tools like Vite and Webpack do this automatically when they see lazy imports, resulting in much faster initial page loads.",
      code:
`// Bundler Output:
// main.js (100kb) - Core logic
// vendor.js (200kb) - Libraries
// AdminPage.js (50kb) - Loaded on demand`
    },

    {
      title: "Image Optimization",
      content:
        "Images are often the heaviest part of a website. Use 'Lazy Loading' (loading='lazy') for images below the fold, use modern formats like WebP, and provide 'SrcSet' for different screen sizes to avoid downloading huge images on small phones.",
      code:
`<img 
  src="image-small.webp" 
  srcset="img-large.webp 1024w, img-mid.webp 640w"
  loading="lazy" 
  alt="Description" 
/>`
    },

    {
      title: "Avoiding Re-renders",
      content:
        "1. Keep state as local as possible. 2. Avoid putting frequently changing values in a global Context. 3. Use 'Ref' instead of state for values that don't need to be displayed in the UI. 4. Split large components into smaller ones.",
      code:
`// Localize state to stop "Render Cascades"
function Parent() {
  // ❌ Don't put input state here if only child uses it
  return <Child />
}`
    },

    {
      title: "Optimizing Lists",
      content:
        "Always use unique and stable 'keys' for list items. Never use 'index' as a key if the list can be filtered, sorted, or items can be removed. Stable keys allow React to reuse existing DOM elements instead of destroying and recreating them.",
      code:
`{items.map(item => (
  <ListItem key={item.id} data={item} />
))}`
    },

    {
      title: "Virtualization Basics",
      content:
        "If you need to show 10,000 rows in a table, rendering all of them at once will crash the browser. 'Virtualization' only renders the items currently visible on the screen, creating a 'window' that moves as the user scrolls.",
      code:
`// Popular Libraries:
// 1. react-window
// 2. react-virtualized
// 3. tanstack-virtual`
    },

    {
      title: "Bundle Size Optimization",
      content:
        "Audit your dependencies! Use tools like 'source-map-explorer' or 'rollup-plugin-visualizer' to see which libraries are taking up the most space. Often, you can find smaller alternatives or import only the specific functions you need.",
      code:
`// ❌ Bad: Imports everything
import { map } from 'lodash';

// ✅ Good: Imports only what you need
import map from 'lodash/map';`
    },

    {
      title: "Performance Debugging",
      content:
        "The 'React DevTools' Profiler is your best friend. It records every render and tells you exactly: 1. Which component rendered. 2. How long it took. 3. Why it rendered (which prop or state changed).",
      code:
`// Debugging Steps:
// 1. Record with Profiler
// 2. Identify "Long Tasks" (yellow/red)
// 3. Check "Why did this render?"
// 4. Apply Memoization/Lazy Loading`
    },

    {
      title: "Mini Project — Optimized Product List",
      content:
        "We'll build a massive product directory (1,000+ items). We'll implement search filtering using useMemo, item memoization with React.memo, and lazy load the detail view to keep the initial experience fast.",
      code:
`function ProductDirectory() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => filter(items, query), [query]);

  return (
    <List items={filtered} /> // List is memoized!
  );
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Speed check! 1. Use the React Profiler to find a slow component. 2. Implement lazy loading for a 'Settings' page. Quiz: 1. Difference between Render and Commit? 2. When does React.memo NOT help? 3. Why avoid 'index' as a key?",
      code:
`// Challenge: Memoize a Context Value
// Ensure that components using only 1 value 
// from context don't re-render when other 
// unrelated values in that context change.

const value = useMemo(() => ({ a, b }), [a, b]);
<Ctx.Provider value={value}>`
    }
  ]
}
