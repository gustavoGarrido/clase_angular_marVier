import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder, private loginService:LoginService, private authService: AuthService) {
    console.log("inicia constructor")
   }

  formLogin = this.fb.group({
    email:["", [Validators.required, Validators.email]],
    password:["", Validators.required]
  });

  hacerLogin(){
    if(this.formLogin.valid){
      this.loginService.login(this.formLogin.value).subscribe(resp=>{
        if(resp.mensaje =="usuario encontrado"){
          console.log(resp)
          localStorage.setItem("token", resp.token);
          this.authService.authenticate()
          console.log("estado auth", this.authService.authState)

        }
        else{
          console.log(resp)
          console.log("estado auth", this.authService.authState)
        }
      })
    }
    else{
      console.log("formulario invalido")
    }
  }

  ngOnInit(): void {
    console.log("inicia ngOnInit")
  }

  ngAfterContentInit(){
    console.log("Inicia ngAfterContentInit")
  }

  ngAfterViewInit(){
    console.log("Inicia ngAfterViewInit")
  }

  ngOnDestroy(){
    console.log("inicia ngOnDestroy")
  }

}
