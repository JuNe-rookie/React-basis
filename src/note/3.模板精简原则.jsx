/**
 * 有状态 1 2 3
 * 1 -> h1
 * 2 -> h2
 * 3 -> h3
 */

// 模板中尽量精简，可以写嵌套三元但是没必要
const getType = (type) => {
  switch (type) {
    case 1:
      return <h1>this is h1</h1>
    case 2:
      return <h2>this is h2</h2>
    case 3:
      return <h3>this is h3</h3>
  }
}

function App() {
  return (
    <div className="App">
      {getType(2)}
    </div>
  );
}

export default App;
