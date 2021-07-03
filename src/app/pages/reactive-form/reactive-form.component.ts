import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PepapigService } from '../../services/pepapig.service';
import { MyValidations } from 'src/app/utils/myValidations';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(public fb:FormBuilder, public pepapigServicio:PepapigService, public usuarioService:UsuariosService) { }

  loginForm = this.fb.group({
    nombre:["", [Validators.required, Validators.pattern(/^([A-Z]|[a-z])+$/)]],
    apellido:["", Validators.required],
    tipo_doc:[""],
    numero_doc:["", [Validators.maxLength(9), Validators.minLength(5)]],
    email:['', MyValidations.emailValido(this.usuarioService)],
    telefono:["", [Validators.pattern(/^(15|11|\+5415|\+5411|5415|5411)?[2-9]\d{7}$/)] ],
    edad:["", [MyValidations.numeroDivisible(3), MyValidations.numeroImpar]],
    nombre_tutor:["", Validators.required], 
    password:["", Validators.required]
  })

  validarEdad(){
    if(this.loginForm.get('edad')?.value > 18){
      this.loginForm.get('nombre_tutor')?.clearValidators()
      this.loginForm.get('nombre_tutor')?.updateValueAndValidity()
    }
    else{
      this.loginForm.get('nombre_tutor')?.setValidators(Validators.required)
      this.loginForm.get('nombre_tutor')?.updateValueAndValidity()
    }
  }

  enviar(){
    console.log(this.loginForm.valid)
    this.loginForm.get('nombre')?.hasError
    this.loginForm.get('nombre')?.errors
    this.loginForm.get('email')?.errors

    console.log(this.loginForm.get('email')?.errors)
  }



  ngOnInit(): void {
    console.log("data",this.usuarioService.checkEmail("gustavo@gmail.ar").pipe(
      map(response=>{
          return response.EmailValido? null : {noValido:true}
      })
  ) )
  }

}
