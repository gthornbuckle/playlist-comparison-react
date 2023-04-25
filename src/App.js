import './App.css';
import { React, useState, useEffect}  from 'react'
import { AnimatePresence } from 'framer-motion';
import PlaylistWrapper from './components/PlaylistWrapper';
import Menu from './components/Menu';
import initialData from './components/initial_playlist_data.json'
import PlaylistEditorWrapperDropdown from './components/PlaylistEditor/PlaylistEditorWrapperDropdown';
import AddPlaylistWrapper from './components/AddPlaylistWrapper';
import { HandleData, HandleTrack } from './components/HandleData'

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
    if(playlistArray.find(e => e.id === 'initialplaylist')){
      playlistArray.splice(0, 1);
    }
    playlistArray.push(HandleData(data));
    setPlaylists(playlistArray);
    setAdderVisible(false);
  }

  const checkInitialData = arr =>{
    console.log("Im working");
    if(arr.find(e => e.id === 'initialplaylist')){
      console.log("Initial = true");
      return true;
    } else{
      console.log("Initial = false");
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

  const addManualTrack = (obj, id) =>{
    const trackIndex = obj.trackNumber - 1;
    const newTrack = HandleTrack(obj);

    let newPlaylists = [];
    const playlistIndex = playlists.findIndex(i => i.id === id);
    console.log(playlistIndex);
    const selectedPlaylist = playlists.filter(e =>{
      return e.id === id;
    });
    const remainingPlaylists = playlists.filter(e =>{
      return e.id !== id;
    });

    remainingPlaylists.forEach(e =>{
      newPlaylists.push(e);
    });
    
    selectedPlaylist[0].tracks.splice(trackIndex, 0, newTrack);
    newPlaylists.splice(playlistIndex, 0, selectedPlaylist[0]);

    setPlaylists(newPlaylists);
  }

  const [adderVisible, setAdderVisible] = useState(checkInitialData(playlists));
  const [editorVisible, setEditorVisible] = useState(true);

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
        <PlaylistEditorWrapperDropdown
          playlistData={playlists}
          closeEditor={() =>{setEditorVisible(false)}}
          handleDeletePlaylist={deletePlaylist}
          handleAddTrack={addManualTrack}
        />
        )}
      </AnimatePresence>
      <PlaylistWrapper
        playlistData={playlists}
      />
    </div>
  );
}

export default App;
