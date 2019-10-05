import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { PlayingComponent } from './playing/playing.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { HttpService } from './http.service';
const config: SocketIoConfig = { url: '192.168.0.146:3333', options: {} };


import {
  GoogleApiModule, 
  GoogleApiService, 
  GoogleAuthService, 
  NgGapiClientConfig, 
  NG_GAPI_CONFIG,
  GoogleApiConfig
}  from "ng-gapi";

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "CLIENT_ID",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: [
      "https://www.googleapis.com/auth/analytics.readonly",
      "https://www.googleapis.com/auth/analytics"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    PlayingComponent
  ],
  imports: [
    BrowserModule,
    NgxYoutubePlayerModule.forRoot(),
    // YoutubePlayerModule,npm i ngx-youtube-player
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
