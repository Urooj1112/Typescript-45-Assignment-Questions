function make_album(artist_name: string, album_title: string, tracks?: number){
    let album:{artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    }

    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
// Assigning values to variables to avoid complicating 

let album1 = make_album("Artist 1" , "Album title 1" , 10);
let album2 = make_album("Artist 2" , "Album title 2" , 5);
let album3 = make_album("Artist 3" , "Album title 3");

// Printing the object

console.log(); 
console.log(album1);
console.log(); 
console.log(album2);
console.log(); 
console.log(album3);
console.log(); 