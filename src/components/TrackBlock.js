import React from "react";
import dayjs from "dayjs";

let themeColour = 1;

const getStyle = (theme, duration) =>{
    if (themeColour === 0){
        themeColour = 1;
    }else if(themeColour === 1){
        themeColour = 0;
    }

    return {width: `${Math.floor(duration/1000)}px`,
            backgroundColor: theme[themeColour]}
}

function TrackBlock(props){
    return (
        <div className="relative">
            <div className="trackBlock h-[200px] text-white" style={getStyle(props.playlistTheme, props.duration)}>
                <div className="pl-5 flex flex-col items-start text-left font-sans font-bold">
                    <p className="text-2xl">{props.name}</p>
                    <p className="text-md">{props.artists.join(' & ')}</p>
                    <p className="text-4xl">{dayjs(props.duration).format('mm:ss')}</p>
                </div>
                <div className="bg-cover bg-center opacity-10 z-10 absolute top-0" style= {{backgroundImage: `url(${props.artwork})`, height: 200, width: `${Math.floor(props.duration/1000)}px`}}></div>
            </div>
        </div>
    )
}

export default TrackBlock;