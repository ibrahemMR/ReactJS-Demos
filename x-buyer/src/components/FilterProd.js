import React from 'react';
import { useState } from 'react';

const FilterProd = ({ categories, selectedCategories, onSelectCategory, minPrice, maxPrice, onPriceChange }) => {
    const [minPriceInput, setMinPriceInput] = useState(minPrice);
    const [maxPriceInput, setMaxPriceInput] = useState(maxPrice);
  
    const handleMinPriceChange = (e) => {
      const newMinPrice = e.target.value
      setMinPriceInput(newMinPrice)
      onPriceChange(newMinPrice, maxPriceInput)
    }
  
    const handleMaxPriceChange = (e) => {
      const newMaxPrice = e.target.value
      setMaxPriceInput(newMaxPrice)
      onPriceChange(minPriceInput, newMaxPrice)
    }
    return (
    <div className="filter">
     <div className='fixedFilter'>
     <form>
		<div className='showCateg'>
        <h4 htmlFor="category">Filter by Category:</h4>
        <ul>
        {categories.map((category) => {
            return (
                <li key={category}>
                    <label htmlFor={category}>
                        {category}
                    </label>
                    <input
                        type='checkbox'
                        id={category}
                        name={category}
                        value={category}
                        checked={selectedCategories.includes(category)}
                        onChange={() => onSelectCategory(category)}
                    />
                </li>
            )
        })}
        </ul>
        </div>
        <h4>Price Range</h4>		
        <div className='price-range'>
            <input
                type='number'
                name='minPrice'
                value={minPrice}
                placeholder='Min Price'
                onChange={handleMinPriceChange}
            />
            <input
                type='number'
                name='maxPrice'
                value={maxPrice}
                placeholder='Max Price'
                onChange={handleMaxPriceChange}
            />
        </div>
        </form>
     </div>
    </div>
  );
};

export default FilterProd;