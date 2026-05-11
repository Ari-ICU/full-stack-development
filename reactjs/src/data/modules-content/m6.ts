import { Zap } from 'lucide-react'
import { Module } from '../types'

export const module6: Module = {
  id: 6,
  title: "React Advanced Hooks",
  level: "Advanced",
  description:
    "Take your React skills to the next level. Master performance optimization, complex state management, and build your own custom hooks.",

  icon: Zap,
  color: "from-orange-400 to-red-600",
  shadow: "shadow-red-500/10",

  slides: [
    {
      title: "Introduction to Advanced Hooks",
      content:
        "Beyond useState and useEffect, React provides specialized hooks for optimization and complex logic. Hooks like useRef, useMemo, and useCallback help you control performance and DOM interactions, while useReducer provides a more structured way to manage complex state transitions.",
      code:
`// Advanced Hooks we will cover:
// 1. useRef - DOM access & persistence
// 2. useMemo - Value memoization
// 3. useCallback - Function memoization
// 4. useReducer - Complex state logic
// 5. Custom Hooks - Logic extraction`
    },

    {
      title: "Understanding useRef",
      content:
        "The 'useRef' hook is like a 'box' that can hold any mutable value. Unlike state, changing a ref's value DOES NOT trigger a re-render. It is most commonly used to store a reference to a DOM element or to store values that need to persist across renders without affecting the UI.",
      code:
`import { useRef } from 'react';

const myRef = useRef(initialValue);
// Access value via: myRef.current`
    },

    {
      title: "Accessing DOM Elements",
      content:
        "To interact directly with a DOM element (like focusing an input or measuring an element's size), you pass your ref to the 'ref' attribute of an HTML element. React will automatically set the '.current' property to that DOM node.",
      code:
`function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  
  const onButtonClick = () => {
    // Directly access the DOM node
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus Input</button>
    </>
  );
}`
    },

    {
      title: "Persisting Values with useRef",
      content:
        "You can also use useRef to keep track of a value that you want to remember, but that shouldn't cause a re-render when it changes (like a timer ID or the previous value of a prop). This is a great way to store 'behind-the-scenes' data.",
      code:
`function Timer() {
  const count = useRef(0);

  const handleIncrement = () => {
    count.current += 1;
    console.log(\`Current count: \${count.current}\`);
    // Note: The UI won't update!
  };

  return <button onClick={handleIncrement}>Log Count</button>;
}`
    },

    {
      title: "Understanding useMemo",
      content:
        "The 'useMemo' hook 'memoizes' (caches) the result of a calculation. It only re-calculates the value when one of its dependencies changes. This is vital for performance when you have a 'heavy' calculation that shouldn't run on every single render.",
      code:
`import { useMemo } from 'react';

const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`
    },

    {
      title: "Expensive Calculations",
      content:
        "If you have a function that takes a long time to run (like sorting 10,000 items), placing it directly in your component body will slow down every update. By using useMemo, you ensure that the work is only done when absolutely necessary.",
      code:
`function ProductList({ products, sortOrder }) {
  const sortedProducts = useMemo(() => {
    console.log("Sorting expensive list...");
    return [...products].sort((a, b) => {
       // Expensive sorting logic
    });
  }, [products, sortOrder]);

  return <div>{/* Render sortedProducts */}</div>;
}`
    },

    {
      title: "Understanding useCallback",
      content:
        "Similar to useMemo, 'useCallback' memoizes a function definition. In JavaScript, functions are objects, so a new function is created on every render. useCallback prevents this re-creation, ensuring the function remains the 'same' instance as long as its dependencies don't change.",
      code:
`import { useCallback } from 'react';

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`
    },

    {
      title: "Memoizing Functions",
      content:
        "useCallback is most useful when passing functions to child components that are optimized with 'React.memo'. Since the function instance doesn't change, the child component won't see it as a 'new prop' and will skip unnecessary re-renders.",
      code:
`const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Click handled");
  }, []); // Never changes

  return <OptimizedChild onClick={handleClick} />;
};`
    },

    {
      title: "React.memo Introduction",
      content:
        "React.memo is a 'higher-order component' that you wrap around a component. It tells React: 'Only re-render this component if its props actually changed.' If the props are the same as last time, React skips the render entirely, saving performance.",
      code:
`import { memo } from 'react';

const MyComponent = memo(function MyComponent(props) {
  /* render using props */
});

export default MyComponent;`
    },

    {
      title: "Preventing Unnecessary Re-renders",
      content:
        "When a parent component re-renders, ALL its children re-render by default. By combining React.memo with useMemo and useCallback, you can prevent these 'cascading' re-renders, which is critical for smooth performance in large applications.",
      code:
`// 1. Wrap child in React.memo
// 2. Wrap child's object props in useMemo
// 3. Wrap child's function props in useCallback

// Result: Child only renders when DATA changes.`
    },

    {
      title: "Understanding useReducer",
      content:
        "As state grows complex (multiple related values, complex logic), useState can become messy. 'useReducer' is a more powerful alternative. It uses a 'reducer' function to handle state updates based on 'actions', similar to how Redux works.",
      code:
`import { useReducer } from 'react';

const [state, dispatch] = useReducer(reducer, initialState);`
    },

    {
      title: "Reducer Functions",
      content:
        "A reducer is a simple function that takes the current 'state' and an 'action', and returns the 'new state'. It uses a switch statement to determine what to do based on the action type. This keeps your update logic centralized and predictable.",
      code:
`function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}`
    },

    {
      title: "Managing Complex State",
      content:
        "useReducer is perfect for managing objects with many fields, like a multi-step form or a shopping cart. Instead of 10 setters, you have one 'dispatch' function that sends clear commands like 'ADD_ITEM' or 'REMOVE_ITEM'.",
      code:
`const [cart, dispatch] = useReducer(cartReducer, []);

const addItem = (product) => {
  dispatch({ type: 'ADD_ITEM', payload: product });
};`
    },

    {
      title: "Combining useReducer & Context",
      content:
        "By putting the 'state' and 'dispatch' from useReducer into a Context Provider, you can create a 'global state' system. Any component in your app can then access the state or trigger updates without passing props through every level.",
      code:
`const StateContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}`
    },

    {
      title: "Custom Hooks Introduction",
      content:
        "Custom Hooks are the ultimate tool for code reuse in React. They allow you to extract component logic (like data fetching or form handling) into a separate function that can be used by any component. This keeps your components small and focused on the UI.",
      code:
`// A custom hook is just a function 
// that uses other React hooks!

function useMyLogic() {
  const [data, setData] = useState(null);
  // ... logic
  return data;
}`
    },

    {
      title: "Creating Custom Hooks",
      content:
        "A custom hook must always start with the word 'use' (e.g., useAuth, useTheme). This tells React that the function follows the 'Rules of Hooks' and allows it to keep track of the hook's internal state correctly.",
      code:
`function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  return width;
}`
    },

    {
      title: "Reusable Hook Patterns",
      content:
        "Common patterns for custom hooks include: 1. useForm (manages input state and validation). 2. useAuth (handles login status and user data). 3. useFetch (handles API requests and loading states). 4. useTheme (manages dark/light mode toggle).",
      code:
`// Pattern: Hook returns data and handlers
const { data, loading, error } = useFetch(url);
const { values, handleChange } = useForm(initial);`
    },

    {
      title: "Local Storage Hook",
      content:
        "A 'useLocalStorage' hook is a classic example. It behaves just like useState, but it automatically synchronizes the value with the browser's localStorage, so the data persists even if the user refreshes the page.",
      code:
`function useLocalStorage(key, initialValue) {
  const [val, setVal] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal];
}`
    },

    {
      title: "API Fetch Hook",
      content:
        "Instead of writing fetch/loading/error logic in every component, you can build a 'useFetch' hook. It handles the side effect, state management, and cleanup all in one reusable place.",
      code:
`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}`
    },

    {
      title: "Mini Project — Notes App",
      content:
        "We'll build a 'Smart Notes App' that uses useReducer for managing a list of notes, a custom hook for local storage persistence, and useMemo for searching/filtering notes in real-time.",
      code:
`function NotesApp() {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [search, setSearch] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter(n => n.text.includes(search));
  }, [notes, search]);

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      {/* Render Notes */}
    </div>
  );
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Master the hooks! 1. Use useReducer to build a shopping cart. 2. Create a custom hook called 'useOnlineStatus'. Quiz: 1. Difference between useMemo and useCallback? 2. Why use a ref instead of state? 3. What is the 'dispatch' function?",
      code:
`// Exercise: useToggle Hook
// Create a reusable hook that toggles between 
// true/false and provides a function to switch it.

function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState(prev => !prev);
  return [state, toggle];
}`
    }
  ]
}
