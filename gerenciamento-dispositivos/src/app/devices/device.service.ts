import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://localhost:8000/api/devices';// URL da API Laravel

  constructor(private http: HttpClient) { }

   // Método para listar todos os dispositivos
   getDevices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para criar um novo dispositivo
  addDevice(device: any): Observable<any> {
    return this.http.post(this.apiUrl, device);
  }

  // Método para atualizar um dispositivo
  updateDevice(id: number, device: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, device);
  }

  // Método para deletar um dispositivo
  deleteDevice(id: number) {
    return this.http.delete(`${this.apiUrl}/devices/${id}`);
  }
}
