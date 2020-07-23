import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'Cookie';

  public username: string;
  public password: string;

  private readonly LOGIN_URL = environment.authenticationServiceUrl + environment.loginEndpoint;

  private readonly LOGOUT_URL = environment.authenticationServiceUrl + environment.logoutEndpoint;

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(username: string, password: string)
  {
    return this.http.post(this.LOGIN_URL, {},
      {headers: {
        'Content-Type': 'text/plain',
        Authorization : this.createAuthToken(username, password)
      }}).pipe(map((response) => {
        console.log(response);
        const keyCookie = 'cookie';
        this.registerSuccessfulLogin(response[keyCookie]);
      }));
  }

  createAuthToken(username: string, password: string)
  {
    console.log('Basic ' + window.btoa(username + ':' + password));
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(cookie) {
    this.cookies.set(this.USER_NAME_SESSION_ATTRIBUTE_NAME, cookie );
    console.log(this.cookies.get(this.USER_NAME_SESSION_ATTRIBUTE_NAME));
    //sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, cookie);
  }

  logout() {
    return this.http.put(this.LOGOUT_URL, {},
      {headers: {
        Cookie : this.cookies.get(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
      }}).pipe(map((response) => {
        console.log('Logged Out');
        this.cookies.delete(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
      }));
  }

  isUserLoggedIn() {
    const user = this.cookies.get(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  getLoggedInUserName() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null)
    {
      return '';
    }else{
      return user;
    }
  }
}
