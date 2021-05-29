import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder, private usuariosService:UsuariosService) { }

  formLogin = this.fb.group({
    email:["", Validators.required],
    password:["", Validators.required]
  })

  login(){
    this.usuariosService.login(this.formLogin.value).subscribe(resp=>{
      console.log(resp)
    })
  }

  ngOnInit(): void {
  }

}
