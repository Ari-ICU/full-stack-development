import { Server } from 'lucide-react'
import { Module } from '../types'

export const module10: Module = {
  id: 10,
  title: "API & Backend Integration",
  level: "Advanced",
  description:
    "Learn how to connect your React frontend to the real world. Master CRUD operations, REST APIs, and efficient data management using Fetch and Axios.",

  icon: Server,
  color: "from-cyan-400 to-blue-600",
  shadow: "shadow-blue-500/10",

  slides: [
    {
      title: "Introduction to APIs",
      content:
        "An API (Application Programming Interface) allows your React app to 'talk' to a server to get or send data. In modern web development, most APIs use the 'JSON' format, which is easy for both humans and computers to read. Connecting to an API turns your app from a static page into a dynamic, data-driven platform.",
      code:
`// How it works:
// 1. React sends a Request (e.g., "Give me users")
// 2. Server processes the Request
// 3. Server sends a Response (JSON Data)
// 4. React updates the UI with that data`
    },

    {
      title: "REST API Basics",
      content:
        "REST is a set of rules for how APIs should be built. It uses standard HTTP 'methods' to represent different actions: GET (read), POST (create), PUT/PATCH (update), and DELETE (remove). Each 'URL' in a REST API represents a specific 'Resource' (like /products or /users).",
      code:
`// REST Methods:
// GET    -> Read data
// POST   -> Create new data
// PUT    -> Update existing data
// DELETE -> Remove data`
    },

    {
      title: "Fetch API",
      content:
        "The 'Fetch API' is built directly into modern browsers. It's a powerful tool for making network requests. It returns a 'Promise', which you handle using .then() or the more modern async/await syntax.",
      code:
`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));`
    },

    {
      title: "GET Requests",
      content:
        "A GET request is used to retrieve data from a server. By default, the fetch() function performs a GET request. You typically trigger this inside a useEffect hook with an empty dependency array to load data when the component first appears.",
      code:
`useEffect(() => {
  const getData = async () => {
    const res = await fetch('https://api.com/users');
    const json = await res.json();
    setUsers(json);
  };
  getData();
}, []);`
    },

    {
      title: "POST Requests",
      content:
        "A POST request is used to send new data to the server (e.g., creating a new user or a blog post). You must specify the 'method' as POST and include the data you want to send in the 'body' of the request, usually converted to a JSON string.",
      code:
`const createPost = async (newPost) => {
  await fetch('https://api.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost)
  });
};`
    },

    {
      title: "PUT Requests",
      content:
        "A PUT request is used to update existing data on the server. You usually include the 'ID' of the item you want to change in the URL. Similar to POST, you send the updated data in the body.",
      code:
`// Update post with ID: 1
fetch('https://api.com/posts/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Updated Title' })
});`
    },

    {
      title: "DELETE Requests",
      content:
        "A DELETE request tells the server to remove a specific resource. It's the simplest request as it usually doesn't require a body—just the URL containing the ID of the item to delete.",
      code:
`const deleteItem = async (id) => {
  await fetch(\`https://api.com/items/\${id}\`, {
    method: 'DELETE'
  });
  // After delete, update your local state!
};`
    },

    {
      title: "Axios Introduction",
      content:
        "While fetch() is great, many developers prefer a library called 'Axios'. It provides a cleaner syntax, automatically transforms JSON data, has better error handling, and supports older browsers. It's the industry standard for large React applications.",
      code:
`# Install Axios:
npm install axios

import axios from 'axios';`
    },

    {
      title: "Axios Requests",
      content:
        "With Axios, you don't need to call .json() manually. The data is already available in the 'data' property of the response. It also provides dedicated methods like axios.get(), axios.post(), etc.",
      code:
`const getPosts = async () => {
  const response = await axios.get('/posts');
  setPosts(response.data); // data is already JSON!
};`
    },

    {
      title: "Handling Loading States",
      content:
        "API calls aren't instant. You should always show a 'Loading...' message or a spinner while waiting for the response. This prevents the user from seeing an empty screen or thinking the app is frozen.",
      code:
`const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(true);
  fetchData().finally(() => setLoading(false));
}, []);

if (loading) return <Spinner />;`
    },

    {
      title: "Handling Errors",
      content:
        "Always expect the unexpected! Servers can go down or return errors (like 404 Not Found). Use try/catch blocks with async/await to catch these errors and show a friendly message to the user.",
      code:
`try {
  const res = await axios.get('/data');
} catch (error) {
  setErrorMessage("Could not load data. Try again later.");
}`
    },

    {
      title: "CRUD Operations",
      content:
        "CRUD stands for Create, Read, Update, and Delete. These are the four basic functions of persistent storage. A typical React app is built around these operations (e.g., a Todo list, a Social Media feed, or an E-commerce cart).",
      code:
`// CRUD Summary:
// C -> Create (POST)
// R -> Read (GET)
// U -> Update (PUT/PATCH)
// D -> Delete (DELETE)`
    },

    {
      title: "JSON Server Setup",
      content:
        "If you don't have a real backend yet, you can use 'json-server'. It's a tool that creates a full 'mock' REST API from a simple JSON file in seconds. This allows you to build and test your frontend API logic easily.",
      code:
`# Install and run:
npm install -g json-server
json-server --watch db.json`
    },

    {
      title: "Environment Variables",
      content:
        "You should never hardcode API URLs directly in your components. Instead, use Environment Variables (.env files). This allows you to easily switch between 'development' and 'production' API servers without changing your code.",
      code:
`// .env file
VITE_API_URL=https://api.myapp.com

// In React (Vite):
const URL = import.meta.env.VITE_API_URL;`
    },

    {
      title: "API Folder Structure",
      content:
        "For clean code, keep your API logic separate from your UI components. Create a 'services/' or 'api/' folder and define your Axios instances and request functions there. Your components should just call these functions.",
      code:
`src/
├── api/
│   ├── axiosConfig.js
│   └── postService.js
└── components/`
    },

    {
      title: "Mini Project — Blog CRUD App",
      content:
        "Let's build a full Blog Management app! You'll be able to: 1. View all posts (GET). 2. Add a new post (POST). 3. Edit existing posts (PUT). 4. Delete posts (DELETE). We'll use Axios and a mock backend.",
      code:
`function Blog() {
  const [posts, setPosts] = useState([]);

  // 1. Fetch all
  // 2. Handle 'Add' form
  // 3. Handle 'Delete' button
  // 4. Handle 'Edit' mode
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Final API Challenge! 1. Build a 'User Directory' that fetches data from 'JSONPlaceholder'. 2. Implement a 'Search' filter that calls the API as you type. Quiz: 1. Difference between POST and PUT? 2. Why use Axios over Fetch? 3. What is JSON?",
      code:
`// Exercise: Generic useFetch Hook
// Create a hook that takes a URL and returns 
// { data, loading, error }.

const { data, loading, error } = useFetch('...');`
    }
  ]
}
