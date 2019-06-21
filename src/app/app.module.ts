import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import{ HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { ArticlesService } from './services/articles.service';
import { AddComponent } from './add/add.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';
import { WeatherComponent } from './weather/weather.component';
import { MessagesService } from './services/messages.service';
import { BookingComponent } from './booking/booking.component';

import 'flatpickr/dist/flatpickr.css'; 
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    HomeComponent,
    AddComponent,
    UserComponent,
    AdminComponent,
    ChatComponent,
    WeatherComponent, 
    BookingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    CommonModule,
    BrowserAnimationsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [UserService, ArticlesService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
