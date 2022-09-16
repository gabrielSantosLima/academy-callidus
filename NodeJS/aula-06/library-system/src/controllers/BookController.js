import * as BookModel from "../models/Book.js";

async function findAll (_, resp) {
    const books = await BookModel.findAll()
    return resp.status(200).json(books);
}

async function findById(req, resp) {
    const { id } = req.params;
    const book = await BookModel.findById(id)
    return resp.status(200).json(book);
}

async function create (req, resp) {
    const { title, author, publisher, totalPages } = req.body;
    const createdBook = await BookModel.create(title, author, publisher,totalPages)
    return resp.status(200).json(createdBook);
}

async function update (req, resp) {
    const { id } = req.params;
    const { title, author, publisher, totalPages } = req.body;
    const updatedBook = await BookModel.update(id, title, author, publisher, totalPages)
    return resp.status(200).json(updatedBook);
}

async function deleteById (req, resp) {
    const { id } = req.params;
    await BookModel.deleteById(id)
    return resp.status(200).json({ message: "success.", now: new Date() });
}
  
export const BookController = {
    create,
    deleteById,
    update,
    findAll,
    findById
}

