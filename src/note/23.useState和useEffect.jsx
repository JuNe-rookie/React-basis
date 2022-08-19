import { useState, useEffect } from 'react'


function App() {
	const [conunt, addCount] = useState(0)
	const [name, setName] = useState("haha")
	useEffect(() => {
		console.log("副作用执行了")
	}, [conunt, name])

	const changeName = () => {
		setName("jajaajaj")
	}
	return (
		<>
			<div>{conunt}</div>
			<button onClick={() => addCount(conunt + 1)}>点击+1</button>
			<hr />
			<div>
				{name}
				<button onClick={changeName}>点击改名</button>
			</div>
		</>
	)
}

export default App