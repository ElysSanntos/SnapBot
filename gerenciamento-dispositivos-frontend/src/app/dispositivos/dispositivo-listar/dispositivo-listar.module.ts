import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispositivoListarRoutingModule } from './dispositivo-listar-routing.module';
import { DispositivoListarComponent } from './dispositivo-listar/dispositivo-listar.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DispositivoListarComponent
  ],
  imports: [
    CommonModule,
    DispositivoListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ]
})
export class DispositivoListarModule { }
