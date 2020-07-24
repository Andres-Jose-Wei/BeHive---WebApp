import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Skill } from '../classes/skill';
import { Group } from '../classes/group';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  private readonly GETUSER_URL = environment.userDataUrl + environment.userDataEndpoint;

  constructor(private http: HttpClient) {
    this.user = new User('DoomSlayer', 'Doom', 'asdf@gmail.com', 'DoomSlayer', '', new Group('Java is fun!'));
    this.addSkill('Java');
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

  addSkill(skill: string)
  {
    if (this.user.skillStats == null)
    {
      this.user.skillStats = new Map();
    }
    this.user.skillStats.set(new Skill(skill), Math.random() * 100);
    const skills = new Array<string>();
    skills.push(skill);
    this.http.post(this.GETUSER_URL, skills, {headers: {
      'Content-Type': 'application/json',
    }
    });
  }
}
