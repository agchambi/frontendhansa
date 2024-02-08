import { ReportesService } from './../../Services/reportes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  totalLibros: number = 0;

  constructor(private reportesService:ReportesService) { }

  ngOnInit(): void {
    this.cargarTotalLibros();
  }

  cargarTotalLibros() {
    this.reportesService.totalLibros().subscribe(data => {
      this.totalLibros = data.total_libros;
    }, error => {
      console.error('Hubo un error al obtener el total de libros:', error);
    });
  }

}
