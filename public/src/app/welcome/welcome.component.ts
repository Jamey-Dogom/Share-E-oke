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
    ) { }

  ngOnInit() {
  }

  joinRoom() {
    this._router.navigate([`/${this.roomName}/`, "playing"])
  }
}
