export const Nav = () => {
    return (
        <div className="nav">
            <div className="logo">
                <a href="/">ShoppingCart</a>
            </div>
            <div>
                <ul className="features">
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li className="cart"><a href="/cart">1</a></li>
                </ul>
            </div>
        </div>
    )
}