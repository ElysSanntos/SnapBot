import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DispositivoService } from '../../dispositivo.service';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



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
  dispositivoId: number | null = null; // Inicializado corretamente

  constructor(
    private formBuilder: FormBuilder, // Mantendo o nome correto
    private dispositivoService: DispositivoService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Inicializa o formulário antes de buscar os dados
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      purchase_date: ['', Validators.required],
      in_use: [false, Validators.required]
    });

    // Captura o ID da URL
    this.route.paramMap.subscribe(params => {
      this.dispositivoId = Number(params.get('id')) || null;

      if (this.dispositivoId) {
        // Se tiver ID, busca os dados para edição
        this.dispositivoService.obterPorId(this.dispositivoId).subscribe(
          (dispositivo) => {
            this.formGroup.patchValue(dispositivo); // Preenche o formulário com os dados
          },
          () => {
            this.errorMessage = 'Erro ao carregar dispositivo!';
          }
        );
      }
    });
  }


  onSubmit(): void {
    const formData = this.formGroup.value;

    // Formata a data corretamente
    if (formData.purchase_date instanceof Date && !isNaN(formData.purchase_date.getTime())) {
      formData.purchase_date = format(formData.purchase_date, 'yyyy-MM-dd HH:mm:ss');
    } else {
      formData.purchase_date = format(new Date(formData.purchase_date), 'yyyy-MM-dd HH:mm:ss');
    }

    if (this.dispositivoId) {
      // Editar
      this.http.put(`http://localhost:8000/api/devices/${this.dispositivoId}`, formData).subscribe(
        () => {
          this.successMessage = 'Dispositivo atualizado com sucesso!';
          setTimeout(() => this.router.navigate(['/dispositivos']), 3000);
        },
        () => {
          this.errorMessage = 'Ocorreu um erro ao atualizar o dispositivo. Tente novamente!';
        }
      );
    } else {
      // Cadastrar
      this.http.post('http://localhost:8000/api/devices', formData).subscribe(
        () => {
          this.successMessage = 'Dispositivo cadastrado com sucesso!';
          setTimeout(() => this.router.navigate(['/dispositivos']), 3000);
          this.formGroup.reset();
        },
        () => {
          this.errorMessage = 'Ocorreu um erro ao cadastrar o dispositivo. Tente novamente!';
        }
      );
    }
  }
}
