import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DispositivoListarComponent } from './dispositivos/dispositivo-listar/dispositivo-listar/dispositivo-listar.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {
    path:"dispositivos",
    loadChildren: () => import('./dispositivos/dispositivo-listar/dispositivo-listar.module').then(modulo => modulo.DispositivoListarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
