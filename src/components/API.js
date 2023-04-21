import axios from 'axios';
import qs from 'qs';

export const spotifySearch = async query =>{
  let config = {};
  let spotifyToken = {};
  
  if (localStorage.getItem('Spotifytoken') === null) {
    console.log("No token found");
    spotifyToken = await getSpotifyToken();
    localStorage.setItem('Spotifytoken', JSON.stringify(spotifyToken));

  }else if (Date.now() > JSON.parse(localStorage.getItem('Spotifytoken')).created + 3600000){
    console.log("Token expired");
    spotifyToken = await getSpotifyToken();
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

const getSpotifyToken = () =>{
  console.log("Requesting new token...");
  let data = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': '3e4126f2bc784833ba1c34032f19e3f7',
    'client_secret': '194ce5bc032e4354b07bfa1c3535617b' 
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