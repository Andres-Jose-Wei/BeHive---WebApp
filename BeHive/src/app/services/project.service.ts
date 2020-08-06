import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../classes/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  createProject(project: Project): Observable<any>
  {
      return this.http.post<any>('http://localhost:8085/project/create', project,
      {headers: {
        'Content-Type': 'application/json',
      }});
  }
}
