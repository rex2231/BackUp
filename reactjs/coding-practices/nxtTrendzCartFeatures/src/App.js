import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'
import ProductCard from './components/ProductCard'

class App extends Component {
  state = {
    cartList: [],
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity

  removeCartItem = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(item => item.id !== id),
    }))
  }

  addCartItem = product => {
    this.setState(prevState => {
      const existingItemIndex = prevState.cartList.findIndex(
        item => item.id === product.id,
      )

      if (existingItemIndex !== -1) {
        const updatedCartList = [...prevState.cartList]
        updatedCartList[existingItemIndex] = {
          ...updatedCartList[existingItemIndex],
          quantity:
            updatedCartList[existingItemIndex].quantity + product.quantity,
        }
        return {cartList: updatedCartList}
      }
      return {cartList: [...prevState.cartList, product]}
    })
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(item => {
        if (item.id === id) {
          const updatedItem = {...item}
          updatedItem.quantity += 1
          return updatedItem
        }
        return item
      }),
    }))
  }

  //   decrementCartItemQuantity = id => {
  //     this.setState(prevState => ({
  //       cartList: prevState.cartList.map(item => {
  //         if (item.quantity < 1) {
  //           this.removeCartItem(item.id)
  //           return null
  //         }
  //         if (item.id === id) {
  //           const updatedItem = {...item}
  //           updatedItem.quantity -= 1
  //           return updatedItem
  //         }
  //         return item
  //       }),
  //     }))
  //   }

  decrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(item => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            quantity: Math.max(item.quantity - 1, 0),
          }
          if (updatedItem.quantity === 0) {
            this.removeCartItem(id)
          }
          return updatedItem
        }
        return item
      }),
    }))
  }

  removeCartItem = () => {
    this.setState({cartList: []})
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
