import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  standalone: false,
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.scss'
})
export class DeviceListComponent implements OnInit {

  devices: any[] = [];  // Aqui vão os dispositivos que receberemos da API
  dataSource = new MatTableDataSource<any>(); // Inicializa corretamente
  displayedColumns: string[] = ['name', 'model', 'status', 'actions']; // Define as colunas


  constructor(private  deviceService: DeviceService, private readonly router: Router) {}

  ngOnInit(): void {
    console.log('DeviceListComponent carregado!');
    this.loadDevices();
  }

  loadDevices() {
    this.deviceService.getDevices().subscribe(
      (data: any) => {
        this.devices = data;
        this.dataSource.data = this.devices;
      },
      (error: any) => {
        console.error('Erro ao carregar dispositivos', error);
      }
    );
  }

  editDevice(device: any) {
    this.router.navigate(['/devices/edit', device.id]); // ✅ Redireciona para edição
  }

  deleteDevice(deviceId: number) {
    if (confirm('Tem certeza que deseja excluir este dispositivo?')) {
      this.deviceService.deleteDevice(deviceId).subscribe(() => {
        this.loadDevices(); // Recarrega a lista após excluir
      });
    }
  }
}
