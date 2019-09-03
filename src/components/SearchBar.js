import React from 'react';

const SearchBar = props => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={ props.selectedSort === 'Alphabetically' } onChange={props.handleChangeSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={ props.selectedSort === 'Price' } onChange={props.handleChangeSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleChangeFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
