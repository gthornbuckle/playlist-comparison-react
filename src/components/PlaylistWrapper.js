import React from "react";
import PlaylistInfo from './PlaylistInfo';
import PlaylistBlock from './PlaylistBlock';
import GetTheme from './GetTheme'
import { HorizontalScroll } from './HorizontalScroll'



function PlaylistWrapper(props){
    const scrollHorizontal = HorizontalScroll();

    return(
    <div className="flex flex-row">
        <div className="basis-1/6">
            {props.playlistData.map(playlist =><PlaylistInfo
            key={playlist.id}
            playlistInfo={playlist} 
            playlistTheme={GetTheme()}/>)}
        </div>
        <div ref={scrollHorizontal} className=" basis-5/6 overflow-x-scroll overflow-y-hidden">
            {props.playlistData.map(playlist =><PlaylistBlock
            key={playlist.id}
            trackData={playlist.tracks.items} 
            playlistTheme={GetTheme()}/>)}
        </div>
    </div>
    );
}

export default PlaylistWrapper;