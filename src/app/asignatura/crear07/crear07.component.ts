import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from '../asignatura';
import { AsignaturaComponent } from '../asignatura.component';
import { AsignaturaService } from '../asignatura.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear07',
  templateUrl: './crear07.component.html',
  styleUrls: ['./crear07.component.css']
})
export class Crear07Component implements OnInit {

  [x: string]: any;

titulo: string='Registrar Nueva Asignatura';

asignatura:Asignatura=new Asignatura();

  constructor(private asignaturaService: AsignaturaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public crearAsignatura(): void{
    this.asignaturaService.registrarAsignaturaService(this.asignatura).subscribe(
      //response => this.router.navigate(['/escuela']) anterior
      asignatura => {
        this.router.navigate(['/asignatura'])
       Swal.fire("Enhorabuena",'Se ha registrado de manera satisfactoria',"success")
      }
    )
}

}
