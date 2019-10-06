import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { Output, Input, EventEmitter } from '@angular/core';

import { HttpService } from '../http.service';
import { DataServiceService } from '../data-service.service';

// Added Activated Route and Params to get the Document
import { ActivatedRoute, Params, Router } from '@angular/router';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';
// Webcam Dependencies
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WebcamImage } from 'ngx-webcam';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css'],
//   template: `
//   <youtube-player
// [videoId]="id"
// (ready)="savePlayer($event)"
// (change)="onStateChange($event)"
// ></youtube-player>
// `

})
export class PlayingComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  video: any;
  MediaRecorder: any;
  chunks = [];
  clip: any;

  // SubScription
  sub: Subscription;
  STR;


export class PlayingComponent implements OnInit {
  title = 'app'
  id = '';
  socketId;
  PL = null;
  shouldRun = true;
  roomName;
  private player;
  private ytEvent;
  @Output() playTheNextSong = new EventEmitter();
  currState: any;

  @Input() videoID: String;
  it: String;
  counter = 0;
  autoPlay: String = "?autoplay=1"
  videoString: string = "https://www.youtube.com/embed/";

  ngOnChanges() {
    console.log("CHANGE")
    if(this.counter <= 9){
      this.it = this.videoID;
    }
  }

  onStateChange(event) {
    console.log(this.videoID)
    let self = this
    this.ytEvent = event.data;
    if(event.data == 0 && this.PL.songs.length > 0){
      console.log("OVER");
      this.currState = event.data
      this.playTheNextSong.emit(this.currState);
      console.log(this.videoID)
      console.log(this.it)
      this.it = this.PL.songs.shift()
      JSON.stringify(this.it)
      this.player.loadVideoById(this.it);
      this.counter = 0;
    }
    // this.playVideo();
    this.currState = 1
   
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _socket: Socket,
    private _httpService: HttpService,
    private _dataService: DataServiceService,
  ) { }

  ngOnInit() {
    // Get room name from URL, save above and send to server to join room.
    this._route.params
      .subscribe((params: Params) => {
        console.log("Params: ", params);
        this.roomName = params.room;
        this.socketId = params.user;
        let self = this
        this._httpService.getPlaylist(params.room)
          .subscribe((data:any) => {
            this.PL = data[0];
            console.log('Playlist: ', this.PL);
            this.firstSong(this.PL);
          })
      })
    this.video = document.getElementById('video');
    this._socket.on('broadcast', function (data) {
      this.chunks.push(data);
      console.log(data);
      this.playVideo();
    });
    this.singing();
  }

  singing() {
    const self = this;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: 320,
          height: 240,
        },
      }).then(function (stream) {
        self.video.srcObject = stream;
        const recorder = new this.MediaRecorder(stream);
        recorder.start(1000);
        recorder.ondataavailable = function (e) {
          this._socket.emit('datachunk', { room: this.roomName, data: e.data, type: e.data.type });
          console.log(recorder.keys);
        }
      })

    }
  }

  playVideo() {
    //Play video while chunks are in queue
    while (this.chunks.length > 0) {
      let thisData: any = this.chunks.shift();
      let blob = new Blob([thisData.data], { type: thisData.type });
      let url = window.URL.createObjectURL(blob);
      this.clip = url;
      // this.video.load();
      // this.video.onloadeddata = function(){
      //   this.video.play();
      // }
    }
  }
}
  firstSong(playlist){
    this.PL = playlist
    if(playlist.songs.length > 0){
      this.videoID = this.PL.songs[0].videoId;
      this.PL.songs.shift()
    }
   
  }

}
