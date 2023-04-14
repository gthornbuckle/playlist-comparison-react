import './App.css';
import React from 'react'
import SearchInfoWrapper from './components/SearchInfoWrapper';
import PlaylistWrapper from './components/PlaylistWrapper';
import v1TestData from './testdata/testdata_info_v1.json';
import v2TestData from './testdata/testdata_info_v2.json';
import track12TestData from './testdata/testdata_12tracks.json'

let playlistArray = [];

playlistArray.push(v1TestData);
playlistArray.push(v2TestData);

function App() {
  console.log(playlistArray);
  return (
    <div className="App">
      <SearchInfoWrapper/>
      <PlaylistWrapper
      playlistData={playlistArray}/>
    </div>
  );
}

export default App;
