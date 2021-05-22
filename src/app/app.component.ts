import { Component, NgModule } from '@angular/core';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'claseMarVier';

  constructor(){}

  nombre_aplicacion:string = "App curso Martes y viernes";

  mostrar_clase:string = "propuedad1"

  nombre:string = "nombre"

  colorTitulo:string = "p1"

  nombreColor:string = ""

  cambiarClase(){
    this.mostrar_clase = "propuedad2"
  }

  cambiarColorTitulo(color:string){
    this.colorTitulo = color
  }

}
