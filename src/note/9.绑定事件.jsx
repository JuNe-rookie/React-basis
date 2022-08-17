import React from 'react'

// 函数组件
function Hello() {
  function clickHandler() {
    alert("函数组件中的事件被触发了")
  }
  return <div onClick={clickHandler}>函数组件</div>
}

// 类组件
class Say extends React.Component {
  // 事件回掉函数（标准写法，避免this指向问题）
  cilckHandler = () => {
    alert("类组件中的事件被触发了")
  }
  render() {
    return <button onClick={this.cilckHandler}>类组件</button>
  }
}

function App() {
  return (
    // 渲染
    <>
      <Hello />
      <Say />
    </>
  )
}

export default App
