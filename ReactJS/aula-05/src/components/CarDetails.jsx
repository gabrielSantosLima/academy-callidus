import React from 'react'

export const CarDetails = ({car}) => {
  const {brand, color, km} = car
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <span>Carro da marca {brand} de cor {color} com {km} KMs.</span>
    </div>
  )
}
