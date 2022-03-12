import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { RouterModule, Routes } from '@angular/router';



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
    RouterModule.forChild(routes)
  ]
})
export class RegTransacionModule { }
