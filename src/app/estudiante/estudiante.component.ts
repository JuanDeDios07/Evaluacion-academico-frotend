import { Component, OnInit } from '@angular/core';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  EstudianteLista: any;


  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.listaEstudiante01();
  }

  listaEstudiante01() {
    this.estudianteService.ListaEstudiantes().subscribe((res:any) => {
      this.EstudianteLista = res.data;
    })
}
}
