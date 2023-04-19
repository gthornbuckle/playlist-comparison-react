import './App.css';
import { React, useState}  from 'react'
import SearchInfoWrapper from './components/SearchInfoWrapper';
import PlaylistWrapper from './components/PlaylistWrapper';
import Menu from './components/Menu';
import v1TestData from './testdata/testdata_info_v1.json';
import v2TestData from './testdata/testdata_info_v2.json';
import track12TestData from './testdata/testdata_12tracks.json'
import PlaylistEditorWrapper from './components/PlaylistEditorWrapper';
import HandleData from './components/HandleData'

let playlistArray = [];

playlistArray.push(v1TestData);
playlistArray.push(v2TestData);

// HandleData(playlistArray);

function App() {
  const [editorVisible, setEditorVisible] = useState(false);

  console.log(HandleData(playlistArray));
  return (
    <div className="App">
      <Menu 
      displayEditor={() => {setEditorVisible(true)}}
      editorActive={editorVisible}/>
      {editorVisible &&(
      <PlaylistEditorWrapper
      playlistData={playlistArray}/>
      )}
      <PlaylistWrapper
      playlistData={HandleData(playlistArray)}/>
    </div>
  );
}

export default App;
