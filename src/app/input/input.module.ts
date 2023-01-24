import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputHelpComponent} from "./components/input-help/input-help.component";
import {MaterialModule} from "../material.module";



@NgModule({
  declarations: [
    InputHelpComponent
  ],
  exports:[
    InputHelpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class InputModule { }
