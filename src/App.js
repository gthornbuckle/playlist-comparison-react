import './App.css';
import { React, useState, useEffect}  from 'react'
import { AnimatePresence } from 'framer-motion';
import PlaylistWrapper from './components/PlaylistWrapper';
import Menu from './components/Menu';
// import v1TestData from './testdata/testdata_info_v1.json';
// import v2TestData from './testdata/testdata_info_v2.json';
// import track12TestData from './testdata/testdata_12tracks.json'
import initialData from './components/initial_playlist_data.json'
import PlaylistEditorWrapper from './components/PlaylistEditor/PlaylistEditorWrapper';
import AddPlaylistWrapper from './components/AddPlaylistWrapper';
import HandleData from './components/HandleData'

let playlistArray = [];

// playlistArray.push(v1TestData);
// playlistArray.push(v2TestData);

// checkInitialData(playlists);

function App() {
  const checkData = () =>{
    if (localStorage.getItem('playlists') === null){
      return [initialData];
    }else{
      return JSON.parse(localStorage.getItem('playlists'));
    }
  }

  const [playlists, setPlaylists] = useState(checkData());

  useEffect(() =>{
    localStorage.setItem('playlists', JSON.stringify(playlists));

  }, [playlists]);

  const updatePlaylistData = data =>{
    playlistArray.push(data);
    setPlaylists(playlistArray);
    setAdderVisible(false);
  }

  const checkInitialData = arr =>{
    console.log("Im working");
    if(arr.find(e => e.id === 'initialplaylist')){
      return true;
    } else{
      return false;
    }
  }

  const [adderVisible, setAdderVisible] = useState(checkInitialData(playlists));
  const [editorVisible, setEditorVisible] = useState(false);

  return (
    <div className="App">
      <Menu 
      displayAdder={() => {setAdderVisible(true)}}
      displayEditor={() => {setEditorVisible(true)}}
      />
      <AnimatePresence>
        {adderVisible &&(
        <AddPlaylistWrapper
        closeAdder={() =>{setAdderVisible(false)}}
        initial={playlists.find(e => e.id === 'initialplaylist') ? true : false}
        passPlaylistData={updatePlaylistData}/>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {editorVisible &&(
        <PlaylistEditorWrapper
        playlistData={HandleData(playlists)}
        closeEditor={() =>{setEditorVisible(false)}}/>
        )}
      </AnimatePresence>
      <PlaylistWrapper
      playlistData={HandleData(playlists)}/>
    </div>
  );
}

export default App;
