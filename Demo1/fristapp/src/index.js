import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Form from "./componenets/Form"
import {Welcome, OnChangeWelcome} from "./componenets/Welcome"
import Products from "./componenets/Products"
const root = ReactDOM.createRoot(document.getElementById("root"))
const prod = {
	name: "laptop",
	price: 16000 + " LE",
	img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6OA_WjE8LxRIgn_cdZvcHC6kFgs8TKoY8b9i4sZW2UF5ENwg_Ltg4vI2GxCeZnnBZF0A85fOQ1Eo8ZIqMU382XJUk66FqXbN0UiR4yO7LNvZau5j7prFFLLANn-NP0TVmlDY6HYmu&usqp=CAc",
}
root.render(
	<React.StrictMode>
		<App />
		<section className='cards'>
			<Welcome name='Ahmed' age='30' title='React Developer' />
			<Welcome name='Noor' age='19' title='Web Developer' />
		</section>
		<section className='productsSection'>
			<Products prod={prod} />
		</section>
		<OnChangeWelcome />
		<br />
		<Form />
	</React.StrictMode>
)
