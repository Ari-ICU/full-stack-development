import { Zap, Database, RefreshCw, AlertTriangle } from 'lucide-react'
import { Module } from '../types'
import React, { useState } from 'react'

export const module3: Module = {
  id: "m3",
  title: "Asynchronous JavaScript",
  description: "Master the non-blocking nature of JavaScript. From callbacks and promises to async/await and network requests.",
  icon: Zap,
  color: "from-purple-500 to-pink-600",
  shadow: "shadow-purple-500/20",
  level: "Intermediate",
  slides: [

    // ─── 1. The Event Loop ────────────────────────────────────────────────────
    {
      title: "The Event Loop",
      content: "JavaScript is single-threaded but non-blocking. The Event Loop lets async tasks (timers, network) run without freezing the page. Synchronous code always completes first.",
      code: `// Execution order reveals the Event Loop

console.log("1 — Synchronous: Start");

setTimeout(() => {
  console.log("3 — Macro-task: setTimeout (0ms)");
}, 0);

Promise.resolve().then(() => {
  console.log("2 — Micro-task: Promise.then");
});

console.log("1 — Synchronous: End");

// Output order:
// 1 — Synchronous: Start
// 1 — Synchronous: End
// 2 — Micro-task: Promise.then    ← microtasks run BEFORE macrotasks
// 3 — Macro-task: setTimeout (0ms)`,
      language: "javascript"
    },

    // ─── 2. Callbacks ─────────────────────────────────────────────────────────
    {
      title: "Callbacks & Callback Hell",
      content: "Callbacks are functions passed as arguments to be executed later. They were the original solution for async code, but nesting them creates 'callback hell' — deeply indented, hard-to-read code.",
      code: `// Simple callback pattern
function fetchUser(id, callback) {
  // Simulate async delay
  setTimeout(() => {
    const user = { id, name: "Ratha", role: "admin" };
    callback(null, user);     // (error, result) convention
  }, 500);
}

fetchUser(1, (err, user) => {
  if (err) { console.error(err); return; }
  console.log("Got user:", user.name);
});

// ⚠ Callback Hell — deeply nested
function step1(cb) { setTimeout(() => { console.log("Step 1 done"); cb(); }, 100); }
function step2(cb) { setTimeout(() => { console.log("Step 2 done"); cb(); }, 100); }
function step3(cb) { setTimeout(() => { console.log("Step 3 done"); cb(); }, 100); }

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All done — but code is hard to read! 😰");
      // Imagine 5 more levels...
    });
  });
});`,
      language: "javascript"
    },

    // ─── 3. Promises ──────────────────────────────────────────────────────────
    {
      title: "Promises: A Future Value",
      content: "A Promise is an object representing the eventual completion or failure of an async operation. It has three states: pending, fulfilled, and rejected.",
      code: `// Creating a Promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Ratha", role: "admin" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 300);
  });
}

// .then() chains replace nested callbacks
fetchUser(1)
  .then(user => {
    console.log("Name:", user.name);
    return user.role;         // pass value to next .then()
  })
  .then(role => {
    console.log("Role:", role);
  })
  .catch(err => {
    console.error("Error:", err.message);
  })
  .finally(() => {
    console.log("Request complete (always runs)");
  });

// Test the rejection path
fetchUser(-1)
  .then(u => console.log(u))
  .catch(err => console.error("Caught:", err.message));`,
      language: "javascript"
    },

    // ─── 4. Async / Await ─────────────────────────────────────────────────────
    {
      title: "Async / Await (The Modern Way)",
      content: "Introduced in ES2017, async/await is syntactic sugar over Promises. It lets you write asynchronous code that reads like synchronous code — clean and easy to reason about.",
      code: `// Same Promise-based function as before
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: "Sokha", score: 95 });
      else reject(new Error("Invalid ID"));
    }, 300);
  });
}

// async function always returns a Promise
async function loadProfile(userId) {
  console.log("Loading...");
  await delay(200);               // pause here, non-blocking

  const user = await fetchUser(userId);   // unwrap Promise
  console.log(\`User: \${user.name}, Score: \${user.score}\`);
  return user;
}

// Top-level async with error handling
async function main() {
  try {
    const profile = await loadProfile(1);
    console.log("Done:", profile.name);

    await loadProfile(-1);        // will throw
  } catch (err) {
    console.error("Caught:", err.message);
  }
}

main();`,
      language: "javascript"
    },

    // ─── 5. Promise.all & Parallelism ─────────────────────────────────────────
    {
      title: "Promise.all & Parallelism",
      content: "Sometimes you need multiple async operations. Promise.all fires them in parallel and resolves when ALL complete — much faster than awaiting them one by one.",
      code: `function fakeFetch(url, ms) {
  return new Promise(resolve =>
    setTimeout(() => resolve({ url, data: \`data from \${url}\` }), ms)
  );
}

// ── Sequential (slow: 300 + 200 + 100 = 600ms) ──
async function sequential() {
  console.time("sequential");
  const a = await fakeFetch("/users",  300);
  const b = await fakeFetch("/posts",  200);
  const c = await fakeFetch("/tags",   100);
  console.timeEnd("sequential");
  console.log(a.data, b.data, c.data);
}

// ── Parallel with Promise.all (fast: max = 300ms) ──
async function parallel() {
  console.time("parallel");
  const [a, b, c] = await Promise.all([
    fakeFetch("/users",  300),
    fakeFetch("/posts",  200),
    fakeFetch("/tags",   100),
  ]);
  console.timeEnd("parallel");
  console.log(a.data, b.data, c.data);
}

// ── Promise.allSettled — won't reject if one fails ──
async function allSettled() {
  const results = await Promise.allSettled([
    Promise.resolve("✓ success"),
    Promise.reject(new Error("✖ fail")),
    Promise.resolve("✓ also ok"),
  ]);
  results.forEach(r =>
    console.log(r.status, r.value ?? r.reason?.message)
  );
}

sequential();
parallel();
allSettled();`,
      language: "javascript"
    },

    // ─── 6. Error Handling in Async ───────────────────────────────────────────
    {
      title: "Error Handling in Async Code",
      content: "Always handle async errors. An unhandled Promise rejection can silently break your app. Use try/catch inside async functions or .catch() on promise chains.",
      code: `// Helper
const delay = ms => new Promise(r => setTimeout(r, ms));

// ── Pattern 1: try/catch in async fn ──
async function safe() {
  try {
    await delay(100);
    throw new Error("Something broke 💥");
  } catch (err) {
    console.error("Handled:", err.message);
  } finally {
    console.log("Cleanup done");
  }
}
safe();

// ── Pattern 2: wrap risky calls ──
async function safeCall(fn) {
  try {
    return [null, await fn()];
  } catch (err) {
    return [err, null];
  }
}

async function riskyOp() {
  await delay(50);
  if (Math.random() < 0.5) throw new Error("Random failure");
  return "Success!";
}

async function main() {
  const [err, result] = await safeCall(riskyOp);
  if (err) {
    console.warn("Safe catch:", err.message);
  } else {
    console.log("Result:", result);
  }
}
main();

// ── Pattern 3: global unhandled rejection listener ──
// (Works in Node.js; browser dispatches 'unhandledrejection' event)
process?.on?.("unhandledRejection", (reason) => {
  console.error("Unhandled:", reason);
});`,
      language: "javascript"
    },

    // ─── 7. Timers & Scheduling ───────────────────────────────────────────────
    {
      title: "Timers & Scheduling",
      content: "setTimeout delays a function once. setInterval repeats it. Wrapping setTimeout in a Promise creates a reusable delay() utility — the foundation of animation and polling patterns.",
      code: `// Promisified delay
const delay = ms => new Promise(r => setTimeout(r, ms));

// ── One-shot delay ──
async function withDelay() {
  console.log("Start");
  await delay(500);
  console.log("500ms later");
  await delay(500);
  console.log("1000ms later");
}
withDelay();

// ── Repeating with setInterval ──
let ticks = 0;
const timer = setInterval(() => {
  ticks++;
  console.log("Tick:", ticks);
  if (ticks >= 3) {
    clearInterval(timer);
    console.log("Timer stopped after 3 ticks");
  }
}, 200);

// ── requestAnimationFrame (browser) ──
// Used for smooth 60fps animations
// const animate = () => {
//   update();    // move things
//   draw();      // paint frame
//   requestAnimationFrame(animate);
// };
// requestAnimationFrame(animate);

// ── queueMicrotask — runs after sync, before setTimeout ──
queueMicrotask(() => console.log("Microtask queued"));
console.log("Sync end");
// Output: Sync end → Microtask queued → (then timers)`,
      language: "javascript"
    },

    // ─── 8. for await...of (Async Iteration) ─────────────────────────────────
    {
      title: "for await...of & Async Iteration",
      content: "Async generators let you yield values asynchronously. for await...of consumes them one at a time — perfect for streaming data, paginated APIs, or real-time feeds.",
      code: `const delay = ms => new Promise(r => setTimeout(r, ms));

// Async generator — yields values over time
async function* liveStream(items) {
  for (const item of items) {
    await delay(150);        // simulate network chunk
    yield item;
  }
}

// Consume with for await...of
async function processStream() {
  const messages = ["📦 Chunk 1", "📦 Chunk 2", "📦 Chunk 3", "✅ Done"];

  for await (const msg of liveStream(messages)) {
    console.log("Received:", msg);
  }
  console.log("Stream complete");
}
processStream();

// ── Paginated API simulation ──
async function* paginate(totalPages) {
  for (let page = 1; page <= totalPages; page++) {
    await delay(100);
    yield {
      page,
      items: Array.from({ length: 3 }, (_, i) =>
        \`Item \${(page - 1) * 3 + i + 1}\`
      )
    };
  }
}

async function loadAll() {
  let total = 0;
  for await (const { page, items } of paginate(3)) {
    total += items.length;
    console.log(\`Page \${page}:\`, items.join(", "));
  }
  console.log("Total items:", total);
}
loadAll();`,
      language: "javascript"
    },

    // ─── 9. AbortController ───────────────────────────────────────────────────
    {
      title: "AbortController & Cancellation",
      content: "AbortController lets you cancel fetch requests or any async operation. Essential when users navigate away or submit a new search before the previous one completes.",
      code: `// Cancellable fetch wrapper
async function fetchWithTimeout(url, timeoutMs = 3000) {
  const controller = new AbortController();
  const timeoutId  = setTimeout(
    () => controller.abort(new Error(\`Timed out after \${timeoutMs}ms\`)),
    timeoutMs
  );

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return await res.json();
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === "AbortError") {
      throw new Error("Request was cancelled");
    }
    throw err;
  }
}

// ── Manual cancel pattern ──
let currentController = null;

async function search(query) {
  // Cancel any in-flight request
  currentController?.abort();
  currentController = new AbortController();

  console.log(\`Searching for "\${query}"...\`);
  try {
    const data = await fetch(
      \`https://jsonplaceholder.typicode.com/posts?q=\${query}\`,
      { signal: currentController.signal }
    );
    const results = await data.json();
    console.log(\`Found \${results.length} results for "\${query}"\`);
  } catch (err) {
    if (err.name !== "AbortError") console.error(err.message);
    else console.warn("Search cancelled");
  }
}

// Simulate rapid user input (only last one completes)
search("java");
search("javascript");     // cancels previous
search("javascript async"); // cancels previous`,
      language: "javascript"
    },

    // ─── 10. Interactive: Async Data Fetcher ──────────────────────────────────
    {
      title: "Interactive: Async Data Fetcher",
      content: "Simulate a real-world API request with loading states, error handling, and data resolution. Each fetch has a 30% chance of a server error — try again!",
      code: `// Full async flow with error handling
const delay = ms => new Promise(r => setTimeout(r, ms));

async function fetchProduct() {
  console.log("⏳ Fetching...");
  await delay(1500);          // simulate network

  if (Math.random() > 0.3) {
    const item = {
      id:     Math.floor(Math.random() * 1000),
      name:   "Quantum Flux Processor",
      price:  "$2,499",
      stock:  "In Stock",
    };
    console.log("✅ Success:", JSON.stringify(item, null, 2));
    return item;
  } else {
    throw new Error("500: Internal Server Error");
  }
}

async function main() {
  try {
    const product = await fetchProduct();
    console.log("Loaded:", product.name);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

main();`,
      language: "javascript",
      demo: React.createElement(() => {
        const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
        const [data, setData] = useState<{
          id: number;
          name: string;
          price: string;
          stock: string;
        } | null>(null);

        const fetchData = async () => {
          setStatus("loading");
          setData(null);
          await new Promise(resolve => setTimeout(resolve, 1800));

          if (Math.random() > 0.3) {
            setData({
              id:    Math.floor(Math.random() * 1000),
              name:  "Quantum Flux Processor",
              price: "$2,499",
              stock: "In Stock",
            });
            setStatus("success");
          } else {
            setStatus("error");
          }
        };

        return (
          <div className="flex flex-col items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 w-full max-w-md">
            {/* Response Panel */}
            <div className="w-full h-44 bg-black/40 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">

              {status === "idle" && (
                <div className="text-foreground/40 text-sm flex flex-col items-center gap-2">
                  <Database size={32} strokeWidth={1.5} />
                  <span>Ready to fetch</span>
                </div>
              )}

              {status === "loading" && (
                <div className="flex flex-col items-center gap-3">
                  <RefreshCw className="animate-spin text-purple-500" size={32} />
                  <span className="text-purple-300 font-medium animate-pulse text-sm">Requesting API...</span>
                </div>
              )}

              {status === "success" && data && (
                <div className="w-full p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-white font-bold text-base">{data.name}</h4>
                      <span className="text-xs text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded-full">
                        {data.stock}
                      </span>
                    </div>
                    <span className="text-purple-400 font-mono font-bold">{data.price}</span>
                  </div>
                  <div className="text-[10px] text-foreground/40 font-mono">
                    ID: {data.id} · {new Date().toLocaleTimeString()}
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="flex flex-col items-center gap-2 text-red-400">
                  <AlertTriangle size={32} />
                  <span className="font-bold text-sm">500: Server Error</span>
                  <button
                    onClick={fetchData}
                    className="text-xs underline text-red-300/60 hover:text-red-300"
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={fetchData}
              disabled={status === "loading"}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20"
            >
              {status === "loading" ? "Fetching..." : "Fetch New Product"}
            </button>
          </div>
        );
      })
    }
  ]
}
