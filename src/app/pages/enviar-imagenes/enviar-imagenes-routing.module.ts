import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviarImagenesComponent } from './enviar-imagenes.component';

const routes: Routes = [
  {path:"", component: EnviarImagenesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnviarImagenesRoutingModule { }
