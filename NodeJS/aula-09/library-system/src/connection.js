import mongoose from "mongoose"

export async function createConnection(URL = ""){
    await mongoose.connect(URL)
}