import axios from 'axios';
import qs from 'qs';
import { db } from '../firebase-config';
import { getDocs, collection } from 'firebase/firestore';

const credRef = collection(db, "credentials");

const getCredential = async () =>{
  try{
    const getCred = await getDocs(credRef);
    return getCred.docs.map(e => ({...e.data()}));
    
  }catch (err){
    console.log(err);
  }
}

export const spotifySearch = async query =>{
  let spotifyCred = await getCredential();
  let config = {};
  let spotifyToken = {};
  
  if (localStorage.getItem('Spotifytoken') === null) {
    console.log("No token found");
    spotifyToken = await getSpotifyToken(spotifyCred);
    localStorage.setItem('Spotifytoken', JSON.stringify(spotifyToken));

  }else if (Date.now() > JSON.parse(localStorage.getItem('Spotifytoken')).created + 3600000){
    console.log("Token expired");
    spotifyToken = await getSpotifyToken(spotifyCred);
    localStorage.setItem('Spotifytoken', JSON.stringify(spotifyToken));

  }else{
    spotifyToken = JSON.parse(localStorage.getItem('Spotifytoken'));
  }

  config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.spotify.com/v1/playlists/${query}`,
    headers: { 
      'Authorization': `${spotifyToken.token.token_type} ${spotifyToken.token.access_token}`
    }
  };
  
  return axios.request(config)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}

const getSpotifyToken = input =>{
  console.log("Requesting new token...");
  let data = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': `${input[0].client_id}`,
    'client_secret': `${input[0].client_secret}` 
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  return axios.request(config)
  .then((response) => {
    return {token: response.data, created: Date.now()};
  })
  .catch((error) => {
    console.log(error);
  });
}