import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import * as io from "socket.io-client";
import { UserService } from '../services/user.service';
import { MessagesService } from '../services/messages.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

      @ViewChild('scrollMe') private myScrollContainer: ElementRef;

      chats: any;
      joinned: boolean = false;
      newUser = { username: '', room: 'arena' };
      msgData = { room: '', username: '', message: '' };
      // socket = io('http://localhost:4000');
      socket = io(environment.backUrl);
  constructor(
    private chatService: MessagesService,
    public userTruc: UserService
  ) { }

  
  ngOnInit() {

      var user = JSON.parse(localStorage.getItem("user"));
      if(user!==null) {
        this.getChatByRoom(user.room);
        this.msgData = { room: user.room, username: user.username, message: '' }
        this.joinned = true;
        this.scrollToBottom();
      }
      this.socket.on('new-message', function (data) {
        if(data.message.room === JSON.parse(localStorage.getItem("user")).room) {
          this.chats.push(data.message);
          this.msgData = { room: user.room, username: user.username, message: '' }
          this.scrollToBottom();
        }
      }.bind(this));
    }
  
    ngAfterViewChecked() {
      this.scrollToBottom();
    }
  
    scrollToBottom(): void {
      try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }
    }
  
    getChatByRoom(room) {
      this.chatService.getChatByRoom(room).then((res) => {
        this.chats = res;
      }, (err) => {
        console.log(err);
      });
    }
  
    joinRoom() {
      this.newUser.username = this.userTruc.currentUser.username;
      var date = new Date();
      localStorage.setItem("user", JSON.stringify(this.newUser));
      this.getChatByRoom(this.newUser.room);
      this.msgData = { room: this.newUser.room, username: this.newUser.username, message: '' };
      this.joinned = true;
      this.socket.emit('save-message', { room: this.newUser.room, username: this.newUser.username, message: 'Enter the Arena', updated_at: date });
    }
  
    sendMessage() {
      this.chatService.saveChat(this.msgData).then((result) => {
        this.socket.emit('save-message', result);
      }, (err) => {
        console.log(err);
      });
    }
  
  //   logout() {
  //     var date = new Date();
  //     var user = JSON.parse(localStorage.getItem("user"));
  //     this.socket.emit('save-message', { room: user.room, username: user.username, message: 'Left this room', updated_at: date });
  //     localStorage.removeItem("user");
  //     this.joinned = false;
  // }

}

