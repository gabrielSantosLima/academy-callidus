import './styles.css'

export const Airplane = ({airplane}) => {
  return (
    <div className='airplane'>
        <img src={airplane.image} alt={airplane.name} />
        <label>{airplane.name}</label>
    </div>
  )
}
