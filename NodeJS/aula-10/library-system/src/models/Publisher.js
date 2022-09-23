import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    state: String
})

export const Publisher = mongoose.model('publishers', schema)

export async function create(name, state){
    const newPublisher = await Publisher.create({name, state})
    return newPublisher
}

export async function findAll(filters = {}){
    const publishers = await Publisher.find(filters)
    return publishers
}

export async function findById(id){
    const publisher = await Publisher.findById(id)
    if(!publisher) throw new Error('Publisher not found.')
    return publisher
}

export async function deleteById(id){
    await Publisher.findByIdAndRemove(id)
}

export async function update(id, name, state){
    const updatedPublisher = await Publisher.findByIdAndUpdate(id,{name, state})
    return updatedPublisher
}