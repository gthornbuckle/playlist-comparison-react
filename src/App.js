import './App.css';
import { React, useState, useEffect}  from 'react'
import { AnimatePresence } from 'framer-motion';
import PlaylistWrapper from './components/PlaylistWrapper';
import Menu from './components/Menu';
import initialData from './components/initial_playlist_data.json'
import PlaylistEditorWrapper from './components/PlaylistEditor/PlaylistEditorWrapper';
import AddPlaylistWrapper from './components/AddPlaylistWrapper';
import HandleData from './components/HandleData'

let playlistArray = JSON.parse(localStorage.getItem('playlists')) || [];

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
    localStorage.setItem('playlists', JSON.stringify(playlistArray));
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

  const deletePlaylist = id =>{
    console.log(`Playlist with id: ${id} will be deleted.`);
    const deletedPlaylistArray = playlists.filter(e =>{
      return e.id !== id;
    });
    setPlaylists(deletedPlaylistArray);
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
          passPlaylistData={updatePlaylistData}
        />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {editorVisible &&(
        <PlaylistEditorWrapper
          playlistData={HandleData(playlists)}
          closeEditor={() =>{setEditorVisible(false)}}
          handleDeletePlaylist={deletePlaylist}
        />
        )}
      </AnimatePresence>
      <PlaylistWrapper
        playlistData={HandleData(playlists)}
      />
    </div>
  );
}

export default App;
