import * as PublisherModel from "../models/Publisher.js";

async function findAll (req, resp) {
    const filters = req.query
    const publishers = await PublisherModel.findAll(filters)
    return resp.status(200).json(publishers);
}

async function findById(req, resp) {
    const { id } = req.params;
    try{
        const publisher = await PublisherModel.findById(id)
        return resp.status(200).json(publisher);
    }catch(error){
        return resp.status(500).json({message: "Erro ao buscar editora", date: new Date()})
    }
}

async function create (req, resp) {
    const { name, nacionality } = req.body;
    try{
        const createdPublisher = await PublisherModel.create(name, nacionality)
        return resp.status(201).json(createdPublisher);
    }catch(error){
        return resp.status(500).json({message: "Erro ao criar editora", date: new Date()})
    }
}

async function update (req, resp) {
    const { id } = req.params;
    const { name, nacionality } = req.body;
    try{
        const updatedPublisher = await PublisherModel.update(id, name, nacionality)
        return resp.status(200).json(updatedPublisher);
    }catch(error){
        return resp.status(500).json({message: "Erro ao atualizar editora", date: new Date()})
    }
}

async function deleteById (req, resp) {
    const { id } = req.params;
    try{
        await PublisherModel.deleteById(id)
        return resp.status(200);
    }catch(error){
        return resp.status(500).json({message: "Erro ao deletar editora", date: new Date()})
    }
}
  
export const PublisherController = {
    create,
    deleteById,
    update,
    findAll,
    findById
}

