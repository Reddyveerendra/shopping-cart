export const Card = (props) => {
    return (
        <div className="card" id={props.num}>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <h3>₹{props.price}</h3>
        </div>
    )
}