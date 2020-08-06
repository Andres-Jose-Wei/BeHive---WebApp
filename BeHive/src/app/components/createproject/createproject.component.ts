import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Position } from 'src/app/classes/position';
import { SkillsService } from 'src/app/services/skills.service';
import { runInThisContext } from 'vm';
import { Project } from 'src/app/classes/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateprojectComponent implements OnInit {

  positions: Array<Position>;
  skills: Array<string>;
  qty: Array<number>;
  skillName: Array<string>;
  skillText = '';
  description = '';
  name = '';

  constructor(private skillsService: SkillsService,
              private projectService: ProjectService) {
    environment.isLogin = false;
  }

  ngOnInit(): void {
    this.positions = new Array<Position>();
    this.skills = new Array<string>();
    this.skillName = new Array<string>();
    this.qty = new Array<number>();
    this.positions.push(new Position());
    this.skillName.push('');
    this.qty.push(0);
    this.skillsService.getSkills().subscribe(
      (response) => {
        this.skills = response;
      }
    );
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  printArray()
  {
    console.log(this.positions);
    console.log(this.qty);
  }

  addPosition()
  {
    this.positions.push(new Position());
    this.skillName.push('');
    this.qty.push(0);
  }

  addSkillPosition(index: number, value: string)
  {
    console.log(index, ' : ', value);
    if (this.checkIfExists(value) !== -1)
    {
      this.positions[index].skills.push(value);
      this.skillName[index] = '';
      const unique = new Set(this.positions[index].skills);
      this.positions[index].skills = Array.from(unique);
    }
  }

  removeSkillPosition(index: number, indexSkill: number)
  {
    this.positions[index].skills.splice(indexSkill, 1);
  }

  checkIfExists(value: string): number
  {
    return this.skills.indexOf(value);
  }

  createProject()
  {
    const project = new Project();
    project.isPublic = true;
    project.description = this.description;
    project.name = this.name;
    const map = new Map<string, number>();
    for (let i = 0 ; i < this.positions.length ; i++)
    {
      map.set(this.positions[i].name, this.qty[i]);
    }
    project.availableSpots = map;
    project.positions = this.positions;
    project.status = 'Recruting';
    console.log(JSON.stringify(project));
    this.projectService.createProject(project).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
