import React from 'react'

export const Children = ({children}) => {
  return (
    <div>
        <h1>Carros</h1>
        <ul>
            {children}
        </ul>
    </div>
  )
}
