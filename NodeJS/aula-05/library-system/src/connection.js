import mongoose from "mongoose"

export async function connect(URL = ""){
    await mongoose.connect(URL)
}