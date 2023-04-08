import React, { useState } from "react";
import TrackBlock from './TrackBlock';
import v2TestData from '../assets/testdata.json';
import GetTheme from './GetTheme'
import '../assets/Style.css'

let playlistResponse = v2TestData.items;

const playlistTheme = GetTheme();

const generatePlaylist = arr =>{
    let tempPlaylist = [];

    const getArtists = arr =>{
        let tempArtists = [];

        arr.forEach(artist =>{
            tempArtists.push(artist.name);
        })

        return tempArtists;
    }

    arr.forEach(e =>{
        let playlistTrackObj = {};

        playlistTrackObj["id"] = e.track.id;
        playlistTrackObj["name"] = e.track.name;
        playlistTrackObj["duration"] = e.track.duration_ms;
        playlistTrackObj["artistArr"] = getArtists(e.track.artists);
        playlistTrackObj["artwork"] = e.track.album.images[1].url;
        playlistTrackObj["url"] = e.track.external_urls.spotify;

        tempPlaylist.push(playlistTrackObj);
    })
    
    return tempPlaylist;
}

function PlaylistBlock(props){
    console.log(generatePlaylist(playlistResponse));

    return(
    <div className="playlistBlock">
        {generatePlaylist(playlistResponse).map(track =><TrackBlock 
            key={track.id}
            id={track.id}
            name={track.name}
            duration={track.duration}
            artists={track.artistArr}
            artwork={track.artwork}
            url={track.url}
            playlistTheme={playlistTheme}/>)}
    </div>
    );
}

export default PlaylistBlock;