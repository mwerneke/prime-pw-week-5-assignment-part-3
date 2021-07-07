console.log('***** Music Collection *****')

let collection =[];

function addToCollection( artist, title, yearPublished){
  console.log('In the addToCollection log', artist, title, yearPublished);
    let newAlbum ={
      artist: artist,
      title: title,
      yearPublished: yearPublished,
    }
  console.log(newAlbum);
  collection.push( newAlbum);

}// end of addToCollection

addToCollection('Sam Hunt', 'Southside', 2020);
addToCollection('Metallica', 'Reload', 1997);
addToCollection('Halsey', 'Manic', 2020);
addToCollection('Bruno Mars','Unorthodox', 2020);
addToCollection( 'Michael Jackson','Thriller', 1991 );
addToCollection( 'Rhianna', 'Loud', 2010);
  console.log( collection);
// added artist,title,yearPublished

function showCollection(i){
  console.log('In the showCollection Function:', collection[i]);
  console.log('Total items in array', collection.length);
for(i in collection){
  console.log( 'Title:',collection[i].title, 'By:', collection[i].artist, 'Published:', collection[i].yearPublished);
}
//showCollection completed
}
showCollection();
//

let matchList = [];


function findByArtist(artist){
  console.log('In the findByArtist functon:', artist);
  let artistName ={
    artist:artist
}
  for( i in collection){
    if( artist === collection[i].artist){
      matchList.push(artistName);
      }

    }
}
findByArtist('Sam Hunt'); //Added to MatchList Array
  console.log('In the matchList array',matchList);
findByArtist('Metallica'); //Added to MatchList Array
  console.log('In the matchList array', matchList);
findByArtist('Aztec');  // Not a Match
  console.log('In the matchList array',matchList);
