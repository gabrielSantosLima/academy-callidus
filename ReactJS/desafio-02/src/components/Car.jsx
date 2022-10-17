export const Car = ({car, onDelete}) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    return (
    <div className="car">
        <img src={car.image_url} alt={car.name} />
        <label className="car-name">{car.name}</label>
        <label className="car-price">{formatter.format(car.price)}</label>
        <button onClick={onDelete} className="button-delete">Deletar</button>
    </div>
  )
}
