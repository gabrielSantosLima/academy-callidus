export const ManageConditionalRender = () => {
    const x = true
    return (
        <div>
            <h3>Isso será exibido </h3>
            {x && <p>Se x for verdadeiro</p>}
            <h3>Isso será exibido </h3>
            {!x && <p>Se x for falso</p>}
        </div>
    )
}
