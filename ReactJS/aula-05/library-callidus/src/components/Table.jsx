import { useState } from "react"
import { TableBody } from "./TableBody"
import { TableFooter } from "./TableFooter"
import { TableHeader } from "./TableHeader"

import booksJson from '../books.json'

export const Table = () => {
    const [books, setBooks ] = useState(booksJson)
    function handleDelete(id){
        const newBooks = books.filter(book => book.id !== id)
        setBooks(newBooks)
    }
    return (
        <table className="table">
            <TableHeader />
            <TableBody onDelete={handleDelete} books={books}/>
            <TableFooter />
        </table>
  )
}
