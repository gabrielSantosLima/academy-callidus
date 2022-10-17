import { useEffect, useState } from "react"
import { Car } from "./Car"

export const Cars = () => {
    const [originCars, setOriginalCars] = useState([])
    const [cars, setCars ] = useState([])
    
    useEffect(() => {
        fetch('src/cars.json')
        .then((response) => response.json())
        .then(newCars => {
            setCars(newCars)
            setOriginalCars(newCars)
        })
        .catch(() => console.error("Erro ao carregar os carros!"))
    }, [])

    function handleDelete(id){
        const newCars = cars.filter(car => car.id !== id)
        setCars(newCars)
        setOriginalCars(newCars)
    }

    function handleInput(event){
        const {value} = event.target
        const newCars = originCars.filter(car => car.name.toLowerCase().includes(value.toLowerCase()))
        setCars(newCars) 
    }

    return (
        <>
            <input type="text" onChange={handleInput} placeholder='Buscar carro...' />
            <div className="cars">
                {cars.map(car => <Car key={car.id} car={car} onDelete={() => handleDelete(car.id)}/>)}
            </div>
        </>
  )
}
