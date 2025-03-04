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

  listar(): Observable<Dispositivos[]> {
    return this.HttpClient.get<{status: string, data: Dispositivos[]}>(`${this.baseURL}/${this.endpoint}`)
      .pipe(
        map(response => response.data) // Extraindo apenas o array "data"
      );
  }

}
