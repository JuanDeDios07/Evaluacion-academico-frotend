import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  PersonaLista: any;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.listaPersonas01();
  }

  listaPersonas01() {
    this.personaService.ListaPersona().subscribe((res:any) => {
      this.PersonaLista = res.data;
    })
}
}
