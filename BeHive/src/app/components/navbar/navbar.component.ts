import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    //this.authService.logout().subscribe();
    console.log('Logged Out');
    environment.isLogin = true;
    sessionStorage.clear();
    this.router.navigate(['/login'], {replaceUrl: true});
  }
}
