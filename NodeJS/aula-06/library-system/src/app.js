import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import { createConnection } from "./connection.js";
import { routes } from './routes.js';

const app = express();
const port = process.env.port || 3000;
const dbURL = process.env.DB_URL

await createConnection(dbURL)
.then(() => console.log("MongoDB connected."))
.catch(() => console.error('Error on connect with MongoDB'))

app.use(express.json());
app.use(routes)

app.listen(port, () => {
  console.log("Server started...");
});
