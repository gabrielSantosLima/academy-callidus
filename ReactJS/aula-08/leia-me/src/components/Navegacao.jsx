import { NavLink } from "react-router-dom"

let linkCorrente = {
  color: '#FFF',
}

export const Navegacao = () => {
  return (
    <ul>
        <li>
          <NavLink to="/" activeStyle={linkCorrente} exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/frontend" activeStyle={linkCorrente} exact>
            FrontEnd
          </NavLink>
        </li>
        <li>
          <NavLink to="/programacao" activeStyle={linkCorrente} exact>
            Programação
          </NavLink>
        </li>
        <li>
          <NavLink to="/design" activeStyle={linkCorrente} exact>
            Design
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalogo" activeStyle={linkCorrente} exact>
            Catálogo
          </NavLink>
        </li>
    </ul>
  )
}
