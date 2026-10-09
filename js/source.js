// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 


// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "");
localStorage.setItem("access_token", "");
localStorage.setItem("track_id_1", "");
localStorage.setItem("track_id_2", "");
localStorage.setItem("track_id_3", "");


function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    






    
}
load();


   

// Artist
// Lana Del Rey - https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa

// 3 Tracks
// Young and Beautiful - https://api.spotify.com/v1/tracks/2nMeu6UenVvwUktBCpLMK9?si=f45e6679f3ee4aad
// Summertime Sadness - https://api.spotify.com/v1/tracks/1Ist6PR2BZR3n2z2Y5R6S1?si=9bdc82718c4242f3
// Cinnamon Girl - https://api.spotify.com/v1/tracks/2mdEsXPu8ZmkHRRtAdC09e?si=8760c173c3f04f42

// 4 Albums
// Did you know there's a tunnel under Ocean Blvd - https://api.spotify.com/v1/albums/5HOHne1wzItQlIYmLXLYfZ
// Ultraviolence (deluxe) - https://api.spotify.com/v1/albums/1ORxRsK3MrSLvh7VQTF01F
// Norman Fucking Rockwell! - https://api.spotify.com/v1/albums/5XpEKORZ4y6OrCZSKsi46A
// Born to Die - https://api.spotify.com/v1/albums/5PW8nAtvf2HV8RYZFd4IrX


