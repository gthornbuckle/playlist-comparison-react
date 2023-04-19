import React from "react";
import format from 'format-duration';

function PlaylistInfo(props){

    return(
    <div className="font-bold text-white pl-2 pr-5 flex flex-col text-left font-sans h-[200px]"
    style={{backgroundColor: props.playlistTheme[2], transform: "rotateX(180deg)"}}>
        <p className="text-2xl pt-4">{props.playlistName}</p>
        <p className="text-md">{props.playlistLength} tracks</p>
        <p className="text-4xl pb-4">{format(props.playlistDuration)}</p>
    </div>
    );
}

export default PlaylistInfo;