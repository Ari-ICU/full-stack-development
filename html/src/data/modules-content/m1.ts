import { Code2 } from 'lucide-react'
import { Module } from '../types'

export const module1: Module = {
  id: 1,
  title: "HTML5 Fundamentals",
  description: "Master the building blocks of the web with our comprehensive HTML5 course.",
  icon: Code2,
  color: "from-orange-500 to-amber-500",
  shadow: "shadow-orange-500/20",
  level: "Beginner",
  slides: [
    {
      title: "Introduction to HTML",
      content: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It's the skeleton of every website, defining structure and meaning.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to HTML</title>
</head>
<body>
    <!-- This is a comment in HTML -->
    <p>Hello, World! I am learning HTML.</p>
</body>
</html>`
    },
    {
      title: "HTML Document Structure",
      content: "Every HTML document follows a standard skeleton:\n\n• <!DOCTYPE html>: The document type\n• <html>: The root element\n• <head>: Contains metadata/title\n• <body>: Contains visible content",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Structure</title>
</head>
<body>
    <h1>Welcome to My Site</h1>
    <p>This is a full HTML document structure.</p>
</body>
</html>`
    },
    {
      title: "Headings & Paragraphs",
      content: "Headings (h1 to h6) define the hierarchy of content, with h1 being the most important. Paragraphs (p) are used for blocks of text.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Headings & Paragraphs</title>
</head>
<body>
    <h1>Main Heading</h1>
    <h2>Sub-heading</h2>
    <p>This is a paragraph of text that explains something important.</p>
</body>
</html>`
    },
    {
      title: "Text Formatting Tags",
      content: "Semantic tags add meaning and importance to text:\n\n• <strong>: Important/Bold text\n• <em>: Emphasized/Italic text\n• <mark>: Highlighted background",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Formatting</title>
</head>
<body>
    <p>This is <strong>important</strong> text.</p>
    <p>This is <em>emphasized</em> text.</p>
    <p><mark>Highlighted</mark> text helps it stand out.</p>
</body>
</html>`
    },
    {
      title: "Links & Navigation",
      content: "The <a> (anchor) tag is used to create hyperlinks. The 'href' attribute specifies the destination URL.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Links & Navigation</title>
</head>
<body>
    <nav>
      <a href="https://google.com" target="_blank">Visit Google</a>
      <a href="about.html">About Us</a>
    </nav>
</body>
</html>`
    },
    {
      title: "Images & Multimedia",
      content: "Use the <img> tag for images (requires 'src' and 'alt'), and <video> or <audio> for multimedia content.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Images & Multimedia</title>
</head>
<body>
    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="Coding on laptop" width="400">
    
    <video controls width="300" style="margin-top: 20px; display: block;">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</body>
</html>`
    },
    {
      title: "Lists in HTML",
      content: "Ordered lists (ol) use numbers, unordered lists (ul) use bullets. Both use list items (li).",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lists in HTML</title>
</head>
<body>
    <h3>Shopping List</h3>
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Oranges</li>
    </ul>

    <h3>Daily Routine</h3>
    <ol>
      <li>Wake up</li>
      <li>Code</li>
      <li>Sleep</li>
    </ol>
</body>
</html>`
    },
    {
      title: "Containers (div & span)",
      content: "Generic containers are used to group elements for styling and layout:\n\n• <div>: Block-level container (starts on a new line)\n• <span>: Inline container (used inside other elements)",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Containers: div & span</title>
</head>
<body>
    <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
        <h2>Block Container (div)</h2>
        <p>The div tag is used to create sections or groups of content.</p>
        <p>You can use <span style="color: #e34c26; font-weight: bold;">span tags</span> to style text inside a paragraph.</p>
    </div>
</body>
</html>`
    },
    {
      title: "Tables in HTML",
      content: "Tables organize data into rows and columns:\n\n• <table>: Main container\n• <tr>: Table Row\n• <th>: Header Cell (bold/centered)\n• <td>: Standard Data Cell",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tables in HTML</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Role</th>
      </tr>
      <tr>
        <td>John Doe</td>
        <td>25</td>
        <td>Developer</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>30</td>
        <td>Designer</td>
      </tr>
    </table>
</body>
</html>`
    },
    {
      title: "Forms & Inputs",
      content: "Forms allow you to capture user information:\n\n• <form>: Container for inputs\n• <input>: Interactive data fields\n• <label>: Caption for elements\n• <button>: Submits the form data",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forms & Inputs</title>
</head>
<body>
    <form action="/submit" method="POST" style="display: flex; flex-direction: column; gap: 10px; max-width: 300px;">
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" placeholder="Enter your name">
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="user_email" placeholder="email@example.com">

      <button type="submit" style="padding: 10px; background: #e34c26; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Submit Application
      </button>
    </form>
</body>
</html>`
    },
    {
      title: "Semantic HTML",
      content: "Semantic elements describe their meaning clearly:\n\n• <header>: Introductory content\n• <section>: Thematic grouping\n• <article>: Self-contained content\n• <footer>: Author/Copyright info",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML</title>
</head>
<body>
    <header style="background: #eee; padding: 20px;">
      <h1>My Tech Blog</h1>
    </header>
    <main style="padding: 20px;">
      <article>
        <h2>The Future of Web Dev</h2>
        <p>HTML5 semantic elements make the web more accessible and organized...</p>
      </article>
    </main>
    <footer style="background: #333; color: white; padding: 10px; text-align: center;">
      <p>&copy; 2024 Tech Blog</p>
    </footer>
</body>
</html>`
    },
    {
      title: "HTML Accessibility",
      content: "Accessibility (A11y) ensures everyone can use your site. Use alt text for images, proper labels for forms, and semantic tags.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Accessibility</title>
</head>
<body>
    <!-- Accessible Image -->
    <img src="https://images.unsplash.com/photo-1551288049-bbbda546697a" alt="Line graph showing 20% growth in user engagement over 6 months">
    
    <br><br>

    <!-- Accessible Form -->
    <label for="email">Email Address (Required):</label>
    <input type="email" id="email" aria-required="true" required>
</body>
</html>`
    },
    {
      title: "HTML Best Practices",
      content: "Always use lowercase for tags, close all tags, use attributes properly, and keep your code indented and clean.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Best Practices</title>
</head>
<body>
    <!-- Good Practice: Clean, Lowercase, Indented -->
    <section class="main-content">
      <h2>Professional Markup</h2>
      <p>This code follows industry standard naming conventions.</p>
    </section>
</body>
</html>`
    },
    {
      title: "SEO Basics",
      content: "Search Engine Optimization starts with HTML. Use meta tags, descriptive titles, and header hierarchies to help search engines index your site.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Best HTML Course - Master Web Development in 2024</title>
    <meta name="description" content="Master HTML5 with this comprehensive beginner guide. Learn semantics, accessibility, and SEO best practices.">
    <meta name="keywords" content="HTML, Web Development, Beginner Course, SEO">
</head>
<body>
    <h1>Search Engine Optimization</h1>
    <p>The metadata in the head section helps search engines understand this page.</p>
</body>
</html>`
    },
    {
      title: "Mini Project — Portfolio Structure",
      content: "Let's put it all together! Create a simple portfolio structure using the semantic tags we've learned.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - John Doe</title>
</head>
<body>
    <header>
      <h1>John Doe</h1>
      <p>Frontend Developer & UX Enthusiast</p>
    </header>
    
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>I build high-performance, accessible web applications.</p>
      </section>
    </main>

    <footer>
        <p>Connect with me on LinkedIn</p>
    </footer>
</body>
</html>`
    },
    {
      title: "Exercises & Quiz",
      content: "Time to test your knowledge! Try creating a registration form with name, email, and a password field.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise: Registration Form</title>
</head>
<body>
    <h3>Create your account</h3>
    <form>
      <!-- Task: Add Name, Email, and Password inputs here -->
      <button type="submit">Sign Up</button>
    </form>
</body>
</html>`
    }
  ]
}

