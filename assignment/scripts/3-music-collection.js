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
//console.log( collection);
// added artist,title,yearPublished

function showCollection(info){
  console.log('In the showCollection Function:', collection[info]);
  console.log('Total items in array', collection.length);
for(info in collection){
  console.log( 'Title:',collection[info].title, 'By:', collection[info].artist, 'Published:', collection[info].yearPublished);
}
//showCollection completed
}
showCollection();
//

let matchList = [];


function findByTitle(title){
  console.log('In the findByTitle functon:', title);
  let titleName ={
    title:title
}
  for( i in collection){
    if( title === collection[i].title){
      matchList.push(titleName);
      }

    }
}
findByTitle('Reload'); //Added to MatchList Array
  console.log('In the matchList array',matchList);
findByTitle('Thriller'); //Added to MatchList Array
  console.log('In the matchList array', matchList);
findByTitle('Loud');  // Not a Match
  console.log('In the matchList array',matchList);

//Match list complete
