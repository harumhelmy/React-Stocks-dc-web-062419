import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log(this.props.boughtStocks)
    return (
      <div>
        <h2>My Portfolio</h2>

        { this.props.boughtStocks.map( 
          singleStock => 
            <Stock 
              stock={singleStock} 
              handleClick={this.props.handleClick} 
            />
          ) 
        } 
  
      </div>
    );
  }

}

export default PortfolioContainer;
