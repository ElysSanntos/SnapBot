import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DispositivoService } from '../../dispositivo.service';
import { Router } from '@angular/router';
import { format } from 'date-fns';


@Component({
  selector: 'app-dispositivo-cadastrar-editar',
  standalone: false,
  templateUrl: './dispositivo-cadastrar-editar.component.html',
  styleUrl: './dispositivo-cadastrar-editar.component.scss'
})
export class DispositivoCadastrarEditarComponent  implements OnInit{
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dispositivoService: DispositivoService,
    private router: Router,
    ){}

  ngOnInit(): void {
      this.formGroup = this.formBuilder.group({
        name:["", Validators.required],
        location: ["",Validators.required],
        purchase_date: ["",Validators.required],
        in_use: [false, Validators.required]
      })
  }

  salvar() {
    if (this.formGroup.valid) {
      let device = this.formGroup.value;

      // Verificar se purchase_date é uma instância de Date
      if (device.purchase_date instanceof Date && !isNaN(device.purchase_date.getTime())) {
        // Se for uma data válida, formatamos corretamente
        device.purchase_date = format(device.purchase_date, 'yyyy-MM-dd HH:mm:ss');
      } else {
        // Caso contrário, convertemos para o formato adequado
        device.purchase_date = format(new Date(device.purchase_date), 'yyyy-MM-dd HH:mm:ss');
      }

      this.dispositivoService.cadastrar(device).subscribe({
        next: () => {
          console.log("Cadastro realizado com sucesso!");
        },
        error: (err) => {
          console.error("Erro ao cadastrar:", err);
        }
      });
    }
  }


}
