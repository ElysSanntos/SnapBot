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

  getDevices(): Observable<Dispositivos[]> {
    return this.listarComPagina(0, 10).pipe(map(response => response.data));
  }

  listarComPagina(pageIndex: number, pageSize: number): Observable<{ data: Dispositivos[], total: number }> {
    return this.HttpClient.get<{ status: string, data: Dispositivos[], total: number }>(
      `${this.baseURL}/${this.endpoint}?page=${pageIndex + 1}&limit=${pageSize}`
    ).pipe(
      map(response => ({ data: response.data, total: response.total }))
    );
  }

  cadastrar(dispositivo: Dispositivos): Observable<Dispositivos> {

    return this.HttpClient.post<Dispositivos>(`${this.baseURL}/${this.endpoint}`, dispositivo)

  }
  obterPorId(id: number): Observable<Dispositivos> {
    return this.HttpClient.get<Dispositivos>(`${this.baseURL}/${this.endpoint}/${id}`);
  }

  editar(id: number, dispositivo: Dispositivos): Observable<Dispositivos> {
    return this.HttpClient.put<Dispositivos>(`${this.baseURL}/${this.endpoint}/${id}`, dispositivo);
  }

  delete(id: number): Observable<void> {
    return this.HttpClient.delete<void>(`${this.baseURL}/${this.endpoint}/${id}`);
  }

  marcarComoEmUso(id: number): Observable<Dispositivos> {
    return this.HttpClient.patch<Dispositivos>(`${this.baseURL}/${this.endpoint}/${id}/use`, {});
  }

}
