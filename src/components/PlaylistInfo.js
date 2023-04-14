import React from "react";
import format from 'format-duration';

const playlistLength = arr =>{
    let totalDuration = 0;

    arr.forEach(e =>{
        totalDuration += e.track.duration_ms;
    })
    console.log(totalDuration);

    return totalDuration;
}

function PlaylistInfo(props){

    return(
    <div className="font-bold text-white pl-2 pr-5 flex flex-col text-left font-sans h-[200px]"
    style={{backgroundColor: props.playlistTheme[2], transform: "rotateX(180deg)"}}>
        <p className="text-2xl pt-4">{props.playlistInfo.name}</p>
        <p className="text-md">{props.playlistInfo.tracks.total} tracks</p>
        <p className="text-4xl pb-4">{format(playlistLength(props.playlistInfo.tracks.items))}</p>
    </div>
    );
}

export default PlaylistInfo;