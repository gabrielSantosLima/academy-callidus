import * as AuthorModel from "../models/Author.js";

async function findAll (req, resp) {
    const filters = req.query
    const authors = await AuthorModel.findAll(filters)
    return resp.status(200).json(authors);
}

async function findById(req, resp) {
    const { id } = req.params;
    try{
        const author = await AuthorModel.findById(id)
        return resp.status(200).json(author);
    }catch(error){
        return resp.status(500).json({message: "Erro ao buscar autor", date: new Date()})
    }
}

async function create (req, resp) {
    const { name, nacionality } = req.body;
    try{
        const createdAuthor = await AuthorModel.create(name, nacionality)
        return resp.status(201).json(createdAuthor);
    }catch(error){
        return resp.status(500).json({message: "Erro ao criar autor", date: new Date()})
    }
}

async function update (req, resp) {
    const { id } = req.params;
    const { name, nacionality } = req.body;
    try{
        const updatedAuthor = await AuthorModel.update(id, name, nacionality)
        return resp.status(200).json(updatedAuthor);
    }catch(error){
        return resp.status(500).json({message: "Erro ao atualizar autor", date: new Date()})
    }
}

async function deleteById (req, resp) {
    const { id } = req.params;
    try{
        await AuthorModel.deleteById(id)
        return resp.status(200);
    }catch(error){
        return resp.status(500).json({message: "Erro ao deletar autor", date: new Date()})
    }
}
  
export const AuthorController = {
    create,
    deleteById,
    update,
    findAll,
    findById
}

