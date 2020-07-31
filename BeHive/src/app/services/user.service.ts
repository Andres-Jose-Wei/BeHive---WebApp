import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Skill } from '../classes/skill';
import { Group } from '../classes/group';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ISankeyDiagramEvents } from '@amcharts/amcharts4/charts';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  private isAdmin: boolean;

  private readonly GETUSER_URL = environment.userDataUrl + environment.userDataEndpoint;

  private readonly ADD_SKILL_URL = environment.userDataUrl + environment.userAddSkillEndpoint;

  constructor(private http: HttpClient) {
  }

  loadUser(): Observable<User>
  {
    console.log(this.GETUSER_URL);
    return this.http.get<User>(this.GETUSER_URL,
      {headers: {
      }});
  }

  getUser()
  {
    return this.user;
  }

  setUser(user: User)
  {
    this.user = user;
  }

  getIsAdmin()
  {
    return this.isAdmin;
  }

  setIsAdmin(flag: boolean)
  {
    this.isAdmin = flag;
  }
  addSkill(skill: string)
  {
      console.log('In add skill');
      this.user.skillStats[skill] = 0;
      return this.http.post(this.ADD_SKILL_URL + '/' + skill, {},
      {headers: {
        'Content-Type': 'text/plain',
      }}).pipe(map((response) => {
      }));
  }
}
