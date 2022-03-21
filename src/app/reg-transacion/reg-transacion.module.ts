import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoService } from '../reg-gasto-ingreso/Service/presupuesto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [

{

  path: '', component: ListaComponent
}


]


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule

  ],
  providers:[

  ]
})
export class RegTransacionModule { }
