import { useEffect, useState } from "react"
import { TableBody } from "./TableBody"
import { TableFooter } from "./TableFooter"
import { TableHeader } from "./TableHeader"

export const Table = () => {
    const [books, setBooks ] = useState([])
    
    useEffect(() => {
        fetch('src/books.json')
        .then((response) => response.json())
        .then(newBooks => setBooks(newBooks))
        .catch(() => console.error("Erro ao carregar os livros!"))
    }, [])

    function handleDelete(id){
        const newBooks = books.filter(book => book.id !== id)
        setBooks(newBooks)
    }

    function sort(a, b){
        if(a.title > b.title) return 1
        if(a.title < b.title) return -1
        return 0
    }

    function handleOrderCrescent(){
        const sortedBooks = [...books].sort(sort)
        setBooks(sortedBooks)
    }
    
    function handleOrderDescrescent(){
        let sortedBooks = [...books].sort(sort)
        sortedBooks = sortedBooks.reverse()
        setBooks(sortedBooks)
    }

    return (
        <table cellSpacing={0} className="table">
            <TableHeader orderCrescent={handleOrderCrescent} orderDecrescent={handleOrderDescrescent} />
            <TableBody onDelete={handleDelete} books={books}/>
            <TableFooter bookLength={books.length}/>
        </table>
  )
}
