import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarLibrosComponent } from './gestionar-libros/gestionar-libros.component';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [
  {path: '', redirectTo: 'gerstionarLibros', pathMatch: 'full'},
  {path: 'gestionarLibros', component: GestionarLibrosComponent},
  {path: 'listarLibros', component: ListarLibrosComponent},
  {path: 'configuracion', component: ConfiguracionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
