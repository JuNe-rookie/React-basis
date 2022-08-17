/**
 * jsx处理样式
 *  1、行内样式-直接style= 写在元素上
 *  2、行内样式-sytle引入一个外部对象
 *  3、类名样式-className
 */
import './app.css'

const spanStyle = {
  color: 'red',
  fontSize: 'large'
}

function App() {
  return (
    <div className="App">
      <span style={spanStyle}>this is span</span>
      <br />
      <span className='active'>测试类名样式</span>
    </div>
  );
}

export default App;
