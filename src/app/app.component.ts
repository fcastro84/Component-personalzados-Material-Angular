import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Attributes{
  texto: string;
  id: string;
  label: string;
  }

interface Attributes2{
    texto: string;
    id: string;
    name: string;
    label: string;
    }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testing-angular-material';

  form: FormGroup;
  form2: FormGroup;
  values: Attributes = {
    texto: 'esto es u texto de ejemplo por Api',
    id: 'usuario',
    label: 'Usuario Api'
  }

  values2: Attributes2 = {
    texto: 'esto es u texto de ejemplo',
    id: 'usuario2',
    name: 'usuario2',
    label: 'Usuario'
  }



  constructor( private fb: FormBuilder ) {
    this.form = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(5)]],
    });
    this.form2 = this.fb.group({
      usuario2: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  ngOnInit(): void {
  }

  guardar(){
    console.log(this.form);
  }

  guardar2(){
    console.log(this.form2);
  }


}
