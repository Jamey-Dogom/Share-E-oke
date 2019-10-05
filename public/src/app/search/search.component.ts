import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';
// Added Activated Route and Params to get the Document
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { GoogleApiService } from 'ng-gapi/lib/GoogleApiService';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import { Title } from '@angular/platform-browser';
// import {quicklyrics} from 'quicklyrics'
// import azlyrics from 'js-azlyrics'
import { lyrics } from 'simple-get-lyrics'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  PL = null;
  search = {
    query1: '',
    query2: ''
  }

  // allPlaylistSongs = [];

  weGotResults = false;

  searchResults = [];

  gapi: any;

  newSong = {
    link: "",
    name: ""
  }

  SongId = null;
  // UserId is the Sockets ID
  socketId;
  playing = false;
  roomName;

  lyricSearch = {
    artist: '',
    song: '',
  }

  lyrics : any;

  constructor(
    private _httpService: HttpService,
    private _socket: Socket,
    private _router: Router,
    private _route: ActivatedRoute,
    private gapiService: GoogleApiService
  ) {
    gapiService.onLoad().subscribe(() => {
      // Here we can use gapi
      // console.log(gapi['client']);
      gapi['client'].setApiKey(
        'AIzaSyAStWnWGpBLHOiAJNM2KCwvME9yZmiY_SY');
    });
  }

  ngOnInit() {
    this._socket.emit("getId", (data) => {
      this._socket.on("hereBro", (data:any) => {
        this.socketId = data.id;
      });
    })
    this._route.params
      .subscribe((params: Params) => {
        this._httpService.getPlaylist({id: params.room })
          .subscribe((data:any) => {
            this.PL = data.playlist[0];
            console.log("PlayList: ", data)
          });
      });
    this.lyricSearch = {
      artist: '',
      song: '',
    }

    // this.lyrics = lyrics.search('Hindi Zahra', 'Fascination');

  //   const options = {
  //     searchEndpoint: '/azlyricssearch',
  //     mainEndpoint: '/azlyrics'
  //   };

  //   azlyrics.get('Drake energy', options).then((song) => {
  //     console.log(song);
  //     // console.log(`Lyrics for ${song.song} by ${song.artist}:\n${song.lyrics}`);
  //  });

    // console.log("hi");
//   quicklyrics("j cole", "no role modelz", function(lyrics) {
//     //lyrics in an array
//     console.log("hi");
//     // console.log(lyrics[0]);
// });




  }

  

  

  // lyricsFind() {
  //   this._route.params
  //     .subscribe((params: Params) => {
  //       let room = params.room
  //       console.log(this.lyricSearch.artist);
  //       console.log(this.lyricSearch.song);
  //       this._router.navigate(['/' + room + '/playing/' + this.lyricSearch.artist + '/' + this.lyricSearch.song])

  //     })
  // }

  // greetRoom() {
  //   this._socket.emit("greetRoom", { msg: "Hello everyone", room: this.roomName });
  //   this._socket.on("Greeting", (data) => {
  //     console.log(data);
  //   })
  // }



  // onSubmit() {
    // if there is a song playing 
    // add the song the playlist songs[]

    // send the server to emit to everyone
    // in the room that a new song was added

    // update the playlist in mongo with new song
    // let self = this


    // check if there is a song playing
    // if (this.playing) {
    //   console.log("something is playing")
    //   let nextUp = {
    //     id: this.newSong.link,
    //     name: this.newSong.name,
    //     likes: 0
    //   }
    //   this.newSong = {
    //     link: '',
    //     name: ''
    //   }
    //   if (nextUp.name != '') {
    //     this.allPlaylistSongs.push(nextUp);
    //     // Sending song back to server to emit to room
    //     this._socket.emit("nextSong", { song: nextUp, room: this.roomName });
    //   }


    //   try {
    //     console.log(self.playlist)

    //     self.playlist.songs.push(nextUp);
    //     this._socket.on("updated", (data: any) => {
    //       this.playlist = data;
    //       console.log("new playlist", this.playlist)

    //     });
    //   }
    //   catch (e) {
    //     console.log(e)
    //   }


      // this will send the playlist to the server


      // this._httpService.createSong({
      //   id: this.newSong.link,
      //   likes: [],
      //   postedBy: this.userId
      // })
      //   .subscribe((data: any) => {
      //     console.log("should be a playlist object: ", this.playlist);
      //     this.playlist.songs.push(data);
      //     console.log("should be a playlist object 2: ", this.playlist);
      //     this._httpService.updatePlaylist(this.playlist)
      //       .subscribe((data: any) => {
      //         console.log(data)
      //       });
      //   })
      // this.newSong = {
      //   link: ''
      // }
      // this._httpService.updatePlaylist(this.playlist)
      //   .subscribe(playlist => console.log(playlist));
    // }
    // if not play the song - dont append the playlist and play song
  //   else {
  //     this.SongId = this.newSong.link;
  //     this.playing = true;
  //     // Send the song to the server to tell everyone in the room to play it
  //     this._socket.emit("playThis", { songLink: this.newSong.link, room: this.roomName });
  //     this.newSong = {
  //       link: '',
  //       name: ''
  //     }
  //   }
  //   //  clear the input field

  //   //   set new song link to empty
  // }

  makeRequest(q) {
    let self = this
    console.log("hereeeee")
    this.weGotResults = true
    this.searchResults = []
    var request = gapi['client']['youtube'].search.list({
      q: q,
      part: 'snippet',
      maxResults: 10,
      type: 'video'
    });

    // console.log("hi")
    request.execute(function (response) {
      console.log("also here")
      var srchItems = response.result.items;
      // self.searchResults = self.searchResults.concat(srchItems);
      $('#results').empty()
      self.newSong.link = ''
      let counter = 1
      $.each(srchItems, function (index, item) {
        let vidTitle = item.snippet.title
        let vidThumburl = item.snippet.thumbnails.default.url;
        let vidThumbimg = '<pre><img  id="' + item.id.videoId + '" name="' + item.snippet.title + '" src="' + vidThumburl + '" alt="No  Image Available." style="width:300px;height:240px"></pre>'

        $(`#results${counter}`).append('<pre>' + '<p style = "color: #222831; text-align:center; width: 75%;">' + vidTitle + '</p>' + vidThumbimg + '<h1>➕</h1>' + '</pre>').on('click', function () {
          console.log(vidTitle);
          $("#videoInput").val(item.snippet.title);
          self.newSong.link = item.id.videoId
          self.newSong.name = item.snippet.title
        });
        counter += 1;
      })
    });
  }


  triggerEvent() {
    console.log("suhhhh")
    // var target = event.target || event.srcElement || event.currentTarget;
    // var idAttr = target.attributes.id;
    // console.log(idAttr);
  }

  myFunction() {
    console.log(this.search.query1)
    console.log(window['gapi'])
    let query = this.search.query1 + ' AND ' + this.search.query2;
    this.keyWordsearch(query);
  };

  keyWordsearch(name) {
    console.log("here");

    let self = this

    gapi['client'].load('youtube', 'v3', function () {
      console.log("here");
      let info = '{ "data": [{"name":' + `"${name}"` + '}] }';
      console.log(info);
      JSON.stringify(info);
      console.log(info);
      let data = JSON.parse(info);
      $.each(data["data"], function (index, value) {
        self.makeRequest(value["name"]);
      });

    });

  }

  playTheNextSong(currState) {
    console.log("HERE")
    this.SongId = null;
    if (currState == 0) {
      // // if (this.allPlaylistSongs.length != 0) {
      // //   console.log(this.allPlaylistSongs[0].id)
      // //   this.SongId = this.allPlaylistSongs[0].id
      // //   this.playing = true;
      // //   this.allPlaylistSongs.shift();
      // }
    }
  }


}


