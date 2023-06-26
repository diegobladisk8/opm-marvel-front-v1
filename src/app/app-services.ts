import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class AppService {
  
  constructor(private http: HttpClient) { }
  
  public getData(urlParam: string): Observable<any> {
    return this.http.get(urlParam, this.getRequestOptions(urlParam))
  }

  getRequestOptions(urlParam: string) {
    let options = {
      headers: this.appendAuthHeader()
    };
    return options;
  }
  
  appendAuthHeader(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=');
  }
}


