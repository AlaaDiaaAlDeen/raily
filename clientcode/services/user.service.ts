import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AppUtil from '../src/app/common/app.util';

@Injectable({providedIn: "root"})
export class UserService {
  constructor(private _http:HttpClient) { }
  createAccount(user) {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    // console.log(body)
    return this._http.post('http://localhost:3000/users/register',user).subscribe(response =>{  
      console.log(response);   
  })  ;
  };
  // 
  auth(user) {
    return this._http.post('http://localhost:3000/users/auth', user).subscribe(response=>{console.log(response);   
  });
  };

  saveUserDate(token, user) {
    localStorage.setItem(AppUtil.AUTH_TOKEN, token);
    localStorage.setItem(AppUtil.USER_INFO, JSON.stringify(user));
  }

  isLoggedIn() :boolean {
    //TODO: Enhace this method. angular2-jwt
    return !!localStorage.getItem(AppUtil.AUTH_TOKEN);
  }
  // 
}