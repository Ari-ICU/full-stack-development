import { Code2 } from 'lucide-react'
import { Module } from '../types'
import React, { useState } from 'react'

export const module1: Module = {
  id: "m1",
  title: "JavaScript Essentials",
  description: "A deep dive into the foundation of JavaScript. Variables, control flow, functions, arrays, and more — all in pure JS.",
  icon: Code2,
  color: "from-yellow-400 to-orange-500",
  shadow: "shadow-yellow-500/20",
  level: "Beginner",
  slides: [
    // ─── 1. What is JavaScript? ───────────────────────────────────────────────
    {
      title: "What is JavaScript?",
      content: "JavaScript is a lightweight, interpreted programming language that runs directly in your browser. Every time you click a button, submit a form, or see an animation — JS is behind it.",
      code: `// JavaScript runs line-by-line, top to bottom

console.log("Hello, JavaScript!");
console.log("Version: ES2024");
console.log("Type:", typeof 42);       // "number"
console.log("Type:", typeof "hello");  // "string"
console.log("Type:", typeof true);     // "boolean"`,
      language: "javascript"
    },

    // ─── 2. Variables ─────────────────────────────────────────────────────────
    {
      title: "Variables: let, const & var",
      content: "Variables are containers for storing values. Modern JS uses 'const' for values that never change and 'let' for values that do. Avoid 'var' in new code.",
      code: `// const — value never reassigned
const name = "Dara";
const PI   = 3.14159;

// let — can be updated
let score = 0;
score = score + 10;

// typeof reveals the data type
console.log(name, typeof name);   // Dara  string
console.log(PI,   typeof PI);     // 3.14  number
console.log(score, typeof score); // 10    number

// var is function-scoped (legacy — avoid!)
var old = "I'm function-scoped";
console.log(old);`,
      language: "javascript"
    },

    // ─── 3. Data Types ────────────────────────────────────────────────────────
    {
      title: "Primitive Data Types",
      content: "JavaScript has 7 primitive types. Understanding them prevents bugs when comparing values or doing arithmetic.",
      code: `// Seven primitive types
const str     = "Hello";          // string
const num     = 42;               // number
const float   = 3.14;            // number (no separate float)
const bool    = true;            // boolean
const nothing = null;            // null  (intentional absence)
const missing = undefined;       // undefined
const sym     = Symbol("id");    // symbol (unique)
const big     = 9007199254740993n; // bigint

console.log(typeof str,     str);
console.log(typeof num,     num);
console.log(typeof bool,    bool);
console.log(typeof nothing, nothing); // ⚠ prints "object" (JS quirk)
console.log(typeof missing, missing);
console.log(typeof sym,     sym.toString());
console.log(typeof big,     big);`,
      language: "javascript"
    },

    // ─── 4. Operators ─────────────────────────────────────────────────────────
    {
      title: "Operators & Expressions",
      content: "Operators let you perform calculations, compare values, and combine logic. Know the difference between == (loose) and === (strict) equality.",
      code: `// Arithmetic
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 3);   // 3.333...
console.log(10 % 3);   // 1  (remainder)
console.log(2  ** 8);  // 256 (exponentiation)

// Comparison
console.log(5 == "5");   // true  (loose — type coercion!)
console.log(5 === "5");  // false (strict — no coercion)
console.log(5 !== 6);   // true
console.log(10 > 3);    // true

// Logical
console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)

// Ternary (shorthand if/else)
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult`,
      language: "javascript"
    },

    // ─── 5. Template Literals ─────────────────────────────────────────────────
    {
      title: "Template Literals",
      content: "Template literals use backticks (`) and ${} to embed expressions inside strings — much cleaner than concatenation with +.",
      code: `const firstName = "Sokha";
const lastName  = "Phan";
const score     = 95;

// Old-school concatenation (messy)
const old = "Student: " + firstName + " " + lastName + ", Score: " + score;
console.log(old);

// Template literal (clean ✓)
const modern = \`Student: \${firstName} \${lastName}, Score: \${score}\`;
console.log(modern);

// Multi-line strings
const html = \`
  Name  : \${firstName}
  Score : \${score >= 90 ? "Excellent 🎉" : "Good"}
  Grade : \${score >= 90 ? "A" : "B"}
\`;
console.log(html);`,
      language: "javascript"
    },

    // ─── 6. Control Flow: if / else ───────────────────────────────────────────
    {
      title: "Control Flow: if / else",
      content: "if/else lets your program make decisions. The condition inside () is evaluated as truthy or falsy — not just true/false boolean.",
      code: `const temperature = 38;

if (temperature > 40) {
  console.log("Dangerously hot! ☀️");
} else if (temperature > 35) {
  console.log("Very warm day 🌤");  // ← this runs
} else if (temperature > 25) {
  console.log("Nice weather 😊");
} else {
  console.log("Cool or cold ❄️");
}

// Falsy values: 0, "", null, undefined, NaN, false
const username = "";
if (username) {
  console.log("Welcome,", username);
} else {
  console.log("Username is empty (falsy)");
}`,
      language: "javascript"
    },

    // ─── 7. Switch Statement ──────────────────────────────────────────────────
    {
      title: "Switch Statement",
      content: "When checking one variable against many discrete values, a switch is cleaner than a long if/else chain. Always use 'break' to prevent fall-through.",
      code: `const day = "Friday";

switch (day) {
  case "Monday":
    console.log("Start of the week 💪");
    break;
  case "Wednesday":
    console.log("Midweek hustle 🎯");
    break;
  case "Friday":
    console.log("Weekend is near! 🎉");  // ← runs
    break;
  case "Saturday":
  case "Sunday":
    console.log("Rest day 😴");
    break;
  default:
    console.log("Just another day 😊");
}

// Switch with return inside a function
function getEmoji(fruit) {
  switch (fruit) {
    case "apple":  return "🍎";
    case "banana": return "🍌";
    case "mango":  return "🥭";
    default:       return "🍑";
  }
}

console.log(getEmoji("mango"));   // 🥭
console.log(getEmoji("grape"));   // 🍑`,
      language: "javascript"
    },

    // ─── 8. Loops ─────────────────────────────────────────────────────────────
    {
      title: "Loops: for, while & for...of",
      content: "Loops execute a block of code repeatedly. 'for' is great for counted repetition, 'while' for unknown iterations, and 'for...of' for iterating arrays cleanly.",
      code: `// Classic for loop
console.log("=== for loop ===");
for (let i = 1; i <= 5; i++) {
  console.log(\`Step \${i}\`);
}

// while loop
console.log("=== while loop ===");
let count = 3;
while (count > 0) {
  console.log(\`Countdown: \${count}\`);
  count--;
}

// for...of (iterates array values)
console.log("=== for...of ===");
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log("Color:", color);
}

// for...in (iterates object keys)
console.log("=== for...in ===");
const user = { name: "Ratha", age: 25, city: "Phnom Penh" };
for (const key in user) {
  console.log(\`\${key}: \${user[key]}\`);
}`,
      language: "javascript"
    },

    // ─── 9. Functions ─────────────────────────────────────────────────────────
    {
      title: "Functions: Declaration & Expression",
      content: "Functions are reusable blocks of code. JS supports multiple function styles — declarations are hoisted, expressions are not.",
      code: `// Function Declaration (hoisted — can call before definition)
console.log(add(3, 4)); // 7 ✓

function add(a, b) {
  return a + b;
}

// Function Expression (NOT hoisted)
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // 12

// Default parameters
function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}
console.log(greet());         // Hello, Guest!
console.log(greet("Sokha"));  // Hello, Sokha!

// Returning multiple values via destructuring
function minMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}
const { min, max } = minMax([3, 1, 7, 2, 9]);
console.log("Min:", min, "Max:", max); // 1  9`,
      language: "javascript"
    },

    // ─── 10. Arrow Functions ──────────────────────────────────────────────────
    {
      title: "Arrow Functions (ES6+)",
      content: "Arrow functions offer a concise syntax. For single-expression bodies you can skip the braces and return keyword. They also capture 'this' from the enclosing scope.",
      code: `// Traditional vs Arrow
const square   = function(n) { return n * n; };
const squareES6 = n => n * n;   // same, one-liner

console.log(square(5));    // 25
console.log(squareES6(5)); // 25

// Multi-param, multi-line
const clamp = (value, min, max) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};
console.log(clamp(150, 0, 100)); // 100

// Arrow functions as callbacks
const nums = [1, 2, 3, 4, 5];

const doubled  = nums.map(n => n * 2);
const evens    = nums.filter(n => n % 2 === 0);
const total    = nums.reduce((acc, n) => acc + n, 0);

console.log("Doubled:", doubled);  // [2, 4, 6, 8, 10]
console.log("Evens:",   evens);    // [2, 4]
console.log("Total:",   total);    // 15`,
      language: "javascript"
    },

    // ─── 11. Scope & Hoisting ─────────────────────────────────────────────────
    {
      title: "Scope & Hoisting",
      content: "Scope determines where a variable is accessible. 'let' and 'const' are block-scoped. 'var' is function-scoped and hoisted — a common source of bugs.",
      code: `// Block scope with let / const
{
  let blockLet = "I'm block-scoped";
  const blockConst = "Me too!";
  console.log(blockLet, blockConst);
}
// console.log(blockLet); // ❌ ReferenceError

// var is function-scoped and hoisted
console.log(hoistedVar); // undefined (hoisted, not initialized)
var hoistedVar = "I was hoisted!";
console.log(hoistedVar); // "I was hoisted!"

// Function hoisting
sayHello(); // ✓ works before declaration!
function sayHello() {
  console.log("Hello from a hoisted function!");
}

// Closure — inner function remembers outer scope
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`,
      language: "javascript"
    },

    // ─── 12. Arrays ───────────────────────────────────────────────────────────
    {
      title: "Arrays & Array Methods",
      content: "Arrays are ordered lists. JavaScript's built-in methods — map, filter, reduce, find, some, every — let you transform and query data without manual loops.",
      code: `const fruits = ["apple", "banana", "mango", "grape", "kiwi"];

// Basic access & mutation
console.log(fruits[0]);         // apple
console.log(fruits.length);     // 5

fruits.push("orange");          // add to end
fruits.unshift("strawberry");   // add to start
console.log(fruits.length);     // 7

// Higher-order methods
const upper  = fruits.map(f => f.toUpperCase());
const longOnes = fruits.filter(f => f.length > 5);
const found  = fruits.find(f => f.startsWith("m"));
const hasK   = fruits.some(f => f.includes("k"));

console.log("Upper:",    upper);
console.log("Long:",     longOnes);
console.log("Found:",    found);
console.log("Has 'k':",  hasK);

// reduce — sum characters
const totalChars = fruits.reduce((sum, f) => sum + f.length, 0);
console.log("Total chars:", totalChars);`,
      language: "javascript"
    },

    // ─── 13. Objects ──────────────────────────────────────────────────────────
    {
      title: "Objects & Destructuring",
      content: "Objects are key-value pairs. Destructuring lets you pull values out elegantly. The spread operator (...) makes it easy to copy or merge objects.",
      code: `// Object literal
const user = {
  name: "Ratha",
  age: 25,
  city: "Phnom Penh",
  greet() {
    return \`Hi, I'm \${this.name} from \${this.city}.\`;
  }
};

console.log(user.greet());
console.log(user["age"]); // bracket notation

// Destructuring
const { name, age, city } = user;
console.log(name, age, city);

// Rename on destructure
const { name: fullName } = user;
console.log("Full name:", fullName);

// Spread — clone & merge
const updated = { ...user, age: 26, country: "Cambodia" };
console.log(updated);

// Object.keys / values / entries
console.log(Object.keys(user));
console.log(Object.values(user));`,
      language: "javascript"
    },

    // ─── 14. Spread & Rest ────────────────────────────────────────────────────
    {
      title: "Spread & Rest Operators",
      content: "The ... syntax does two jobs: Rest collects multiple values into an array. Spread expands an array or object in place.",
      code: `// REST — collect args into array
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));        // 30

// SPREAD — expand array
const a = [1, 2, 3];
const b = [4, 5, 6];
const merged = [...a, ...b];
console.log(merged); // [1,2,3,4,5,6]

// Spread for Math.min/max
const scores = [88, 72, 99, 45, 60];
console.log("Max:", Math.max(...scores)); // 99
console.log("Min:", Math.min(...scores)); // 45

// Spread to clone objects
const original = { x: 1, y: 2 };
const clone = { ...original, z: 3 };
console.log(clone); // {x:1, y:2, z:3}
console.log(original === clone); // false (different reference)`,
      language: "javascript"
    },

    // ─── 15. Interactive: Array Methods Visualizer ────────────────────────────
    {
      title: "Interactive: Array Methods Lab",
      content: "Click the buttons to call push, pop, and reverse on a live array. Watch how each method mutates the data in real-time.",
      code: `// Array mutation methods
let fruits = ["🍎", "🍊", "🍌"];

function render() {
  console.clear();
  console.log("Current list:", fruits.join(" "));
  console.log("Length:", fruits.length);
}

// push — add to end
fruits.push("🥭");
render();

// pop — remove from end
fruits.pop();
render();

// reverse — in-place reversal
fruits.reverse();
render();

// unshift / shift
fruits.unshift("🍓");
render();

fruits.shift();
render();

console.log("splice (remove index 1):", fruits.splice(1, 1));
render();`,
      language: "javascript",
      demo: React.createElement(() => {
        const [list, setList] = useState(["🍎", "🍊", "🍌"]);
        const [log, setLog] = useState<string[]>([]);

        const record = (action: string, arr: string[]) =>
          setLog(prev => [`${action} → [${arr.join(", ")}]`, ...prev].slice(0, 6));

        const push = () => { const n = [...list, "🥭"]; setList(n); record("push 🥭", n); };
        const pop  = () => { const n = list.slice(0, -1); setList(n); record("pop", n); };
        const rev  = () => { const n = [...list].reverse(); setList(n); record("reverse", n); };
        const clr  = () => { setList([]); setLog([]); };

        return (
          <div className="flex flex-col items-center gap-5 p-6 bg-white/5 rounded-3xl border border-white/10 w-full max-w-md">
            {/* Array display */}
            <div className="flex gap-3 min-h-[56px] items-center flex-wrap justify-center">
              {list.length === 0 ? (
                <span className="text-foreground/30 italic text-sm">Empty Array []</span>
              ) : (
                list.map((item, i) => (
                  <div key={i} className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl text-2xl">
                    {item}
                  </div>
                ))
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-2 flex-wrap justify-center">
              <button onClick={push} className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm font-bold hover:bg-yellow-500/30 transition-colors">Push 🥭</button>
              <button onClick={pop}  className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm font-bold hover:bg-red-500/30 transition-colors">Pop</button>
              <button onClick={rev}  className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-bold hover:bg-blue-500/30 transition-colors">Reverse</button>
              <button onClick={clr}  className="px-4 py-2 bg-white/10 text-white/60 rounded-lg text-sm font-bold hover:bg-white/20 transition-colors">Clear</button>
            </div>

            {/* Console log */}
            {log.length > 0 && (
              <div className="w-full bg-black/40 rounded-xl p-3 font-mono text-xs space-y-1">
                {log.map((entry, i) => (
                  <div key={i} className={`text-white/${i === 0 ? '70' : '30'}`}>{entry}</div>
                ))}
              </div>
            )}
          </div>
        );
      })
    }
  ]
}
