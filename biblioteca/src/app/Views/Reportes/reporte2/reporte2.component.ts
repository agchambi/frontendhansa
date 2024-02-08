import { MatTableDataSource } from '@angular/material/table';
import { ReportesService } from './../../../Services/reportes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css']
})
export class Reporte2Component implements OnInit {

  displayedColumns: string[] = ['year', 'month', 'total'];
  dataSource = new MatTableDataSource<any>();

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.reportesService.prestamosPorMes().subscribe(data => {
      this.dataSource.data = data;
      console.log(data);
    }, error => {
      console.error('Hubo un error al obtener los datos: ', error);
    });
  }
}
