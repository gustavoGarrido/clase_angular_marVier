import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IrespBackend from '../interfaces/IrespBackend';



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
}
