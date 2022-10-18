import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Principal } from './components/Principal'
import { Rodape } from './components/Rodape'
import { Topo } from './components/Topo'
import './styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/'>
        <>
          <Topo />
          <Principal />
          <Rodape />
        </>
      </Route>
    </BrowserRouter>
  )
}

export default App
