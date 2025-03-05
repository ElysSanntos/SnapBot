import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../../dispositivo.service';
import { Observable, of } from 'rxjs';
import { Dispositivos } from '../../dispositivo.model';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dispositivo-listar',
  standalone: false,
  templateUrl: './dispositivo-listar.component.html',
  styleUrl: './dispositivo-listar.component.scss'
})
export class DispositivoListarComponent implements OnInit {

  dispositivos$!: Observable<Dispositivos[]>;
  totalDevices: number = 0; // Total de dispositivos
  pageSize: number = 10;    // Quantidade por página
  pageIndex: number = 0;    // Página inicial
  colunasTabela: string[] = ['id', 'name', 'location', 'purchase_date', 'in_use','actions'];

  constructor(
    private dispositivoService: DispositivoService,
    private snackBar: MatSnackBar,
    ){}

  ngOnInit() {
    this.listarItens();
   }

   listarItens(pageIndex: number = 0, pageSize: number = 10) {
    this.dispositivoService.listarComPagina(pageIndex, pageSize).subscribe(response => {
      this.dispositivos$ = of(response.data);
      this.totalDevices = response.total;
    });
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.listarItens(this.pageIndex, this.pageSize);
  }

  onDelete(id: number): void {
    const confirmDelete = confirm('Tem certeza que deseja excluir este dispositivo?');
    if (confirmDelete) {
      this.dispositivoService.delete(id).subscribe(
        () => {
          this.snackBar.open('Dispositivo excluído com sucesso!', 'Fechar', { duration: 3000 });
          this.listarItens(this.pageIndex, this.pageSize); // Corrigido para listarItens
        },
        () => {
          this.snackBar.open('Erro ao excluir dispositivo. Tente novamente!', 'Fechar', { duration: 3000 });
        }
      );
    }
  }

}


