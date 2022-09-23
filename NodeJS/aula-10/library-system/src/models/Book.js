import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true},
    publisher: {type: mongoose.Schema.Types.ObjectId, ref: 'publishers', required: true},
    totalPages: Number
})

export const Book = mongoose.model('books', schema)

export async function create(title, author, publisher, totalPages){
    const newBook = await Book.create({title, author, publisher, totalPages})
    return newBook
}

export async function findAll(filters = {}){
    const books = await Book.find(filters).populate('author').populate('publisher').exec()
    return books
}

export async function findById(id){
    const book = await Book.findById(id).populate('author').populate('publisher').exec()
    if(!book) throw new Error('Book not found.')
    return book
}

export async function deleteById(id){
    await Book.findByIdAndRemove(id)
}

export async function update(id, title, author, publisher, totalPages){
    const updatedBook = await Book.findByIdAndUpdate(id,{title, author, publisher, totalPages})
    return updatedBook
}