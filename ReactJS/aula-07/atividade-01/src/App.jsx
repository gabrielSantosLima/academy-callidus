import { UserDetails } from './components/UserDetails'
import './styles.css'

const users = [
  {
    nome: "Gabriel Lima",
    idade: 19,
    profissao: 'Programador Back-end'
  },
  {
    nome: "Arthur Uguen",
    idade: 19,
    profissao: 'Analista de dados'
  },
  {
    nome: "Guilherme",
    idade: 15,
    profissao: 'Estudante'
  }
]

export const App = () => {
  return (
    <div className="app">
      {users.map((user, index) => (
        <UserDetails key={index} user={user} />
      ))}
    </div>
  )
}
