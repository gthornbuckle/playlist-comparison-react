import React from "react";
import dayjs from "dayjs";
import PlaylistInfo from './PlaylistInfo';
import PlaylistBlock from './PlaylistBlock';
import ShuffleTheme from './Themes'
import { HorizontalScroll } from './HorizontalScroll'

const themes = ShuffleTheme();

// const hours = [1,2,3,4,5,6,7,8,9,10,11,12]
const hours = [
    '01:00:00',
    '02:00:00',
    '03:00:00',
    '04:00:00',
    '05:00:00',
    '06:00:00',
    '07:00:00',
    '08:00:00',
    '09:00:00',
    '10:00:00',
    '11:00:00',
    '12:00:00'
]

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
            <div ref={scrollHorizontal} className=" basis-5/6 overflow-x-scroll overflow-y-hidden" style={{transform: "rotateX(180deg)"}}>
                <div className="text-teal-500 flex flex-row absolute z-10 bottom-0" style={{transform: "rotateX(180deg)"}}>
                    {hours.map((hour, i) =><p
                    key={`hour-${i}`}
                    className="shrink-0 border-dashed border-l-2 border-white text-right pr-2 font-bold"
                    style={{width: 3600, height: `${(props.playlistData.length * 200) + 24}px`}}>
                        {hour}
                    </p>)}
                </div>
                <div>
                    {props.playlistData.map((playlist, i) =><PlaylistBlock
                    key={playlist.id}
                    trackData={playlist.tracks.items} 
                    playlistTheme={themes[i]}/>)}
                </div>
                <div className="h-[24px] bg-slate-900" style={{width: `${3600*12}px`}}></div>
            </div>
        </div>
    );
}

export default PlaylistWrapper;