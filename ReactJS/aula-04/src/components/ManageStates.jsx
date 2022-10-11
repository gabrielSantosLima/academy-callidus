import { useState } from "react"

export const ManageStates = () => {
    const [valor, setValor] = useState(51)

    return (
    <div>
        <label>Valor: {valor}</label>
        <button onClick={() => setValor(valor + 1)}>Mudar variável</button>
    </div>
  )
}
