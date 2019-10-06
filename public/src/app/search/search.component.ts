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
  count = 0;

  url = 'https://api.lyrics.ovh/v1/'
  getLyrics() {
    let artist = this.search.query1.split(' ').join('_')
    console.log(artist)
    let song = this.search.query2.split(' ').join('_')
    console.log(song)
  
    this.http.get(this.url+ artist +'/'+ song).subscribe(data => {    
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
  this.AddSong.lyrics = this.lyrics;
  while(this.AddSong.lyrics == '' ){
    this.count++;
  }
  console.log(this.count);
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
              console.log(self.PL);
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

  makeRequest(q) {
    this.getLyrics();
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


}


