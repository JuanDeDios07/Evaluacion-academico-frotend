import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { Crear07Component } from './asignatura/crear07/crear07.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearComponent } from './persona/crear/crear.component';
import { PersonaComponent } from './persona/persona.component';
import { ProfesorComponent } from './profesor/profesor.component';

const routes: Routes = [
  {
    path:'persona',
    component:PersonaComponent
  },
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'estudiante',
    component:EstudianteComponent
  },
  {
  path:'profesor',
  component:ProfesorComponent
  },
  {
    path:'persona/form',
    component:CrearComponent
  },
  {
    path:'asignatura',
    component:AsignaturaComponent
  },
  {
    path:'asignatura/form',
    component:Crear07Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
