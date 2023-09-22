import React from "react"
import "../App.css"
class Welcome extends React.Component {
	state = {
		fristName: "Yasser",
		lastName: "Assem",
		name: this.props.name,
	}

	render() {
		return (
			<div className='card'>
				<h1>Hello, {this.state.name}</h1>
				<p>
					age: {this.props.age} || title: {this.props.title}
				</p>
				<h5>
					Created By, {this.state.fristName} {this.state.lastName}
				</h5>
				<button
					onClick={() => {
						this.setState({
							name: "Ameer",
							lastName: "Mohamed Asem",
						})
					}}>
					Change Name
				</button>
			</div>
		)
	}
	//componentDidMount() {}
}
class OnChangeWelcome extends React.Component {
	state = {
		name: "Geust",
	}
	render() {
		return (
			<div className='form'>
				<h3>Welcome {this.state.name}</h3>

				<input
					type='text'
					placeholder='Enter Your Name'
					onChange={(e) => {
						// edit h3 Geust name with new typed value
						this.setState({name: e.target.value})
					}}
					onBlur={(e) => {
						//clear input text
						e.target.value = ""
					}}
				/>
			</div>
		)
	}
}
export {Welcome, OnChangeWelcome}
