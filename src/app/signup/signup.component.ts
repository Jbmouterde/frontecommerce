import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredentials, UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formCreds : LoginCredentials = new LoginCredentials();

  constructor(
    public userTruc : UserService,
    private resTruc : Router
  ) { }

  ngOnInit() {
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
