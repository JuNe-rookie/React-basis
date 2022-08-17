/**
 * 条件渲染
 * 技术方案：三元表达式 或 逻辑与(&&)运算符
 */

// && 运算 前面是true才进行后面
function App() {
  return (
    <div className="App">
      { true && <span>这是一个span标签</span> }
    </div>
  );
}

export default App;
