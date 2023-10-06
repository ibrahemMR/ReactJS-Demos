import React, { useState, useEffect } from 'react';
import Product from './Product';
import FilterProd from './FilterProd';
import {BsFillFunnelFill} from "react-icons/bs"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
//Handel Min And Maxk Price
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // Extract unique categories from the fetched products
        const uniqueCategories = [...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
// Filter Data By Products Categories
  const filterProductsByCategories = () => {
    let filteredProducts = [...products];

    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (minPrice !== '') {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseFloat(minPrice)
      );
    }

    if (maxPrice !== '') {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseFloat(maxPrice)
      );
    }

    return filteredProducts;};
    
    //Show Filter Pan in mobile !!!!! Not Working yet 💥
    // adding the states
	const [isActive, setIsActive] = useState(false)

	//add the active class
	const toggleActiveClass = () => {
		setIsActive(!isActive)
	}

	//clean up function to remove the active class
	const removeActive = () => {
		setIsActive(false)
	}
  return (
    <>
			<section className='prodSection'>
        
				<div className='row'>
        <span className='openFilter'
					onClick={toggleActiveClass}><BsFillFunnelFill /></span>
        <FilterProd
        categories={categories}
        selectedCategories={selectedCategories}
        onSelectCategory={(category) => {
          if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
          } else {
            setSelectedCategories([...selectedCategories, category]);
          }
        }}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onPriceChange={(newMinPrice, newMaxPrice) => {
          setMinPrice(newMinPrice);
          setMaxPrice(newMaxPrice);
        }}
      />
					<div className='products-list'>
						<h2>Products List</h2>
						<div className='cards'> {filterProductsByCategories().map((product) => (
          <Product key={product.id} product={product} />
        ))}</div>
					</div>
				</div>
			</section>
		</>
    
  );
};

export default Products;