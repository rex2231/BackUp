import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
      />
      <h1>Cart</h1>
    </>
  )
}

export default Cart
