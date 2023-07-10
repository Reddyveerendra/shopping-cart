/* eslint-disable no-unused-vars */
export const Nav = (props) => {
    return (
        <div className="nav">
            <div className="logo">
                <a href="/shopping-cart">ShoppingCart</a>
            </div>
            <div>
                <ul className="features">
                    <li><a href="/">Home</a></li>
                    <li><a href="/shopping-cart/shop">Shop</a></li>
                    <li className="cart"><a href="/shopping-cart/cart" className="cart">{props.num}</a></li>
                </ul>
            </div>
        </div>
    )
}