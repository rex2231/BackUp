import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader />
      </div>
    ) : (
      <CryptocurrenciesList currencyData={currencyData} />
    )
  }
}

export default CryptocurrencyTracker
