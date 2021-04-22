import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from "@angular/forms"
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { UserService } from '../../services/user.service';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { MainComponent } from './component/main/main.component';


const AppRoutes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: "**",component:NotfoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotfoundComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
