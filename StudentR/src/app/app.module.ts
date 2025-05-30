import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { StudentRegistrationComponent } from './student-registration/student-registration.component';


@NgModule({

  declarations: [

	AppComponent,

	StudentRegistrationComponent

  ],

  imports: [

	BrowserModule,

	FormsModule,

	HttpClientModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }