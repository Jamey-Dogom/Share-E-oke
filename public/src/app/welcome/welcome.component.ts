


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
  socketId;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _socket: Socket,
  ) { }

  ngOnInit() {
    this._socket.emit("getId");
    this._socket.on("hereBro", data => {
      this.socketId = data.id;
      console.log(data);
    });
  }

  joinRoom() {
    this._httpService.getPlaylist(this.roomName)
      .subscribe((data: any) => {
        if (data[0] == {} && data[0].users.length > 0) {
          const PL = data[0];
          PL.users.push(this.socketId);
          this._httpService.updatePlaylist(PL)
            .subscribe((playlist:any) => {
              this._router.navigate([`/${this.roomName}/`,'playing',`${this.socketId}`])
            }); 
          
        } else {
          this._httpService.createPlaylist({ id: this.roomName, users: [this.socketId] })
            .subscribe((playlist: any) => {
              console.log(playlist);
              this._router.navigate([`/${this.roomName}/`,'playing',`${this.socketId}`])
            });
        }
      })
    // this._router.navigate([`/${this.roomName}/`, "playing"])
  }
}
              
   