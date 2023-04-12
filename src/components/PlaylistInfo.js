import { React, useContext } from "react";
import v2TestData from '../assets/testdata_info.json';
import '../assets/Style.css'

const generateInfo = arr =>{
    let tempInfo = [];

    arr.forEach(e =>{
        let infoObj = {};

        infoObj["id"] = e.id;
        infoObj["name"] = e.name;

        tempInfo.push(infoObj);
    })
    
    return tempInfo;
}

function PlaylistInfo(props){

    return(
    <div className="basis-1/6 self-center text-lg font-bold text-white text-left">
        <p>{props.playlistInfo.name}</p>
        <p>{props.playlistInfo.tracks.total} tracks</p>
        <p>Length goes here (hello)</p>
    </div>
    );
}

export default PlaylistInfo;