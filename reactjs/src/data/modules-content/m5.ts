import { Zap } from 'lucide-react'
import { Module } from '../types'

export const module5: Module = {
  id: 5,
  title: "React useEffect & Side Effects",
  level: "Intermediate",
  description:
    "Master the art of handling side effects in React. Learn how to fetch data, manage timers, and interact with external systems using the useEffect hook.",

  icon: Zap,
  color: "from-purple-400 to-purple-600",
  shadow: "shadow-purple-500/10",

  slides: [
    {
      title: "Introduction to Side Effects",
      content:
        "In React, a component's primary job is to render UI. A 'Side Effect' is anything that happens outside this rendering process, such as fetching data from an API, manually changing the DOM, or setting up a subscription. React provides the 'useEffect' hook to handle these operations safely and predictably.",
      code:
`// Examples of Side Effects:
// 1. Data Fetching (API calls)
// 2. Setting up a Timer (setInterval)
// 3. Manually updating the Document Title
// 4. Subscribing to an External Store`
    },

    {
      title: "Understanding useEffect",
      content:
        "The 'useEffect' hook takes two arguments: 1. A function containing the side-effect logic. 2. An optional 'dependency array'. By default, the effect runs after every render of the component.",
      code:
`import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "New Message!";
  });

  return <h1>Hello World</h1>;
}`
    },

    {
      title: "Dependency Array",
      content:
        "The dependency array is the second argument of useEffect. It tells React when to re-run the effect. If you provide an array, the effect will only run when the values inside that array change. If you omit it, the effect runs on every render.",
      code:
`useEffect(() => {
  console.log("I run based on dependencies");
}, [count, user]); // Only runs if count or user changes`
    },

    {
      title: "Running Effects Once",
      content:
        "If you pass an empty array [] as the second argument, the effect will only run ONCE—immediately after the component mounts (is added to the screen). This is the perfect place for initial API calls or setting up one-time listeners.",
      code:
`useEffect(() => {
  console.log("I only run once after mount!");
}, []); // Empty array = mount only`
    },

    {
      title: "Running Effects on Updates",
      content:
        "By including state or props in the dependency array, you can trigger side effects whenever those specific values change. This allows you to synchronize your side effects with your component's state.",
      code:
`const [query, setQuery] = useState("");

useEffect(() => {
  console.log(\`Searching for \${query}...\`);
}, [query]); // Re-runs every time query updates`
    },

    {
      title: "Cleanup Functions",
      content:
        "Sometimes an effect needs to 'clean up' after itself to prevent memory leaks. You do this by returning a function from your effect. React calls this cleanup function before the component unmounts and before re-running the effect.",
      code:
`useEffect(() => {
  console.log("Effect starting");

  return () => {
    console.log("Cleaning up before effect runs again or unmount");
  };
}, [count]);`
    },

    {
      title: "setInterval & Timers",
      content:
        "When using timers like 'setInterval', you must always clean them up. If you don't, the timer will keep running even after the component is gone, which can crash your application or cause weird bugs.",
      code:
`useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  // Cleanup: Stop the timer!
  return () => clearInterval(timer);
}, []);`
    },

    {
      title: "Event Listener Cleanup",
      content:
        "Similarly, if you add global event listeners (like 'resize' or 'keydown' on the window), you must remove them in the cleanup function. This ensures you don't have multiple copies of the same listener running simultaneously.",
      code:
`useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);`
    },

    {
      title: "Fetching API Data",
      content:
        "Fetching data is the most common use of useEffect. You perform the fetch inside the effect and store the result in your component's state. Always use an empty dependency array if you only want to fetch once on load.",
      code:
`const [data, setData] = useState(null);

useEffect(() => {
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(json => setData(json));
}, []);`
    },

    {
      title: "Loading State",
      content:
        "Network requests take time. You should always provide a 'loading' indicator so the user knows something is happening. We handle this by adding an 'isLoading' boolean to our state.",
      code:
`const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(true);
  fetchData().then(() => setLoading(false));
}, []);

if (loading) return <Spinner />;
return <DataDisplay />;`
    },

    {
      title: "Error Handling",
      content:
        "API calls can fail (e.g., no internet). You should catch these errors and display a helpful message to the user instead of letting the app crash.",
      code:
`const [error, setError] = useState(null);

useEffect(() => {
  fetch("...")
    .then(res => res.json())
    .catch(err => setError("Failed to load data"));
}, []);

if (error) return <p>{error}</p>;`
    },

    {
      title: "Async/Await in useEffect",
      content:
        "You cannot make the useEffect function itself 'async'. Instead, you should define an async function INSIDE the effect and then call it immediately. This keeps the React lifecycle predictable while allowing modern async syntax.",
      code:
`useEffect(() => {
  const load = async () => {
    try {
      const res = await fetch("...");
      const data = await res.json();
      setData(data);
    } catch (e) {
      console.error(e);
    }
  };
  load();
}, []);`
    },

    {
      title: "Dependency Best Practices",
      content:
        "Always include every variable from your component scope that is used inside the effect in the dependency array. If you don't, your effect might use 'stale' (old) values, leading to confusing bugs.",
      code:
`// Rule of Thumb:
// If a variable is used inside useEffect 
// and it's NOT defined inside useEffect,
// put it in the dependency array!`
    },

    {
      title: "Debouncing Search Input",
      content:
        "To avoid hitting an API with every single keystroke (which is slow and expensive), we use 'Debouncing'. We wait for the user to stop typing for a few hundred milliseconds before actually triggering the side effect.",
      code:
`const [search, setSearch] = useState("");

useEffect(() => {
  const delay = setTimeout(() => {
    console.log("Searching for:", search);
  }, 500);

  return () => clearTimeout(delay); // Reset timer on every keypress
}, [search]);`
    },

    {
      title: "useEffect Common Mistakes",
      content:
        "1. Forgetting the dependency array (runs infinite loop). 2. Forgetting to clean up timers/listeners. 3. Putting variables in dependencies that change every render (infinite loop). 4. Updating state inside an effect that depends on that same state.",
      code:
`// ❌ Infinite Loop Alert:
useEffect(() => {
  setCount(count + 1);
}, [count]); 

// 1. count changes
// 2. effect runs
// 3. effect updates count
// 4. count changes -> GOTO 1`
    },

    {
      title: "Mini Project — Weather App",
      content:
        "Let's build a Weather App. It will fetch current weather data from an API based on a city search. We'll handle loading states, error handling, and synchronize the API call with the search state.",
      code:
`function Weather() {
  const [city, setCity] = useState("Phnom Penh");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(\`https://api.weather.com/\${city}\`);
      setData(await res.json());
    };
    fetchWeather();
  }, [city]);

  return <Display weather={data} />;
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Practice makes perfect! 1. Create a component that logs 'Hello' every 2 seconds and cleans up. 2. Build a document title updater. Quiz: 1. When does a cleanup function run? 2. Why use an empty dependency array? 3. Can you use 'async' on useEffect?",
      code:
`// Exercise: Title Timer
// 1. Create a 'seconds' state
// 2. Use a timer to increment it every second
// 3. Update the document title to show the time

useEffect(() => {
  const t = setInterval(() => setSec(s => s + 1), 1000);
  return () => clearInterval(t);
}, []);

useEffect(() => {
  document.title = \`Elapsed: \${sec}s\`;
}, [sec]);`
    }
  ]
}