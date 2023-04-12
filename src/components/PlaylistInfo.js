import { React, useContext } from "react";
import v2TestData from '../assets/testdata_info.json';
import '../assets/Style.css'

const generateInfo = arr =>{
    let tempInfo = [];

    arr.forEach(e =>{
        let infoObj = {};

        infoObj["id"] = e.name;

        tempInfo.push(infoObj);
    })
    
    return tempInfo;
}

function PlaylistInfo(props){

    return(
    <div className="playlistInfo">
        <h2>Playlist Name</h2>
        <p>00:00:00</p>
    </div>
    );
}

export default PlaylistInfo;