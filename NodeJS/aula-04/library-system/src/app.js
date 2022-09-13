import crypto from "crypto";
import express from "express";

const app = express();
const port = process.env.port || 3000;
let books = [];

app.use(express.json());

app.get("/", (req, resp) => {
  return resp.send(
    "<html><body><h1>Curso de Node.js com Márcio</h1></body><html>"
  );
});

app.get("/books", (req, resp) => {
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
