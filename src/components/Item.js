export const Item = (props) => {
    return (
        <div className="item">
            <div className="left">
                <img src="https://raw.githubusercontent.com/Reddyveerendra/shopping-cart/main/src/Image/0.jpg" alt="1" />
            </div>
            <div className="right">
                <h1>{props.name}</h1>
                <h3>J.K. Rowling</h3>
                <p>{props.description}</p>
                <button>ADD TO CARAT</button>
            </div>
        </div>
    )
}