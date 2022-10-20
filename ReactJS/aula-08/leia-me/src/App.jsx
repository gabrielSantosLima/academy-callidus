import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DesignList } from './components/DesignList'
import { FrontendList } from './components/FrontendList'
import { Principal } from './components/Principal'
import { ProgramacaoList } from './components/ProgramacaoList'
import './styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Principal />
  },
  {
    path: '/frontend',
    element: <FrontendList />
  },
  {
    path: '/programacao',
    element: <ProgramacaoList />
  },
  {
    path: '/design',
    element: <DesignList />
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
