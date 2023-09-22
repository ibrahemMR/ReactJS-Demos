import "../App.css"
import Avatar from "./Avatar"
import {useState} from "react"

function UserInfo(props) {
	let [name, setName] = useState("Geust")
	let [btnText, setBtnText] = useState("login")
	console.log(props)
	return (
		<div className={props.user.position}>
			<Avatar imgurl={props.user.imgurl} />
			<h3 className='username'>{name}</h3>
			{/* using if to display login button only in navbar */}
			{props.user.position === "navbar" ? (
				<button
					onClick={() => {
						//change username from guest
						setName(props.user.name)
						//change button text to logout :)
						setBtnText("Logout")
					}}>
					{btnText}
				</button>
			) : null}
		</div>
	)
}

export default UserInfo
