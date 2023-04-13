import React from "react";
import PlaylistInfo from './PlaylistInfo';
import PlaylistBlock from './PlaylistBlock';
import GetTheme from './GetTheme'
import { HorizontalScroll } from './HorizontalScroll'

const playlistTheme = GetTheme();

function PlaylistWrapper(props){
    const scrollHorizontal = HorizontalScroll();

    return(
    <div className="flex flex-row">
        <div className="basis-1/6 flex flex-col justify-stretch">
            {props.playlistData.map(playlist =><PlaylistInfo
            key={playlist.id}
            playlistInfo={playlist} 
            playlistTheme={playlistTheme}/>)}
        </div>
        <div ref={scrollHorizontal} className=" basis-5/6 overflow-x-scroll overflow-y-hidden">
            {props.playlistData.map(playlist =><PlaylistBlock
            key={playlist.id}
            trackData={playlist.tracks.items} 
            playlistTheme={playlistTheme}/>)}
        </div>
    </div>
    );
}

export default PlaylistWrapper;