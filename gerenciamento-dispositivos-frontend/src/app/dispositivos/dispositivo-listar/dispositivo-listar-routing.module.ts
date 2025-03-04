import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivoListarComponent } from './dispositivo-listar/dispositivo-listar.component';

const routes: Routes = [
  {path:"",component:DispositivoListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositivoListarRoutingModule { }
