import React, { useContext } from "react";
import TrackBlock from './TrackBlock';
import v2TestData from '../assets/testdata_tracks.json';
import GetTheme from './GetTheme'
import '../assets/Style.css'

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
        playlistTrackObj["artwork"] = e.track.album.images[0].url;
        playlistTrackObj["url"] = e.track.external_urls.spotify;

        tempPlaylist.push(playlistTrackObj);
    })
    
    return tempPlaylist;
}

function PlaylistBlock(props){

    return(
    <div className="flex flex-row">
        {generatePlaylist(props.trackData).map(track =><TrackBlock 
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