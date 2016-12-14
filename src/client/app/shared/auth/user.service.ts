import { Injectable } from '@angular/core';
import { Headers, Response, URLSearchParams } from '@angular/http';
import { HttpClient } from './http.client'
import { ENDPOINTS } from '../../global.vars'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', email);
    urlSearchParams.append('password', password);
    urlSearchParams.append('grant_type', 'password');
    urlSearchParams.append('scope', 'openid email profile offline_access');
    let body = urlSearchParams.toString();

    return this.http
      .post(
        ENDPOINTS.login,
        body,
        headers
      )
      .map((res) => {
        let body_as_json = res.json()
        if (res.ok) {
          localStorage.setItem('access_token', body_as_json.access_token);
        }
        return body_as_json
      });
  }

  register(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
    return this.http
      .post(
        ENDPOINTS.register, 
        JSON.stringify({ firstName, lastName, email, password, confirmPassword }), 
      )
      .map(res => res)
  }

  forgotPassword(email: string) {
    return this.http
      .post(
        ENDPOINTS.forgotpassword,
        JSON.stringify({ email })
      )
      .map(res => res)
  }

  userInfo() {
    return this.http
      .get(ENDPOINTS.userinfo)
      .map(res => {
        let body_as_json = res.json()
        if (res.ok) {
          if(body_as_json.email) {
            localStorage.setItem('email', body_as_json.email);
          }
          if(body_as_json.name) {
            localStorage.setItem('name', body_as_json.name);
          }
          if(body_as_json.family_name) {
            localStorage.setItem('family_name', body_as_json.family_name);
          }
        }
      })
  }

  changePassword(currentPassword: string, newPassword: string) {
    return this.http
      .post(
        ENDPOINTS.changePassword, 
        JSON.stringify({ currentPassword, newPassword }), 
      )
  }
  
  logout() {
    localStorage.removeItem('access_token');
  }

  name() : string {
    return localStorage.getItem('name');
  }

  isLoggedIn() {
    return !!localStorage.getItem('access_token');
  }
}
