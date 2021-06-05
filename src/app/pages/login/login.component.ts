import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder, private usuariosService:UsuariosService, public authService: AuthService) { }

  formLogin = this.fb.group({
    email:["", Validators.required],
    password:["", Validators.required]
  })

  login(){
    this.usuariosService.login(this.formLogin.value).subscribe(resp=>{
      if(resp.mensaje == "usuario encontrado"){
        localStorage.setItem("token", resp.token) // Almacena el token
        this.authService.authenticate() // Setea el estado de mi aplicacion a autenticate:true
        console.log("estado", this.authService.authState.value)
      }
      else{
        console.log("email o usuario invalidos")
      }
    })
  }

  ngOnInit(): void {
  }

}
