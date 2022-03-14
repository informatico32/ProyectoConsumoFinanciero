import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastoComponent } from './gasto/gasto.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemTableComponent } from './item-table/item-table.component';


const routes: Routes = [

  {
    path:'gasto', component: GastoComponent
  },

  {
    path:'ingreso', component: IngresoComponent

  }
  ,
  {
    path:'tabla-ingreso-gasto', component: ItemTableComponent

  },
  {
    path: '**', redirectTo: 'tabla-ingreso-gasto'
  }




]


@NgModule({
  declarations: [
    GastoComponent,
    IngresoComponent,
    ItemTableComponent



  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
 
  ]
})
export class RegGastoIngresoModule { }
