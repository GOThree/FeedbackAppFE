import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { HttpClient } from './http.client'

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http
      .post(
        'http://localhost:5000/authorization/login',
        'username=' + email + '&password=' + password + '&grant_type=password' + '&scope=openid email profile offline_access',
        headers
      )
      .map((res) => {
        let body_as_json = res.json()
        if (res.ok) {
          localStorage.setItem('access_token', body_as_json.access_token);
          this.loggedIn = true;
        }
        return body_as_json
      });
  }

  register(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        'http://localhost:5000/account/register', 
        JSON.stringify({ firstName, lastName, email, password, confirmPassword }), 
        headers
      )
      .map(res => res)
  }

  forgotPassword(email: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        'http://localhost:5000/account/forgotpassword', 
        JSON.stringify({ email }),
        headers
      )
      .map(res => res)
  }

  userInfo() {
    return this.http
      .get('http://localhost:5000/account/userinfo')
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
  
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    console.log(this.loggedIn)
    return this.loggedIn;
  }
}
