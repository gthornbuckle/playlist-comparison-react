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
        <PlaylistInfo playlistInfo={props.playlistData} playlistTheme={playlistTheme}/>
        <div ref={scrollHorizontal} className=" basis-5/6 overflow-x-scroll">
            <PlaylistBlock trackData={props.playlistData.tracks.items} playlistTheme={playlistTheme}/>
        </div>
    </div>
    );
}

export default PlaylistWrapper;