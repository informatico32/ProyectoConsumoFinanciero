import { Injectable } from '@angular/core';
import { Totales } from './Models/Totales';

import { Transaccion } from './Models/Transaccion';



@Injectable({
  providedIn: 'root'
})
export class CentralappService {


  private trasancciones: Transaccion[]= [];

  constructor() { }

  public addTransaccion(tran: Transaccion){

  this.trasancciones.push(tran);

  this.setLocal(this.trasancciones);

  }

  public getTransaccion(){


    return this.getLocal();


  }


  private setLocal(trasanciones: Transaccion[]) {
      localStorage.setItem('trasancciones', JSON.stringify(trasanciones));
  }


  private getLocal(): Transaccion[] {

    const trans = localStorage.getItem("trasancciones")
    if (trans) {
      return JSON.parse(trans) as Transaccion[];
    } else {

      this.setLocal([])

      return [];
    }


  }

  public myFunctionFiltro(termino: string){


    return termino;




  }

  public datoAgrupado(){



    var transacion =this.getTransaccion();

    let montoi: number=0;
    let montog: number=0;let arrd: Totales[]=[];

    let arrdd: Totales[]=[];

    for (let k = 0; k < transacion.length; k++) {
      const element = transacion[k].namet;

      if(element==="Ingreso"){


      montoi=montoi+ transacion[k].monto ;


      }
      else if(element==="Gasto"){
      montog= montog+ transacion[k].monto ;

      }

     arrd=[{ 
      totalG:montog,
      totali:montoi
    }
    ]


    }


    return arrd;

  }









}
