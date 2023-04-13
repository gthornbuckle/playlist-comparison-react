import './App.css';
import React from 'react'
import SearchInfoWrapper from './components/SearchInfoWrapper';
import PlaylistWrapper from './components/PlaylistWrapper';
import v2TestData from './assets/testdata_info.json';

let response = v2TestData;

function App() {
  return (
    <div className="App">
      <SearchInfoWrapper/>
      <PlaylistWrapper
      playlistData={response}/>
    </div>
  );
}

export default App;
