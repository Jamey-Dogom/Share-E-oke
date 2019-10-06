import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { PlayingComponent } from './playing/playing.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { LyricsComponent } from './lyrics/lyrics.component';
// import { SingStarComponent } from './sing-star/sing-star.component'


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: ':room/playing/:user',
    component: PlayingComponent,
  },
  {
    path: ':room/search/:user',
    component: SearchComponent,
  },
  {
    path: ':room/playlist/:user',
    component: PlaylistComponent,
  },
//   {
//   path: ':room/sing',
//   component: SingStarComponent,
// },
  // {
  //   path: ':room/lyrics',
  //   component: LyricsComponent,
  // }

  // {
  //   path: ':artist/:song',
  //   component: LyricsComponent,
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
