import "./App.css"
import ProductsList from "./components/ProductsList"
import Navbar from "./components/Navbar"
function App() {
	return (
		<>
			<div className='App'>
				<Navbar />

				<ProductsList />
			</div>
		</>
	)
}

export default App
