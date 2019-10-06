import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
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

  PL = null;
  shouldRun = true;
  roomName;

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
        this._httpService.getPlaylist(params.room)
          .subscribe((data: any) => {
            this.PL = data.playlist[0];
            console.log('Playlist: ', this.PL);
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
