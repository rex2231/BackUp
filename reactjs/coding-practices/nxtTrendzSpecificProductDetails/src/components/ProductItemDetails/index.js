import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    productDetails: '',
    cartItemCount: 1,
  }

  componentDidMount() {
    this.getProductItemDetails()
  }

  handleContinueShopping = () => {
    const {history} = this.props
    history.push('/products')
  }

  getProductItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const productDetailsApiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(productDetailsApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        availability: data.availability,
        brand: data.brand,
        description: data.description,
        id: data.id,
        imageUrl: data.image_url,
        price: data.price,
        rating: data.rating,
        style: data.style,
        title: data.title,
        totalReviews: data.total_reviews,
        similarProducts: data.similar_products.map(product => ({
          id: product.id,
          brand: product.brand,
          price: product.price,
          rating: product.rating,
          imageUrl: product.image_url,
          title: product.title,
        })),
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        productDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureview = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
        className="failure-view"
      />
      <h1>Product Not Found</h1>
      <button type="button" onClick={this.handleContinueShopping}>
        Continue Shopping
      </button>
    </div>
  )

  onDecreaseCartItemCount = () => {
    const {cartItemCount} = this.state
    if (cartItemCount >= 2) {
      this.setState({cartItemCount: cartItemCount - 1})
    }
  }

  onIncreaseCartItemCount = () => {
    this.setState(prevState => ({cartItemCount: prevState.cartItemCount + 1}))
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader />
    </div>
  )

  renderProductDetails = () => {
    const {productDetails, cartItemCount} = this.state
    const {imageUrl} = productDetails

    return (
      <div className="product-details-container">
        <div className="product-details-top-container">
          <div>
            <img src={imageUrl} alt="product" className="product-image" />
          </div>
          <div>
            <h1>{productDetails.title}</h1>
            <p>{`Rs ${productDetails.price}/-`}</p>
            <div className="rating-container">
              <p className="rating">{productDetails.rating}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                alt="star"
                className="star"
              />
            </div>
            <p>{productDetails.description}</p>
            <p>{`Available: ${productDetails.availability}`}</p>
            <p>{`Brand: ${productDetails.brand}`}</p>
            <hr />
            <div>
              <button
                type="button"
                onClick={this.onDecreaseCartItemCount}
                data-testid="minus"
                aria-label="Decrease Cart Item Count"
              >
                <BsDashSquare />
              </button>
              <p>{cartItemCount}</p>
              <button
                type="button"
                onClick={this.onIncreaseCartItemCount}
                data-testid="plus"
                aria-label="Increase Cart Item Count"
              >
                <BsPlusSquare />
              </button>
            </div>
          </div>
          <button type="button">ADD TO CART</button>
        </div>
        <div className="product-details-bottom-container">
          <p>Similar Products</p>
          {this.renderSimilarProducts()}
        </div>
      </div>
    )
  }

  renderSimilarProducts = () => {
    const {productDetails} = this.state
    const {similarProducts} = productDetails

    return (
      <div>
        <ul>
          {similarProducts.map(product => (
            <SimilarProductItem key={product.id} productData={product} />
          ))}
        </ul>
      </div>
    )
  }

  renderPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      case apiStatusConstants.failure:
        return this.renderFailureview()
      case apiStatusConstants.success:
        return this.renderProductDetails()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderPage()}
      </div>
    )
  }
}

export default ProductItemDetails
