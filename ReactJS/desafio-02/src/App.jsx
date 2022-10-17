import { Cars } from './components/CarsList'
import './global-styles.css'
import Logo from './assets/logo.svg'

export const App = () => {
  return (
    <div className="app">
      <img src={Logo} alt="Logo" />
      <h1>VrumVrum Concessionária</h1>
      <Cars />
    </div>
  )
}