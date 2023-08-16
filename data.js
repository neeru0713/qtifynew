// Function to generate a random duration between 1 and 10 minutes
function generateRandomDuration() {
  const minutes = Math.floor(Math.random() * 10) + 1;
  const seconds = Math.floor(Math.random() * 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Generate an array of 50 albums
let albums = [];
for (let i = 1; i <= 50; i++) {
  let album = {
    name: `Album ${i}`,
    followers: Math.floor(Math.random() * 1000) + 1,
    songs: [],
  };

  for (let j = 1; j <= 40; j++) {
    let song = {
      name: `Song ${j}`,
      artist: `Artist ${j}`,
      duration: generateRandomDuration(),
    };
    album.songs.push(song);
  }

  albums.push(album);
}

// console.log(albums);
console.log(JSON.stringify(albums, null, 4));
