import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ProgramMetadataComponent } from './program-metadata/program-metadata.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { CastComponent } from './cast/cast.component';
import { CrewComponent } from './crew/crew.component';
import { CommomNavComponent } from './commom-nav/commom-nav.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/shows', pathMatch: 'full'},
      { path: 'shows', component: ProgramListComponent},
      { path: 'show-info/:id', component: ProgramMetadataComponent},
      { path: 'show-info/:id/episodes', component: EpisodesComponent},
      { path: 'show-info/:id/cast', component: CastComponent},
      { path: 'show-info/:id/crew', component: CrewComponent}
    ]
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
