export const TableFooter = ({bookLength = 0}) => {
  return (
    <tfoot className="table-foot">
        <tr>
            <td colSpan={4}>Total de <span>{bookLength} livro{bookLength === 1 ? '' : 's'}</span> listado{bookLength === 1 ? '' : 's'}.</td>
        </tr>
    </tfoot>
  )
}
