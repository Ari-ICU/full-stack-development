import { Module } from "../curriculum";

export const fundamentalsModule: Module = {
  id: "m1",
  title: "CSS3 Fundamentals",
  description: "Master everything from core syntax to advanced layouts and animations.",
  lessons: [
    {
      id: "l1",
      title: "The Architecture of CSS",
      description: "Understanding how the browser interprets your styles.",
      slides: [
        {
          id: "s1",
          title: "What is CSS?",
          content: "CSS (Cascading Style Sheets) is the language used to style HTML documents. It's not just about colors; it's about the behavior of boxes in a 2D space. CSS follows a set of rules called the 'Cascade' which determines which styles 'win' when there are conflicts.",
          type: "theory"
        },
        {
          id: "s2",
          title: "The 'C' in CSS: Cascading",
          content: "The Cascade is the algorithm that solves conflicts. It considers 3 main factors: 1. Importance (e.g. !important), 2. Specificity (how specific the selector is), and 3. Source Order (the last rule defined wins).",
          codeSnippet: "/* Source Order Example */\nh1 { color: red; }\nh1 { color: blue; } /* Blue wins because it is defined last */",
          htmlSnippet: "<h1>Which color am I?</h1>",
          type: "demo"
        },
        {
          id: "s3",
          title: "Three Ways to Add CSS",
          content: "1. Inline: Style attribute on element. 2. Internal: <style> tag in <head>. 3. External: Separate .css file linked via <link>. Modern web apps almost exclusively use External files or Utility frameworks.",
          codeSnippet: "/* External (Recommended) */\n<link rel=\"stylesheet\" href=\"styles.css\">",
          htmlSnippet: "<!-- Inline (Avoid for large projects) -->\n<h1 style=\"color: blue;\">Hello</h1>",
          type: "theory"
        },
        {
          id: "s4",
          title: "Comments in CSS",
          content: "Documenting your styles is crucial for team collaboration. Use /* ... */ for comments. They don't appear on the final page but are visible in the source code.",
          codeSnippet: "/* === MAIN HEADER STYLES === */\nheader {\n  background: #f1f5f9; /* Light slate gray */\n}",
          htmlSnippet: "<header>Navigation Bar</header>",
          type: "practice"
        }
      ]
    },
    {
      id: "l2",
      title: "Selectors & Specificity",
      description: "The art of targeting the right elements.",
      slides: [
        {
          id: "s1",
          title: "Universal & Element Selectors",
          content: "The universal selector (*) is often used for 'CSS Resets' to remove browser default margins and paddings. Element selectors target tags globally.",
          codeSnippet: "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\np {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}",
          htmlSnippet: "<p>Standardizing the web box-by-box.</p>",
          type: "demo"
        },
        {
          id: "s2",
          title: "The Specificity Hierarchy",
          content: "Specificity determines which rule applies. It's calculated as a 3-part score: (ID, Class, Element). An ID (1,0,0) always beats any number of Classes (0,1,0).",
          codeSnippet: "#main-btn { color: red; } /* Score: 1,0,0 */\n.btn.primary { color: blue; } /* Score: 0,2,0 */\nbutton { color: green; } /* Score: 0,0,1 */",
          htmlSnippet: "<button id=\"main-btn\" class=\"btn primary\">I will be RED</button>",
          type: "demo"
        },
        {
          id: "s3",
          title: "Pseudo-Classes: Interactive States",
          content: "Pseudo-classes allow you to style elements based on their state, such as :hover, :active, or :focus. This is the foundation of UI interactivity.",
          codeSnippet: ".btn {\n  background: #2563eb;\n  color: white;\n  transition: 0.3s;\n}\n\n.btn:hover {\n  background: #1e40af;\n  transform: translateY(-2px);\n}\n\n.btn:active {\n  transform: scale(0.95);\n}",
          htmlSnippet: "<button class=\"btn\">Interactive Button</button>",
          type: "demo"
        },
        {
          id: "s4",
          title: "Pseudo-Elements: Decorative Content",
          content: "Pseudo-elements like ::before and ::after allow you to insert content or styling without adding more HTML tags. Always include the 'content' property!",
          codeSnippet: ".quote::before {\n  content: '\"';\n  font-size: 4rem;\n  color: #dbeafe;\n  position: absolute;\n  top: -20px;\n  left: -10px;\n  z-index: -1;\n}\n\n.quote {\n  position: relative;\n  padding: 20px;\n  font-style: italic;\n}",
          htmlSnippet: "<blockquote class=\"quote\">CSS is not a programming language, but it's a hell of a logic engine.</blockquote>",
          type: "demo"
        }
      ]
    },
    {
      id: "l3",
      title: "Mastering Colors & Depth",
      description: "Visual psychology and modern color formats.",
      slides: [
        {
          id: "s1",
          title: "Modern Color Formats",
          content: "While HEX and RGB are classic, modern CSS favors HSL (Hue, Saturation, Lightness) for its human-readability and OKLCH for consistent perceived brightness across colors.",
          codeSnippet: ".box-hsl { background: hsl(220, 90%, 56%); } /* Royal Blue */\n.box-oklch { background: oklch(0.65 0.25 280); } /* Vivid Violet */",
          htmlSnippet: "<div class=\"box box-hsl\">HSL</div>\n<div class=\"box box-oklch\">OKLCH</div>",
          type: "demo"
        },
        {
          id: "s2",
          title: "Linear & Radial Gradients",
          content: "Gradients add depth and visual interest. You can use 'linear-gradient' for directional flows or 'radial-gradient' for circular fades.",
          codeSnippet: ".gradient-card {\n  background: linear-gradient(135deg, #6366f1, #a855f7);\n  padding: 40px;\n  border-radius: 20px;\n  color: white;\n  font-weight: bold;\n}",
          htmlSnippet: "<div class=\"gradient-card\">Premium Gradient</div>",
          type: "demo"
        },
        {
          id: "s3",
          title: "The Glassmorphism Effect",
          content: "A popular modern design trend. It uses 'backdrop-filter: blur()' and semi-transparent backgrounds to create a frosted glass appearance.",
          codeSnippet: ".glass {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 30px;\n  border-radius: 24px;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.1);\n}",
          htmlSnippet: "<div style=\"background: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800') center/cover; padding: 60px; border-radius: 30px;\">\n  <div class=\"glass\">Glassmorphism Card</div>\n</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l4",
      title: "Borders, Shadows & Rounding",
      description: "Adding structure and tactile depth.",
      slides: [
        {
          id: "s1",
          title: "The Border Property",
          content: "Borders define the boundaries of your boxes. You can style them with different widths, styles (solid, dashed, dotted), and colors.",
          codeSnippet: ".border-demo {\n  border: 4px solid #2563eb;\n  border-top-color: #f43f5e;\n  border-bottom-style: dashed;\n  padding: 20px;\n}",
          htmlSnippet: "<div class=\"border-demo\">Multi-style Border</div>",
          type: "demo"
        },
        {
          id: "s2",
          title: "Tactile Box Shadows",
          content: "Box shadows create elevation. A good shadow often combines multiple layers to look realistic. Use rgba() for soft, transparent shadows.",
          codeSnippet: ".elevated {\n  background: white;\n  padding: 30px;\n  border-radius: 12px;\n  box-shadow: \n    0 1px 3px rgba(0,0,0,0.12), \n    0 1px 2px rgba(0,0,0,0.24);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n\n.elevated:hover {\n  box-shadow: \n    0 14px 28px rgba(0,0,0,0.25), \n    0 10px 10px rgba(0,0,0,0.22);\n}",
          htmlSnippet: "<div class=\"elevated\">Hover to Elevate</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l5",
      title: "Typography Mastery",
      description: "The soul of web design.",
      slides: [
        {
          id: "s1",
          title: "Font Scaling & Accessibility",
          content: "Use 'rem' units for font sizes instead of 'px'. This ensures that if a user changes their browser's default font size, your website scales appropriately.",
          codeSnippet: "html { font-size: 16px; }\nh1 { font-size: 2.5rem; } /* 40px */\np { font-size: 1rem; } /* 16px */",
          htmlSnippet: "<h1>Accessible Heading</h1>\n<p>Responsive text scales with user settings.</p>",
          type: "theory"
        },
        {
          id: "s2",
          title: "Line Height & Readability",
          content: "Text shouldn't be cramped. A line-height of 1.5 to 1.6 is generally considered optimal for body text readability.",
          codeSnippet: ".readable-text {\n  max-width: 60ch;\n  line-height: 1.6;\n  color: #334155;\n}",
          htmlSnippet: "<div class=\"readable-text\">\n  The optimal line length for your body text is considered to be 50-75 characters per line, including spaces.\n</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l6",
      title: "The Box Model & Sizing",
      description: "How elements consume space.",
      slides: [
        {
          id: "s1",
          title: "Content, Padding, Border, Margin",
          content: "Every element is a box. Understanding the 'box-sizing' property is critical. 'border-box' includes padding and borders in the element's total width/height.",
          codeSnippet: "* { box-sizing: border-box; }\n\n.box {\n  width: 300px;\n  padding: 40px;\n  border: 10px solid black;\n} /* Total width stays 300px */",
          htmlSnippet: "<div class=\"box\">Predictable Sizing</div>",
          type: "demo"
        },
        {
          id: "s2",
          title: "Aspect Ratio",
          content: "The 'aspect-ratio' property allows you to maintain a consistent shape for elements like images or video containers, regardless of their width.",
          codeSnippet: ".video-container {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  background: #000;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}",
          htmlSnippet: "<div class=\"video-container\">16:9 Video Player</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l7",
      title: "Margin, Padding & Logical Properties",
      description: "Spacing with modern logic.",
      slides: [
        {
          id: "s1",
          title: "Margin Collapsing",
          content: "When two vertical margins meet, they collapse into a single margin equal to the largest of the two. This does NOT happen with horizontal margins or padded containers.",
          codeSnippet: ".top { margin-bottom: 30px; }\n.bottom { margin-top: 20px; }\n/* The gap between them will be 30px, not 50px */",
          htmlSnippet: "<div class=\"top\" style=\"background:red\">Box 1</div>\n<div class=\"bottom\" style=\"background:blue\">Box 2</div>",
          type: "theory"
        },
        {
          id: "s2",
          title: "Logical Properties",
          content: "Instead of left/right, use 'inline-start' and 'inline-end'. Instead of top/bottom, use 'block-start' and 'block-end'. This makes your CSS 'writing-mode' aware (e.g. for RTL languages).",
          codeSnippet: ".card {\n  margin-block: 20px; /* Top & Bottom */\n  padding-inline: 40px; /* Left & Right */\n  border-inline-start: 5px solid blue;\n}",
          htmlSnippet: "<div class=\"card\">I am RTL friendly!</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l8",
      title: "Flexbox Layout Engine",
      description: "One-dimensional layout power.",
      slides: [
        {
          id: "s1",
          title: "Flex Containers & Direction",
          content: "Flexbox starts with 'display: flex'. You can control the direction of items (row or column) and whether they should wrap if they run out of space.",
          codeSnippet: ".parent {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 10px;\n}",
          htmlSnippet: "<div class=\"parent\">\n  <div style=\"background:blue; padding:20px; color:white\">1</div>\n  <div style=\"background:blue; padding:20px; color:white\">2</div>\n  <div style=\"background:blue; padding:20px; color:white\">3</div>\n</div>",
          type: "demo"
        },
        {
          id: "s2",
          title: "Alignment: Justify & Align",
          content: "Use 'justify-content' to align items along the main axis and 'align-items' for the cross axis. This makes centering elements trivial.",
          codeSnippet: ".center-all {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  background: #f1f5f9;\n  border-radius: 12px;\n}",
          htmlSnippet: "<div class=\"center-all\">\n  <div style=\"background:blue; padding:20px; color:white\">I am Centered</div>\n</div>",
          type: "demo"
        },
        {
          id: "s3",
          title: "Flex Grow, Shrink & Basis",
          content: "The 'flex' shorthand (e.g. flex: 1) allows items to grow and fill the available space. 'flex-basis' sets the initial size before growing/shrinking.",
          codeSnippet: ".container { display: flex; gap: 10px; }\n.sidebar { flex: 0 0 200px; background: silver; }\n.main { flex: 1; background: lightblue; }",
          htmlSnippet: "<div class=\"container\">\n  <div class=\"sidebar\">Sidebar (Fixed 200px)</div>\n  <div class=\"main\">Main (Grows to fill)</div>\n</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l9",
      title: "CSS Grid Layout (2D)",
      description: "Building complex structural grids.",
      slides: [
        {
          id: "s1",
          title: "Grid Template Columns",
          content: "Grid allows you to define rows and columns simultaneously. The 'fr' unit represents a fraction of the available space.",
          codeSnippet: ".grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 20px;\n}",
          htmlSnippet: "<div class=\"grid\">\n  <div style=\"background:red; padding:20px\">1/4</div>\n  <div style=\"background:blue; padding:20px; color:white\">2/4</div>\n  <div style=\"background:green; padding:20px; color:white\">1/4</div>\n</div>",
          type: "demo"
        },
        {
          id: "s2",
          title: "Grid Areas & Naming",
          content: "You can name areas of your grid for incredibly readable layout code. This is perfect for high-level page structures.",
          codeSnippet: ".layout {\n  display: grid;\n  grid-template-areas: \n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  gap: 10px;\n}\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }",
          htmlSnippet: "<div class=\"layout\">\n  <div class=\"header\" style=\"background:silver; padding:10px\">Header</div>\n  <div class=\"sidebar\" style=\"background:gray; padding:10px\">Sidebar</div>\n  <div class=\"main\" style=\"background:white; padding:40px; border:1px solid\">Main Content</div>\n  <div class=\"footer\" style=\"background:silver; padding:10px\">Footer</div>\n</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l10",
      title: "Positioning & Stacking Context",
      description: "The depth and overlap of elements.",
      slides: [
        {
          id: "s1",
          title: "Relative vs Absolute",
          content: "An absolute element is positioned relative to its nearest 'positioned' ancestor (usually one with 'position: relative').",
          codeSnippet: ".parent {\n  position: relative;\n  height: 200px;\n  background: #f1f5f9;\n}\n.child {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: blue;\n  color: white;\n  padding: 10px;\n}",
          htmlSnippet: "<div class=\"parent\">\n  <div class=\"child\">Pinned to Top-Right</div>\n</div>",
          type: "demo"
        },
        {
          id: "s2",
          title: "Fixed & Sticky",
          content: "Fixed elements stay relative to the viewport. Sticky elements stay relative to their container until they reach a certain scroll threshold.",
          codeSnippet: ".sticky-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  border-bottom: 2px solid blue;\n  padding: 10px;\n  z-index: 10;\n}",
          htmlSnippet: "<div style=\"height: 100px; overflow-y: scroll; border: 1px solid silver;\">\n  <div class=\"sticky-header\">I stay at the top while you scroll</div>\n  <div style=\"height: 500px; padding: 20px;\">Scroll me down!</div>\n</div>",
          type: "demo"
        },
        {
          id: "s3",
          title: "Z-Index & Stacking Context",
          content: "Z-index controls the 'depth' (front to back) of elements. However, it only works on positioned elements and is scoped to the nearest Stacking Context.",
          codeSnippet: ".front { position: relative; z-index: 2; background: red; }\n.back { position: relative; z-index: 1; margin-top: -20px; background: blue; }",
          htmlSnippet: "<div class=\"front\" style=\"padding:20px; color:white\">I am in front</div>\n<div class=\"back\" style=\"padding:20px; color:white\">I am behind</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l11",
      title: "Responsive Design Strategies",
      description: "Building for every screen size.",
      slides: [
        {
          id: "s1",
          title: "The Viewport Meta Tag",
          content: "Responsive design starts in the HTML <head>. The viewport meta tag tells the browser to set the width of the page to follow the screen-width of the device.",
          codeSnippet: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
          htmlSnippet: "<!-- This is required for media queries to work properly on mobile -->",
          type: "theory"
        },
        {
          id: "s2",
          title: "Fluid Layouts: % and vw/vh",
          content: "Avoid fixed pixel widths. Use percentages (%) for relative sizing to parents, or Viewport Units (vw, vh) for relative sizing to the screen itself.",
          codeSnippet: ".full-screen-section {\n  width: 100vw;\n  height: 50vh;\n  background: #f1f5f9;\n}",
          htmlSnippet: "<div class=\"full-screen-section\">I am exactly half the screen height</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l12",
      title: "Media Queries & Breakpoints",
      description: "Conditional styling for devices.",
      slides: [
        {
          id: "s1",
          title: "The Mobile-First Approach",
          content: "Start by styling for the smallest screen. Then use 'min-width' media queries to add styles as the screen gets larger. This is more efficient than the old 'desktop-first' way.",
          codeSnippet: "/* Default (Mobile) */\n.card { padding: 10px; }\n\n/* Tablet (768px+) */\n@media (min-width: 768px) {\n  .card { padding: 40px; }\n}",
          htmlSnippet: "<div class=\"card\" style=\"background:blue; color:white\">Padding changes at 768px</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l13",
      title: "CSS Variables (Custom Properties)",
      description: "The foundation of design systems.",
      slides: [
        {
          id: "s1",
          title: "Defining & Using Variables",
          content: "CSS variables allow you to store values and reuse them throughout your stylesheet. They are defined starting with '--' and accessed via 'var()'.",
          codeSnippet: ":root {\n  --primary-color: #2563eb;\n  --spacing-unit: 20px;\n}\n\n.btn {\n  background: var(--primary-color);\n  padding: var(--spacing-unit);\n}",
          htmlSnippet: "<button class=\"btn\" style=\"color:white; border:none; border-radius:8px\">Variable Button</button>",
          type: "demo"
        },
        {
          id: "s2",
          title: "Dynamic Theming",
          content: "Because CSS variables are 'live', you can change them on the fly (e.g. for Dark Mode) without rewriting your entire CSS.",
          codeSnippet: ".theme-dark {\n  --bg: #0f172a;\n  --text: white;\n}\n\nbody {\n  background: var(--bg, white);\n  color: var(--text, black);\n}",
          htmlSnippet: "<div class=\"theme-dark\" style=\"padding:20px; border-radius:8px\">\n  <h1>Dark Mode Preview</h1>\n  <p>The variable --bg is now #0f172a</p>\n</div>",
          type: "demo"
        }
      ]
    },
    {
      id: "l14",
      title: "Animations & Transitions",
      description: "Bringing life to the user experience.",
      slides: [
        {
          id: "s1",
          title: "Keyframe Animations",
          content: "Use '@keyframes' to define complex animations and the 'animation' property to apply them. You can control duration, timing, and repetition.",
          codeSnippet: "@keyframes slideIn {\n  from { transform: translateX(-100%); opacity: 0; }\n  to { transform: translateX(0); opacity: 1; }\n}\n\n.animate-me {\n  animation: slideIn 1s ease-out forwards;\n}",
          htmlSnippet: "<div class=\"animate-me\" style=\"background:green; padding:20px; color:white\">I slide in!</div>",
          type: "demo"
        },
        {
          id: "s2",
          title: "State Transitions",
          content: "Transitions provide smooth interpolation between two states. They are perfect for hover effects on buttons and links.",
          codeSnippet: ".link {\n  color: blue;\n  text-decoration: none;\n  transition: color 0.3s, font-weight 0.3s;\n}\n\n.link:hover {\n  color: red;\n  font-weight: bold;\n}",
          htmlSnippet: "<a href=\"#\" class=\"link\">Hover smoothly</a>",
          type: "demo"
        }
      ]
    },
    {
      id: "l15",
      title: "The Future of CSS",
      description: "Next-gen features you should know.",
      slides: [
        {
          id: "s1",
          title: "Container Queries",
          content: "Container queries allow you to style elements based on the size of their parent container, rather than the entire viewport. This is the holy grail of component-driven design.",
          codeSnippet: ".card-container {\n  container-type: inline-size;\n}\n\n@container (min-width: 400px) {\n  .card { display: flex; }\n}",
          htmlSnippet: "<div class=\"card-container\">\n  <div class=\"card\" style=\"border:1px solid; padding:10px\">I respond to my parent's size!</div>\n</div>",
          type: "theory"
        }
      ]
    }
  ]
};
