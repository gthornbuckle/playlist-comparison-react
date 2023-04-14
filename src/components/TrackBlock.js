import React from "react";
import format from 'format-duration';

let themeColour = 1;

const getStyle = (theme, duration) =>{
    if (themeColour === 0){
        themeColour = 1;
    }else if(themeColour === 1){
        themeColour = 0;
    }

    return {width: `${Math.round(duration/1000)}px`,
            backgroundColor: theme[themeColour]}
}

function TrackBlock(props){
    return (
        <div className="relative">
            <div className="trackBlock h-[200px] text-white" style={getStyle(props.playlistTheme, props.duration)}>
                <div className="pl-5 pt-2 flex flex-col items-start text-left font-sans font-bold z-10 whitespace-nowrap overflow-hidden">
                    <p className="text-2xl">{props.name}</p>
                    <p className="text-md">{props.artists.join(' & ')}</p>
                    <p className="text-4xl">{format(props.duration)}</p>
                </div>
                <div className="bg-cover bg-center opacity-10 z-0 absolute top-0 grayscale" style= {{backgroundImage: `url(${props.artwork})`, height: 200, width: `${Math.floor(props.duration/1000)}px`}}></div>
            </div>
        </div>
    )
}

export default TrackBlock;