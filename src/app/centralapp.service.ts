import { Injectable } from '@angular/core';
import { Transaccione } from './Models/Transaccion';


@Injectable({
  providedIn: 'root'
})
export class CentralappService {


private trasanciones: Transaccione[]= [];


  constructor() { }

  public addTransaccion(trand: Transaccione){
    this.trasanciones.push(trand);
    //logica que no se duplique
  }

  public getTransaccion(){

    return this.trasanciones;

  }




}
