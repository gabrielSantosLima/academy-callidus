export const Home = () => {
  return (
    <>
        <h2>Últimos lançamentos</h2>
        <div className="card">
            <div className="thumb">
                <img src="assets/9788575221396.jpg" alt="Livro" />
            </div>
            <div className="detalhes">
                <h3>Construindo Sites com CSS e (X)HTML</h3>
                <p>Seja você um desenvolvedor experiente ...</p>
                <a href="#">Leia mais</a>
            </div>
        </div>
        <div className="card">
            <div className="thumb">
                <img src="assets/9788575221662.jpg" alt="Livro" />
            </div>
            <div className="detalhes">
                <h3>Criando Sites com HTML</h3>
                <p>Construir sites em conformidade com os Padrões Web ...</p>
                <a href="#">Leia mais</a>
            </div>
        </div>
    </>
  )
}
