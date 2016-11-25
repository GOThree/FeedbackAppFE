import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgotPasswordModule } from './forgotpassword/forgotpassword.module';
import { SharedModule } from './shared/shared.module';
import { HttpClient } from './shared/auth/http.client';

import { AuthGuard } from './shared/auth/auth.guard';
import {ReviewModule} from "./review/review.module";
import {NgaModule} from "./theme/nga.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    SharedModule.forRoot(),
    NgaModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    ReviewModule,
    ForgotPasswordModule
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>',
    },
    AuthGuard,
    HttpClient
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
