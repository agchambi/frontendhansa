import { ReportesService } from './../../../Services/reportes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {

  datosPrestamos: any[] = [];

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    this.reportesService.prestamosPorSemana().subscribe(data => {
      this.datosPrestamos = data;
    }, error => {
      console.error('Hubo un error al obtener los datos:', error);
    });
  }
}
