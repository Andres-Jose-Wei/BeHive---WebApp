import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private readonly LOGIN_URL = environment.registrationServiceUrl + environment.registerEndpoint;

  constructor(private http: HttpClient) { }

  public registerUser(data: User): Observable<any> {

    return this.http.post<any>
    (
      this.LOGIN_URL, data, {headers: {
        'Content-Type': 'application/json',
      }
      });
  }
}
