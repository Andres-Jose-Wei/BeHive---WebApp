import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projectdashboard',
  templateUrl: './projectdashboard.component.html',
  styleUrls: ['./projectdashboard.component.scss']
})
export class ProjectdashboardComponent implements OnInit{

  constructor() {
    environment.isLogin = false;
  }

  ngOnInit(): void {

  }

}
