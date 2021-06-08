import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { LoginModule } from './pages/login/login.module';



const routes: Routes = [
    {
      path:"usuarios",
      loadChildren:()=> import('src/app/pages/usuarios/usuarios.module').then(m=>UsuariosModule)
    },
    {
      path:"login",
      loadChildren:()=> import('src/app/pages/login/login.module').then(m=>LoginModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
