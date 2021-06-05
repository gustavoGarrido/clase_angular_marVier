import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  formCrearUsuario= this.fb.group({
    nombre:["Gustavo",[Validators.required, Validators.pattern(/^([A-Z]|[a-z])+$/)]],
    apellido:["", Validators.required],
    tipo_doc:["", Validators.required],
    numero_doc:["", [Validators.required, Validators.maxLength(8), Validators.minLength(6)]],
    email:["", [Validators.required, Validators.email]],
    telefono:["", Validators.pattern(/^(15|11|\+5411|\+5415|5415|5411)?[2-9]\d{7}$/)],
    edad:["", [Validators.required, Validators.max(100)]],
    nombre_tutor:["", Validators.required],
    password:["", Validators.required]
  })

  registro(){
    console.log(this.formCrearUsuario.valid)
    if(this.formCrearUsuario.valid){
      //Implementar un servicio que envia los datos al backend
    }
  }

  validarEdad(){
    if(this.formCrearUsuario.get('edad')?.value > 18){
      this.formCrearUsuario.get('nombre_tutor')?.clearValidators();
      this.formCrearUsuario.get('nombre_tutor')?.updateValueAndValidity();
    }
    else{
      this.formCrearUsuario.get('nombre_tutor')?.setValidators(Validators.required)
      this.formCrearUsuario.get('nombre_tutor')?.updateValueAndValidity();
    }
  }

  ngOnInit(): void {
  }

}
