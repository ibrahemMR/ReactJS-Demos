import "../App.css"
import {useState} from "react"
import NotifyCounts from "./NotifyCounts"
function Notify() {
	let [counter, setCounter] = useState(0)
	return (
		<div className='notification'>
			{/* show notification only if counter > 0 */}
			{counter > 0 ? <NotifyCounts number={counter} /> : null}
			<img
				src='data:image/png;base64,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'
				alt='bill'
			/>
			<br />
			<button
				title='add more'
				className='btn'
				onClick={() => setCounter(++counter)}>
				👆 
			</button>
			<button
				title='read all'
				className='btn'
				onClick={() => setCounter(0)}>
				👍
			</button>
		</div>
	)
}

export default Notify