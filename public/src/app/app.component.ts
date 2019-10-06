import { Component, OnInit, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  title = 'shar-E-oke';



  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _socket: Socket,
  ) { }


}
