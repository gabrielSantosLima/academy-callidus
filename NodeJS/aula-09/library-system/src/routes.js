import express from "express"
import { AuthorRoutes } from "./routes/AuthorRouter.js"
import { BookRoutes } from "./routes/BookRoutes.js"
import { DefaultRoutes } from "./routes/DefaultRoutes.js"

const routes = express.Router()

routes.use(DefaultRoutes)
routes.use(BookRoutes)
routes.use(AuthorRoutes)

export {
    routes
}