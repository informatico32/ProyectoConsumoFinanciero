import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/Models/Type';
import { PresupuestoService } from '../Service/presupuesto.service';
import { Typenun } from 'src/app/Models/Typenun';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  public types: Type[]=[];

  constructor( public presuING: PresupuestoService) {


  }

  ngOnInit(): void {

    this.types = this.presuING.getTypes(Typenun.INGRESO)


  }

  Guardar(){
    this.presuING.addTrans2(Typenun.INGRESO);
  }
  Cancelar(){
    this.presuING.cancelar()

  }



}
