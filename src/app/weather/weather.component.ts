import { Component, OnInit } from '@angular/core';
import { ArticlesService , Weather} from '../services/articles.service';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers : Array<Weather> = [];


  constructor(
    public userTruc : ArticlesService,
    private resTruc : Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.userTruc.getWeather()
    // .then((result : News[])=>{
      .then((result : any)=>{
        console.log('weather result' ,result)
      this.weathers = result.weather
    })
    .catch((err)=>{
      console.log("News list error")
      console.log(err)
    })
  }
}




