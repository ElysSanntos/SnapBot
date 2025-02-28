import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DeviceService } from '../device.service';
import { Device } from '../../models/device';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {
  deviceForm: FormGroup;
  deviceId = 0;

  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private router: Router,   // Injetando o Router
    private route: ActivatedRoute  // Injetando o ActivatedRoute
  ) {
    this.deviceForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.deviceId = +id;
      if (isNaN(this.deviceId)) {

        this.router.navigate(['/devices']);
      } else {
        this.loadDevice();
      }
    } else {
      this.router.navigate(['/devices']);
    }
  }
  loadDevice(): void {
    if (this.deviceId !== undefined) {
      this.deviceService.getDeviceById(this.deviceId).subscribe((device: Device) => {
        if (device) {
          this.deviceForm.patchValue(device); // Preenche o formulário com os dados do dispositivo
        }
      });
    } else {
      console.error('Device ID is undefined');
    }
  }

  // Método para salvar o dispositivo
  saveDevice(): void {
    // Verifique se deviceId está definido e é um número
    if (this.deviceId !== undefined && this.deviceForm.valid) {
      this.deviceService.updateDevice(this.deviceId, this.deviceForm.value).subscribe(() => {
        this.router.navigate(['/devices']);
      });
    } else {
      console.error('ID do dispositivo não encontrado ou formulário inválido!');
    }
  }


  // Método para cancelar a edição e voltar à lista
  cancel(): void {
    this.router.navigate(['/devices']); // Redireciona para a lista de dispositivos ao cancelar
  }
}
