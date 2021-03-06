import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebCamModule } from 'ack-angular-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';

import { ZXingScannerModule } from '@zxing/ngx-scanner';




import { PlayingComponent, SafePipe } from './playing/playing.component';


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { HttpService } from './http.service';
// Hector
// const config: SocketIoConfig = { url: '10.64.5.159:3333', options: {} };

// Jose
// const config: SocketIoConfig = { url: '10.64.5.216:3333', options: {} };

// Jamey

// const config: SocketIoConfig = { url: '172.20.10.2.:3333', options: {} };
const config: SocketIoConfig = { url: '10.64.5.163:3333', options: {} };

// const config: SocketIoConfig = { url: '10.64.5.163:3333', options: {} };

// JOSH.... JOOOOOOOOOSH!!!!!!!!!!!!!
// const config: SocketIoConfig = { url: '192.168.43.19:3333', options: {} };


import {
  GoogleApiModule,
  GoogleApiService,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";


import { PlaylistComponent } from './playlist/playlist.component';
// SideNav
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { LyricsComponent } from './lyrics/lyrics.component';


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
    PlayingComponent,
    SafePipe,
    PlaylistComponent,
    LyricsComponent,
  ],
  imports: [
    BrowserModule,
    NgxYoutubePlayerModule.forRoot(),
    // YoutubePlayerModule,npm i ngx-youtube-player
    AppRoutingModule,
    WebCamModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    ZXingScannerModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
