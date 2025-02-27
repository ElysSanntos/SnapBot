import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from '../device.service'; // Importe o serviço
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-device-form',
  standalone: false,
  templateUrl: './device-form.component.html',
  styleUrl: './device-form.component.scss'
})
export class DeviceFormComponent {
  deviceForm: FormGroup;
  deviceId?: number; // Definição correta da variável

  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService, // Injeção do serviço
    private snackBar: MatSnackBar, // Injeção do MatSnackBar
    private router: Router // Injeção do Router
  ) {
    this.deviceForm = this.fb.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.deviceForm.invalid) return;

    const deviceData = this.deviceForm.value;

    if (this.deviceId) {
      // Atualiza dispositivo existente
      this.deviceService.updateDevice(this.deviceId, deviceData).subscribe(() => {
        this.showMessage('Dispositivo atualizado com sucesso!');
        this.router.navigate(['/devices']);
      });
    } else {
      // Cria um novo dispositivo
      this.deviceService.addDevice(deviceData).subscribe(() => {
        this.showMessage('Dispositivo cadastrado com sucesso!');
        this.deviceForm.reset();
      });
    }
  }

  private showMessage(message: string) {
    this.snackBar.open(message, 'Fechar', { duration: 3000 });
  }
}
