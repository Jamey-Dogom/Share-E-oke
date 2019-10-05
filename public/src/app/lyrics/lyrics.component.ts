import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})

  export class LyricsComponent implements OnInit  {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
    data={};
    artist;
    title;
    lyrics;
    constructor(private http: HttpClient) {  
    }
    url = 'https://api.lyrics.ovh/v1/'
    getLyrics() {
      this.http.get(this.url+this.artist+'/'+this.title).subscribe(data => {    
        
          this.data = data;
          this.lyrics=data['lyrics']
        console.log(data);
      }, err => {
        console.log(err);
       
      });
      
    }
  }
