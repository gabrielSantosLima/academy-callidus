import crypto from "crypto";
import express from "express";
import { connect } from "./connection.js";
import { Book } from "./models/Book.js";

const app = express();
const port = process.env.port || 3000;
const dbURL = "mongodb+srv://gabrielSantosLima:gabriel.ATLASmanaus2022@cluster0.wnohhnn.mongodb.net/callidus-node?retryWrites=true&w=majority"
let books = [];

await connect(dbURL)
.then(() => console.log("MongoDB connected."))
.catch(() => console.error('Error on connect with MongoDB'))

app.use(express.json());

app.get("/", (req, resp) => {
  return resp.send(
    "<html><body><h1>Curso de Node.js com Márcio</h1></body><html>"
  );
});

app.get("/books", async (req, resp) => {
  books = await Book.find({})
  return resp.status(200).json(books);
});

app.get("/books/:id", (req, resp) => {
  const { id } = req.params;
  return resp.status(200).json(books.find((book) => book.id === id));
});

app.post("/books", (req, resp) => {
  const { title } = req.body;
  const id = crypto.randomUUID();
  books.push({ id, title });
  return resp.status(200).json({ id, title });
});

app.put("/books/:id", (req, resp) => {
  const { id } = req.params;
  const { title } = req.body;
  books = books.map((book) => {
    if (book.id === id) {
      book.title = title;
    }
    return book;
  });
  return resp.status(200).json({ id, title });
});

app.delete("/books/:id", (req, resp) => {
  const { id } = req.params;
  books = books.filter((book) => book.id !== id);
  return resp.status(200).json({ message: "success.", now: new Date() });
});

app.listen(port, () => {
  console.log("Server started...");
});
