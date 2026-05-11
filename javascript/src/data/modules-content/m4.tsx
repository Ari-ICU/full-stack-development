import { Monitor, MousePointer2, Save, Type, Layout, Hammer } from 'lucide-react'
import { Module } from '../types'
import React, { useState, useEffect } from 'react'

export const module4: Module = {
  id: "m4",
  title: "Browser APIs & DOM",
  description: "Master the interface between JavaScript and the browser. Learn to control the DOM, handle events, and store data locally.",
  icon: Monitor,
  color: "from-green-400 to-teal-600",
  shadow: "shadow-teal-500/20",
  level: "Advanced",
  slides: [
    {
      title: "The Document Object Model (DOM)",
      content: "The DOM is a programming interface for HTML. It represents the page as a tree of objects that JavaScript can manipulate. Understanding how to select elements (getElementById, querySelector) is the first step in creating interactive web apps.",
      htmlCode: `<h1 id="main-title">Hello World</h1>
<p class="description">Learning JS is fun!</p>`,
      code: `// Selecting elements
const title = document.querySelector("#main-title");
const description = document.querySelector(".description");

// Accessing and modifying
title.style.color = "#10b981";
title.textContent = "DOM Mastery";`,
      language: "javascript"
    },
    {
      title: "Creating & Modifying Elements",
      content: "You can build entire UIs dynamically using JavaScript. Methods like createElement, appendChild, and remove allow you to modify the page structure in response to user actions.",
      htmlCode: `<div id="app">
  <!-- JavaScript will inject content here -->
</div>`,
      code: `const app = document.querySelector("#app");

const newDiv = document.createElement("div");
newDiv.className = "card";
newDiv.innerHTML = "<h3>New Content</h3>";

app.appendChild(newDiv);`,
      language: "javascript"
    },
    {
      title: "Event Listeners & Delegation",
      content: "Events are how JS responds to user input. Event delegation is a powerful technique where you attach a single listener to a parent element to handle events on multiple children, improving performance.",
      htmlCode: `<ul id="my-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`,
      code: `const list = document.querySelector("#my-list");

// Event Delegation (Listener on parent)
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "orange";
  }
});`,
      language: "javascript"
    },
    {
      title: "Web Storage (Local & Session)",
      content: "LocalStorage persists data across browser sessions. It stores everything as strings — so you must use JSON.stringify/parse for objects. Perfect for saving user preferences.",
      htmlCode: `<label>Theme:
  <select id="theme-picker">
    <option>dark</option>
    <option>light</option>
    <option>system</option>
  </select>
</label>
<div id="saved-label">Saved theme: none</div>`,
      code: `const picker = document.querySelector("#theme-picker");
const label = document.querySelector("#saved-label");

// Load previously saved preference
const saved = localStorage.getItem("user_theme");
if (saved) picker.value = saved;
label.textContent = \`Saved theme: \${saved || "none"}\`;

// Save on change
picker.onchange = () => {
  localStorage.setItem("user_theme", picker.value);
  label.textContent = \`Saved theme: \${picker.value}\`;
};`,
      language: "javascript"
    },
    {
      title: "Intersection Observer API",
      content: "The Intersection Observer fires a callback whenever a watched element enters or exits the viewport. It's the backbone of lazy-loading images and scroll-triggered animations.",
      htmlCode: `<div style="height:80px; overflow:hidden; border:1px solid">
  <div id="sentinel" style="
    height:60px; background:#e2e8f0;
    transition: background 0.5s;
  ">Scroll target</div>
</div>`,
      code: `const target = document.querySelector("#sentinel");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is now visible!
      target.style.background = "#10b981";
      target.textContent = "Visible! ✓";
      observer.unobserve(target); // stop watching
    }
  });
});

observer.observe(target);`,
      language: "javascript"
    },
    {
      title: "Browser History & Navigation",
      content: "The History API lets SPAs update the URL without a full page reload. pushState adds a new entry; popstate fires when the user presses Back/Forward.",
      htmlCode: `<div id="current-url">URL: /home</div>
<button id="go-page1">Go to /page1</button>
<button id="go-page2">Go to /page2</button>`,
      code: `const display = document.querySelector("#current-url");

document.querySelector("#go-page1").onclick = () => {
  history.pushState({}, "", "/page1");
  display.textContent = \`URL: \${location.pathname}\`;
};

document.querySelector("#go-page2").onclick = () => {
  history.pushState({}, "", "/page2");
  display.textContent = \`URL: \${location.pathname}\`;
};

window.onpopstate = () => {
  display.textContent = \`URL: \${location.pathname}\`;
};`,
      language: "javascript"
    },
    {
      title: "Interactive: Live DOM & Storage Lab",
      content: "Manipulate the DOM properties of this card and see how the changes persist using LocalStorage. This demonstrates the full cycle: HTML structure, JS logic, and Data persistence.",
      htmlCode: `<div id="preview-card" style="background: #10b981; border-radius: 16px;">
  Interactive Element
</div>

<div class="controls">
  <input type="range" id="radius-slider" />
  <input type="text" id="label-input" />
</div>`,
      code: `const card = document.querySelector("#preview-card");
const slider = document.querySelector("#radius-slider");

// Listen for changes and update the DOM
slider.oninput = (e) => {
  card.style.borderRadius = \`\${e.target.value}px\`;
  localStorage.setItem("radius", e.target.value);
};`,
      language: "javascript",
      demo: React.createElement(() => {
        const [config, setConfig] = useState({ 
          bg: "#10b981", 
          radius: 16, 
          text: "Interactive Element" 
        });

        const update = (key: keyof typeof config, value: string | number) => {
          const next = { ...config, [key]: value };
          setConfig(next);
        };

        return (
          <div className="flex flex-col gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 w-full max-w-md">
            <div 
              className="w-full h-24 flex items-center justify-center font-bold text-white shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: config.bg, 
                borderRadius: `${config.radius}px`,
                transform: `scale(${1 + (config.radius / 200)})`
              }}
            >
              {config.text}
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-foreground/40">Color Theme</label>
                <div className="flex gap-2">
                  {["#10b981", "#3b82f6", "#f59e0b", "#ec4899"].map(c => (
                    <button 
                      key={c} 
                      onClick={() => update("bg", c)}
                      className={`w-6 h-6 rounded-full border-2 ${config.bg === c ? "border-white" : "border-transparent"}`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-foreground/40">Border Radius: {config.radius}px</label>
                <input 
                  type="range" 
                  min="0" max="48" 
                  value={config.radius}
                  onChange={(e) => update("radius", Number(e.target.value))}
                  className="w-full accent-teal-500 bg-white/10 rounded-lg appearance-none h-1.5"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-foreground/40">Label Text</label>
                <input 
                  type="text" 
                  value={config.text}
                  onChange={(e) => update("text", e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-teal-400 font-mono italic">
              <Save size={12} /> Data automatically synced with LocalStorage
            </div>
          </div>
        );
      })
    }
  ]
}
