import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap ,catchError} from 'rxjs/operators';
import 'rxjs/add/observable/of';


@Injectable()
export class RestService {


  constructor(
    private httpClient: HttpClient
  ) {   
}

  get(url): Observable<any> {
    let myHeaders = new HttpHeaders(); 
    myHeaders.set('Content-Type', 'application/json');
    myHeaders.set('Accept', 'text/plain');  
    myHeaders.set('Access-Control-Allow-Origin','*');
    myHeaders.set('Access-Control-Allow-Methods','GET');
   // let params = new HttpParams().set('page', page);
    //params = params.append('page', page);
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


  post(url: string, body: any | null, options: any = {}) {
    let headers: HttpHeaders = options.headers || new HttpHeaders();
    headers = this.appendAuthorizationHeader(headers);
      return this.httpClient.post(url, body, { headers: headers})
      .pipe(
        // switchMap(res => this.checkAndHandleError(res)),
        // catchError(err => this.handleError(err))
      );
  }


  postReports(url: string, body: any | null, options: any = {}) {
    let headers: HttpHeaders = options.headers || new HttpHeaders({
      'Content-Type':   'application/json'

    });
    headers = this.appendAuthorizationHeader(headers);
      return this.httpClient.post(url, body, { headers: headers, responseType:'text'})
      .pipe(
       // switchMap(
          // res => this.checkAndHandleError(res)),
          // catchError(err => this.handleError(err))
      );
  }




  put(url: string, body: any | null, options: any = {}) {
    let headers: HttpHeaders = options.headers || new HttpHeaders();
    headers = this.appendAuthorizationHeader(headers);
    return this.httpClient.put(url, body, { headers: headers })
      .pipe(
        // switchMap(res => this.checkAndHandleError(res)),
        // catchError(err => this.handleError(err))
      );
  }

  delete(url: string, options: any = {}) {
    let headers: HttpHeaders = options.headers || new HttpHeaders();
    headers = this.appendAuthorizationHeader(headers);
    return this.httpClient.delete(url, { headers: headers })
      .pipe(
       // switchMap(res => this.checkAndHandleError(res)),
       // catchError(err => this.handleError(err))
      );
  }

  appendAuthorizationHeader(headers: HttpHeaders): HttpHeaders {
    const sId = localStorage.getItem('sessionId');
    if (sId) {
      headers = headers.set('Authorization', sId);
    }
    return headers;
  }

  // private checkAndHandleError(res): Observable<any> {
  //   if (res.success === false) {
  //     if(res.errorCode !== 33){
       
        
  //     return Observable.of(res);
  //   }
  // }
  //   return Observable.of(res);
  // }

  // private handleError(err) : Observable<any>{
  //   // console.log(err , err.error.error);
  //   if(err.message){
  //     this.toasterService.pop('error', '', err.message );
  //   }
  //   else{
  //     this.toasterService.pop('error', '', err.error.error );
  //   }

  //   return Observable.of(err);
  // }
}
