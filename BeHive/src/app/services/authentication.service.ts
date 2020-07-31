import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Credentials } from '../classes/credentials';
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

  private readonly ADD_SKILL_URL = environment.userDataUrl + environment.userAddSkillEndpoint;

  constructor(private http: HttpClient, private cookies: CookieService, private router: Router) { }

  isLoggedIn()
  {
    return this.loggedIn;
  }

  login(username: string, password: string)
  {
    const params = new Credentials();
    params.username = username;
    params.password = password;
    return this.http.post(this.LOGIN_URL, params,
      {headers: {
        'Content-Type': 'application/json',
      }}).pipe(map((response) => {
        console.log(response);
        const token = 'token';
        sessionStorage.setItem('token', response[token]);
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
        this.loggedIn = false;
        sessionStorage.clear();
        this.router.navigate(['/login'], {replaceUrl: true});
      }));
  }

  checkToken(): Observable<any>
  {
    return this.http.get<any>('https://weiwu.online:8443/AuthService/checkheader',
      {headers: {'Content-Type': 'application/json'
      }});
  }

}
