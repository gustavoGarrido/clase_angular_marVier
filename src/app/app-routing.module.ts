import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { LoginModule } from './pages/login/login.module';
import { UpdateUsuarioModule } from './pages/update-usuario/update-usuario.module';
import { AuthGuard } from './guards/auth.guard';
import { PaginaInicioModule } from './pages/pagina-inicio/pagina-inicio.module';



const routes: Routes = [
    {
      path:"usuarios",
      loadChildren:()=> import('src/app/pages/usuarios/usuarios.module').then(m=>UsuariosModule)
    },
    {
      path:"login",
      loadChildren:()=> import('src/app/pages/login/login.module').then(m=>LoginModule)
    },
    {
      path:"updateUsuario",
      loadChildren:()=> import('src/app/pages/update-usuario/update-usuario.module').then(m=>UpdateUsuarioModule),
      // canActivate:[AuthGuard]
    },
    {
      path:"paginaInicio",
      loadChildren:()=> import('src/app/pages/pagina-inicio/pagina-inicio.module').then(m=>PaginaInicioModule),
      canActivate:[AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
