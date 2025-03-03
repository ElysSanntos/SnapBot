import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-device-form',
  standalone: false,
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss']
})
export class DeviceFormComponent implements OnInit {
  @Input() deviceId: number | undefined;
  deviceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Inicializando o FormGroup com os controles
    this.deviceForm = this.fb.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      location: ['', Validators.required],
      purchase_date: ['', Validators.required],
      in_use: [false]  // Controle de status
    });
  }

  onSubmit() {
    if (this.deviceForm.valid) {
      // Exemplo de uso do MatSnackBar
      this.snackBar.open('Dispositivo salvo com sucesso!', 'Fechar', {
        duration: 3000,  // A duração do SnackBar
      });
    } else {
      this.snackBar.open('Por favor, preencha todos os campos!', 'Fechar', {
        duration: 3000,
      });
    }
  }
}
