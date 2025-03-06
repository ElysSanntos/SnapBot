import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../../dispositivo.service';
import { Observable } from 'rxjs';
import { Dispositivos } from '../../dispositivo.model';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dispositivo-listar',
  standalone: false,
  templateUrl: './dispositivo-listar.component.html',
  styleUrl: './dispositivo-listar.component.scss'
})
export class DispositivoListarComponent implements OnInit {

  dispositivos$: Observable<Dispositivos[]> = new Observable(); // Observable para os dados
  dataSource: MatTableDataSource<Dispositivos> = new MatTableDataSource(); // DataSource para controle da tabela
  totalDevices: number = 0;
  pageSize: number = 5;
  pageIndex: number = 0;
  colunasTabela: string[] = ['id', 'name', 'location', 'purchase_date', 'in_use', 'actions'];
  dispositivos: Dispositivos[] = [];
  devices: Dispositivos[] = [];

  selectedStatus: 'Em Uso' | 'Disponível' | '' = '';  // Para armazenar o status selecionado

  constructor(
    private dispositivoService: DispositivoService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.listarItens();
  }

  listarItens(pageIndex: number = 0, pageSize: number = 10) {
    this.dispositivoService.listarComPagina(pageIndex, pageSize).subscribe(response => {
      this.dispositivos = response.data;
      this.devices = response.data;
      this.dataSource.data = this.dispositivos;
      this.totalDevices = response.total;
    });
  }

  // Método para aplicar o filtro por status
  applyStatusFilter(): void {
    if (this.selectedStatus === 'Em Uso') {
      this.dataSource.data = this.dispositivos.filter(device => device.in_use);
    } else if (this.selectedStatus === 'Disponível') {
      this.dataSource.data = this.dispositivos.filter(device => !device.in_use);
    } else {
      this.dataSource.data = this.dispositivos; // Sem filtro, exibe todos
    }
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
          this.listarItens(this.pageIndex, this.pageSize);
        },
        () => {
          this.snackBar.open('Erro ao excluir dispositivo. Tente novamente!', 'Fechar', { duration: 3000 });
        }
      );
    }
  }

  alterarStatus(dispositivo: Dispositivos): void {
    const novoStatus = !dispositivo.in_use;
    dispositivo.in_use = novoStatus;

    this.dispositivoService.editar(dispositivo.id, dispositivo).subscribe(
      () => {
        this.snackBar.open('Status atualizado com sucesso!', 'Fechar', { duration: 3000 });
        this.listarItens(this.pageIndex, this.pageSize);
      },
      () => {
        this.snackBar.open('Erro ao atualizar o status. Tente novamente!', 'Fechar', { duration: 3000 });
      }
    );
  }
}
