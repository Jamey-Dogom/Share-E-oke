import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getSongLyrics(artist, song) {
    return this._http.get(`/api/lyrics/${artist}/${song}`);
  }
}
