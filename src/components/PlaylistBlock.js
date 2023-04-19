import React from "react";
import TrackBlock from './TrackBlock';

function PlaylistBlock(props){
    
    return(
        <div className="flex flex-row shrink-0" style={{transform: "rotateX(180deg)"}}>
            {props.trackData.map((track, i) =><TrackBlock 
                key={track.id}
                id={track.id}
                name={track.name}
                duration={track.duration}
                artists={track.artistArr}
                artwork={track.artwork}
                url={track.url}
                playlistTheme={props.playlistTheme}
                expandinfo={props.expandinfo}
                trackIndex={i}/>)}
        </div>
    );
}

export default PlaylistBlock;