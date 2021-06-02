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
    nombre:["",Validators.required],
    apellido:[],
    tipo_doc:[],
    numero_doc:[],
    email:[],
    telefono:[],
    edad:[],
    nombre_tutor:[],
    password:[]
  })

  registro(){
    if(this.formCrearUsuario.valid == false){
      //mostrar cartelito con color rojo
    }
    else{
      //registra en base de datos
    }
    console.log(this.formCrearUsuario.valid)
  }

  ngOnInit(): void {
  }

}
