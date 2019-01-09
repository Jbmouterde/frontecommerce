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
getNews(){
  return this.ajaxTruc.get('https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=17ff854720b449c6bbd72574e7a18d9e')
  .toPromise();
}

}

export class Article {
  _id : string; 
  title : string; 
  date : Date; 
  description : string;
  email : string;
  imageUrl : string ; 
  type : string ; 
  // like : number = 0;

};

export class Creds {
  title : string; 
  date : Date; 
  description : string;
  imageUrl : string ; 
  type : string ; 
  // like : number = 0;

};

export class News {
  
  source: {
    id: number,
    name: string
};
author: string;
title: string;
description: string;
url: string;
urlToImage: string;
publishedAt: Date;
}