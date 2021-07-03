import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { LoginModule } from './pages/login/login.module';
import { UpdateUsuarioModule } from './pages/update-usuario/update-usuario.module';
import { AuthGuard } from './guards/auth.guard';
import { PaginaInicioModule } from './pages/pagina-inicio/pagina-inicio.module';
import { PageEnviaModule } from './pages/page-envia/page-envia.module';
import { PageRecibeModule } from './pages/page-recibe/page-recibe.module';
import { EnviarImagenesModule } from './pages/enviar-imagenes/enviar-imagenes.module';
// import { LoginComponent } from './pages/login/login.component';



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
    },
    {
      path:"paginaEnvia",
      loadChildren:()=> import('src/app/pages/page-envia/page-envia.module').then(m=>PageEnviaModule),
      // canActivate:[AuthGuard]
    },
    {
      path:"paginaRecibe/:data1",
      loadChildren:()=> import('src/app/pages/page-recibe/page-recibe.module').then(m=>PageRecibeModule),
      // canActivate:[AuthGuard]
    },
    {
      path:"enviarImagen",
      loadChildren:()=> import('src/app/pages/enviar-imagenes/enviar-imagenes.module').then(m=>EnviarImagenesModule),
      // canActivate:[AuthGuard]
    },

    {path:"**", loadChildren:()=> import('src/app/pages/login/login.module').then(m=>LoginModule), pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
