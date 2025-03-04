import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../../dispositivo.service';
import { Observable } from 'rxjs';
import { Dispositivos } from '../../dispositivo.model';

@Component({
  selector: 'app-dispositivo-listar',
  standalone: false,
  templateUrl: './dispositivo-listar.component.html',
  styleUrl: './dispositivo-listar.component.scss'
})
export class DispositivoListarComponent implements OnInit {



  dispositivos$!: Observable<Dispositivos[]>;
  colunasTabela: string[] = ['id', 'name','location','purchase_date','in_use'];


  constructor(private dispositivoService: DispositivoService){}

  ngOnInit() {
    this.listarItens();
   }

  listarItens(){
    this.dispositivos$ = this.dispositivoService.listar();
  }

}
