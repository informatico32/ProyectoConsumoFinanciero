import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'transacciones', loadChildren: ()=> import('./reg-transacion/reg-transacion.module').then(m=> m.RegTransacionModule)
  },

  {
    path: 'presupuesto', loadChildren: ()=> import('./reg-gasto-ingreso/reg-gasto-ingreso.module').then(m=> m.RegGastoIngresoModule)
  },
  {
    path: '**', redirectTo :'transacciones'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
