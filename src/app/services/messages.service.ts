import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {environment} from '../../environments/environment'
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http: Http
  ) { }

  getChatByRoom(room) {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.backUrl}/api/chat/${room}`)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveChat(data) {
    return new Promise((resolve, reject) => {
        this.http.post(`${environment.backUrl}/api/chat`, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}