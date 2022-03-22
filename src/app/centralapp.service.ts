import { Injectable } from '@angular/core';
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

  public myFunctionFiltro(){

  }


}
