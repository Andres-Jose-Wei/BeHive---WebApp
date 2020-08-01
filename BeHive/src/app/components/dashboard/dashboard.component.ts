import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import { SkillsService } from 'src/app/services/skills.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  skills: Array<string>;
  loadedValues = false;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private skillsService: SkillsService) { }

  ngOnInit(): void {
    environment.isLogin = false;
    console.log(this.authenticationService.isLoggedIn);
    if (!this.authenticationService.isLoggedIn())
    {
      this.router.navigate(['/login'], {replaceUrl: true});
    }else{
      this.getSkills();
    }
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

  logout()
  {
    this.authenticationService.logout().subscribe();
  }
}
