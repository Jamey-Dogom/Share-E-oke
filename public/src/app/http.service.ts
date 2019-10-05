import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private _http: HttpClient) { }

  createPlaylist(playlist) {
    return this._http.post('/api/playlist', playlist);
  }

  getPlaylist(room) {
    return this._http.get('/api/playlist/' + room);
  }

  updatePlaylist(playlist) {
    return this._http.put(`/api/playlist/${playlist.id}`, playlist);
  }

  deletePlaylist(room) {
    return this._http.delete('/api/playlist/' + room);
    
  getSongLyrics(artist, song) {
    return this._http.get(`/api/lyrics/${artist}/${song}`);
  }
    
  getSongLyrics(artist, song) {
    return this._http.get(`/api/lyrics/${artist}/${song}`);
  }
// =======

}
