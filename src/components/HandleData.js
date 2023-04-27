const playlistLength = (type, arr) =>{
    let totalDuration = 0;
    console.log(type);
    if(type === "spotify"){
        arr.forEach(e =>{
            if(e.track === null){
                return;
            }else {
            totalDuration += e.duration;
            }
        })
    }else if(type === "manualtrack"){
        arr.forEach(e =>{
            totalDuration += e.duration;
        })
    }
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
    let playListObj = {}

    playListObj["id"] = arr[0].id;
    playListObj["name"] = arr[0].name;

    if(arr.length === 1){
        playListObj["tracks"] = getTracks(arr[0].tracks.items);
    }
    else if (arr.length > 1){
        let firstTracks = getTracks(arr[0].tracks.items);

        arr.slice(1).forEach(e =>{
            let additionalTracks = getTracks(e.items);
            additionalTracks.forEach(e =>{firstTracks.push(e)});
        })

        playListObj["tracks"] = firstTracks;
    }

    playListObj["totalTracks"] = playListObj.tracks.length;
    playListObj["totalDuration"] = playlistLength("spotify", playListObj.tracks);

    return playListObj;
    
}

export function HandleTrack(obj){
    let trackObj = {};

    trackObj["id"] = `man-${generateTrackID()}`;
    trackObj["name"] = obj.name;
    trackObj["duration"] = formatDuration(obj.durationMin, obj.durationSec);
    trackObj["artistArr"] = [obj.artist];
    trackObj["artwork"] = obj.artwork;
    trackObj["url"] = obj.url;

    return trackObj;
}

export function NewTrackAdded(obj){
    obj.totalTracks = obj.tracks.length;
    obj.totalDuration = playlistLength("manualtrack", obj.tracks);

    return obj;
}
