export const TableBody = ({onDelete, books}) => {
  
    return (
    <tbody className="table-body">
        {books.map(book => (
            <tr className="row" key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                    <button onClick={() => onDelete(book.id)}>Deletar</button>
                </td>
            </tr>
        ))}
    </tbody>
  )
}
