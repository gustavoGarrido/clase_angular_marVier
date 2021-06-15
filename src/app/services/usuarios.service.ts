import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  rutaApi:string = "http://localhost:3000" 

  updateUsuario(dataForm:{}){
    return this.http.put(`${this.rutaApi}/users/update`,dataForm,{})
  }

}
