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
import { lyrics } from 'simple-get-lyrics'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // [x: string]: any;
  PL = null;
  search = {
    query1: '',
    query2: ''
  }

  AddSong = {
    lyrics : '',
    singer : '',
    videoId : '',
    videoTitle : '',
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

  errors = []


  constructor(
    private _httpService: HttpService,
    private _socket: Socket,
    private _router: Router,
    private _route: ActivatedRoute,
    private gapiService: GoogleApiService,
    private http: HttpClient
  ) {
    gapiService.onLoad().subscribe(() => {
      // Here we can use gapi
      // console.log(gapi['client']);
      gapi['client'].setApiKey(
        'AIzaSyATzcCfAIeopl21V4K7C_2vxiVTb1OFzcI');
    });
  }

  ngOnInit() {
    this._route.params
    .subscribe((params: Params) => {
      console.log("Params: ", params);
      this.roomName = params.room;
      this.socketId = params.user;
      this._httpService.getPlaylist(params.room)
        .subscribe((data:any) => {
          this.PL = data[0];
          console.log('Playlist: ', this.PL);
        })
    })
    this.lyricSearch = {
      artist: '',
      song: '',
    }

  }

  data={};
  artist;
  title;
  lyrics;

  url = 'https://api.lyrics.ovh/v1/'
  getLyrics() {
    this.http.get(this.url+this.search.query1+'/'+this.search.query2).subscribe(data => {    
        this.data = data;
        this.lyrics=data['lyrics']
        console.log(this.lyrics);
    }, err => {
      console.log(err);
     
    });
    
  }

 onSubmit(title, id) {
  this.AddSong.singer = this.socketId;
  this.AddSong.videoId = id;
  this.AddSong.videoTitle = title;
//   this.getLyrics();
//   var start = new Date().getTime();
//   var end = start;
//   while(end < start + 5) {
//     end = new Date().getTime();
//  }
  this.AddSong.lyrics = this.lyrics;
  this.PL.songs.push(this.AddSong);
  this._httpService.updatePlaylist(this.PL)
        .subscribe((data : any ) => {
          let self = this
          if(data.hasOwnProperty('errors')){
            this.errors = data.errors;
            console.log(this.errors)
            console.log('errors are here!')
          } else {
            if(self.PL.songs.length == 1){
              //play song
              this._router.navigate([`/${this.roomName}/`,'playing',`${this.socketId}`])
            } else{
              this._router.navigate([`/${this.roomName}/`,'playlist',`${this.socketId}`])
            }
            
          }
        })


  this.AddSong = {
    singer : '',
    videoId : '',
    videoTitle : '',
    lyrics : ''
  }

 }


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
          self.onSubmit(item.snippet.title, item.id.videoId);
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
    let query = this.search.query1 + ' AND ' + this.search.query2 + ' instrumental';
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


