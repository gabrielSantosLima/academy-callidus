export const Livro = ({livro}) => {
  return (
    <main className="principal">
        <div className="pag-livro">
            <h2>{livro.name}</h2>
            <div className="livro">
                <img src={`assets/${livro.id}.jpg`} alt={livro.name} />
                <ul>
                    <li>ISBN: {livro.isbn}</li>
                    <li>Ano: {livro.ano}</li>
                    <li>Páginas: {livro.paginas}</li>
                    <li>Preço: R${livro.preco},00</li>
                </ul>
                <hr />
                <h3>Descrição do livro</h3>
                <p>{livro.description}</p>
            </div>
        </div>
    </main>
  )
}
