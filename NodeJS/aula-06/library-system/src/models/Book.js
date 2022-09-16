import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    totalPages: Number
})

export const Book = mongoose.model('books', schema)

export async function create(title, author, publisher, totalPages){
    const newBook = await Book.create({title, author, publisher, totalPages})
    return newBook
}

export async function findAll(){
    const books = await Book.find({})
    return books
}

export async function findById(id){
    const book = await Book.findById(id)
    return book
}

export async function deleteById(id){
    await Book.findByIdAndRemove(id)
}

export async function update(id, title, author, publisher, totalPages){
    const updatedBook = await Book.findByIdAndUpdate(id,{title, author, publisher, totalPages})
    return updatedBook
}