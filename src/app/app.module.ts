import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
//import { Router } from "@angular/router";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: UserFormComponent
  },
  {
    path: 'user/generate_uid', //look at this url path
    component: DisplayUserDataComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    DisplayUserDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    //Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }