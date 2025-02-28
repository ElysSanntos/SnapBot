import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceFormComponent } from './devices/device-form/device-form.component';
import { DeviceEditComponent } from './devices/device-edit/device-edit.component';


const routes: Routes = [
  { path: 'devices', component: DeviceListComponent },
  { path: 'devices/edit/:id', component: DeviceEditComponent }, 
  { path: '**', redirectTo: 'devices', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
