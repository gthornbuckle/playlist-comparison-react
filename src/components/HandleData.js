const playlistLength = arr =>{
    let totalDuration = 0;

    arr.forEach((e, i) =>{
        if(e.track === null){
            console.log(`Track number ${i + 1} is null`);
            return;
        }else {
        totalDuration += e.track.duration_ms;
        }
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

    arr.forEach((e, i) =>{
        let playlistTrackObj = {};
        if(e.track === null){
            console.log(`Track number ${i + 1} is null`);
            return;
        }else {
            playlistTrackObj["id"] = e.track.id;
            playlistTrackObj["name"] = e.track.name;
            playlistTrackObj["duration"] = e.track.duration_ms;
            playlistTrackObj["artistArr"] = getArtists(e.track.artists);
            playlistTrackObj["artwork"] = e.track.album.images[0].url;
            playlistTrackObj["url"] = e.track.external_urls.spotify;
    
            tempPlaylist.push(playlistTrackObj);
        }
    })
    
    return tempPlaylist;
}

const generateTrackID = () =>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let id = "";
    let i = 0;

    while(i < 8){
        id += characters.charAt(Math.floor(Math.random() * characters.length));
        i+=1;
    }
    return id;
}

const formatDuration = (min, sec) =>{
    let minToMs = parseInt(min);
    let secToMs = parseInt(sec);

    return (minToMs * 60000) + (secToMs * 1000);
}

export function HandleData(arr){
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
                tracks: getTracks(e.tracks?.items)
            };
    
            playlistData.push(playListObj)
        })
    
        return playlistData;
    }
}

export function HandleTrack(obj){
    let trackObj = {};

    trackObj["id"] = `man-${generateTrackID()}`;
    trackObj["name"] = obj.name;
    trackObj["duration"] = formatDuration(obj.durationMin, obj.durationSec);
    trackObj["artistArr"] = obj.artist;
    trackObj["artwork"] = obj.artwork;
    trackObj["url"] = obj.url;

    console.log(trackObj);
}
