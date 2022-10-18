import { Airplane } from "./components/Airplane"
import './global-styles.css'
const airplanes = [
  {
    id: 0,
    name: 'Callidus777',
    image: 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80'
  },
  {
    id: 1,
    name: 'GabrielAirline',
    image: 'https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    id: 2,
    name: 'Metroid123',
    image: 'https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
  }
]

export const App = () => {

  return (
    <div className="App">
      <h1>Meus aviões</h1>
      <div className="content">
        {airplanes.map(air => (
          <Airplane key={air.id} airplane={air}/>
        ))}
      </div>
    </div>
  )
}