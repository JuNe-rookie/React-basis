/**
 * 列表渲染
 * 技术方案：map
 */

const songs = [
  { id: 1, name: '丑八怪' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山安' }
]
function App() {
  return (
    <div className="App">
      <ul>
        {songs.map(song => <li key={song.id}>{song.id + 1}</li>)}
      </ul>
    </div>
  );
}

export default App;
