import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {
  lyrics = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { }

  ngOnInit() {
    this._route.params
      .subscribe((params: Params) => {
        this._httpService.getSongLyrics(params.artist, params.song)
          .subscribe((data: any) => this.lyrics = data.lyrics);
      })
  }

}
