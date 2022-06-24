import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from './asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {
  AsignaturaLista: any;

  constructor(private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    this.listaAsignatura01();
  }

  listaAsignatura01() {
    this.asignaturaService.ListaAsignaturaService().subscribe((res:any) => {
      this.AsignaturaLista = res.data;
    })
}
}
