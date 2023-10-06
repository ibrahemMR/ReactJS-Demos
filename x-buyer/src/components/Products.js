//import data from "../data"
import Product from "./Product"
import Filter from "./Filter"
import {useEffect, useState} from "react"
//import Products from "./Products"
//const products = data

function Products() {
	const [ProductsData, setProducts] = useState([])
	const productList = ProductsData.map((el) => {
		return el.price < 50 && el.price > 10 ? (
			<Product key={el.id} product={el} />
		) : null
	})
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data)
			})
	})
	//display Products List
	return (
		<>
			<section className='prodSection'>
				<div className='row'>
					<Filter />

					<div className='products-list'>
						<h2>Products List</h2>
						<div className='cards'>{productList}</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Products
