import React from "react";
import PlaylistInfo from './PlaylistInfo';
import PlaylistBlock from './PlaylistBlock';
import ShuffleTheme from './Themes'
import { HorizontalScroll } from './HorizontalScroll'

const themes = ShuffleTheme();

const playlistLength = arr =>{
    let totalDuration = 0;

    arr.forEach(e =>{
        totalDuration += e.track.duration_ms;
    })

    return totalDuration /= 3600000;
}

const getHourDividers = arr =>{
    let playlistDurations = [];

    arr.forEach(e =>{
        playlistDurations.push(playlistLength(e.tracks.items));
    })

    const hours = [...Array(Math.ceil(Math.max(...playlistDurations))+1).keys()].slice(1);
    return hours;
}

function PlaylistWrapper(props){
    const scrollHorizontal = HorizontalScroll();
    
    return(
        <div className="flex flex-row">
            <div className="basis-1/6" style={{transform: "rotateX(180deg)"}}>
                {props.playlistData.reverse().map((playlist, i) =><PlaylistInfo
                key={playlist.id}
                playlistInfo={playlist} 
                playlistTheme={themes[i]}/>)}
            </div>
            <div ref={scrollHorizontal} className=" basis-5/6 overflow-x-scroll overflow-y-hidden shrink-0" style={{transform: "rotateX(180deg)"}}>
                <div className="text-teal-500 flex flex-row absolute z-10 bottom-0" style={{transform: "rotateX(180deg)"}}>
                    {getHourDividers(props.playlistData).map((hour, i) =><p
                    key={`hour-${i}`}
                    className="shrink-0 border-dashed border-l-2 border-white text-right pr-2 font-bold"
                    style={{width: 3600, height: `${(props.playlistData.length * 200) + 24}px`}}>
                        {hour}:00:00
                    </p>)}
                </div>
                <div>
                    {props.playlistData.map((playlist, i) =><PlaylistBlock
                    key={playlist.id}
                    trackData={playlist.tracks.items} 
                    playlistTheme={themes[i]}/>)}
                </div>
                <div className="h-[24px]"></div>
            </div>
        </div>
    );
}

export default PlaylistWrapper;