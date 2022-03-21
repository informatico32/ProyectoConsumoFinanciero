import { Injectable } from '@angular/core';
import { Transaccion } from './Models/Transaccion';



@Injectable({
  providedIn: 'root'
})
export class CentralappService {




  public trasanciones: Transaccion[]= [];
  public trasanciones2: Transaccion[]= [];



  constructor() { }




  public addTransaccion(tran: Transaccion){

  this.trasanciones.push(tran);

  this.setLocal(this.trasanciones);

  }



  public addTransaccion2(tran: Transaccion){

    this.trasanciones2.push(tran);

    this.setLocal2(this.trasanciones2);

    }


  public getTransaccion(){

   //return this.trasanciones;

    return this.getLocal();


  }


  public getTransaccion2(){

    //return this.trasanciones;

     return this.getLocal2();


   }



  private setLocal(trasanciones: Transaccion[]) {
      localStorage.setItem('trasanciones', JSON.stringify(trasanciones));
  }


 private setLocal2(trasanciones2: Transaccion[]) {
    localStorage.setItem('transacciones2', JSON.stringify(trasanciones2));
}




  private getLocal(): Transaccion[] {

    const trans = localStorage.getItem("trasanciones")
    if (trans) {
      return JSON.parse(trans) as Transaccion[];
    } else {

      this.setLocal([])

      return [];
    }


  }



  private getLocal2(): Transaccion[] {

    const trans = localStorage.getItem("transacciones2")
    if (trans) {
      return JSON.parse(trans) as Transaccion[];
    } else {
      this.setLocal2([])

      return [];
    }


  }

  public myFunction(){


  }



}
