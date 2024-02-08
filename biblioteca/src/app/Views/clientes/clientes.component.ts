import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  prestamoForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.prestamoForm = new FormGroup({
      'libro_id': new FormControl(null, Validators.required),
      'cliente_id': new FormControl(null, Validators.required),
      'fecha_prestamo': new FormControl(null, Validators.required),
      'dias_prestamo': new FormControl(null, Validators.required)

    });
  }

  onSubmit() {
    console.log(this.prestamoForm.value);

  }

}
