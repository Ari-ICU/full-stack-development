import { Layout } from 'lucide-react'
import { Module } from '../types'

export const module2: Module = {
  id: 2,
  title: "React Components & Props",
  level: "Beginner",
  description:
    "Learn the architecture of React applications. Master the art of building reusable components and passing data effectively using props.",

  icon: Layout,
  color: "from-cyan-400 to-cyan-600",
  shadow: "shadow-cyan-500/10",

  slides: [
    {
      title: "Introduction to Components",
      content:
        "Components are the building blocks of any React application. Think of them as custom, reusable HTML elements. Instead of one massive file, you break your UI into small, manageable pieces like Header, Sidebar, and Button. This 'divide and conquer' approach makes code much easier to maintain and scale.",
      code:
`// A simple component
function UserGreeting() {
  return (
    <div className="p-4 border rounded shadow">
      <h1>Welcome back, Explorer!</h1>
    </div>
  );
}`
    },

    {
      title: "Functional Components",
      content:
        "In modern React, components are simply JavaScript functions that return JSX. They are often called 'Functional Components'. They are simpler to write, easier to test, and perform better than the older class-based components. A functional component must always start with a capital letter.",
      code:
`function Message() {
  return <p>I am a functional component!</p>;
}

// Usage:
// <Message />`
    },

    {
      title: "Arrow Function Components",
      content:
        "While standard functions work perfectly, many developers prefer Arrow Functions for their concise syntax. This is especially common when using modern features like hooks and destructuring. Both styles are valid, but consistency within a project is key.",
      code:
`// Arrow Function Component
const Header = () => {
  return (
    <header>
      <h1>React Learning Portal</h1>
    </header>
  );
};

export default Header;`
    },

    {
      title: "Component Naming Rules",
      content:
        "React has one strict naming rule: Component names MUST start with a Capital Letter (PascalCase). If you start with a lowercase letter (e.g., <button>), React treats it as a built-in HTML element. Always use names like UserProfile, ProductCard, or NavBar.",
      code:
`// ✅ Correct: PascalCase
function SuccessButton() {
  return <button>Success</button>;
}

// ❌ Incorrect: camelCase or lowercase
function dangerButton() {
  return <button>Danger</button>;
}`
    },

    {
      title: "Reusable Components",
      content:
        "The primary goal of components is reusability. Instead of writing the same HTML 10 times for 10 different buttons, you create one 'Button' component and use it 10 times. This follows the DRY (Don't Repeat Yourself) principle, making updates much faster.",
      code:
`function MyButton() {
  return <button className="btn-primary">Click Me</button>;
}

function App() {
  return (
    <div>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}`
    },

    {
      title: "Component Nesting",
      content:
        "You can use components inside other components. This is called 'Nesting'. It allows you to build complex structures by combining simple ones. For example, an 'App' component might contain a 'Nav' component, a 'Main' component, and a 'Footer' component.",
      code:
`const Nav = () => <nav>Menu</nav>;
const Main = () => <main>Content</main>;

function App() {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
}`
    },

    {
      title: "What are Props?",
      content:
        "Props (short for Properties) are the way you pass data from a parent component down to a child component. Think of props like function arguments. They allow you to make your components dynamic and customizable rather than hard-coded.",
      code:
`// Child Component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent Component
function App() {
  return <Welcome name="Sokha" />;
}`
    },

    {
      title: "Passing Data with Props",
      content:
        "When you pass data as props, it looks like an HTML attribute. You can pass strings directly in quotes, or any other JavaScript value (numbers, booleans, objects) using curly braces { }.",
      code:
`function Status({ active }) {
  return <p>User is: {active ? "Online" : "Offline"}</p>;
}

function App() {
  return (
    <Status active={true} />
  );
}`
    },

    {
      title: "Passing Multiple Props",
      content:
        "A component can receive as many props as it needs. Just list them out like multiple attributes on an HTML tag. The child component receives them all combined into a single 'props' object.",
      code:
`function UserInfo(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>Level: {props.level}</p>
      <p>Points: {props.score}</p>
    </div>
  );
}

// Usage:
// <UserInfo username="ProPlayer" level={42} score={999} />`
    },

    {
      title: "Destructuring Props",
      content:
        "Instead of writing 'props.name' and 'props.age' everywhere, we usually use ES6 Destructuring. This extracts the values directly in the function's parentheses. It makes the code cleaner, more readable, and easier to see what data the component requires.",
      code:
`// Clean & Modern (Destructuring)
function Profile({ name, role, country }) {
  return (
    <div>
      <h1>{name}</h1>
      <span>{role} from {country}</span>
    </div>
  );
}`
    },

    {
      title: "Props vs State",
      content:
        "This is a fundamental React concept: Props are 'Configuration' and are passed from parents (read-only for the child). State is 'Internal Data' managed by the component itself (changeable). Props are like ingredients given to a chef; State is the heat the chef controls to cook the meal.",
      code:
`// Props: Fixed values from outside
// State: Changing values from inside

// We will learn State in depth in the next module!`
    },

    {
      title: "Passing Arrays as Props",
      content:
        "You can pass entire arrays as props. This is perfect for components that need to render lists. Inside the component, you typically use the .map() method to loop through the array and render an element for each item.",
      code:
`function List({ items }) {
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

// Usage:
// <List items={['React', 'Vite', 'Tailwind']} />`
    },

    {
      title: "Passing Objects as Props",
      content:
        "For complex data, it's often cleaner to pass a single object instead of 10 individual props. This keeps the parent component's code tidy and groups related data together logically.",
      code:
`function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>\${product.price}</p>
    </div>
  );
}

const item = { name: "Laptop", price: 999 };
// Usage: <ProductCard product={item} />`
    },

    {
      title: "Passing Functions as Props",
      content:
        "Components can even receive functions as props! This is how a child component 'talks back' to its parent. For example, a Button component can receive a 'notifyParent' function and call it when clicked.",
      code:
`function AlertButton({ onTrigger }) {
  return <button onClick={onTrigger}>Click Me</button>;
}

function App() {
  const sayHello = () => alert("Hello from Parent!");
  return <AlertButton onTrigger={sayHello} />;
}`
    },

    {
      title: "Children Props",
      content:
        "The 'children' prop is a special prop that React provides automatically. It represents whatever is nested inside the component tags. This is extremely useful for 'Wrapper' or 'Layout' components like Cards, Modals, or Sections.",
      code:
`function Box({ children }) {
  return <div className="border-2 p-8">{children}</div>;
}

function App() {
  return (
    <Box>
      <h2>This is inside the box!</h2>
      <p>I am passed via the children prop.</p>
    </Box>
  );
}`
    },

    {
      title: "Default Props",
      content:
        "Sometimes a parent might forget to pass a prop. You can provide 'Default Values' to ensure your component doesn't break. In modern React, we do this using standard JavaScript default parameters in the function definition.",
      code:
`function Avatar({ src = "placeholder.png", size = 50 }) {
  return (
    <img 
      src={src} 
      width={size} 
      alt="User Avatar" 
    />
  );
}

// Usage: <Avatar /> (Uses defaults)`
    },

    {
      title: "Component Reusability",
      content:
        "True reusability comes from identifying patterns. If you see the same UI pattern with different data, it should be a component. A good reusable component is 'Pure'—it doesn't depend on external global variables and behaves predictably based on its props.",
      code:
`// Reusable Tip:
// 1. Identify common UI patterns.
// 2. Extract into a separate component.
// 3. Use props to handle variations.
// 4. Keep logic simple and focused.`
    },

    {
      title: "Component Composition",
      content:
        "Composition is the act of combining components to build a larger UI. React favors composition over inheritance. You build a complex page by 'composing' it out of many smaller, specialized components, similar to building with LEGO bricks.",
      code:
`function Page() {
  return (
    <Layout>
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
    </Layout>
  );
}`
    },

    {
      title: "Mini Project — Profile Card App",
      content:
        "Let's build a Profile Card App. We'll create a reusable 'Card' component that takes user data (name, job, bio) as props and displays a beautiful profile card with social interaction buttons.",
      code:
`function ProfileCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p className="job">{user.role}</p>
      <p>{user.bio}</p>
      <div className="actions">
        <button>Follow</button>
        <button>Message</button>
      </div>
    </div>
  );
}

export default function App() {
  const userData = {
    name: "Jane Doe",
    role: "Senior React Developer",
    bio: "Building the future of the web.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
  };

  return <ProfileCard user={userData} />;
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Ready to test your skills? 1. Create a 'Product' component that accepts name and price. 2. Pass a function as a prop to a 'Delete' button. Quiz: 1. What is the 'children' prop? 2. Why must component names be capitalized? 3. Can a component modify its own props?",
      code:
`// Exercise: Create a 'Rating' component
// 1. Accept a 'score' prop (1-5)
// 2. Render stars based on the score
// 3. Set a default score of 0

function Rating({ score = 0 }) {
  return (
    <div className="stars">
      {"★".repeat(score)}{"☆".repeat(5 - score)}
    </div>
  );
}`
    }
  ]
}