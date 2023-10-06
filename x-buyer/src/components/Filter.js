import {useState} from "react"

function Filter({ProductsData}) {
	const [categories, selcetedCategories] = useState(ProductsData)
	return (
		<div className='filter'>
			<div className='fixedFilter'>
				<h3>Filter Products</h3>
				<form>
					<div className='showCateg'>
						<h4>Category</h4>
						<ul>
							{categories.map((el) => {
								return (
									<li key={el.id}>
										<label htmlFor={el.name}>
											{el.name}
										</label>
										<input
											type='checkbox'
											id={el.name}
											name={el.name}
											value={el.name}
										/>
									</li>
								)
							})}
						</ul>
					</div>

					<h4>Price Range</h4>
					{/* #craete price range slider */}
					<div className='price-range'>
						<input
							type='number'
							name='minPrice'
							// value={minPrice}
							placeholder='Min Price'
							// onChange={(e) => setMinPrice(e.target.value)}
						/>
						<input
							type='number'
							name='maxPrice'
							// value={maxPrice}
							placeholder='Max Price'
							// onChange={(e) => setMaxPrice(e.target.value)}
						/>
					</div>

					{/* <button type='submit'>Filter</button> */}
				</form>
			</div>
		</div>
	)
}
export default Filter
