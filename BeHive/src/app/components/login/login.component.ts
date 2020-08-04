import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authenticationService: AuthenticationService, 
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()){
          if (this.authenticationService.isLoggedIn() != null)
          {
            environment.isLogin = false;
            this.router.navigate(['/dashboard'], {replaceUrl: true});
          }
    }
  }

  login()
  {
    this.authenticationService.login(this.username, this.password).subscribe(
      (response) => {
        this.userService.loadUser().subscribe((user) => {
          console.log('Recieved', user);
          this.userService.setUser(user);
          console.log('Assigned', this.userService.getUser());
          environment.isLogin = false;
          if (this.userService.getIsAdmin( ) == null)
          {
            //sessionStorage.setItem('isLogin', 'true');
            environment.isLogin = false;
            this.router.navigate(['/dashboard'], {replaceUrl: true});
          }else
          {
            //sessionStorage.setItem('isLogin', 'true');
            this.router.navigate(['/admin'], {replaceUrl: true});
          }
        });
      }
    );
  }

}
