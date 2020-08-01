import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-adminconsole',
  templateUrl: './adminconsole.component.html',
  styleUrls: ['./adminconsole.component.scss']
})
export class AdminconsoleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    environment.isLogin = false;
  }

}
