import * as BookModel from "../models/Book.js";

async function findAll (req, resp) {
    const filters = req.query
    const books = await BookModel.findAll(filters)
    return resp.status(200).json(books);
}

async function findById(req, resp) {
    const { id } = req.params;
    try{
        const book = await BookModel.findById(id)
        return resp.status(200).json(book);
    }catch(error){
        return resp.status(500).json({message: "Erro ao buscar livro", date: new Date()})
    }
}

async function create (req, resp) {
    const { title, author, publisher, totalPages } = req.body;
    try{
        const createdBook = await BookModel.create(title, author, publisher,totalPages)
        return resp.status(201).json(createdBook);
    }catch(error){
        return resp.status(500).json({message: "Erro ao criar livro", date: new Date()})
    }
}

async function update (req, resp) {
    const { id } = req.params;
    const { title, author, publisher, totalPages } = req.body;
    try{
        const updatedBook = await BookModel.update(id, title, author, publisher, totalPages)
        return resp.status(200).json(updatedBook);
    }catch(error){
        return resp.status(500).json({message: "Erro ao atualizar livro", date: new Date()})
    }
}

async function deleteById (req, resp) {
    const { id } = req.params;
    try{
        await BookModel.deleteById(id)
        return resp.status(200);
    }catch(error){
        return resp.status(500).json({message: "Erro ao deletar livro", date: new Date()})
    }
}
  
export const BookController = {
    create,
    deleteById,
    update,
    findAll,
    findById
}

