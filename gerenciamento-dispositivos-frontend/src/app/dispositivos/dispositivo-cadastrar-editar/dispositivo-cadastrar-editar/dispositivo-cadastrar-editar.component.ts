import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DispositivoService } from '../../dispositivo.service';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dispositivo-cadastrar-editar',
  standalone: false,
  templateUrl: './dispositivo-cadastrar-editar.component.html',
  styleUrl: './dispositivo-cadastrar-editar.component.scss'
})
export class DispositivoCadastrarEditarComponent implements OnInit {
  formGroup!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private dispositivoService: DispositivoService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ["", Validators.required],
      location: ["", Validators.required],
      purchase_date: ["", Validators.required],
      in_use: [false, Validators.required]
    });
  }

  onSubmit(): void {
    const formData = this.formGroup.value;

    // Verifica se a data está correta, caso contrário formata a data
    if (formData.purchase_date instanceof Date && !isNaN(formData.purchase_date.getTime())) {
      formData.purchase_date = format(formData.purchase_date, 'yyyy-MM-dd HH:mm:ss');
    } else {
      formData.purchase_date = format(new Date(formData.purchase_date), 'yyyy-MM-dd HH:mm:ss');
    }

    // Faz a requisição para cadastrar o dispositivo
    this.http.post('http://localhost:8000/api/devices', formData).subscribe(
      (response: any) => {
        // Mensagem de sucesso
        this.successMessage = 'Dispositivo cadastrado com sucesso!';

        // Limpa a mensagem após 3 segundos
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);

        // Limpa os campos do formulário após o envio
        this.formGroup.reset();

        // Redireciona para a tela de listagem após 3 segundos
        setTimeout(() => {
          this.router.navigate(['/dispositivos']);
        }, 3000);
      },
      (error) => {
        // Mensagem de erro
        this.errorMessage = 'Ocorreu um erro ao cadastrar o dispositivo. Tente novamente!';

        // Limpa a mensagem de erro após 3 segundos
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    );
  }
}
