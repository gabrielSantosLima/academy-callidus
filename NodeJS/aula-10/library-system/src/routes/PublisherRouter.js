import express from 'express'
import { PublisherController } from '../controllers/PublisherController.js';

const PublisherRoutes = new express.Router()

PublisherRoutes.get("/publishers", PublisherController.findAll);
PublisherRoutes.get("/publishers/:id", PublisherController.findById);
PublisherRoutes.post("/publishers", PublisherController.create);
PublisherRoutes.put("/publishers/:id", PublisherController.update);
PublisherRoutes.delete("/publishers/:id", PublisherController.deleteById);

export { 
    PublisherRoutes 
};