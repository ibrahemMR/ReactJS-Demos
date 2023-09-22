import {useState} from "react"
import React from "react"
import "../App.css"
//here u will find 2 way to handle form with function and class
//create form print out with function
// function Form() {
// 	const [name, setName] = useState("")
// 	const [password, setPassword] = useState("")
// 	const [email, setEmail] = useState("")
// 	const [gender, setGender] = useState("")

// 	const nameHandler = (value) => {
// 		setName(value)
// 	}
// 	const passwordHandler = (value) => {
// 		setPassword(value)
// 	}
// 	const genderHandler = (value) => {
// 		setGender(value)
// 	}
// 	const emailHandler = (value) => {
// 		setEmail(value)
// 	}

// 	return (
// 		<form
// 			className='regform'
// 			onSubmit={(e) => {
// 				e.preventDefault()
// 				console.log(name, password, email, gender)
// 			}}>
// 			<label>Your Name</label>
// 			<input
// 				type='text'
// 				onChange={(e) => {
// 					nameHandler(e.target.value)
// 				}}
// 			/>
// 			<label>Password</label>
// 			<input
// 				type='password'
// 				onChange={(e) => {
// 					passwordHandler(e.target.value)
// 				}}
// 			/>
// 			<label>Email</label>
// 			<input
// 				type='Email'
// 				onChange={(e) => {
// 					emailHandler(e.target.value)
// 				}}
// 			/>
// 			<label>Gender</label>
// 			<select
// 				onChange={(e) => {
// 					genderHandler(e.target.value)
// 				}}>
// 				<option value='1'>Male</option>
// 				<option value='2'>Fmale</option>
// 			</select>
// 			<input type='submit' value='register' />
// 		</form>
// 	)
// }

//create form print out with class
class Form extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			email: "",
			password: "",
			gender: "",
		}
	}
	nameHandler = (value) => {
		this.setState({name: value})
	}
	passwordHandler = (value) => {
		this.setState({password: value})
	}
	genderHandler = (value) => {
		this.setState({gender: value})
	}
	emailHandler = (value) => {
		this.setState({email: value})
	}
	render() {
		return (
			<form
				className='regform'
				onSubmit={(e) => {
					e.preventDefault()
					console.log(this.state)
				}}>
				<label>Your Name</label>
				<input
					type='text'
					onChange={(e) => {
						this.nameHandler(e.target.value)
					}}
				/>
				<label>Password</label>
				<input
					type='password'
					onChange={(e) => {
						this.passwordHandler(e.target.value)
					}}
				/>
				<label>Email</label>
				<input
					type='Email'
					onChange={(e) => {
						this.emailHandler(e.target.value)
					}}
				/>
				<label>Gender</label>
				<select
					onChange={(e) => {
						this.genderHandler(e.target.value)
					}}>
					<option value='1'>Male</option>
					<option value='2'>Fmale</option>
				</select>
				<input type='submit' value='register' />
			</form>
		)
	}
}
export default Form
