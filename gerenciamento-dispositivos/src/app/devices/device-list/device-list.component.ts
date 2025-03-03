import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

// Definindo a interface 'Device' para tipar os dispositivos
interface Device {
  id: number;
  name: string;
  location: string;
  purchase_date: string;
  in_use: number;
  created_at: string;
  updated_at: string;
  status: string;
}

@Component({
  selector: 'app-device-list',
  standalone: false,
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  deviceForm: FormGroup;
  devices: Device[] = []; // Tipado como array de dispositivos
  displayedColumns: string[] = ['id', 'name', 'location', 'purchase_date', 'status', 'actions'];
  dataSource: Device[] = []; // Tipado como array de dispositivos
  filteredDataSource: Device[] = []; // Tipado como array de dispositivos
  statusFilter = 'Todos';

  constructor(
    private deviceService: DeviceService,
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    // Inicializando o FormGroup dentro do construtor
    this.deviceForm = new FormGroup({
      name: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      purchase_date: new FormControl('', Validators.required),
    });

    // Carregar dispositivos ao criar o componente
    this.loadDevices();
  }

  ngOnInit(): void {
    console.log('DeviceListComponent carregado!');
    this.loadDevices();
  }

  // Função para carregar os dispositivos
  loadDevices(): void {
    this.deviceService.getDevices().subscribe((response: { status: string; data: any[] }) => {
      if (response.status === 'ok') {
        this.devices = response.data.map((device: any) => ({
          ...device,
          status: device.in_use === 1 ? 'Ativo' : 'Inativo',
        }));
        this.dataSource = this.devices; // Atualiza a tabela com todos os dispositivos
        this.filteredDataSource = this.devices; // Inicializa com todos os dispositivos
      } else {
        this.snackBar.open('Falha ao carregar dispositivos', 'Fechar', { duration: 3000 });
      }
    });
  }

  // Método onStatusChange para filtrar os dispositivos por status
  onStatusChange(status: string): void {
    if (status === 'Todos') {
      this.filteredDataSource = this.devices; // Exibe todos os dispositivos
    } else {
      this.filteredDataSource = this.devices.filter(
        (device) => device.status === status
      );
    }
  }

  // Método para editar o dispositivo
  editDevice(device: Device): void {
    this.router.navigate(['/devices/edit', device.id]);
  }

  // Método para excluir o dispositivo
  deleteDevice(deviceId: number): void {
    if (confirm('Tem certeza que deseja excluir este dispositivo?')) {
      this.deviceService.deleteDevice(deviceId).subscribe(
        () => {
          this.loadDevices(); // Recarrega a lista após excluir
          this.snackBar.open('Dispositivo excluído com sucesso!', 'Fechar', {
            duration: 3000,
            panelClass: ['success-snackbar'],
          });
        },
        (error: any) => {
          console.error('Erro ao excluir dispositivo', error);
          this.snackBar.open('Erro ao excluir dispositivo.', 'Fechar', {
            duration: 3000,
            panelClass: ['error-snackbar'],
          });
        }
      );
    }
  }

  // Método para exibir o snackBar
  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 2000,
    });
  }
}
