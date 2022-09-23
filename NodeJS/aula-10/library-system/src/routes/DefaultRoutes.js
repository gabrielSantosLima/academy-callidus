import express from "express"
import { DefaultController } from "../controllers/DefaultController.js"

const DefaultRoutes = express.Router()

DefaultRoutes.get('/', DefaultController.get)

export {
    DefaultRoutes
}