import './App.css';
import { React, useState, useEffect}  from 'react'
import { AnimatePresence } from 'framer-motion';
import PlaylistWrapper from './components/PlaylistWrapper';
import Menu from './components/Menu';
import initialData from './components/initial_playlist_data.json'
import PlaylistEditorWrapperDropdown from './components/PlaylistEditor/PlaylistEditorWrapperDropdown';
import AddPlaylistWrapper from './components/AddPlaylistWrapper';
import { HandleData, HandleTrack, NewTrackAdded } from './components/HandleData'
import PlaylistExistsModal from './components/PlaylistExistsModal';

function App() {
  const checkData = () =>{
    if (localStorage.getItem('playlists') === null){
      return [initialData];
    }else{
      return JSON.parse(localStorage.getItem('playlists'));
    }
  }

  const [playlists, setPlaylists] = useState(checkData());
  const [existsModalVisible, setExistsModalVisible] = useState(false);


  useEffect(() =>{
    localStorage.setItem('playlists', JSON.stringify(playlists));

  }, [playlists]);

  const updatePlaylistData = data =>{
    let playlistArray = JSON.parse(localStorage.getItem('playlists'));
    if(playlistArray.find(e => e.id === 'initialplaylist')){
      console.log("Removing initial playlist data...");
      playlistArray.splice(0, 1);
    } else{
      const exists = playlists.some(e => e.id === data[0].id);
        if(exists){
          setExistsModalVisible(true);
          return;
        }
    }
    playlistArray.push(HandleData(data));
    setPlaylists(playlistArray);
    setAdderVisible(false);
  }

  const checkInitialData = arr =>{
    if(arr.find(e => e.id === 'initialplaylist')){
      return true;
    } else{
      return false;
    }
  }

  const deletePlaylist = id =>{
    if(playlists.length === 1){
      setPlaylists([initialData]);
      setEditorVisible(false);
      setAdderVisible(true);
      return;
    }

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
    newPlaylists.splice(playlistIndex, 0, NewTrackAdded(selectedPlaylist[0]));

    setPlaylists(newPlaylists);
  }

  const reorderPlaylist = (data, id) =>{
    let newPlaylists = [];
    const playlistIndex = playlists.findIndex(i => i.id === id);
    const selectedPlaylist = playlists.filter(e =>{
      return e.id === id;
    });
    const remainingPlaylists = playlists.filter(e =>{
      return e.id !== id;
    });

    remainingPlaylists.forEach(e =>{
      newPlaylists.push(e);
    });
    selectedPlaylist[0].tracks = data;
    console.log(selectedPlaylist);
    newPlaylists.splice(playlistIndex, 0, NewTrackAdded(selectedPlaylist[0]));
    setPlaylists(newPlaylists);
    setEditorVisible(false);
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
        {existsModalVisible &&(
          <PlaylistExistsModal
          closeModal={() =>{setExistsModalVisible(false)}}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {editorVisible &&(
        <PlaylistEditorWrapperDropdown
          key={playlists}
          playlistData={playlists}
          closeEditor={() =>{setEditorVisible(false)}}
          handleDeletePlaylist={deletePlaylist}
          handleAddTrack={addManualTrack}
          updateOrder={reorderPlaylist}
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
