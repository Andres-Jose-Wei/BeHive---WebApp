import { Injectable } from '@angular/core';
import { Skill } from '../classes/skill';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Array<string>;

  constructor(private http: HttpClient) { }

  public addSkill(skill: string): Observable<boolean>
  {
    return this.http.post<boolean>(environment.userServiceUrl + environment.addSkillsServiceUrl + '/' + skill, {}, {headers: {
      'Content-Type': 'text/plain',
    }
    });
  }

  public getSkills(): Observable<any>
  {
    return this.http.get<any>(environment.userServiceUrl + environment.getAllSkillsService,
      {headers: {
      }});
  }
}
