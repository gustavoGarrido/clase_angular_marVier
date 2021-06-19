import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRecibeComponent } from './page-recibe.component';

const routes: Routes = [
  {path:"", component:PageRecibeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRecibeRoutingModule { }
