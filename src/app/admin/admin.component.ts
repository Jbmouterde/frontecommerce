import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userInput: string;
users : User[] = []
user : User;

userId : string;

  constructor(
    public apiTruc : UserService,
    private resTruc : Router,
    public userTruc : UserService

  ) { }

  ngOnInit() {
    this.apiTruc.getUser()
    .then((result : User[])=>{
      this.users = result
      console.log(result)
    })
    .catch((err)=>{
      console.log("Article list error")
      console.log(err)
    })
  }
 

}
