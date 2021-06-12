import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { LoginComponent } from './pages/login/login.component';
import { PadreModule } from './pages/padre/padre.module';
import { VerPostModule } from './pages/ver-post/ver-post.module';
import { AuthGuard } from './guards/auth.guard';
import { EnviarImagenesModule } from './pages/enviar-imagenes/enviar-imagenes.module';

const routes: Routes = [
  {
    path:"paginaInicio", 
    component: PaginaInicioComponent,
    children:[
      {
        path:"contactenos",
        component: ContactenosComponent
      }
    ]
  },
  {
    path:"reactiveForm", component:ReactiveFormComponent
  },

  {
    path: 'usuarios', 
    loadChildren: () => import('src/app/pages/usuarios/usuarios.module').then(m => UsuariosModule)
  },
  {
    path: 'padre', 
    loadChildren: () => import('src/app/pages/padre/padre.module').then(m => PadreModule)
  },
  {
    path: 'verPost', 
    loadChildren: () => import('src/app/pages/ver-post/ver-post.module').then(m => VerPostModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'enviarImagen', 
    loadChildren: () => import('src/app/pages/enviar-imagenes/enviar-imagenes.module').then(m => EnviarImagenesModule),
  },
  {
    path:"login", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
