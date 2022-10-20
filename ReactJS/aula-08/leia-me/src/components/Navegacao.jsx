import { NavLink } from "react-router-dom"

let linkCorrente = {
  color: '#FFF',
}

export const Navegacao = () => {
  return (
    <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/frontend">
            FrontEnd
          </NavLink>
        </li>
        <li>
          <NavLink to="/programacao">
            Programação
          </NavLink>
        </li>
        <li>
          <NavLink to="/design">
            Design
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/catalogo">
            Catálogo
          </NavLink>
        </li> */}
    </ul>
  )
}
