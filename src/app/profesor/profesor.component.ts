import { Component, OnInit } from '@angular/core';
import { ProfesorService } from './profesor.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  ProfesorLista: any;

  constructor(private profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.listaProfesor();
  }

  listaProfesor() {
    this.profesorService.ListaProfesor01().subscribe((res:any) => {
      this.ProfesorLista = res.data;
    })
}
}
