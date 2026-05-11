import { Module } from "../curriculum";

export const bootstrapModule: Module = {
  id: "m3",
  title: "Bootstrap 5 Framework",
  description: "Master the most famous UI library to build professional responsive portals in minutes.",
  icon: "Layout",
  lessons: [
    {
      id: "l1",
      title: "The Bootstrap Grid System",
      description: "Advanced layout with the 12-column system.",
      slides: [
        {
          id: "s1",
          title: "Rows, Columns & Gutters",
          content: "Bootstrap's grid uses 'containers' to wrap rows, which then wrap columns. The 'g-' classes (gutters) control the space between columns.",
          codeSnippet: "/* g-4 adds 1.5rem gap */",
          htmlSnippet: `<div class="container bg-light p-4 border rounded-3">
  <div class="row g-4">
    <div class="col-6">
      <div class="p-3 bg-primary text-white rounded text-center">Col 1</div>
    </div>
    <div class="col-6">
      <div class="p-3 bg-primary text-white rounded text-center">Col 2</div>
    </div>
  </div>
</div>`,
          type: "demo"
        },
        {
          id: "s2",
          title: "Offsets & Ordering",
          content: "You can push columns over using 'offset-' classes or change their visual order using 'order-' classes without changing the HTML structure.",
          codeSnippet: "/* offset-md-3 pushes 3 columns */",
          htmlSnippet: `<div class="container mt-4">
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <div class="p-3 bg-success text-white rounded text-center">I am Centered via Offset</div>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col order-last bg-info p-2 border">I appear last</div>
    <div class="col order-first bg-warning p-2 border">I appear first</div>
  </div>
</div>`,
          type: "demo"
        }
      ]
    },
    {
      id: "l2",
      title: "Flexbox Utilities",
      description: "Quick alignment without custom CSS.",
      slides: [
        {
          id: "s1",
          title: "The d-flex System",
          content: "Bootstrap provides 'd-flex' and 'd-inline-flex' utilities. Combine them with 'justify-content-' and 'align-items-' for rapid prototyping.",
          codeSnippet: "/* Flexbox Helpers */",
          htmlSnippet: `<div class="d-flex justify-content-between align-items-center p-4 bg-dark text-white rounded-4 shadow">
  <div>
    <h5 class="mb-0">Product Alpha</h5>
    <small class="text-secondary">In Stock</small>
  </div>
  <button class="btn btn-outline-light btn-sm">View Details</button>
</div>`,
          type: "demo"
        }
      ]
    },
    {
      id: "l3",
      title: "Advanced Form Design",
      description: "Floating labels and validation.",
      slides: [
        {
          id: "s1",
          title: "Floating Labels",
          content: "A modern UI pattern where labels 'float' above the input when it has content or focus.",
          codeSnippet: "/* form-floating wrapper */",
          htmlSnippet: `<div class="card p-4 shadow-sm">
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatEmail" placeholder="name@example.com">
    <label for="floatEmail">Email address</label>
  </div>
  <div class="form-floating">
    <input type="password" class="form-control" id="floatPass" placeholder="Password">
    <label for="floatPass">Password</label>
  </div>
</div>`,
          type: "demo"
        }
      ]
    },
    {
      id: "l4",
      title: "Bootstrap Utilities",
      description: "Shadows, Borders, and Sizing.",
      slides: [
        {
          id: "s1",
          title: "Tactile Helpers",
          content: "Bootstrap 5 added much-needed utility classes for shadows and rounded corners, bringing it closer to a utility-first feel.",
          codeSnippet: "/* shadow and rounded helpers */",
          htmlSnippet: `<div class="d-flex gap-3 justify-content-center p-5">
  <div class="p-4 bg-white shadow-none border rounded">No Shadow</div>
  <div class="p-4 bg-white shadow-sm rounded-3">Small Shadow</div>
  <div class="p-4 bg-white shadow rounded-4">Regular Shadow</div>
  <div class="p-4 bg-white shadow-lg rounded-5">Large Shadow</div>
</div>`,
          type: "demo"
        }
      ]
    }
  ]
};
