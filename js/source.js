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
localStorage.setItem("artist_id", "00FQb4jTyendYWaN8pK0wa");
localStorage.setItem("access_token", "BQAqHh1wuEcTkfV_YbjD7RlOka9UxKjDANwE652RAK4AKDvj1326Ld4kfARFDCcUk0qfkAsZDok5ztWKBKN6uJp6ctxXNSp40NaCsoplwZUp_O8McLbUfqYWO0zCZnLHdiji-uuBr5kp");
localStorage.setItem("track_id_1", "2nMeu6UenVvwUktBCpLMK9");
localStorage.setItem("track_id_2", "1Ist6PR2BZR3n2z2Y5R6S1");
localStorage.setItem("track_id_3", "2mdEsXPu8ZmkHRRtAdC09e");
localStorage.setItem("album_id_1", "5HOHne1wzItQlIYmLXLYfZ");
localStorage.setItem("album_id_2", "1ORxRsK3MrSLvh7VQTF01F");
localStorage.setItem("album_id_3", "5XpEKORZ4y6OrCZSKsi46A");
localStorage.setItem("album_id_4", "5PW8nAtvf2HV8RYZFd4IrX");


async function getData(url, token) {
  const response = await fetch(url, {
    headers: {Authorization: `Bearer ${token}` }
  });
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}): ${url}`);
  }
  return response.json();
}

async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    let albumID1 = localStorage.getItem("album_id_1");
    let albumID2  = localStorage.getItem("album_id_2");
    let albumID3 = localStorage.getItem("album_id_3");
    let albumID4 = localStorage.getItem("album_id_4");
    
  try {
    const artist = await getData(`https://api.spotify.com/v1/artists/${artistID}`, accessToken);
    document.querySelector("#artist-name").textContent = artist.name;
    document.querySelector(".artist-image img").src = artist.images[0].url;

    // tracks
    const trackIDs = [trackID1, trackID2, trackID3];
    const trackElements = document.querySelectorAll(".track");
    for (let i = 0; i < trackIDs.length; i++) {
      const track = await getData(`https://api.spotify.com/v1/tracks/${trackIDs[i]}`, accessToken);
      const elm = trackElements[i];
      elm.querySelector("img").src = track.album.images[0].url;
      elm.querySelector(".track-title").textContent = track.name;
      elm.querySelector(".track-album").textContent = track.album.name;
      elm.querySelector(".track-number").textContent = track.track_number;
      elm.querySelector(".track-duration").textContent = convertMsToMinSec(track.duration_ms);

    }

    // albums
    const albumIDs = [albumID1, albumID2, albumID3, albumID4];
    const albumElements = document.querySelectorAll(".album-card");
    for (let i = 0; i < albumIDs.length; i++) {
      const album = await getData(`https://api.spotify.com/v1/albums/${albumIDs[i]}`, accessToken);
      const elm = albumElements[i];
      elm.querySelector("img").src = album.images[0].url;
      elm.querySelector("h3").textContent = album.name;
      const year = album.release_date.slice(0, 4);
      elm.querySelector("p").textContent = `${year} • ${album.album_type}`;

    }

  } catch(error) {
    console.error(error);
  }

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


