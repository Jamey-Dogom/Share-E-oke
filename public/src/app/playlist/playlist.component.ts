import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

// Added Activated Route and Params to get the Document
import { ActivatedRoute, Params, Router } from '@angular/router';
// Bringing in The Socket and SideNav
import { Socket } from 'ngx-socket-io';
import { MatSidenavContent } from '@angular/material';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  opened: boolean;
  playlist;

  shouldRun = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _socket: Socket,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
  }

}
