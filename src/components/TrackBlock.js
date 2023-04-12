import { React, useContext } from "react";
import dayjs from "dayjs";
import '../assets/Style.css'

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
        <div className="trackBlock" style={getStyle(props.playlistTheme, props.duration)}>
            <div className="trackBlockContent">
                <div className="trackBlockText">
                    <p>{props.name}</p>
                    <p>{props.artists.join(' & ')}</p>
                    <p>{dayjs(props.duration).format('mm:ss')}</p>
                </div>
                <div className="trackBlockImg bg-center"
                    style={{backgroundImage: `url(${props.artwork})`, width: `${Math.floor(props.duration/1000)}px`}}>
                </div>

            </div>
        </div>
    )
}

export default TrackBlock;