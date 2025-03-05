import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DispositivoService } from '../../dispositivo.service';
import { Dispositivos } from '../../dispositivo.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dispositivo-form',
  stantalone: false;
  templateUrl: './dispositivo-form.component.html',
  styleUrls: ['./dispositivo-form.component.scss']
})
export class DispositivoFormComponent implements OnInit {
  dispositivoId: number | null = null;
  dispositivo: Dispositivos | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dispositivoService: DispositivoService,
    private router: Router,
    private snackBar: MatSnackBar // Adicionando MatSnackBar
  ) { }

  ngOnInit(): void {
    // Pega o id da rota
    this.dispositivoId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (this.dispositivoId) {
      // Caso haja um ID, estamos editando, então podemos buscar o dispositivo
      this.dispositivoService.buscarPorId(this.dispositivoId).subscribe((response) => {
        this.dispositivo = response;
      });
    }
  }

  get buttonLabel(): string {
    return this.dispositivoId ? 'Editar Dispositivo' : 'Cadastrar Dispositivo';
  }

  // Método para salvar ou atualizar o dispositivo
  salvar(): void {
    if (this.dispositivoId) {
      // Atualizando dispositivo
      this.dispositivoService.atualizar(this.dispositivoId, this.dispositivo).subscribe(
        () => {
          // Exibe a mensagem de sucesso com padrão de exclusão
          this.snackBar.open('Dispositivo alterado com sucesso!', 'Fechar', { duration: 3000 });
          this.router.navigate(['/dispositivos']);
        },
        () => {
          // Em caso de erro
          this.snackBar.open('Erro ao alterar dispositivo. Tente novamente!', 'Fechar', { duration: 3000 });
        }
      );
    } else {
      // Cadastro de dispositivo
      this.dispositivoService.cadastrar(this.dispositivo).subscribe(
        () => {
          this.snackBar.open('Dispositivo cadastrado com sucesso!', 'Fechar', { duration: 3000 });
          this.router.navigate(['/dispositivos']);
        },
        () => {
          this.snackBar.open('Erro ao cadastrar dispositivo. Tente novamente!', 'Fechar', { duration: 3000 });
        }
      );
    }
  }
}
