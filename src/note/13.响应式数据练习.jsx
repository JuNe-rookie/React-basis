import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0,
  }
  // 回调函数
  changeCount = () => {
    this.setState({
      // 取值也要是this.state.xxxx
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        {this.state.count}
        <br></br>
        <button onClick={this.changeCount}>点击+1</button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
