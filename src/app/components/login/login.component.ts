import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
const tippy = require("node_modules/tippy.js/dist/tippy.cjs.js").default;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  popoverMessage = 'Popover description';
  hideConfirmButton = true;
  hideCancelButton = true;

  form: FormGroup;
  loading: boolean = false;
  hide = true;

  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      fecha: ['', Validators.required],
      prueba: ['', Validators.required],
      fechaGroup: this.fb.group({
        startFecha: ['', Validators.required],
        endFecha: ['', Validators.required],
      })
    });

  }

  poper(){
    console.log('mwlConfirmationPopover');
  }

  ngOnInit() {


  }

  ingresar(){

    const user = this.form.value.usuario;
    const pass = this.form.value.password;

    if(user === 'fidel' && pass === '123456789'){

      this.fakeLoading();

    }else{
      this.error();
      this.form.reset();
    }

  }

  error(){
    this._snackBar.open('Usuario o contraseña incorrecta', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000
    });
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['dashboard']);

    }, 1500);
  }

  mostrar(id: string, texto: string){
    tippy(id, {
      content: texto,
      arrow: true,
      maxWidth: 750,
      //placement: 'bottom'
      role: 'popover'
    });

  }

}


