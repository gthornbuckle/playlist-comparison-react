import axios from 'axios';
import qs from 'qs';

export function spotifySearch(query){
  if (localStorage.getItem('Spotifytoken') === null) {
    getSpotifyToken();
  }else if (Date.now() > JSON.parse(localStorage.getItem('Spotifytoken')) + 3600000){
    getSpotifyToken();
  }

  let spotifyToken = JSON.parse(localStorage.getItem('Spotifytoken'));

  let config = {
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
  
  axios.request(config)
  .then((response) => {
    localStorage.setItem('Spotifytoken', JSON.stringify({token: response.data, created: Date.now()}));
  })
  .catch((error) => {
    console.log(error);
  });
}