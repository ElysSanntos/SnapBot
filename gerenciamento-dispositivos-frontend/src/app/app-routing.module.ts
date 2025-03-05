import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DispositivoListarComponent } from './dispositivos/dispositivo-listar/dispositivo-listar/dispositivo-listar.component';
import { DispositivoCadastrarEditarModule } from './dispositivos/dispositivo-cadastrar-editar/dispositivo-cadastrar-editar.module';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {
    path:"dispositivos",
    loadChildren: () => import('./dispositivos/dispositivo-listar/dispositivo-listar.module').
    then(modulo => modulo.DispositivoListarModule)
  },
  {path:"dispositivos/cadastrar",
   loadChildren:()=> import('./dispositivos/dispositivo-cadastrar-editar/dispositivo-cadastrar-editar.module').
   then(modulo => modulo.DispositivoCadastrarEditarModule)
  },
  {path:"dispositivos/editar/:id",
   loadChildren:()=> import('./dispositivos/dispositivo-cadastrar-editar/dispositivo-cadastrar-editar.module').
   then(modulo => modulo.DispositivoCadastrarEditarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
