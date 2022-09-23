import express from 'express'
import { AuthorController } from '../controllers/AuthorController.js';

const AuthorRoutes = new express.Router()

AuthorRoutes.get("/authors", AuthorController.findAll);
AuthorRoutes.get("/authors/:id", AuthorController.findById);
AuthorRoutes.post("/authors", AuthorController.create);
AuthorRoutes.put("/authors/:id", AuthorController.update);
AuthorRoutes.delete("/authors/:id", AuthorController.deleteById);

export { 
    AuthorRoutes 
};