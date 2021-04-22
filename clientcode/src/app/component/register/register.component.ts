import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from '../../../../services/user.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  password: string;
  userName: string;
  constructor(
    private _userService: UserService,
    private _router:Router
  ) {}

  ngOnInit(): void {
  }
  onRegister() {
    // if(form.invalid){  
    //   return;  
    // }  
    const user = {
      name: this.name,
      email: this.email,
      phone:this.phone,
      password: this.password,
      userName:this.userName
    }
    this._userService.createAccount(user)
        return this._router.navigate(['/login']);
        
  }
}
