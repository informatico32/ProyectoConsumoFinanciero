import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastoComponent } from './gasto/gasto.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'gasto', component: GastoComponent
  },

  {
    path:'ingreso', component: IngresoComponent

  }
  ,
  {

  }



]


@NgModule({
  declarations: [
    GastoComponent,
    IngresoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegGastoIngresoModule { }
