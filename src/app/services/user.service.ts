import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/operator/toPromise';
import {environment} from '../../environments/environment'



@Injectable()
export class UserService {

  currentUser: User;
  infiii : User; 

  constructor(
    private ajaxTruc : HttpClient
  ) { }

  getUserSolo(){
    return this.ajaxTruc
    .get(`${environment.backUrl}/api/users`)
    .toPromise();
  }

  getDetailsUser(userId){
    return this.ajaxTruc
    .get(`${environment.backUrl}/api/users/${userId}`)
    .toPromise();
  }

  // GET CHECKLOGIN
  check(){
    return this.ajaxTruc 
    .get(`${environment.backUrl}/api/checklogin`, {withCredentials : true})
    .toPromise()
    .then((apiResponse: any)=>{
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    })
  }

  // POST SIGNUP
  postSignup(creds : LoginCredentials){
    return this.ajaxTruc
    .post(`${environment.backUrl}/api/signup`, 
    creds,
    {withCredentials : true})
    .toPromise()
    .then((apiResponse: any)=>{
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    })
  }


  // POST /LOGIN
  postLogin(creds : LoginCredential){
    return this.ajaxTruc
    .post(`${environment.backUrl}/api/login`, 
    creds,
    {withCredentials : true})
    .toPromise()
    .then((apiResponse: any)=>{
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    })
  }
  // GET /LOGOUT
  logout(){
    return this.ajaxTruc
    .get(`${environment.backUrl}/api/logout`, {withCredentials : true})
    .toPromise()
    .then((apiResponse: any)=>{
      this.currentUser = apiResponse.userInfo;
      return apiResponse;
    })
  }


getUser(){
  return this.ajaxTruc
  .get(`${environment.backUrl}/api/users`)
  .toPromise();
}

posteditUser(userId, creds: LoginCredentials){
  console.log("HELLO AGGAAIN")
  return this.ajaxTruc
  .put(`${environment.backUrl}/api/users/${userId}/edit`,
  creds,
  {withCredentials: true}
)
.toPromise()
.then((apiResponse: any)=>{
  this.infiii = apiResponse.userNew;
  return apiResponse;
});

}
delete(userId){
  return this.ajaxTruc
  .delete(`${environment.backUrl}/api/users/${userId}`)
  .toPromise()
}

}


export class User {
  _id : string; 
  username : string; 
  role : string;
  email : string; 
  picture : string; 
  //? make it optional
  updated_at?: Date ; 
  created_at: Date ; 
}

export class LoginCredentials {
  username : string; 
  password : string;
  email : string; 
  picture : string; 
}


export class LoginCredential {
  username : string; 
  password : string;
}

export class EditUserCreds {
  username: string;
  email: string;
  }