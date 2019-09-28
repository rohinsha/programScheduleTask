import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppService } from './core/services/app.service';
import { RestService } from './core/services/rest.service';
import { environment } from '../environments/environment.prod';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ProgramMetadataComponent } from './program-metadata/program-metadata.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { CastComponent } from './cast/cast.component';
import { CrewComponent } from './crew/crew.component';
import { CommomNavComponent } from './commom-nav/commom-nav.component';
import { DataGridModule } from 'primeng/datagrid';
export function loadConfig(appService: AppService, restService: RestService) {
  return () => restService
    .get(environment.configUrl)
    .toPromise()
    .then(config => appService.setConfig(config));
}

@NgModule({
  declarations: [
    AppComponent,
    ProgramMetadataComponent,
    ProgramListComponent,
    EpisodesComponent,
    CastComponent,
    CrewComponent,
    CommomNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutes,
    DataViewModule,
    TableModule,
    PanelModule,
    DataGridModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      multi: true,
      deps: [ AppService, RestService ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
