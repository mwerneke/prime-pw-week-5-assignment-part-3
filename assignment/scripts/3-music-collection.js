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
  console.log( collection);
addToCollection('Metallica', 'Reload', 1997);
  console.log( collection);
addToCollection('Halsey', 'Manic', 2020);
  console.log( collection);
addToCollection('Bruno Mars','Unorthodox', 2020);
  console.log( collection);
addToCollection( 'Michael Jackson','Thriller', 1991 );
  console.log( collection);
addToCollection( 'Rhianna', 'Loud', 2010);
  console.log( collection);
