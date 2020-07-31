import { Component, OnInit} from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
@Component({
  selector: 'app-adminskills',
  templateUrl: './adminskills.component.html',
  styleUrls: ['./adminskills.component.scss']
})
export class AdminskillsComponent implements OnInit {
  skills: Array<string>;
  skillToAdd: string;
  loadedValues = false;

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills()
  {
    this.skillsService.getSkills().subscribe(
      (response) => {
        this.skillsService.skills = response;
        console.log(this.skillsService);
        this.skills = response;
        this.loadedValues = true;
      }
    );
  }

  addSkill(){
    this.skillsService.addSkill(this.skillToAdd).subscribe(
      (response) => {
        if (response)
        {
          console.log(response);
          alert('Skill added successfully');
          this.getSkills();
        }else{
          console.log(response);
          alert('Skill was not added');
        }
      }
    );
  }
}
