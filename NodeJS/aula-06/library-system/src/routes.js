import express from "express"
import { BookRoutes } from "./routes/BookRoutes.js"
import { DefaultRoutes } from "./routes/DefaultRoutes.js"

const routes = express.Router()

routes.use(DefaultRoutes)
routes.use(BookRoutes)

export {
    routes
}