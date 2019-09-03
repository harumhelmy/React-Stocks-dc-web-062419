import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const stockAPI = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      allStocks: [],
      boughtStocks: [],
      selectedSort: 'Alphabetically',
      filter: ''
    }
  }

  componentDidMount(){
    fetch(stockAPI)
    .then(res => res.json())
    .then(stocks => this.setState({
      allStocks: stocks
    }))
  }

  buyStock = (stockObject) => {
    this.setState({
      boughtStocks: [...this.state.boughtStocks, stockObject]
    })
  }

  sellStock = (stockObj) => {
    this.setState({
      boughtStocks: this.state.boughtStocks.filter(stock => stock !== stockObj)
    })
  }

  handleChangeSort = (event) => {
    console.log('attempting to sort...')
    this.setState({
      selectedSort: event.target.value
    })
  }

  handleChangeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  filterStocks = (allStocks) => {
    switch (this.state.filter) {
      case 'Tech':
        return allStocks.filter( stock => stock.type === 'Tech' )
      case 'Finance':
        return allStocks.filter( stock => stock.type === 'Finance' )
      case 'Sportswear':
        return allStocks.filter( stock => stock.type === 'Sportswear' )
      default: 
      return allStocks
    }
  }


  getSortedListOfStocks = ()=>{
    let copy = [...this.state.allStocks]
    switch(this.state.selectedSort){
      case 'Alphabetically':
          copy.sort((a, b) => a.name > b.name ? 1 : -1)
      break;
      case 'Price':
        copy.sort((a, b) => a.price - b.price)
      break;
      default: 
    }
    return copy
  }

  

  render() {
    return (
      <div>
        <SearchBar 
          handleChangeSort={this.handleChangeSort}
          handleChangeFilter={this.handleChangeFilter}
          selectedSort={this.state.selectedSort}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer 
                stocks={this.filterStocks(this.getSortedListOfStocks())}
                boughtStocks={this.state.boughtStocks}
                handleClick={this.buyStock}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer 
                boughtStocks={this.state.boughtStocks} 
                handleClick={this.sellStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
