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

export async function findAll(){
    const authors = await Author.find({})
    return authors
}

export async function findById(id){
    const author = await Author.findById(id)
    return author
}

export async function deleteById(id){
    await Author.findByIdAndRemove(id)
}

export async function update(id, name, nacionality){
    const deletedAuthor = await Author.findByIdAndUpdate(id,{name, nacionality})
    return deletedAuthor
}