import './App.css';
import PlaylistBlock from './components/PlaylistBlock';
import './assets/Style.css'

function App() {
  return (
    <div className="App">
      <div className="playlistArea">
        <PlaylistBlock
        id={1}/>
      </div>
    </div>
  );
}

export default App;
