import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoService } from '../reg-gasto-ingreso/Service/presupuesto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



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
    ReactiveFormsModule,
    Ng2SearchPipeModule

  ],
  providers:[

  ]
})
export class RegTransacionModule { }
