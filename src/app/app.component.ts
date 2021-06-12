import { Component, NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(public authService: AuthService){}
  title = 'claseMarVier';
  binding = "Hola mundo bindind"
  nombre:string = "Gustavo"

  clase_prueba = "color_red"
  cambio_etiqueta = "etiqueta vieja"
  clase_titulo = "black"

  cambiarEtiqueta(){
    this.cambio_etiqueta = "etiqueta nueva"
  }

  cambiarColor(color:string){
    this.clase_titulo = color
    console.log(color)
  }

}
