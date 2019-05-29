var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three",},
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
                    for(var p in this.playlists){
                      console.log(p,":",this.playlists[p]['name'],"-",this.playlists[p]['tracks'].length,'tracks');
                    }
                  },
  printTracks: function(){
                for(var t in this.tracks){
                  console.log(t,":",this.tracks[t]['name'],"by",this.tracks[t]['artist'],'(',this.tracks[t]['album'],')');
                }
              },
  printPlaylist: function(){
                console.log(playlistId,':',this.playlists[playlistId].name,
                  '-', this.playlists[playlistId]['tracks'].length, 'tracks');
                for(var t in this.playlists[playlistId].tracks){
                //  console.log(t);
                  var tId = this.playlists[playlistId].tracks[t];
                  // console.log(tId);
                  console.log(this.playlists[playlistId].tracks[t],':',
                    this.tracks[tId].name, 'by',
                    this.tracks[tId].artist, '(',
                    this.tracks[tId].album, ')');
                  // console.log(library.playlists[playlistId])
                }
              },
  addTrackToPlaylist: function(){
                        this.playlists[playlistId].tracks.push(trackId);
                      },
  addTrack: function(){
              var tId = uid();
              // console.log(typeof(tId));

              this.tracks[tId] = {
                id : '',
                name : '',
                artist : '',
                album : ''
              }
              // console.log(typeof(library.tracks[tId]));
              this.tracks[tId].id = tId;
              this.tracks[tId].name = name;
              this.tracks[tId].artist = artist;
              this.tracks[tId].album = album;
            },
  addPlaylist: function(name){
              var pId = uid();

              this.playlists[pId] = {
                id: '',
                name: '',
                tracks: []
              }

              this.playlists[pId].id = pId;
              this.playlists[pId].name = name;
              }

}

/*
FUNCTIONS TO IMPLEMENT:

prints a list of all playlists, in the form:
p01: Coding Music - 2 tracks
p02: Other Playlist - 1 tracks
*/

/*var  printPlaylists = function () {
  for(var p in library.playlists){
    // console.log(p);
    // console.log(library['playlists'][p])
    console.log(p,":",library.playlists[p]['name'],"-",library.playlists[p]['tracks'].length,'tracks');
  }
}*/


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

/*var printTracks = function () {
  for(var t in library.tracks){
    console.log(t,":",library.tracks[t]['name'],"by",library.tracks[t]['artist'],'(',library.tracks[t]['album'],')');
  }
}*/


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

/*var printPlaylist = function (playlistId) {
  console.log(playlistId,':',library.playlists[playlistId].name,
  '-', library.playlists[playlistId]['tracks'].length, 'tracks');
  for(var t in library.playlists[playlistId].tracks){
  //  console.log(t);
    var tId = library.playlists[playlistId].tracks[t];
    // console.log(tId);
    console.log(library.playlists[playlistId].tracks[t],':',
      library.tracks[tId].name, 'by',
      library.tracks[tId].artist, '(',
      library.tracks[tId].album, ')');
    // console.log(library.playlists[playlistId])
  }
}*/


// adds an existing track to an existing playlist

/*var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
}*/


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
/*
var addTrack = function (name, artist, album) {
  var tId = uid();
  // console.log(typeof(tId));

  library.tracks[tId] = {
    id : '',
    name : '',
    artist : '',
    album : ''
  }
  // console.log(typeof(library.tracks[tId]));
  library.tracks[tId].id = tId;
  library.tracks[tId].name = name;
  library.tracks[tId].artist = artist;
  library.tracks[tId].album = album;
}
*/

// adds a playlist to the library
/*
var addPlaylist = function (name) {
  var pId = uidthisplaylists[pId] = {
    id: '',
    name: '',
    tracks: []
  }

  library.playlists[pId].id = pId;
  library.playlists[pId].name = name;
}*/


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}

library.addPlaylist('best pl');
// addTrackToPlaylist('t03','p01');
library.printPlaylists();
// console.log(uid());