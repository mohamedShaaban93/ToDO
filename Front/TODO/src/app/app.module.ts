import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { RigsterComponent } from './user/rigster/rigster.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './todo/list/list.component';
import { CreateComponent } from './todo/create/create.component';
import { routes }  from  './app-routing.module';
import { DetailsComponent } from './todo/details/details.component';
import {AuthserviceService} from './authservice.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TodoService} from "./todo.service";


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RigsterComponent,
    ProfileComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthserviceService, HttpClient, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
