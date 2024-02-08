import { ReportesComponent } from './Views/Reportes/reportes.component';
import { Reporte2Component } from './Views/Reportes/reporte2/reporte2.component';
import { Reporte1Component } from './Views/Reportes/reporte1/reporte1.component';
import { ClientesComponent } from './Views/clientes/clientes.component';
import { AutoresComponent } from './Views/autores/autores.component';
import { LibrosComponent } from './Views/libros/libros.component';
import { MenuComponent } from './Views/menu/menu.component';
import { PrestamosComponent } from './Views/prestamos/prestamos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [


  { path: 'prestamos', component: PrestamosComponent },
  { path: '', component: MenuComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'autores', component: AutoresComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'reporte', component: ReportesComponent },
  { path: 'reporte/librosporsemana', component: Reporte1Component },
  { path: 'reporte/librospormes', component: Reporte2Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
