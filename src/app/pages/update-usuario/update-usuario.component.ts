import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  constructor(public fb:FormBuilder, public usuariosServicio:UsuariosService) { }

  formUpdateU = this.fb.group({
    nombre:["", Validators.required],
    email:["", Validators.required],
    avatar:["", Validators.required]
  })

  registro(){
    if(this.formUpdateU.valid){
      this.usuariosServicio.updateUsuario(this.formUpdateU.value).subscribe(respuetaBackend=>{
        console.log(respuetaBackend)
      })
    }
  }

  ngOnInit(): void {
  }

}
