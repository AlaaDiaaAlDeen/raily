import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    private _userService :UserService,
    private _router :Router
  ) {}
  ngOnInit(): void {}
  onLogin(){
    // 
    const user = {
      email: this.email,
      password: this.password
    }
    // this._userService.auth(user)

    //     this._userService.saveUserDate(resp.token, resp.user);
    //     this._router.navigate(['/']);
      
  
    // 
  }
  }
