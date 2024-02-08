import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LibrosService } from './../../Services/libros.service';
import { ReportesService } from './../../Services/reportes.service';
import { Component, OnInit,ViewChild  } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: any[] = [];
  displayedColumns: string[] = ['id', 'titulo', 'lote', 'descripcion', 'isActive'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.cargarLibros();
  }

  cargarLibros() {
    this.librosService.obtenerLibros().subscribe(data => {
      this.dataSource.data = data;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
