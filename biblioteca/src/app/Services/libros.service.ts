import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private baseUrl = 'http://localhost:8000/api/libros';
  constructor(private http: HttpClient) { }

  obtenerLibros(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  obtenerLibro(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  crearLibro(libro: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, libro);
  }

  actualizarLibro(id: number, libro: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, libro);
  }

  eliminarLibro(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
