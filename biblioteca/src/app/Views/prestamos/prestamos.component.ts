import { PrestamosService } from './../../Services/prestamos.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'libro_id','titulo_libro', 'cliente_id', 'fecha_prestamo', 'dias_prestamo', 'estado', 'isActive', 'opciones'];

  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private prestamosService: PrestamosService) { }

  ngOnInit() {
    this.listar();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listar() {
    this.prestamosService.getPrestamos().subscribe(
      (data) => {
        const filteredData = data.filter(prestamo => prestamo.isActive === 1);
        this.dataSource.data = filteredData;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching prestamos', error);
      }
    );
  }

  devolverLibro(id: number) {
    this.prestamosService.deletePrestamo(id).subscribe({
      next: (response) => {
        console.log('Libro devuelto exitosamente:', response);
        location.reload();
      },
      error: (e) => console.error('Ocurrió un error al devolver el libro:', e),
      complete: () => console.log('Operación de devolución completada')
    });
  }


  getEstado(estado: number): string {
    return estado === 0 ? 'En préstamo' : 'Devuelto';
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
