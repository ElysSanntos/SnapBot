import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-device-list',
  standalone: false,
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  devices: any[] = []; // Armazena a lista de dispositivos
  filteredDevices: MatTableDataSource<any> = new MatTableDataSource(); // Fonte de dados da tabela
  filterStatus: string = ''; // Status do filtro
  displayedColumns: string[] = [
    'name',
    'location',
    'purchase_date',
    'model',
    'in_use',
    'actions',
  ];

  constructor(private deviceService: DeviceService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadDevices(); // Carrega a lista de dispositivos na inicialização
  }

  // Método para carregar os dispositivos
  loadDevices(): void {
    this.deviceService.getDevices().subscribe(
      (response: any) => {
        console.log('Resposta da API:', response);

        // Verifica se a resposta é um array diretamente ou se os dispositivos estão dentro de um objeto
        if (Array.isArray(response)) {
          this.devices = response;
        } else if (response.data && Array.isArray(response.data)) {
          this.devices = response.data;
        } else {
          console.error('Formato inesperado da resposta:', response);
          this.devices = []; // Garante que a lista não quebre
        }

        // Atualiza a tabela com os dispositivos
        this.filteredDevices.data = this.devices;
      },
      (error) => {
        console.error('Erro ao carregar dispositivos', error);
      }
    );
  }

  editDevice(device: any): void {
    console.log('Editando dispositivo:', device);
    this.router.navigate(['/devices/edit', device.id]); // Redireciona para a tela de edição
  }

  // Filtra os dispositivos com base no status
  filterDevices(): void {
    if (!this.filterStatus) {
      this.filteredDevices.data = this.devices;
    } else {
      this.filteredDevices.data = this.devices.filter(
        (device) => device.in_use.toString() === this.filterStatus
      );
    }
  }

  deleteDevice(deviceId: number): void {
    this.deviceService.deleteDevice(deviceId).subscribe(() => {
      this._snackBar.open('Dispositivo excluído com sucesso!', 'Fechar', {
        duration: 3000, // Tempo da notificação (3 segundos)
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });

      this.loadDevices(); // Atualiza a lista após excluir
    }, error => {
      this._snackBar.open('Erro ao excluir dispositivo!', 'Fechar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    });
  }

}
