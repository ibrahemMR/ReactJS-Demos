import "../App.css"

function Avatar(props) {
	//use url from props where saved in App file >> as const >> user
	return <img className='logo' src={props.imgurl} alt={props.name} />
}

export default Avatar
