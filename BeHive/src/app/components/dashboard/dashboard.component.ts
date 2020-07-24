import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    environment.isLogin = false;
    this.authenticationService.isLoggedIn().subscribe(
      (response) => {
        if (this.authenticationService.loggedIn === false)
        {
            this.router.navigate(['/login'], {replaceUrl: true});
        }
      },
      (error) => {
        this.router.navigate(['/login'], {replaceUrl: true});
      }
    );
  }

  logout()
  {
    this.authenticationService.logout().subscribe();
  }
}
