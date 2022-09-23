import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    nacionality: String
})

export const Author = mongoose.model('authors', schema)

export async function create(name, nacionality){
    const newAuthor = await Author.create({name, nacionality})
    return newAuthor
}

export async function findAll(filters = {}){
    const authors = await Author.find(filters)
    return authors
}

export async function findById(id){
    const author = await Author.findById(id)
    if(!author) throw new Error('Author not found.')
    return author
}

export async function deleteById(id){
    await Author.findByIdAndRemove(id)
}

export async function update(id, name, nacionality){
    const deletedAuthor = await Author.findByIdAndUpdate(id,{name, nacionality})
    return deletedAuthor
}