import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const total = cartList.reduce(
        (accumulater, item) => accumulater + item.price * item.quantity,
        0,
      )
      return (
        <div className="cart-summary-container">
          <h1>Order Total: {cartList.length}</h1>
          <p>{total} Items in cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
