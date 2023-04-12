import React, { useState } from "react";
import PlaylistInfo from './PlaylistInfo';
import PlaylistBlock from './PlaylistBlock';
import '../assets/Style.css'

function PlaylistWrapper(props){

    return(
    <div className="flex flex-row">
        <PlaylistInfo playlistInfo={props.playlistData}/>
        <div className=" basis-5/6 px-1 overflow-x-scroll">
            <PlaylistBlock trackData={props.playlistData.tracks.items}/>
        </div>
    </div>
    );
}

export default PlaylistWrapper;