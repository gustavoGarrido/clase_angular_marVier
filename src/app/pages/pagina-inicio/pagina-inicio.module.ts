import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaInicioRoutingModule } from './pagina-inicio-routing.module';
import { PaginaInicioComponent } from './pagina-inicio.component';


@NgModule({
  declarations: [
    PaginaInicioComponent
  ],
  imports: [
    CommonModule,
    PaginaInicioRoutingModule
  ]
})
export class PaginaInicioModule { }
