import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredentials, UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formCreds : LoginCredentials = new LoginCredentials();


  constructor(
    public userTruc : UserService,
    private resTruc : Router,
  ) { }

  ngOnInit() {
  }
  loginSubmit(){
    this.userTruc.postLogin(this.formCreds)
    .then((result)=>{
      if(this.userTruc.currentUser.role =="admin"){
        this.resTruc.navigateByUrl('/admin')
        return
      }
      
      else
      this.resTruc.navigateByUrl('/')
    })
    .catch((err)=>{
      console.log("Log in error")
      console.log(err)
    });
  }
  signupSubmit(){
    this.userTruc.postSignup(this.formCreds)
    .then((result)=>{
      this.resTruc.navigateByUrl('/')
    })
    .catch((err)=>{
      console.log("Log in error")
      console.log(err)
    });
  }
}
