import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispositivoListarRoutingModule } from './dispositivo-listar-routing.module';
import { DispositivoListarComponent } from './dispositivo-listar/dispositivo-listar.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    DispositivoListarComponent
  ],
  imports: [
    CommonModule,
    DispositivoListarRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    



  ]
})
export class DispositivoListarModule { }
