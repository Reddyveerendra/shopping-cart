export const Card = (props) => {
    return (
        <div>
            <img src={props.link} alt={props.name} />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h3>{props.price}</h3>
            <button>Add To Cart</button>
        </div>
    )
}