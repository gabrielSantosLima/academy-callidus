import express from "express"
import { AuthorRoutes } from "./routes/AuthorRouter.js"
import { BookRoutes } from "./routes/BookRoutes.js"
import { DefaultRoutes } from "./routes/DefaultRoutes.js"
import { PublisherRoutes } from "./routes/PublisherRouter.js"

const routes = express.Router()

routes.use(DefaultRoutes)
routes.use(BookRoutes)
routes.use(AuthorRoutes)
routes.use(PublisherRoutes)

export {
    routes
}