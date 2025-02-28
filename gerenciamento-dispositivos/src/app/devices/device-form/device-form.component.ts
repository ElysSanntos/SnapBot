import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from '../device.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-form',
  standalone: false,
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss']
})

export class DeviceFormComponent {
  deviceForm: FormGroup;
  deviceId?: number;

  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.deviceForm = this.fb.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      status: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.deviceForm.invalid) return;

    // Ajusta os dados do formulário, incluindo o status e o campo in_use
    const deviceData = {
      ...this.deviceForm.value,
      status: this.deviceForm.value.status === 'in_use' ? 'in_use' : 'out_of_use', // Mapeia status
      in_use: this.deviceForm.value.status === 'in_use' ? true : false, // Mapeia o campo in_use
      purchase_date: this.deviceForm.value.purchase_date || new Date().toISOString().split('T')[0] // Preenche com a data atual se estiver nulo
    };

    if (this.deviceId) {
      // Atualiza dispositivo existente
      this.deviceService.updateDevice(this.deviceId, deviceData).subscribe(() => {
        this.showMessage('Dispositivo atualizado com sucesso!');
        this.router.navigate(['/devices']);
        this.clearPurchaseDate(); // Limpa o campo de data
      });
    } else {
      // Cria um novo dispositivo
      this.deviceService.addDevice(deviceData).subscribe(() => {
        this.showMessage('Dispositivo cadastrado com sucesso!');
        this.deviceForm.reset();
        this.clearPurchaseDate(); // Limpa o campo de data
      });
    }
  }

  // Função para limpar o campo purchase_date
  clearPurchaseDate() {
    this.deviceForm.patchValue({
      purchase_date: null
    });
  }



  // Função showMessage para exibir as mensagens de feedback
  private showMessage(message: string) {
    this.snackBar.open(message, 'Fechar', { duration: 3000 }); // Exibe a mensagem por 3 segundos
  }
}
