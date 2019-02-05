import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'signup', component : SignupComponent},
  { path : 'add', component : AddComponent},
  { path : 'chat', component : ChatComponent},
  { path : 'weather', component : WeatherComponent},

  { path : 'users/:blahId', component : UserComponent},
  { path : 'admin', component : AdminComponent},

  { path : '', component : HomeComponent},
  { path : '**', component : ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
