import "./App.css"
import UserInfo from "./componenets/UserInfo"

const user = {
	user1: {
		name: "Ahmed Rashad",
		imgurl: "data:image/png;base64,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",
		position: "home",
	},
	user2: {
		name: "Omar Rashad",
		imgurl: "data:image/png;base64,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",
		position: "navbar",
	},
	user3: {
		name: "Zain Rashad",
		imgurl: "data:image/png;base64,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",
		position: "home",
	},
}

function App() {
	return (
		<div className='App'>
			<UserInfo user={user.user1} />
			<UserInfo user={user.user2} />
			<h1>Welcome to react JS</h1>
		</div>
	)
}

export default App