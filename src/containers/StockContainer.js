import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map( 
            singleStock => 
            <Stock 
              key={singleStock.id} 
              stock={singleStock} 
              handleClick={this.props.handleClick} 
              boughtStocks={this.props.boughtStocks}
            />
          )
        }
      </div>
    );
  }

}

export default StockContainer;
