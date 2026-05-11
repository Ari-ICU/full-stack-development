import { Cpu } from 'lucide-react'
import { Module } from '../types'

export const module3: Module = {
  id: 3,
  title: "React State & Events",
  level: "Beginner",
  description:
    "Turn static pages into interactive applications. Master the useState hook, handle user events, and understand the flow of data in React.",

  icon: Cpu,
  color: "from-indigo-400 to-indigo-600",
  shadow: "shadow-indigo-500/10",

  slides: [
    {
      title: "Introduction to State",
      content:
        "State is a component's 'memory'. While props are fixed data passed from a parent, State is data that changes over time based on user interaction. When you update a component's state, React automatically 're-renders' the component to show the new data on the screen.",
      code:
`// State makes your UI "alive"
// 1. User clicks a button
// 2. State updates
// 3. UI automatically refreshes

const [count, setCount] = useState(0);`
    },

    {
      title: "Understanding useState Hook",
      content:
        "The 'useState' hook is a special function that lets you add state to functional components. It returns an array with exactly two values: 1. The current state value. 2. A function to update that value. You use 'array destructuring' to give them names.",
      code:
`import { useState } from 'react';

function MyComponent() {
  // [value, setter] = useState(initialValue)
  const [isActive, setIsActive] = useState(false);
  
  return <div>Status: {isActive ? "ON" : "OFF"}</div>;
}`
    },

    {
      title: "Updating State",
      content:
        "To change the state, you MUST use the setter function provided by useState. You should never try to change the state variable directly (e.g., count = 5). Using the setter tells React that the data has changed and a re-render is needed.",
      code:
`const [score, setScore] = useState(10);

// ✅ Correct way
const bonus = () => setScore(score + 5);

// ❌ Incorrect way (UI won't update)
const cheat = () => score = 999;`
    },

    {
      title: "Functional State Updates",
      content:
        "Sometimes you need to update state based on its previous value. If you call the setter multiple times quickly, React might batch them and cause bugs. Using a 'functional update' (passing a function to the setter) ensures you always have the most up-to-date previous state.",
      code:
`const [count, setCount] = useState(0);

// Safer for rapid updates
const increment = () => {
  setCount(prevCount => prevCount + 1);
};`
    },

    {
      title: "Multiple State Variables",
      content:
        "A single component can have as many pieces of state as it needs. You can call useState multiple times to manage different types of data independently. This keeps your state logic clean and organized.",
      code:
`function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  // Each state manages one specific thing
}`
    },

    {
      title: "Event Handling Basics",
      content:
        "React events are named using camelCase, rather than lowercase (e.g., onClick instead of onclick). You pass a function as the event handler rather than a string. React uses 'Synthetic Events' which work the same across all browsers.",
      code:
`// Standard Syntax:
// <element onEventName={functionName} />

function App() {
  const handleAlert = () => alert("Clicked!");

  return <button onClick={handleAlert}>Click Me</button>;
}`
    },

    {
      title: "Click Events",
      content:
        "The 'onClick' event is the most common way to handle user interaction. You can trigger functions when a user clicks buttons, links, or even divs. Remember to pass the function itself, not the result of calling the function.",
      code:
`// ✅ Correct: passing the function
<button onClick={doSomething}>Click</button>

// ❌ Incorrect: calling it immediately
<button onClick={doSomething()}>Click</button>`
    },

    {
      title: "Keyboard Events",
      content:
        "Keyboard events like 'onKeyDown' or 'onKeyUp' are used to listen for specific key presses. This is essential for features like submitting a form with 'Enter' or closing a modal with 'Escape'.",
      code:
`const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    console.log("Submitting form...");
  }
};

<input onKeyDown={handleKeyPress} />`
    },

    {
      title: "Mouse Events",
      content:
        "Beyond just clicking, you can track mouse movement with events like 'onMouseEnter' and 'onMouseLeave'. This is perfect for creating hover effects, tooltips, or interactive animations without using just CSS.",
      code:
`const [hover, setHover] = useState(false);

<div 
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  style={{ background: hover ? 'blue' : 'gray' }}
>
  Hover over me!
</div>`
    },

    {
      title: "Input Events",
      content:
        "The 'onChange' event is triggered every time the user types in an input field. You can access the typed text using 'event.target.value'. This is the basis for creating interactive forms.",
      code:
`const [text, setText] = useState("");

const handleChange = (e) => {
  setText(e.target.value);
};

<input type="text" onChange={handleChange} />
<p>You typed: {text}</p>`
    },

    {
      title: "Controlled Components",
      content:
        "In a 'Controlled Component', React state is the 'single source of truth'. The input's value is driven by state, and updating the input updates the state. This gives you total control over the input data (e.g., forcing uppercase).",
      code:
`const [name, setName] = useState("");

<input 
  type="text" 
  value={name} // State drives the UI
  onChange={(e) => setName(e.target.value)} 
/>`
    },

    {
      title: "Conditional Rendering",
      content:
        "React allows you to show or hide elements based on conditions using standard JavaScript logic. The ternary operator (?) and logical AND (&&) are the most common tools for this inside JSX.",
      code:
`function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {isLogged ? <h1>Welcome!</h1> : <h1>Please Log In</h1>}
      {isLogged && <button>Logout</button>}
    </div>
  );
}`
    },

    {
      title: "Rendering Lists",
      content:
        "To render a list of similar elements, we use the JavaScript '.map()' function. It transforms an array of data into an array of JSX elements. React then efficiently renders these elements to the screen.",
      code:
`const users = ['Alice', 'Bob', 'Charlie'];

function List() {
  return (
    <ul>
      {users.map(user => <li key={user}>{user}</li>)}
    </ul>
  );
}`
    },

    {
      title: "Using Keys in Lists",
      content:
        "When rendering lists, each element needs a unique 'key' prop. Keys help React identify which items have changed, been added, or been removed. This is crucial for performance and preventing UI bugs during updates.",
      code:
`const tasks = [
  { id: 't1', text: 'Learn React' },
  { id: 't2', text: 'Build an App' }
];

{tasks.map(task => (
  <li key={task.id}>{task.text}</li>
))}`
    },

    {
      title: "Dynamic UI Updates",
      content:
        "The beauty of React is that you don't 'push' updates to the UI. Instead, you update the state, and the UI 'pulls' the new data automatically. Your code describes how the UI should look for ANY given state.",
      code:
`// Dynamic logic:
// State -> "dark-mode"
// UI -> updates colors

// State -> "loading"
// UI -> shows spinner`
    },

    {
      title: "Lifting State Up",
      content:
        "Sometimes two components need to share the same state. In this case, you 'lift' the state up to their closest common parent. The parent then passes the state down as props to both children.",
      code:
`function Parent() {
  const [sharedValue, setSharedValue] = useState("");
  return (
    <>
      <ChildA value={sharedValue} />
      <ChildB onUpdate={setSharedValue} />
    </>
  );
}`
    },

    {
      title: "Parent to Child Communication",
      content:
        "Information flows downward in React. A parent component sends data to a child component through 'Props'. The child cannot change this data; it only receives and displays it.",
      code:
`// Parent
<Child title="Total Items" count={5} />

// Child
function Child({ title, count }) {
  return <div>{title}: {count}</div>;
}`
    },

    {
      title: "Child to Parent Communication",
      content:
        "To send information 'up' to a parent, the parent passes a function as a prop to the child. When an event happens, the child calls that function, effectively notifying the parent.",
      code:
`// Parent
const handleMsg = (msg) => console.log(msg);
<Child onNotify={handleMsg} />

// Child
<button onClick={() => onNotify("Hello Dad!")}>
  Call Parent
</button>`
    },

    {
      title: "Two-way Binding",
      content:
        "Two-way binding means the data flows both ways: from state to the input (value={state}) and from the input to state (onChange={setter}). This keeps the JS and the UI perfectly in sync at all times.",
      code:
`// Two-way synchronization:
<input 
  value={username} 
  onChange={(e) => setUsername(e.target.value)} 
/>`
    },

    {
      title: "State Best Practices",
      content:
        "1. Keep state as simple as possible. 2. Don't put data in state if it can be calculated from props. 3. Group related state only if they always change together. 4. Never mutate state directly; always use the setter function.",
      code:
`// Good: Atomic state
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

// Better: If they always change together
const [name, setName] = useState({ first: "", last: "" });`
    },

    {
      title: "Mini Project — Counter App",
      content:
        "We'll build a fully functional Counter App with 'Increment', 'Decrement', and 'Reset' features. This project combines state initialization, functional updates, and multiple event handlers.",
      code:
`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+1</button>
      <button onClick={() => setCount(prev => prev - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Test your interactivity skills! 1. Build a 'Show/Hide' toggle for a secret message. 2. Create a list that adds a new item on button click. Quiz: 1. Why do we use 'prev' in state updates? 2. What is a controlled component?",
      code:
`// Exercise: Build a 'Color Picker'
// 1. Create a state for 'color' (default: 'white')
// 2. Add 3 buttons (Red, Blue, Green)
// 3. When a button is clicked, change a <div>'s background

const [color, setColor] = useState("white");
<div style={{ backgroundColor: color }}>Box</div>
<button onClick={() => setColor("red")}>Red</button>`
    }
  ]
}