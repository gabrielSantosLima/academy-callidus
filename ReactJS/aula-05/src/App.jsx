import React, { useState } from 'react'
import { CarDetails } from './components/CarDetails'
import { Children } from './components/Children'
import { ExecuteFunction } from './components/ExecuteFunction'
import { Fragment } from './components/Fragment'
import { MessageState } from './components/MessageState'
import { ShowUsername } from './components/ShowUsername'

export const App = () => {
  const [message, setMessage] = useState("Mensagem não mudou!")
  const cars = [
    {
      id: 1,
      brand: "Ferrari",
      color: "Yellow",
      km: 0
    },
    {
      id: 2,
      brand: "Honda",
      color: "Red",
      km: 10000
    },
    {
      id: 3,
      brand: "Gol",
      color: "Green",
      km: 20000
    },
    {
      id: 4,
      brand: "Porsche",
      color: "Gray",
      km: 70000
    },
  ]
  return (
    <div >
      <ShowUsername name="Gabriel"/>
      <CarDetails car={{brand: 'VW', color: "blue", km: 10}}/>
      {cars.map(car => (
        <CarDetails key={car.id} car={car}/>
      ))}
      <Fragment />
      <Children>
        {cars.map(car => (
          <li key={car.id}>Carro da marca {car.brand} de cor {car.color} com {car.km} KMs.</li>
        ))}
      </Children>
      <ExecuteFunction showMessage={() => console.log("Ola Programador JS")}/>
      <MessageState setMessage={setMessage}/>
      <h4>{message}</h4>
    </div>
  )
}