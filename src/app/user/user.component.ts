import { Component, OnInit } from '@angular/core';
import { UserService, User, EditUserCreds, LoginCredentials } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  editCredsUser: LoginCredentials = new LoginCredentials;


  userId : string;
  user : User;
  courseEdit = false


  constructor(
    private reqTruc : ActivatedRoute,
    private resTruc : Router,
    public userTruc : UserService, 
  ) { }

  ngOnInit() {

    this.reqTruc.paramMap
    .subscribe((myParams)=>{
     this.userId=myParams.get("blahId");
     console.log(this.userId)

     this.fetchUserData();
    });

  }
 

  fetchUserData(){
    // component connect to the service 
    this.userTruc.getDetailsUser(this.userId)
    .then((result: User)=>{
     this.user= result
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  courseOn(){
    this.courseEdit = !this.courseEdit
    console.log('bite')
  }

  onEditSubmit(){
    console.log("HELLOOOO")
    this.userTruc.posteditUser(this.userId, this.editCredsUser)
    .then(() => {
      this.resTruc.navigateByUrl('/');
    })
    .catch((err)=>{
      console.log('login error');
      console.log(err);
    })
  }

  deleteClick(){
    const {username} = this.user
    const isOkay = confirm(`Are you sure you want to delete ${username}?`)
    
        if(!isOkay){
          return; 
        }
    
        this.userTruc.delete(this.userId)
          .then(()=>{
            this.resTruc.navigateByUrl('/');
          })
          .catch((err)=>{
            console.log('article error delete')
            console.log(err)
          })
        }
 
  }


