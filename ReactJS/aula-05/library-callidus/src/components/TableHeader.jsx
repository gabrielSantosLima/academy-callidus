export const TableHeader = () => {
  return (
    <thead className="table-header">
        <tr>
            <th colSpan={4}>Tabela de Livros</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th></th>
        </tr>
    </thead>
  )
}
