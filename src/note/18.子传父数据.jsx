import React from 'react'
/**
 * App 父组件
 * Son 子组件
 */

function Son(props) {
  const { getSonMsg } = props
  function clickHandler() {
    getSonMsg("来自子组件的时间")
  }
  return (
    <div>
      this is Son
      <button onClick={clickHandler}>点击</button>
    </div>
  )
}

class App extends React.Component {
  // 准备一个函数，传给子组件
  getSonMsg = (sonMsg) => {
    alert(sonMsg)
  }
  render() {
    return (
      <div>
        <Son getSonMsg={this.getSonMsg} />
      </div>
    )
  }
}

export default App