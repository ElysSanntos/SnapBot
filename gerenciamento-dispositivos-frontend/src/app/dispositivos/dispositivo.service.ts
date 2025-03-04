import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Dispositivos } from './dispositivo.model';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  private baseURL = 'http://localhost:8000';
  private endpoint = 'api/devices';

  constructor(private HttpClient: HttpClient) { }

  listarComPagina(pageIndex: number, pageSize: number): Observable<{ data: Dispositivos[], total: number }> {
    return this.HttpClient.get<{status: string, data: Dispositivos[], total: number}>(
      `${this.baseURL}/${this.endpoint}?page=${pageIndex + 1}&limit=${pageSize}`
    ).pipe(
      map(response => ({ data: response.data, total: response.total }))
    );
  }
}
