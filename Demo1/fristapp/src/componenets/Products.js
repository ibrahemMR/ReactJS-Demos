import {useState} from "react"
//using setState to edit amount of products
function Products(props) {
	let [amount, setAmount] = useState(0)
	return (
		<section className='products'>
			<div className='product'>
				<img src={props.prod.img} alt={props.prod.name} />
				<h4>{props.prod.name}</h4>
				<span>{props.prod.price}</span>
				<input type='number' value={amount} />
				<button
					onClick={() => {
						setAmount(++amount)
					}}>
					+
				</button>
			</div>
		</section>
	)
}

export default Products
