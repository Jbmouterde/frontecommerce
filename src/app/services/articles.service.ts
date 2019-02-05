import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'
import 'rxjs/operator/toPromise';
import {environment} from '../../environments/environment'


@Injectable()
export class ArticlesService {

  constructor(
    private ajaxTruc : HttpClient
  ) { }

// GET / ARTICLES



getList(){
  return this.ajaxTruc
  .get(`${environment.backUrl}/api/articles`)
  .toPromise();
}
getDetails(articleId){
  return this.ajaxTruc
  .get(`${environment.backUrl}/api/articles/${articleId}`)
  .toPromise();
}
// FORM ADD ARTICLE 
addArticle(creds : Creds){
  return this.ajaxTruc
  .post(`${environment.backUrl}/api/articles`, creds)
  .toPromise()
  .then((apiResponse: any)=>{
    return apiResponse;
  })
}

//DELETE ARTICLE 
delete(articleId){
  return this.ajaxTruc
  .delete(`${environment.backUrl}/api/articles/${articleId}`)
  .toPromise()
}
// UPDATE likes 

updateLike(articleId){
  return this.ajaxTruc
  .put(`${environment.backUrl}/api/articles/${articleId}/like`, {}, {withCredentials: true})
  .toPromise();
}
//
// API NEWS 
getWeather(){
  return this.ajaxTruc.get('http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=50ce80304a8fdf925c340c3c55021336')
  .toPromise();
}

}

export class Article {
  _id : string; 
  creator : string; 
  description : string;

  // like : number = 0;

};

export class Creds {
  creator : string; 
  description : string;
  // like : number = 0;

};

export class Weather {

}