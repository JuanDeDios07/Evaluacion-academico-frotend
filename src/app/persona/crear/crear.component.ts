import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  [x: string]: any;

titulo: string='Registrar Nueva Persona';

persona:Persona=new Persona();
  constructor(private personaService: PersonaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public crearPersona(): void{
    this.personaService.registrarPersona01(this.persona).subscribe(
      //response => this.router.navigate(['/escuela']) anterior
      persona => {
        this.router.navigate(['/persona'])
       Swal.fire("Enhorabuena",'Se ha registrado de manera satisfactoria',"success")
      }
    )
}


}
