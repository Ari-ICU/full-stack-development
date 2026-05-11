import { Rocket } from 'lucide-react'
import { Module } from '../types'

export const module5: Module = {
  id: 5,
  title: "Deployment & DevOps",
  level: "Intermediate",
  description: "Learn the art of deploying your Node.js and React applications to the cloud. Master Git workflows, CI/CD, and production environment management.",
  icon: Rocket,
  color: "from-orange-500 to-red-600",
  shadow: "shadow-orange-500/20",
  slides: [
    {
      title: "GitHub Workflow",
      content: "GitHub is essential for version control and collaboration. A typical workflow involves: 1. Initializing Git locally. 2. Creating a remote repository. 3. Pushing your code. 4. Using Pull Requests for code reviews.",
      code: `git init
git add .
git commit -m "Initial commit"
git remote add origin <url>
git push -u origin main`
    },
    {
      title: "Git Branching",
      content: "Branching allows you to work on new features without affecting the main codebase. Use 'git checkout -b' to create and switch to a new branch. Always merge into 'main' only when the feature is tested.",
      code: `git checkout -b feature/login
# ... make changes ...
git commit -m "Add login"
git checkout main
git merge feature/login`
    },
    {
      title: "Deploy React to Vercel",
      content: "Vercel is the easiest platform to deploy frontend applications. It offers automatic deployments from GitHub. Every time you push to the 'main' branch, Vercel triggers a new production build.",
      code: `// Vercel deployment is mostly automatic!
// Just connect your repo and it detects:
// Build Command: npm run build
// Output Directory: .next or dist`
    },
    {
      title: "Deploy Backend to Render",
      content: "Render is a great cloud platform for hosting Node.js servers. It provides free tiers for web services and manages SSL certificates automatically. Ensure your 'package.json' has a proper 'start' script.",
      code: `// package.json
"scripts": {
  "start": "node src/index.js"
}

// In Render settings:
// Runtime: Node
// Build Command: npm install`
    },
    {
      title: "Environment Variables",
      content: "Never hardcode secrets! Use Environment Variables (Config Vars) on your deployment platform. They are injected into 'process.env' at runtime, keeping your API keys and DB credentials secure.",
      code: `// Local (.env)
PORT=5000
DATABASE_URL=...

// Access in code
const dbUrl = process.env.DATABASE_URL;`
    },
    {
      title: "MongoDB Atlas Deployment",
      content: "When deploying, your database must be accessible from your production server. In MongoDB Atlas, you need to whitelist the IP address of your hosting provider (or allow access from anywhere '0.0.0.0/0' if necessary).",
      code: `// MongoDB URI with environment variables
const uri = \`mongodb+srv://\${process.env.DB_USER}:\${process.env.DB_PASS}@cluster0.mongodb.net/\`;`
    },
    {
      title: "Domain Basics",
      content: "A domain name (like example.com) makes your app accessible to users. You can buy a domain from registrars like Namecheap or Google Domains and point it to your Vercel or Render deployment using CNAME records.",
      code: `// DNS Settings:
// Type: CNAME
// Name: www
// Value: cname.vercel-dns.com`
    },
    {
      title: "CI/CD Introduction",
      content: "Continuous Integration (CI) and Continuous Deployment (CD) automate the testing and deployment of your code. GitHub Actions is a powerful tool to run your test suite automatically on every push.",
      code: `# .github/workflows/deploy.yml
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test`
    },
    {
      title: "Build Optimization",
      content: "In production, you want your app to be fast. Optimize by minifying code, compressing images, and removing unused dependencies. Next.js handles many of these optimizations automatically during 'npm run build'.",
      code: `// Optimization Checklist:
// 1. Minify CSS/JS
// 2. Use Image optimization
// 3. Enable Gzip compression
// 4. Remove console.logs`
    },
    {
      title: "Security Basics",
      content: "Keep your app secure by using HTTPS, setting security headers with 'Helmet', and preventing common attacks like SQL Injection and Cross-Site Scripting (XSS). Always validate user input.",
      code: `const helmet = require('helmet');
app.use(helmet()); // Protects from well-known web vulnerabilities`
    },
    {
      title: "Performance Monitoring",
      content: "Monitor your app's health using tools like New Relic, Sentry (for error tracking), or built-in dashboards in Vercel/Render. Track uptime, response times, and server errors.",
      code: `// Sentry Setup
Sentry.init({ dsn: "https://example@sentry.io/123" });
app.use(Sentry.Handlers.errorHandler());`
    },
    {
      title: "Final Deployment Project",
      content: "Deploy your 'Full Stack Task Manager'! Connect your GitHub repo, setup Render for backend, Vercel for frontend, and Atlas for database. Link them all using environment variables.",
      code: `// Final Step Checklist:
// [ ] Push code to GitHub
// [ ] Connect Vercel (Frontend)
// [ ] Connect Render (Backend)
// [ ] Add DB Config Vars`
    },
    {
      title: "Exercises & Quiz",
      content: "1. Create a GitHub Action that runs a lint check. 2. Deploy a simple 'Hello World' app to Render. 3. What is the purpose of '.gitignore'?",
      code: `// Quiz:
// 1. Where do you store database passwords in production?
// 2. Which platform is optimized for Next.js?
// 3. What command builds the production version of React?`
    }
  ]
}
