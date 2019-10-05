import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

// Added Activated Route and Params to get the Document
import { ActivatedRoute, Params, Router } from '@angular/router';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  PL = null;
  shouldRun = true;
  roomName;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _socket: Socket,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    // Get room name from URL, save above and send to server to join room.
    this._route.params
      .subscribe((params: Params) => {
        console.log("Params: ", params);
        this.roomName = params.room;
        this._httpService.getPlaylist(params.room)
          .subscribe((data:any) => {
            this.PL = data.playlist[0];
            console.log('Playlist: ', this.PL);
          })
      })
  }


}
