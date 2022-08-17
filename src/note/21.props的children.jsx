import React from 'react'

function ListItem(props) {
	const {children} = props
	return (
		<>
			<div>this is ListItem</div>
			<div>{children}</div>
		</>
	)
}

class App extends React.Component {
	render() {
		return (
			<>
				<ListItem >
					this is children
					<h1>this is children too</h1>
				</ListItem>
			</>
		)
	}
}

export default App