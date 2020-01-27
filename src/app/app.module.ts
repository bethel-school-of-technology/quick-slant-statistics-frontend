import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// ng serve --proxy-config proxy.conf.json
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { fakeBackendProvider } from '../app/helpers/fake-backend';
import { JwtInterceptor } from '../app/helpers/jwt.interceptor';
import { ErrorInterceptor } from '../app/helpers/error.interceptor';
import { ChatComponent } from 'src/app/chat/chat.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { ViewteamsComponent } from './viewteams/viewteams.component';


// import { routing } from './app.routing';


const routes: Routes = [
  {
    path: '',
    component: UserFormComponent
  },
  {
    path: 'user/:generate_uid',
    component: DisplayUserDataComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'addteam',
    component: AddTeamComponent
  },

  {
    path: 'view',
    component: ViewteamsComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    DisplayUserDataComponent,
    LoginComponent,
    ChatComponent,
    AddTeamComponent,
    ViewteamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
