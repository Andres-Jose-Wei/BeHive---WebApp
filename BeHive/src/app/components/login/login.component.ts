import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authenticationService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
  }

  login()
  {
    this.authenticationService.login(this.username, this.password).subscribe(
      (response) => {
        if (this.authenticationService.isUserLoggedIn())
        {
          this.router.navigate(['/dashboard'], {replaceUrl: true});
        }
      }
    );
  }

}
