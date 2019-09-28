import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';
import { RestService } from './rest.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProgramInfoService {
  hostName: any;
  constructor(private httpClient: HttpClient,
    private appService: AppService,
    private restService: RestService
  ) {  this.hostName = this.appService.getConfigParam('HOST_NAME'); }


  getProgramList(): Observable<any> {
    return this.restService.get(this.hostName +'/schedule');
  }
  getShowMetaDataById(id): Observable<any>{
    return this.restService.getMetaData(this.hostName +'/shows/'+id);
  }

}
