import express from 'express'
import { BookController } from '../controllers/BookController.js';

const BookRoutes = new express.Router()

BookRoutes.get("/books", BookController.findAll);
BookRoutes.get("/books/:id", BookController.findById);
BookRoutes.post("/books", BookController.create);
BookRoutes.put("/books/:id", BookController.update);
BookRoutes.delete("/books/:id", BookController.deleteById);

export { 
    BookRoutes 
};