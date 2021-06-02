import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './pages/usuarios/usuarios.module';



const routes: Routes = [
    {
      path:"usuarios",
      loadChildren:()=> import('src/app/pages/usuarios/usuarios.module').then(m=>UsuariosModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
