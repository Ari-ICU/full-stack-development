import { Layers, Zap } from 'lucide-react'
import { Module } from '../types'
import React, { useState } from 'react'

export const module2: Module = {
  id: "m2",
  title: "Advanced Data & Logic",
  description: "Beyond the basics: mastering objects, modern ES6 syntax patterns, classes, and robust error handling.",
  icon: Layers,
  color: "from-blue-400 to-indigo-600",
  shadow: "shadow-indigo-500/20",
  level: "Intermediate",
  slides: [

    // ─── 1. The Power of Objects ──────────────────────────────────────────────
    {
      title: "The Power of Objects",
      content: "Objects are the backbone of JavaScript. They let you group related data and behaviour together. Modern JS provides shorthand properties, computed keys, and method shorthand.",
      code: `const user = {
  name: "Dara",
  age: 28,
  // Method shorthand (ES6)
  greet() {
    return \`Hi, I'm \${this.name}!\`;
  }
};

console.log(user.name);       // Dara
console.log(user["age"]);     // 28 (bracket notation)
console.log(user.greet());    // Hi, I'm Dara!

// Computed property names
const field = "score";
const dynamic = { [field]: 99 };
console.log(dynamic.score);   // 99

// Shorthand properties
const city = "Phnom Penh";
const profile = { name: user.name, city };
console.log(profile);`,
      language: "javascript"
    },

    // ─── 2. Destructuring ─────────────────────────────────────────────────────
    {
      title: "Destructuring: Extracting Data",
      content: "Destructuring lets you 'unpack' values from arrays or object properties into distinct variables. It makes your code significantly more readable and concise.",
      code: `// Object destructuring
const settings = { theme: "dark", fontSize: 16, lang: "en" };
const { theme, fontSize, lang } = settings;

console.log(theme);    // dark
console.log(fontSize); // 16

// Rename on destructure
const { theme: colorMode } = settings;
console.log(colorMode); // dark

// Default values
const { debug = false } = settings;
console.log(debug); // false (not in object → uses default)

// Array destructuring
const [lat, lng, alt = 0] = [10.5, 20.8];
console.log(lat, lng, alt); // 10.5  20.8  0

// Swap variables elegantly
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2  1

// Nested destructuring
const user = { name: "Ratha", address: { city: "Phnom Penh" } };
const { name, address: { city } } = user;
console.log(name, city); // Ratha  Phnom Penh`,
      language: "javascript"
    },

    // ─── 3. Spread & Rest ─────────────────────────────────────────────────────
    {
      title: "Spread & Rest Operators",
      content: "The ... syntax serves two roles: Rest collects multiple values into an array; Spread expands an iterable in place. Both are essential in modern JS patterns.",
      code: `// ── REST: collect args into array ──
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 90));        // 100

// ── SPREAD: expand array ──
const a = [1, 2, 3];
const b = [4, 5, 6];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Spread for Math helpers
const scores = [88, 72, 99, 45];
console.log("Max:", Math.max(...scores)); // 99
console.log("Min:", Math.min(...scores)); // 45

// Spread to clone/merge objects
const defaults = { theme: "dark", lang: "en" };
const overrides = { lang: "kh", debug: true };
const config = { ...defaults, ...overrides };
console.log(config);
// { theme: "dark", lang: "kh", debug: true }

// Clone (not reference)
const original = { x: 1 };
const clone = { ...original };
console.log(original === clone); // false`,
      language: "javascript"
    },

    // ─── 4. Modern Classes & OOP ──────────────────────────────────────────────
    {
      title: "Modern Classes & OOP",
      content: "JavaScript's class syntax is a clean blueprint for creating objects. Under the hood it's still prototype-based — but the class syntax makes OOP patterns much more readable.",
      code: `class Product {
  // Private field (ES2022)
  #internalId;

  constructor(name, price) {
    this.name  = name;
    this.price = price;
    this.#internalId = Math.random().toString(36).slice(2, 8);
  }

  // Getter
  get label() {
    return \`\${this.name} — $\${this.price}\`;
  }

  // Static method (called on class, not instance)
  static compare(a, b) {
    return a.price - b.price;
  }

  toString() {
    return \`Product(\${this.name}, $\${this.price})\`;
  }
}

const laptop = new Product("MacBook", 1299);
const phone  = new Product("iPhone",   999);

console.log(laptop.label);                   // MacBook — $1299
console.log(String(laptop));                 // Product(MacBook, $1299)
console.log(Product.compare(phone, laptop)); // -300 (phone is cheaper)

const products = [laptop, phone].sort(Product.compare);
products.forEach(p => console.log(p.label));`,
      language: "javascript"
    },

    // ─── 5. Inheritance ───────────────────────────────────────────────────────
    {
      title: "Inheritance & super()",
      content: "Classes can extend other classes, inheriting all their properties and methods. Use 'super()' to call the parent constructor, and 'super.method()' to call parent methods.",
      code: `class Animal {
  constructor(name, sound) {
    this.name  = name;
    this.sound = sound;
  }
  speak() {
    return \`\${this.name} says \${this.sound}!\`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof"); // calls Animal constructor
    this.tricks = [];
  }
  learn(trick) {
    this.tricks.push(trick);
    return this;    // enable chaining
  }
  showTricks() {
    return \`\${this.name} knows: \${this.tricks.join(", ")}\`;
  }
}

const rex = new Dog("Rex");
rex.learn("sit").learn("paw").learn("roll over");

console.log(rex.speak());       // Rex says Woof!
console.log(rex.showTricks());  // Rex knows: sit, paw, roll over
console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true`,
      language: "javascript"
    },

    // ─── 6. Error Handling ────────────────────────────────────────────────────
    {
      title: "Error Handling: try / catch / finally",
      content: "Robust apps must handle errors gracefully. try/catch/finally lets you recover without crashing. You can also throw custom errors to communicate intent clearly.",
      code: `// Basic try/catch/finally
try {
  const data = JSON.parse("{ invalid json }");
  console.log(data);
} catch (err) {
  console.error("Caught:", err.message);
} finally {
  console.log("finally: always runs ✓");
}

// Custom error classes
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name  = "ValidationError";
    this.field = field;
  }
}

function validateAge(age) {
  if (typeof age !== "number") throw new ValidationError("age", "Must be a number");
  if (age < 0 || age > 120)   throw new ValidationError("age", "Out of valid range");
  return true;
}

try {
  validateAge("twenty");
} catch (err) {
  if (err instanceof ValidationError) {
    console.warn(\`[\${err.name}] Field '\${err.field}': \${err.message}\`);
  }
}

try {
  validateAge(25);
  console.log("Age 25 is valid ✓");
} catch (err) {
  console.error(err.message);
}`,
      language: "javascript"
    },

    // ─── 7. The 'this' keyword ────────────────────────────────────────────────
    {
      title: "The 'this' Keyword",
      content: "The value of 'this' depends on how a function is called, not where it's defined. Arrow functions capture 'this' from the enclosing lexical scope — a key difference.",
      code: `// 'this' in a method
const car = {
  brand: "Tesla",
  model: "Model S",
  describe() {
    return \`\${this.brand} \${this.model}\`; // 'this' = car
  }
};
console.log(car.describe()); // Tesla Model S

// Lost 'this' problem with regular function
const fn = car.describe;
try {
  console.log(fn()); // 'this' is undefined in strict mode
} catch (e) {
  console.warn("Lost 'this':", e.message);
}

// Fix 1: bind()
const boundFn = car.describe.bind(car);
console.log(boundFn()); // Tesla Model S

// Fix 2: Arrow function preserves lexical 'this'
const counter = {
  count: 0,
  start() {
    const tick = () => {
      this.count++;  // arrow fn captures 'this' = counter
    };
    tick(); tick(); tick();
    return this.count;
  }
};
console.log("Count:", counter.start()); // 3`,
      language: "javascript"
    },

    // ─── 8. Symbols & Iterators ───────────────────────────────────────────────
    {
      title: "Symbols & Iterators",
      content: "Symbols are unique, immutable primitives — perfect for private-ish keys. Iterators + the Symbol.iterator protocol let any object work with for...of loops.",
      code: `// Symbol: always unique
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false — always unique!

// Use as object key to avoid naming collisions
const ID = Symbol("userId");
const user = { name: "Ratha", [ID]: 42 };
console.log(user.name); // Ratha
console.log(user[ID]);  // 42 (not enumerable by default)

// Custom Iterator
function range(start, end) {
  return {
    [Symbol.iterator]() {
      let current = start;
      return {
        next() {
          return current <= end
            ? { value: current++, done: false }
            : { value: undefined, done: true };
        }
      };
    }
  };
}

// Now works with for...of!
const nums = [...range(1, 5)];
console.log(nums); // [1, 2, 3, 4, 5]

for (const n of range(10, 13)) {
  console.log("n:", n);
}`,
      language: "javascript"
    },

    // ─── 9. Map & Set ─────────────────────────────────────────────────────────
    {
      title: "Map & Set Collections",
      content: "Map and Set are modern ES6 collections. Map stores key-value pairs where keys can be any type. Set stores unique values only — perfect for deduplication.",
      code: `// ── SET: unique values only ──
const tags = new Set(["js", "css", "js", "html", "css"]);
console.log([...tags]);  // ["js", "css", "html"] — duplicates gone!
console.log(tags.size);  // 3

tags.add("react");
tags.delete("css");
console.log(tags.has("react")); // true

// Deduplicate an array
const nums = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4]

// ── MAP: any type as key ──
const roles = new Map();
roles.set("admin",  ["read", "write", "delete"]);
roles.set("editor", ["read", "write"]);
roles.set("viewer", ["read"]);

console.log(roles.get("editor")); // ["read", "write"]
console.log(roles.size);         // 3

// Iterate map entries
for (const [role, perms] of roles) {
  console.log(\`\${role}: \${perms.join(", ")}\`);
}`,
      language: "javascript"
    },

    // ─── 10. WeakMap & WeakRef ────────────────────────────────────────────────
    {
      title: "Generators & Lazy Sequences",
      content: "Generator functions (function*) return an iterator that yields values on demand. They're perfect for infinite sequences and lazy evaluation without loading everything into memory.",
      code: `// Generator function — pauses at each 'yield'
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Take first N values from any generator
function take(gen, n) {
  const result = [];
  for (const val of gen) {
    result.push(val);
    if (result.length === n) break;
  }
  return result;
}

console.log(take(fibonacci(), 10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Generator as range utility
function* range(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

console.log([...range(0, 10, 2)]); // [0, 2, 4, 6, 8, 10]

// Generators can receive values via next()
function* accumulator() {
  let total = 0;
  while (true) {
    const n = yield total;
    total += n ?? 0;
  }
}
const acc = accumulator();
acc.next();         // prime
acc.next(10);
acc.next(20);
console.log(acc.next(5).value); // 35`,
      language: "javascript"
    },

    // ─── 11. Interactive: Object State Lab ────────────────────────────────────
    {
      title: "Interactive: Object State Lab",
      content: "Click 'Gain XP' to call a function that uses the Spread operator to immutably update an object's state. The XP bar re-renders on every state change.",
      code: `// State is a plain JS object — updated immutably with spread
let profile = { name: "Ratha", level: 1, xp: 0 };

function gainXP(amount = 25) {
  const newXP = profile.xp + amount;
  if (newXP >= 100) {
    // Level up! Reset XP
    profile = { ...profile, level: profile.level + 1, xp: newXP - 100 };
    console.log(\`🎉 LEVEL UP! Now Level \${profile.level}\`);
  } else {
    profile = { ...profile, xp: newXP };
  }
  console.log(\`XP: \${profile.xp}/100  |  Level: \${profile.level}\`);
}

gainXP(25); // XP: 25/100  |  Level: 1
gainXP(25); // XP: 50/100  |  Level: 1
gainXP(25); // XP: 75/100  |  Level: 1
gainXP(25); // 🎉 LEVEL UP! → Level 2
gainXP(60); // XP: 60/100  |  Level: 2
gainXP(60); // 🎉 LEVEL UP! → Level 3`,
      language: "javascript",
      demo: React.createElement(() => {
        const [profile, setProfile] = useState({ name: "Ratha", level: 1, xp: 0 });
        const [log, setLog] = useState<string[]>([]);

        const gainXP = () => {
          setProfile(prev => {
            const newXP = prev.xp + 25;
            if (newXP >= 100) {
              const next = { ...prev, level: prev.level + 1, xp: newXP - 100 };
              setLog(l => [`🎉 Level Up! → Level ${next.level}`, ...l].slice(0, 5));
              return next;
            }
            const next = { ...prev, xp: newXP };
            setLog(l => [`+25 XP → ${next.xp}/100`, ...l].slice(0, 5));
            return next;
          });
        };

        return (
          <div className="flex flex-col items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 w-full max-w-sm">
            {/* Avatar + Info */}
            <div className="flex items-center gap-4 w-full">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-indigo-500/40">
                {profile.level}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                <p className="text-sm text-indigo-300 font-medium">Level {profile.level} Developer</p>
              </div>
            </div>

            {/* XP Bar */}
            <div className="w-full space-y-2">
              <div className="flex justify-between text-xs font-bold text-indigo-300 uppercase tracking-wider">
                <span>Experience</span>
                <span>{profile.xp} / 100</span>
              </div>
              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  style={{ width: `${profile.xp}%` }}
                />
              </div>
            </div>

            {/* Gain XP Button */}
            <button
              onClick={gainXP}
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
            >
              <Zap size={18} /> Gain 25 XP
            </button>

            {/* Log */}
            {log.length > 0 && (
              <div className="w-full bg-black/40 rounded-xl p-3 font-mono text-xs space-y-1">
                {log.map((entry, i) => (
                  <div key={i} className={`transition-colors ${i === 0 ? 'text-indigo-300' : 'text-white/30'}`}>
                    {entry}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })
    }
  ]
}
