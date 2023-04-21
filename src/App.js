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

function App() {
  const [playlists, setPlaylists] = useState([initialData]);

  useEffect(() =>{
    if (localStorage.getItem('playlists' === null)){
      localStorage.setItem('playlists', JSON.stringify(initialData));
    }else{
      localStorage.setItem('playlists', JSON.stringify(playlists));
    }

  }, [playlists]);

  const [adderVisible, setAdderVisible] = useState(true);
  const [editorVisible, setEditorVisible] = useState(false);

  const checkInitialData = arr =>{

    if(arr.find(e => e.id === 'initialplaylist')){
      setAdderVisible(true)
      return true
    } else{
      return false;
    }
  }

  const updatePlaylistData = data =>{
    playlistArray.push(data);
    setPlaylists(playlistArray);
    setAdderVisible(false);
  }

  return (
    <div className="App">
      <Menu 
      displayEditor={() => {setEditorVisible(true)}}
      />
      <AnimatePresence>
        {adderVisible &&(
        <AddPlaylistWrapper
        closeAdder={() =>{setAdderVisible(false)}}
        initial={() =>{checkInitialData(playlists)}}
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
