import React from 'react'

// 函数组件
function Hello() {
  // 传入形参e即可
  function clickHandler(e) {
    // 阻止默认行为
    e.preventDefault()
    console.log("函数组件被触发了", e)
  }

  return (
    <div>
      <a href='http://www.baidu.com' onClick={clickHandler}>百度</a>
    </div>
  )
}


function App() {
  return (
    // 渲染
    <>
      <Hello />
    </>
  )
}

export default App
