import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3, 4],
    person: {
      name: 'june',
      age: 20,
    }
  }
  // 回调函数
  changeCount = () => {
    this.setState({
      // 取值也要是this.state.xxxx
      count: this.state.count + 1
    })
  }
  changeList = () => {
    this.setState({
      list: [...this.state.list, 5]
    })
  }

  changeObj = () => {
    this.setState({
      person: {
        ...this.state.person,
        name: "中文名"
      }
    })
  }
  render() {
    return (
      <>
        <div>
          {this.state.count}
          <br></br>
          <button onClick={this.changeCount}>点击+1</button>
        </div>
        <hr />
        <div>
          <ul>
            {this.state.list.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <button onClick={this.changeList}>点击添加数组</button>
        </div>
        <hr />
        <div>
          <p>{this.state.person.name}</p>
          <button onClick={this.changeObj}>点击显示中文名</button>
        </div>
      </>
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
