import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap ,catchError} from 'rxjs/operators';
import 'rxjs/add/observable/of';
@Injectable()
export class RestService {
  constructor(private httpClient: HttpClient) { }
  get(url): Observable<any> {
    let myHeaders = new HttpHeaders(); 
    myHeaders.set('Content-Type', 'application/json');
    myHeaders.set('Accept', 'text/plain');  
    myHeaders.set('Access-Control-Allow-Origin','*');
    myHeaders.set('Access-Control-Allow-Methods','GET');
    return this.httpClient.get(url, {headers:myHeaders});
  }
  getMetaData(url): Observable<any> {
    let myHeaders = new HttpHeaders(); 
    myHeaders.set('Content-Type', 'application/json');
    myHeaders.set('Accept', 'text/plain');  
    myHeaders.set('Access-Control-Allow-Origin','*');
    myHeaders.set('Access-Control-Allow-Methods','GET');
    let params = new HttpParams();
    ['cast', 'episodes'].forEach((actorName:string) =>{
      params = params.append(`embed[]`, actorName);
    })
    return this.httpClient.get(url, {headers:myHeaders, params:params});
  }
}
