import { useEffect, useState } from 'react'
import json from '../data.json'
export const Books = ({filterBy = ''}) => {
  const [books, setBooks] = useState(json)
  
  useEffect(() => {
    if(filterBy.length > 0) {
        setBooks(json.filter(b => b.category === filterBy))
    }
  }, [])

    return (
    <>
        <h2>Últimos lançamentos</h2>
        {books.map(b => (
            <div key={b.name + b.isbn} className="card">
                <div className="thumb">
                    <img src={`assets/${b.isbn.replaceAll('-', '') + '.jpg'}`} alt="Livro" />
                </div>
                <div className="detalhes">
                    <h3>{b.name}</h3>
                    <p>{b.description.substring(0, 100)} ...</p>
                    <a href="#">Leia mais</a>
                </div>
            </div>
        ))}
    </>
  )
}
