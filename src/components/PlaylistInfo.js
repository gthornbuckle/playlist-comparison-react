import React from "react";
import dayjs from "dayjs";

const playlistLength = arr =>{
    let totalDuration = 0;

    arr.forEach(e =>{
        totalDuration += e.track.duration_ms;
    })

    return totalDuration;
}

function PlaylistInfo(props){
    console.log(props.playlistInfo.tracks.items);
    return(
    <div className="basis-1/6 self-auto text-lg font-bold text-white pl-2 pr-5 flex flex-col items-start justify-between text-left font-sans"
    style={{backgroundColor: props.playlistTheme[2]}}>
        <p className="text-2xl pt-4">{props.playlistInfo.name}</p>
        <p className="text-md">{props.playlistInfo.tracks.total} tracks</p>
        <p className="text-4xl pb-4">{dayjs(playlistLength(props.playlistInfo.tracks.items)).format('hh:mm:ss')}</p>
    </div>
    );
}

export default PlaylistInfo;