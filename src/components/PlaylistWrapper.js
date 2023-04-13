import React from "react";
import PlaylistInfo from './PlaylistInfo';
import PlaylistBlock from './PlaylistBlock';
import ShuffleTheme from './Themes'
import { HorizontalScroll } from './HorizontalScroll'

const themes = ShuffleTheme();

function PlaylistWrapper(props){
    const scrollHorizontal = HorizontalScroll();

    return(
    <div className="flex flex-row">
        <div className="basis-1/6">
            {props.playlistData.map((playlist, i) =><PlaylistInfo
            key={playlist.id}
            playlistInfo={playlist} 
            playlistTheme={themes[i]}/>)}
        </div>
        <div ref={scrollHorizontal} className=" basis-5/6 overflow-x-scroll overflow-y-hidden">
            {props.playlistData.map((playlist, i) =><PlaylistBlock
            key={playlist.id}
            trackData={playlist.tracks.items} 
            playlistTheme={themes[i]}/>)}
        </div>
    </div>
    );
}

export default PlaylistWrapper;