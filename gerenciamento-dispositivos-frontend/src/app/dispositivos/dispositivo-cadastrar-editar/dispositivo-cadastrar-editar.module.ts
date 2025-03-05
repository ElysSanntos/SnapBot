import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispositivoCadastrarEditarRoutingModule } from './dispositivo-cadastrar-editar-routing.module';
import { DispositivoCadastrarEditarComponent } from './dispositivo-cadastrar-editar/dispositivo-cadastrar-editar.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule, MatOption} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    DispositivoCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    DispositivoCadastrarEditarRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatOption,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule
  ],
})
export class DispositivoCadastrarEditarModule { }
