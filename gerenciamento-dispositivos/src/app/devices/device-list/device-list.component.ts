import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  devices: any[] = [];
  displayedColumns: string[] = ['name', 'model', 'status', 'actions'];

  // Não inicializamos a dataSource aqui
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    // Inicializamos dataSource dentro do ngOnInit
    this.deviceService.getDevices().subscribe(devices => {
      this.devices = devices;
      this.dataSource = new MatTableDataSource(this.devices);  // Inicializa com os dados da API
    });
  }

  onMarkAsUsed(deviceId: number): void {
    this.deviceService.updateDevice(deviceId, { status: 'Em uso' }).subscribe(() => {
      this.devices = this.devices.map(device =>
        device.id === deviceId ? { ...device, status: 'Em uso' } : device
      );
      this.dataSource.data = this.devices;  // Atualiza a dataSource após a alteração
    });
  }

  onDelete(deviceId: number): void {
    this.deviceService.deleteDevice(deviceId).subscribe(() => {
      this.devices = this.devices.filter(device => device.id !== deviceId);
      this.dataSource.data = this.devices;  // Atualiza a dataSource após a exclusão
    });
  }
}
