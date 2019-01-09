import { Component, OnInit } from '@angular/core';
import { ArticlesService, Article } from '../services/articles.service';
import { User, UserService } from '../services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles : Article[] = [];
  userInput: string;
  users : User[] = [];



  constructor(
    public apiTruc : ArticlesService,
    public userTruc : UserService

  ) { }

  ngOnInit() {
    this.apiTruc.getList()
    .then((result : Article[])=>{
      this.articles = result
      console.log(result)
    })
    .catch((err)=>{
      console.log("Article list error")
      console.log(err)
    })
  }

}
