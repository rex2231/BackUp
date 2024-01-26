import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/" />
  }

  return (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
      />
      <h1>Products</h1>
    </>
  )
}

export default products
