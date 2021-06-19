import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageEnviaComponent } from './page-envia.component';

const routes: Routes = [
  {
    path:"",
    component:PageEnviaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageEnviaRoutingModule { }
