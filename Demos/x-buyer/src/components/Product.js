import {BsCartPlus} from "react-icons/bs"
function Product(props) {
	//short title text
	function truncate(str) {
		return str.length > 40 ? str.substring(0, 40) + "..." : str
	}
	return (
		<div className='Card'>
			<div className='prodImg'>
				<img src={props.product.image} alt={props.product.title} />
			</div>
			<h5>{truncate(props.product.title)}</h5>
			<p className='price'>{props.product.price}$ </p>
			<p className='category'>{props.product.category}</p>
			<span className='ICO'>
				<BsCartPlus />
			</span>
		</div>
	)
}

export default Product
