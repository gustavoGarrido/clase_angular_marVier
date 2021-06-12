import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  

  enviarImagen(formData:FormData){
    return this.http.post('http://localhost:3000/post/upload', formData,{})
  }

}
