import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InterceptorService } from './services/interceptor.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { SkillsgraphComponent } from './components/skillsgraph/skillsgraph.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { AdminconsoleComponent } from './components/adminconsole/adminconsole.component';
import { AdminskillsComponent } from './components/adminskills/adminskills.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './pipes/highlight.directive';
import { ProjectdashboardComponent } from './components/projectdashboard/projectdashboard.component';
import { CreateprojectComponent } from './components/createproject/createproject.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    GaugeComponent,
    SkillsgraphComponent,
    NavbarComponent,
    AdminconsoleComponent,
    AdminskillsComponent,
    FilterPipe,
    HighlightDirective,
    ProjectdashboardComponent,
    CreateprojectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CookieService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
