import React, { useState } from "react";
import TrackBlock from './TrackBlock';
import v2TestData from '../assets/testdata.json';

let playlistResponse = v2TestData.items;

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
        playlistTrackObj["title"] = e.track.name;
        playlistTrackObj["duration"] = e.track.duration_ms;
        playlistTrackObj["artistArr"] = getArtists(e.track.artists);
        playlistTrackObj["artwork"] = e.track.album.images[1].url;
        playlistTrackObj["url"] = e.track.external_urls.spotify;

        tempPlaylist.push(playlistTrackObj);
    })
    
    return tempPlaylist;
}

const PlaylistBlock = () => {
    console.log(generatePlaylist(playlistResponse));
}

export default PlaylistBlock;