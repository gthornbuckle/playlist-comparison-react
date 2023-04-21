const playlistLength = arr =>{
    let totalDuration = 0;

    arr.forEach(e =>{
        totalDuration += e.track.duration_ms;
    })

    return totalDuration;
}

const getTracks = arr =>{
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

export default function HandleData(arr){
    if(arr.find(e => e.id === 'initialplaylist')){
        console.log("Initial Data Found");
    }else{
        let playlistData = [];

        arr.forEach(e =>{
            
            let playListObj = {
                id: e.id,
                name: e.name,
                totalTracks: e.tracks.items.length,
                totalDuration: playlistLength(e.tracks.items),
                tracks: getTracks(e.tracks.items)
            };
    
            console.log(playListObj)
            playlistData.push(playListObj)
        })
    
        return playlistData;
    }
}
