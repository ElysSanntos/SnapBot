import { Component } from '@angular/core';
import { DeviceService } from '../device.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-device-form',
  standalone: false,
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss']
})

export class DeviceFormComponent {
  deviceForm!: NgForm;

  device = {
    name: '',
    location: '',
    purchase_date: '',
    model: '',
    in_use: 0
  };

  constructor(private deviceService: DeviceService) {}

  onSubmit(): void {
    if (this.device.name && this.device.location && this.device.purchase_date) {
      console.log('Formulário enviado com sucesso:', this.device);

      // Chama o serviço para adicionar o dispositivo
      this.deviceService.addDevice(this.device).subscribe(
        (response) => {
          console.log('Dispositivo adicionado com sucesso:', response);
          // Ações após envio com sucesso (ex: limpar formulário, redirecionar, etc.)
        },
        (error) => {
          console.error('Erro ao adicionar dispositivo:', error);
        }
      );
    } else {
      console.log('Por favor, preencha todos os campos.');
    }
  }
}


