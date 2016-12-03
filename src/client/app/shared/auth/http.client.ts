import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class HttpClient {

  constructor(private http: Http, private router: Router) {}

  createAuthorizationHeader(headers: Headers) {
    if(localStorage.getItem('access_token')) {
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    }
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err) => { 
      if (err.status == 401) {
        localStorage.removeItem('access_token');
        this.router.navigate(['/login']);
        console.log('caught an error');
        return Observable.throw('Authentication token has expired');
      }
      let body = err.json();
      console.log(body);
      let errorMessage = '';
      Object.keys(body).forEach(key => errorMessage += body[key][0]);
      return Observable.throw(errorMessage);
    });
  }

  get(url: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.createAuthorizationHeader(headers);
    return this.intercept(this.http.get(url, { headers: headers }))
  }

  post(url: string, data: any, headers?: Headers) {
    if(!headers) {
      headers = new Headers();
      headers.append('Content-Type', 'application/json');
    }

    this.createAuthorizationHeader(headers);
    return this.intercept(this.http.post(url, data, { headers: headers }))
  }
}
