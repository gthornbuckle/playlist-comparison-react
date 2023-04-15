import React from "react";
import format from 'format-duration';

function ExpandedInfo(props){


    return(
        <div className ="absolute z-50 inset-y-1/2 inset-x-1/4 h-fit w-1/2 bg-slate-900 text-white">
            <p>Song Title</p>
            <p>Artist</p>
            <p>Duration</p>
        </div>
    );
}

export default ExpandedInfo;