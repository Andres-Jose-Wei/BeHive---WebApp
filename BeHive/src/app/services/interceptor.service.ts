import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler)
  {
    if (sessionStorage.getItem('token') != null)
    {
      const newRequest = request.clone({withCredentials: true});
      let headersNew = newRequest.headers;
      headersNew = headersNew.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
      const newRequest1 = newRequest.clone({
      headers: headersNew});
      console.log('added token');
      console.log('Interceptor: ', newRequest1);
      console.log('token: ', sessionStorage.getItem('token'));
      return next.handle(newRequest1);
    }
    return next.handle(request);
  }
}
