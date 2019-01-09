import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ArticlesService, Creds } from '../services/articles.service';

import { ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formCreds : Creds = new Creds();


  constructor(
    public userTruc : ArticlesService,
    private resTruc : Router
  ) { }

  ngOnInit() {
  }
  articleSubmit(){
    this.userTruc.addArticle(this.formCreds)
    .then((result)=>{
      this.resTruc.navigateByUrl('/')
    })
    .catch((err)=>{
      console.log("Log in error")
      console.log(err)
    });
  }
}
