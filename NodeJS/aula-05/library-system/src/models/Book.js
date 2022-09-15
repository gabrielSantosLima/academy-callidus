import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    totalPages: Number
})
export const Book = mongoose.model('livros', schema)