import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipePageComponent } from './pipe-page.component';

const routes: Routes = [
  {path:"", component:PipePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipePageRoutingModule { }
