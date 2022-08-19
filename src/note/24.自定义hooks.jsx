import useWindowScroll from "./hooks/useWindowScroll"
import useLocalStorange from "./hooks/useLocalStorange"


function App() {
	const [y] = useWindowScroll()
	const [message, setMessage] = useLocalStorange('hook-key', 'jojo')
	setTimeout(() => {
		setMessage("111")
	}, 5000)
	return (
		<div style={{ height: "1200px" }}>
			<div>{y}</div>
			<div>{message}</div>
		</div>
	)
}
export default App