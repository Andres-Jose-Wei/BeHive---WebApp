import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { User } from 'src/app/classes/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Group } from 'src/app/classes/group';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  group: string;


  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    environment.isLogin = true;
  }

  registerUser()
  {
    const user = new User(this.firstName, this.lastName, this.email, this.username, this.password, new Group(this.group));
    console.log('Sent User: ', user);
    this.registrationService.registerUser(user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login'], {replaceUrl: true});
      }
    );
  }

}
