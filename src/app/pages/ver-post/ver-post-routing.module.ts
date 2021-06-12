import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPostComponent } from './ver-post.component';

const routes: Routes = [
  {path:"", component:VerPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerPostRoutingModule { }
