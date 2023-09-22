import "../App.css"

function Avatar(props) {
	return <img className='logo' src={props.imgurl} alt={props.name} />
}

export default Avatar
