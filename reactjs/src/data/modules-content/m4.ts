import { FileText } from 'lucide-react'
import { Module } from '../types'

export const module4: Module = {
  id: 4,
  title: "React Forms & User Input",
  level: "Intermediate",
  description:
    "Master the art of handling user input in React. From simple text fields to complex validated forms and multi-input state management.",

  icon: FileText,
  color: "from-yellow-400 to-orange-500",
  shadow: "shadow-orange-500/10",

  slides: [
    {
      title: "Introduction to React Forms",
      content:
        "Forms are essential for collecting user data. In React, there are two ways to handle forms: 'Controlled Components' (recommended) and 'Uncontrolled Components'. Controlled components use React state to drive the input value, giving you full control over the data at every keystroke.",
      code:
`// Why React Forms?
// 1. Instant Validation - Check data as they type.
// 2. Data Synchronization - State and UI always match.
// 3. Dynamic Fields - Add/remove fields on the fly.
// 4. Form Submission - Handle data via JavaScript.`
    },

    {
      title: "Controlled Inputs",
      content:
        "A controlled input has its 'value' tied to a state variable and an 'onChange' handler to update that state. This ensures that the React state is the single source of truth for the input's data.",
      code:
`const [name, setName] = useState("");

<input 
  type="text" 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
/>`
    },

    {
      title: "Handling Multiple Inputs",
      content:
        "Instead of creating 10 different state variables for 10 inputs, you can use a single 'object' state. By giving each input a 'name' attribute that matches the object keys, you can update everything with one single handler function.",
      code:
`const [formData, setFormData] = useState({ user: "", email: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

<input name="user" onChange={handleChange} />
<input name="email" onChange={handleChange} />`
    },

    {
      title: "Textarea Inputs",
      content:
        "In React, a <textarea> works almost exactly like a regular <input>. Unlike standard HTML where the text goes inside the tags, in React you use the 'value' prop to control the content.",
      code:
`const [bio, setBio] = useState("");

<textarea
  value={bio}
  onChange={(e) => setBio(e.target.value)}
  placeholder="Tell us about yourself..."
/>`
    },

    {
      title: "Select Dropdowns",
      content:
        "Drop-down menus also use the 'value' prop on the <select> tag itself to control which <option> is selected. This makes it much easier to manage the selected value compared to standard HTML.",
      code:
`const [role, setRole] = useState("student");

<select value={role} onChange={(e) => setRole(e.target.value)}>
  <option value="admin">Admin</option>
  <option value="student">Student</option>
  <option value="guest">Guest</option>
</select>`
    },

    {
      title: "Checkbox Inputs",
      content:
        "Checkboxes use the 'checked' prop instead of 'value'. The event to watch is still 'onChange', but you access the state using 'e.target.checked' (a boolean) rather than 'e.target.value'.",
      code:
`const [isAgreed, setIsAgreed] = useState(false);

<input 
  type="checkbox" 
  checked={isAgreed} 
  onChange={(e) => setIsAgreed(e.target.checked)} 
/>
<label>I agree to the terms</label>`
    },

    {
      title: "Radio Buttons",
      content:
        "Radio buttons work by grouping multiple inputs with the same 'name'. To 'control' them, you check if the current state matches the input's value. When clicked, the onChange handler updates the state to that radio's specific value.",
      code:
`const [gender, setGender] = useState("male");

<input 
  type="radio" 
  value="male" 
  checked={gender === "male"} 
  onChange={(e) => setGender(e.target.value)} 
/> Male

<input 
  type="radio" 
  value="female" 
  checked={gender === "female"} 
  onChange={(e) => setGender(e.target.value)} 
/> Female`
    },

    {
      title: "Form Submission",
      content:
        "To handle the final data, you add an 'onSubmit' event to the <form> tag. This event is triggered when the user clicks a 'submit' button or presses 'Enter' inside the form.",
      code:
`const handleSubmit = (e) => {
  e.preventDefault(); // Stop page reload
  console.log("Submitting:", formData);
};

<form onSubmit={handleSubmit}>
  <button type="submit">Submit Data</button>
</form>`
    },

    {
      title: "Prevent Default Behavior",
      content:
        "By default, browsers reload the entire page when a form is submitted. In React SPAs, we don't want this! We use 'e.preventDefault()' at the very start of our submit handler to keep the user on the current page while we process data.",
      code:
`function Form() {
  const submit = (e) => {
    e.preventDefault();
    // Your logic here (API calls, etc.)
  };
  return <form onSubmit={submit}>...</form>;
}`
    },

    {
      title: "Form Validation Basics",
      content:
        "Validation ensures the user has entered correct data before you send it to the server. You can check for empty fields, minimum lengths, or specific patterns during submission.",
      code:
`const validate = () => {
  if (name.length < 3) {
    alert("Name too short!");
    return false;
  }
  return true;
};`
    },

    {
      title: "Real-time Validation",
      content:
        "Real-time validation gives the user instant feedback as they type. You can check the state inside the render logic or 'onChange' handler and display warnings immediately if the input is invalid.",
      code:
`const [email, setEmail] = useState("");
const isInvalid = !email.includes("@");

<input value={email} onChange={(e) => setEmail(e.target.value)} />
{isInvalid && <span className="error">Invalid email address</span>}`
    },

    {
      title: "Error Messages",
      content:
        "Displaying clear error messages is vital for good UX. We typically store errors in their own state object and display them below each corresponding input field.",
      code:
`const [errors, setErrors] = useState({});

// In JSX:
<input name="email" />
{errors.email && <p className="text-red-500">{errors.email}</p>}`
    },

    {
      title: "Password Validation",
      content:
        "Password validation often requires checking multiple rules: length, numbers, and special characters. You can use Regular Expressions (Regex) to test these complex patterns easily.",
      code:
`const passwordRegex = /^(?=.*[A-Z])(?=.*\\d).{8,}$/;
const isValid = passwordRegex.test(password);

// Rules:
// 1. Min 8 characters
// 2. At least one capital letter
// 3. At least one number`
    },

    {
      title: "Resetting Forms",
      content:
        "To clear a form after a successful submission, simply set your state back to its initial values. Because the inputs are controlled, they will automatically empty themselves to match the state.",
      code:
`const initialState = { name: "", email: "" };
const [data, setData] = useState(initialState);

const handleSuccess = () => {
  setData(initialState); // Resets UI instantly
};`
    },

    {
      title: "Dynamic Forms",
      content:
        "Dynamic forms can add or remove fields based on user action. For example, 'Add another phone number'. We handle this by storing an array in state and using '.map()' to render an input for each item in that array.",
      code:
`const [phones, setPhones] = useState([""]);

const addPhone = () => setPhones([...phones, ""]);

{phones.map((p, i) => (
  <input key={i} placeholder={\`Phone \${i+1}\`} />
))}`
    },

    {
      title: "Form Best Practices",
      content:
        "1. Always use 'Controlled Components'. 2. Use 'label' tags for accessibility. 3. Group related data into objects. 4. Provide instant feedback for errors. 5. Disable the submit button while processing or if the form is invalid.",
      code:
`// Best practice summary:
// - Use <label htmlFor="ID">
// - Use type="email", type="tel", etc.
// - Implement accessible ARIA labels
// - Keep validation logic clean`
    },

    {
      title: "Mini Project — Registration Form",
      content:
        "Let's build a complete Registration Form. It will include fields for Username, Email, Password, and a 'Terms' checkbox. We'll implement real-time validation and a clean submission process.",
      code:
`function Register() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.email.includes("@")) return setErr("Invalid Email");
    alert("Registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
       {/* Form fields here */}
    </form>
  );
}`
    },

    {
      title: "Exercises & Quiz",
      content:
        "Final challenge! 1. Create a form with a 'Select' menu that changes the page theme. 2. Build a 'Search' bar that filters a list as you type. Quiz: 1. Difference between 'value' and 'checked'? 2. Why use 'e.preventDefault()'? 3. What is a controlled component?",
      code:
`// Exercise: Create a 'Login' form
// Requirements:
// 1. Two controlled inputs (Email, Password)
// 2. Submit button is disabled if fields are empty
// 3. Clear fields on successful "login"

const isDisabled = !email || !password;
<button disabled={isDisabled}>Login</button>`
    }
  ]
}