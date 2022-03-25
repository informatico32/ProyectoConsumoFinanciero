import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentacionComponent } from './documentacion/documentacion.component';

const routes: Routes = [


  {
    path:'', component: DocumentacionComponent
  },

]

@NgModule({
  declarations: [
    DocumentacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AgradecimientoModule { }
