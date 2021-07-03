import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosPipe } from './estados.pipe';



@NgModule({
  declarations: [
    EstadosPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[EstadosPipe]
})
export class CommondModule { }
