import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device';





@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://localhost:8000/api/devices';

  constructor(private http: HttpClient) { }

   // Método para listar todos os dispositivos
   getDevices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getDeviceById(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.apiUrl}/${id}`);
  }


  // Método para criar um novo dispositivo
  addDevice(device: any): Observable<any> {
    console.log('Enviando para API:', device);
    return this.http.post(this.apiUrl, device);
  }

  // Método para atualizar um dispositivo
  updateDevice(id: number, device: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, device);
  }

  // Método para deletar um dispositivo
  deleteDevice(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);

  }
}
