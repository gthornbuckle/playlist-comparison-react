import React, { useState } from "react";
import PlaylistInfo from './PlaylistInfo';
import PlaylistBlock from './PlaylistBlock';
import '../assets/Style.css'

function PlaylistWrapper(props){

    return(
    <div className="playlistWrapper">
        <div className="playlistArea">
            <PlaylistBlock trackData={props.playlistData.tracks.items}/>
        </div>
    </div>
    );
}

export default PlaylistWrapper;