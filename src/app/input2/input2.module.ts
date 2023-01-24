import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputHelp2Component} from "./components/input-help2/input-help2.component";
import {MaterialModule} from "../material.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    InputHelp2Component
  ],
  exports: [
    InputHelp2Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class Input2Module { }
