import React from 'react'


class TestComponent extends React.Component {
  // 1、定义组件状态
  state = {
    // 这里可以定义各种属性，全都是当前组件的状态
    name: 'JuNe'
  }
  // 事件回调函数
  changeName = () => {
    // 3、修改state中的状态name
    // 注意：不可以直接赋值，需要通过一个方法 setState
    this.setState({
      name: "我改了"
    })
  }
  render() {
    // 2、使用状态
    return (
      <div>
        this is TestComponent
        <br></br>
        当前name为:{this.state.name}
        <button onClick={this.changeName}>点击修改名字</button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <TestComponent />
    </div>
  )
}

export default App
