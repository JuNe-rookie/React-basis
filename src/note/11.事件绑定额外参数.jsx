import React from 'react'

// // 函数组件
// function Hello() {
//   // 需要一个参数
//   function clickHandler(msg) {
//     console.log(msg)
//   }

//   return (
//     // 绑定事件写成箭头函数，传递实参
//     <div onClick={() => clickHandler("这是点击事件的实参")}>
//       这是div
//     </div>
//   )
// }

// 函数组件
function Hello() {
  // 需要一个参数，自定义参数和事件对象e的顺序要和事件中的顺序一致
  function clickHandler(e, msg) {
    console.log("事件对象e：" ,e);
    console.log(msg)
  }

  return (
    // 既要自定义参数，又要事件对象e
    <div onClick={(e) => clickHandler("这是点击事件的实参", e)}>
      这是div
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
