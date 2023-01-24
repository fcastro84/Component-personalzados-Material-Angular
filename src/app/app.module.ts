import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormFieldLabelExampleComponent } from './components/form-field-label-example/form-field-label-example.component';
import { LoginComponent } from './components/login/login.component';
import {InputModule} from "./input/input.module";
import {Input2Module} from "./input2/input2.module";


@NgModule({
  declarations: [
    AppComponent,
    FormFieldLabelExampleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    InputModule,
    Input2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
