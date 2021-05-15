import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
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
