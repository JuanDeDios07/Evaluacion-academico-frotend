import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonaComponent } from './persona/persona.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { CrearComponent } from './persona/crear/crear.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { Crear07Component } from './asignatura/crear07/crear07.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonaComponent,
    InicioComponent,
    EstudianteComponent,
    ProfesorComponent,
    CrearComponent,
    AsignaturaComponent,
    Crear07Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
