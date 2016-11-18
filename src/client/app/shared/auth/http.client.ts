import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    if(localStorage.getItem('access_token')) {
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    }
  }

  get(url: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url: string, data: any, headers: Headers) {
    if(!headers) {
      headers = new Headers();
    }

    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
