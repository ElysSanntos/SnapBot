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
  styleUrls: ['./dispositivo-listar.component.scss']
})
export class DispositivoListarComponent implements OnInit {

  dispositivos$: Observable<Dispositivos[]> = new Observable();
  dataSource: MatTableDataSource<Dispositivos> = new MatTableDataSource();
  totalDevices: number = 0;
  pageSize: number = 5;
  pageIndex: number = 0;
  colunasTabela: string[] = ['id', 'name', 'location', 'purchase_date', 'in_use', 'actions'];
  dispositivos: Dispositivos[] = [];
  selectedStatus: 'Em Uso' | 'Disponível' | '' = '';

  constructor(
    private dispositivoService: DispositivoService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.listarItens();
    this.pageSize = 5;  // Define a quantidade inicial de itens
    this.listarItens(this.pageIndex, this.pageSize);
  }

  listarItens(pageIndex: number = 0, pageSize: number = 10) {
    this.dispositivoService.listarComPagina(pageIndex, pageSize).subscribe(
      (response: any) => {
        // Confirma a estrutura de dados retornada
        console.log('Resposta da API:', response);

        // Atualiza os dados e total
        this.dispositivos = response.data;
        this.totalDevices = response.total;

        // Atualiza o MatTableDataSource com os dados
        this.dataSource.data = this.dispositivos;
      },
      (error) => {
        console.error('Erro ao carregar dispositivos', error);
        this.snackBar.open('Erro ao carregar dispositivos. Tente novamente!', 'Fechar', { duration: 3000 });
      }
    );
  }



  applyStatusFilter(): void {
    if (this.selectedStatus === 'Em Uso') {
      this.dataSource.data = this.dispositivos.filter(device => device.in_use);
    } else if (this.selectedStatus === 'Disponível') {
      this.dataSource.data = this.dispositivos.filter(device => !device.in_use);
    } else {
      this.dataSource.data = this.dispositivos;
    }
  }

  pageChanged(event: PageEvent) {
    this.pageSize = 5;  // Garantir que a página sempre exiba 5 itens
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
    const novoStatus = dispositivo.in_use === 0 ? 1 : 0; // Se for 0, muda para 1, se for 1, muda para 0
    dispositivo.in_use = novoStatus;

    this.dispositivoService.editar(dispositivo.id, dispositivo).subscribe(
      () => {
        this.snackBar.open('Status atualizado com sucesso!', 'Fechar', { duration: 3000 });
        this.listarItens(this.pageIndex, this.pageSize);  // Recarregar a lista após a alteração
      },
      () => {
        this.snackBar.open('Erro ao atualizar o status. Tente novamente!', 'Fechar', { duration: 3000 });
      }
    );
  }

  onEdit(dispositivo: Dispositivos): void {
    // Lógica para editar dispositivo (por exemplo, redirecionar ou abrir um modal)
    console.log('Editando dispositivo', dispositivo);
    // Aqui você pode redirecionar para outra página ou abrir um modal para edição
  }
}
