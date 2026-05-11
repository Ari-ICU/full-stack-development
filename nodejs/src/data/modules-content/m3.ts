import { Database, Table, Zap, Cloud, Layers, Terminal, ShieldCheck, Share2, Activity, Code, HelpCircle } from 'lucide-react'
import { Module } from '../types'

export const module3: Module = {
  id: 3,
  title: "MongoDB Database",
  level: "Intermediate",
  description: "Master NoSQL databases with MongoDB and Mongoose. Learn to model data, perform CRUD operations, and integrate a database into your Express apps.",
  icon: Database,
  color: "from-green-600 to-teal-700",
  shadow: "shadow-teal-500/20",
  slides: [
    {
      title: "Introduction to Databases",
      content: "A database is an organized collection of structured information, or data, typically stored electronically in a computer system. For backend apps, it's where we persist user data, product info, and more beyond the life of a single request.",
      code: `// Why use a database?
// 1. Persistence
// 2. Scalability
// 3. Security
// 4. Relationships`
    },
    {
      title: "SQL vs NoSQL",
      content: "SQL databases (like PostgreSQL) are relational and use structured tables. NoSQL databases (like MongoDB) are non-relational and store data in flexible, JSON-like documents. MongoDB is perfect for rapid development and handling unstructured data.",
      code: `// SQL: Table / Row / Column
// NoSQL: Collection / Document / Field

// MongoDB is a Document Database.`
    },
    {
      title: "MongoDB Basics",
      content: "MongoDB is a schema-less, high-performance database. It stores data in BSON (Binary JSON). Key concepts include Databases, Collections (like tables), and Documents (like rows).",
      code: `// Example Document
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Node.js Course",
  "price": 29.99
}`
    },
    {
      title: "MongoDB Atlas Setup",
      content: "MongoDB Atlas is a fully-managed cloud database. You can set up a free tier cluster in minutes. Once set up, you get a connection string (URI) to connect your Node.js application to the cloud.",
      code: `// Connection String Example:
mongodb+srv://user:pass@cluster0.mongodb.net/dbname`
    },
    {
      title: "Collections & Documents",
      content: "In MongoDB, you don't need to define the structure of a collection before inserting data. Each document in a collection can have a different set of fields, though it's best practice to keep them consistent.",
      code: `db.collection('users').insertOne({
  name: "John",
  age: 25,
  skills: ["JavaScript", "Node"]
});`
    },
    {
      title: "CRUD Operations",
      content: "MongoDB provides a rich set of commands for Create, Read, Update, and Delete operations. You can filter, sort, and paginate your data efficiently using the MongoDB query language.",
      code: `// Find users older than 18
db.users.find({ age: { $gt: 18 } });

// Update a user's email
db.users.updateOne(
  { name: "John" }, 
  { $set: { email: "john@example.com" } }
);`
    },
    {
      title: "Mongoose Introduction",
      content: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.",
      code: `const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB!'));`
    },
    {
      title: "Mongoose Schema",
      content: "A Mongoose schema defines the structure of the document, default values, validators, etc. It brings a layer of structure to the schema-less MongoDB.",
      code: `const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);`
    },
    {
      title: "Model Relationships",
      content: "You can define relationships between models using References (like Foreign Keys) or Sub-documents (Embedding). Use '.populate()' to automatically replace specified paths in the document with documents from other collections.",
      code: `const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// To get post with author info:
const post = await Post.findById(id).populate('author');`
    },
    {
      title: "Validation",
      content: "Mongoose has several built-in validators (required, min/max length, enum). You can also create custom validators to ensure data integrity before it reaches the database.",
      code: `const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    min: [0, 'Price cannot be negative']
  },
  status: {
    type: String,
    enum: ['active', 'out-of-stock']
  }
});`
    },
    {
      title: "Database Best Practices",
      content: "1. Index frequently queried fields. 2. Use environment variables for URIs. 3. Close connections properly. 4. Use lean queries for performance when only reading data. 5. Handle connection errors gracefully.",
      code: `// Performance Tip: Use .lean() for faster GET requests
const products = await Product.find().lean();`
    },
    {
      title: "Mini Project — Product Database API",
      content: "Build a 'Product Catalog' API! Implement routes to add products, list them with filters (e.g., by category), and update stock. Use Mongoose models and Atlas for storage.",
      code: `// Example: Find by category
app.get('/products', async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const products = await Product.find(filter);
  res.json(products);
});`
    },
    {
      title: "Exercises & Quiz",
      content: "1. Create a schema for a 'Blog Post' with comments. 2. Write a query to find all products with price < 50. 3. Explain the difference between 'Embedding' and 'Referencing'.",
      code: `// Quiz:
// 1. What is the MongoDB equivalent of a table?
// 2. Which method joins referenced documents?
// 3. How do you make a field unique in Mongoose?`
    }
  ]
}
