import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnviarImagenesRoutingModule } from './enviar-imagenes-routing.module';
import { EnviarImagenesComponent } from './enviar-imagenes.component';


@NgModule({
  declarations: [
    EnviarImagenesComponent
  ],
  imports: [
    CommonModule,
    EnviarImagenesRoutingModule
  ]
})
export class EnviarImagenesModule { }
