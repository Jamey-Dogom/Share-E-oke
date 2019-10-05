import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {


  opened: boolean;
  playlist;

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
        this._httpService.getPlaylist({ room: this.roomName })
          .subscribe((playlist) => {
            console.log("Playlist: ",playlist);
            this.playlist = playlist;
          })
      })
  }

};