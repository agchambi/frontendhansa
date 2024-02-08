import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  baseUrl = 'http://localhost:8000/api/reportes';

  constructor(private http: HttpClient) { }

  prestamosPorMes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/prestamos-por-mes`);
  }

  prestamosPorSemana(): Observable<any> {
    return this.http.get(`${this.baseUrl}/prestamos-por-semana`);
  }

  librosPrestadosMesActual(): Observable<any> {
    return this.http.get(`${this.baseUrl}/libros-prestados-mes-actual`);
  }

  librosPrestadosSemanaActual(): Observable<any> {
    return this.http.get(`${this.baseUrl}/libros-prestados-semana-actual`);
  }

  totalLibros(): Observable<any> {
    return this.http.get(`${this.baseUrl}/total-libros`);
  }
}
