import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivoCadastrarEditarComponent } from './dispositivo-cadastrar-editar/dispositivo-cadastrar-editar.component';

const routes: Routes = [
  {path: "", component: DispositivoCadastrarEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositivoCadastrarEditarRoutingModule { }
