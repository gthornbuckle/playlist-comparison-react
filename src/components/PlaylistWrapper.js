import React from "react";
import PlaylistInfo from './PlaylistInfo';
import PlaylistBlock from './PlaylistBlock';
import GetTheme from './GetTheme'

const playlistTheme = GetTheme();

function PlaylistWrapper(props){

    return(
    <div className="flex flex-row">
        <PlaylistInfo playlistInfo={props.playlistData} playlistTheme={playlistTheme}/>
        <div className=" basis-5/6 overflow-x-scroll">
            <PlaylistBlock trackData={props.playlistData.tracks.items} playlistTheme={playlistTheme}/>
        </div>
    </div>
    );
}

export default PlaylistWrapper;