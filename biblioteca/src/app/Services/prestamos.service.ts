import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  private baseUrl = 'http://localhost:8000/api/prestamos';

  constructor(private http: HttpClient) { }

  getPrestamos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getPrestamoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createPrestamo(prestamoData: any): Observable<any> {
    return this.http.post(this.baseUrl, prestamoData);
  }

  updatePrestamo(id: number, prestamoData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, prestamoData);
  }

  deletePrestamo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
