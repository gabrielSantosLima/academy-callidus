export const TableHeader = ({orderDecrescent, orderCrescent}) => {
  return (
    <thead className="table-header">
        <tr>
            <th colSpan={4}>Tabela de Livros</th>
        </tr>
        <tr className="table-titles">
            <th>ISBN</th>
            <th className="table-ordenation">
              Title
              <div className="table-pagination">
                <div className="arrow" onClick={orderCrescent}>&#129093;</div>
                <div className="arrow" onClick={orderDecrescent}>&#129095;</div>
              </div>
            </th>
            <th>Author</th>
            <th></th>
        </tr>
    </thead>
  )
}
