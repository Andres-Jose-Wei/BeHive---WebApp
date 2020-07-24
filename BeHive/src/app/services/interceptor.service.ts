import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler)
  {
    const newRequest = request.clone({withCredentials: true});
    console.log('Interceptor: ', newRequest);
    return next.handle(newRequest);
  }
}
