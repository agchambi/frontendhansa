
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './Views/libros/libros.component';
import { AutoresComponent } from './Views/autores/autores.component';
import { PrestamosComponent } from './Views/prestamos/prestamos.component';
import { ClientesComponent } from './Views/clientes/clientes.component';
import { MenuComponent } from './Views/menu/menu.component';
import { NavbarComponent } from './Views/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Reporte1Component } from './Views/Reportes/reporte1/reporte1.component';
import { Reporte2Component } from './Views/Reportes/reporte2/reporte2.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    AutoresComponent,
    PrestamosComponent,
    ClientesComponent,
    MenuComponent,
    NavbarComponent,
    Reporte1Component,
    Reporte2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
