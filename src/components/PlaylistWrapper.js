import { React, useState } from "react";
import PlaylistInfo from './PlaylistInfo';
import PlaylistBlock from './PlaylistBlock';
import ShuffleTheme from './Themes'
import format from 'format-duration';
import { HorizontalScroll } from './HorizontalScroll'

const themes = ShuffleTheme();
let expandedInfo = ['Song Name', 'Artist', 100000, 'url', 'artwork'];

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
	const [selectedBlock, setSelectedBlock] = useState(false);

	const displayExpandedInfo = data =>{
		expandedInfo = data;
		setSelectedBlock(!selectedBlock);
	}
    
    return(
		<>
		<div className="flex flex-row">
			<div className="basis-1/6" style={{transform: "rotateX(180deg)"}}>
				{props.playlistData.map((playlist, i) =><PlaylistInfo
				key={playlist.id}
				playlistInfo={playlist} 
				playlistTheme={themes[i]}/>)}
			</div>
			<div ref={scrollHorizontal} className=" basis-5/6 overflow-x-scroll overflow-y-hidden shrink-0" style={{transform: "rotateX(180deg)"}}>
				<div className="text-teal-500 flex flex-row absolute z-10 bottom-0 pointer-events-none" style={{transform: "rotateX(180deg)"}}>
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
					playlistTheme={themes[i]}
					expandinfo={displayExpandedInfo}/>)}
				</div>
				<div className="h-[24px]"></div>
			</div>
		</div>
		<div className="fixed bottom-10 left-10 h-96 w-96 bg-pink-500 drop-shadow-lg bg-contain flex items-end" style={{backgroundImage: `url(${expandedInfo[4]})`}}>
            <div className="h-200 w-full flex flex-col items-start justify-items-end text-white bg-gradient-to-r from-black text-lg overflow-hidden">
				<p>{expandedInfo[0]}</p>
				<p>{expandedInfo[1]}</p>
				<p>{format(expandedInfo[2])}</p>
				<a href={expandedInfo[3]}>Link</a>
			</div>
		</div>
		</>
    );
}

export default PlaylistWrapper;