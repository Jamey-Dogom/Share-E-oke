import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { PlayingComponent } from './playing/playing.component';
import { LyricsComponent } from './lyrics/lyrics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: ':room/playing',
    component: PlayingComponent,
    children: [{
      path: ':artist/:song',
      component: LyricsComponent,
    }

    ]
  },
  {
    path: ':room/search',
    component: SearchComponent,
  },

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
