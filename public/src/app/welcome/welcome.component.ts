import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// Bringing in The Socket
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  roomName = "";

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _socket: Socket,
  ) { }

  ngOnInit() {
  }

  joinRoom() {
    // Create new Playlist and send user to Playing Component
    this._socket.emit("roomName", { room: this.roomName });
    this._httpService.createPlaylist({ room: this.roomName })
      .subscribe(playlist => {
        console.log("New Playlist: ", playlist);
        this._router.navigate([`/${this.roomName}/`, "playing"])
      })
  }

}
