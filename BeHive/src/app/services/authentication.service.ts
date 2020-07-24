import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'Cookie';

  public username: string;
  public password: string;
  public loggedIn = false;

  private readonly LOGIN_URL = environment.authenticationServiceUrl + environment.loginEndpoint;

  private readonly LOGOUT_URL = environment.authenticationServiceUrl + environment.logoutEndpoint;

  constructor(private http: HttpClient, private cookies: CookieService, private router: Router) { }

  isLoggedIn()
  {
    return this.http.post(this.LOGIN_URL, {},
      {headers: {
        'Content-Type': 'text/plain',
      }}).pipe(map((response) => {this.loggedIn = true;
      }));
  }

  login(username: string, password: string)
  {
    return this.http.post(this.LOGIN_URL, {},
      {headers: {
        'Content-Type': 'text/plain',
        Authorization : this.createAuthToken(username, password),

      }}).pipe(map((response) => {
        console.log(this.cookies.getAll());
        const keyCookie = 'cookie';
        this.loggedIn = true;
      }));
  }


  createAuthToken(username: string, password: string)
  {
    console.log('Basic ' + window.btoa(username + ':' + password));
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  logout() {
    return this.http.put(this.LOGOUT_URL, {},
      {headers: {
      }}).pipe(map((response) => {
        console.log('Logged Out');
        environment.isLogin = true;
        this.router.navigate(['/login'], {replaceUrl: true});
      }));
  }
}
