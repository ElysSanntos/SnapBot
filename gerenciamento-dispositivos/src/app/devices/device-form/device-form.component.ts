import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DeviceService } from '../device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Device } from '../models/device.model';


@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeviceFormComponent implements OnInit {
  deviceForm!: FormGroup;
  deviceId: number | undefined // Para saber se é edição ou cadastro

  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
      // Inicializando o formulário com controles e validadores
    console.log('DeviceFormComponent carregado!');
    this.deviceForm = this.fb.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      status: ['', Validators.required]
    });

    // Verifica se existe um ID na URL (Edição)
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    const deviceId = Number(id); // Converte a string para number
    if (!isNaN(deviceId)) {
      this.loadDevice(deviceId); // Passa o ID convertido
    }
  }
}
  // Carrega os dados para edição
  loadDevice(id: number) {
    this.deviceService.getDeviceById(id).subscribe((device: Device) => {
      this.deviceForm.patchValue(device);
    });
  }

  onSubmit() {
    if (this.deviceForm.invalid) return;

    const deviceData = this.deviceForm.value;

    if (this.deviceId) {
      // Modo de edição
      this.deviceService.updateDevice(this.deviceId, deviceData).subscribe(() => {
        this.showMessage('Dispositivo atualizado com sucesso!');
        this.router.navigate(['/devices']);
      });
    } else {
      // Modo de cadastro
      this.deviceService.createDevice(deviceData).subscribe(() => {
        this.showMessage('Dispositivo cadastrado com sucesso!');
        this.deviceForm.reset();
      });
    }
  }

  private showMessage(message: string) {
    this.snackBar.open(message, 'Fechar', { duration: 3000 });
  }
}
