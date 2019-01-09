import { Component } from '@angular/core';

import { UserService, User } from './services/user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontecommerce';
  users : User[] = [];


  constructor(
    public userTruc : UserService,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }
  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'eventCategory',
      eventLabel: 'eventLabel',
      eventAction: 'eventAction',
      eventValue: 10
    });
  }
  
  ngOnInit(){

    this.userTruc.getUserSolo()
    .then((result : User[])=>{
      this.users = result
      console.log(result)
    })
    .catch((err)=>{
      console.log("Article list error")
      console.log(err)
    })
  

    this.userTruc.check()
    .catch((err)=>{
      console.log("App Login error")
      console.log(err)
    });


    // var stripe = Stripe(environment.stripesKey); // use your test publishable key
    // var elements = stripe.elements();
  }
  
  logoutClick(){
    this.userTruc.logout()
    this.router.navigateByUrl('/')
    .catch((err)=>{
      console.log("App Logout Error");
      console.log(err)
    })
  }
  }
  
  


