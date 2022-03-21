import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/Models/Type';
import { Typenun } from 'src/app/Models/Typenun';
import { PresupuestoService } from '../Service/presupuesto.service';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {


  public types: Type[]=[];
  constructor( public presupG: PresupuestoService) {


  }

  ngOnInit(): void {

    this.types = this.presupG.getTypes(Typenun.GASTO)

  }

  Guardar(){

    this.presupG.addTrans(Typenun.GASTO);
  }
  Cancelar(){
    this.presupG.cancelar()


  }


}
