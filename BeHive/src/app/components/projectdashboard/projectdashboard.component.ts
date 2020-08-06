import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectdashboard',
  templateUrl: './projectdashboard.component.html',
  styleUrls: ['./projectdashboard.component.scss']
})
export class ProjectdashboardComponent implements OnInit{

  constructor(private router: Router) {
    environment.isLogin = false;
  }

  ngOnInit(): void {

  }

  createProject()
  {
    this.router.navigate(['/project/create'], {replaceUrl: false});
  }

}
