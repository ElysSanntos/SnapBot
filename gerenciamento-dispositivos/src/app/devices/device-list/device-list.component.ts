import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-device-list',
  standalone: false,
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices: any[] = [];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'model', 'status', 'actions'];

  constructor(
    private deviceService: DeviceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log('DeviceListComponent carregado!');
    this.loadDevices();
  }

  loadDevices() {
    this.deviceService.getDevices().subscribe(
      (response: any) => {

        this.devices = response.data.map((device: any) => ({
          ...device,
           status: device.in_use === 1 ? 'Ativo' : 'Inativo'
        }));
        this.dataSource.data = this.devices; // Atualiza a tabela
      },
      (error: any) => {
        console.error('Erro ao carregar dispositivos', error);
      }
    );
  }



  editDevice(device: any) {
    this.router.navigate(['/devices/edit', device.id]);
  }

  deleteDevice(deviceId: number) {
    if (confirm('Tem certeza que deseja excluir este dispositivo?')) {
      this.deviceService.deleteDevice(deviceId).subscribe(
        () => {
          this.loadDevices(); // Recarrega a lista após excluir
          this.snackBar.open('Dispositivo excluído com sucesso!', 'Fechar', {
            duration: 3000, // Exibe a mensagem por 3 segundos
            panelClass: ['success-snackbar']
          });
        },
        (error: any) => {
          console.error('Erro ao excluir dispositivo', error);
          this.snackBar.open('Erro ao excluir dispositivo.', 'Fechar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      );
    }
  }
}
