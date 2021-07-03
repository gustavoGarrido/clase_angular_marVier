import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IrespBackend from '../interfaces/IrespBackend';
import {of} from 'rxjs'
import { delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  login(loginForm:{}){
    return this.http.post<IrespBackend>('http://localhost:3000/users/login',loginForm)
  }

  prueba(){
    return this.http.get<IrespBackend>('http://localhost:3000/users/')
  }

  checkEmail(email:string){
    return of({EmailValido:email !== "gustavo@gmail.com"})
            .pipe(delay(3000)) //Retorna el email si es diferente al enviado por parametro
  } 
}
