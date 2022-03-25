import { Component, OnInit } from '@angular/core';
import { CentralappService } from 'src/app/centralapp.service';
import { Transaccion } from 'src/app/Models/Transaccion';




@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public datotable: Transaccion[]=this.appSv.getTransaccion();
  filterPost='';
  public comp = new Date()




  constructor(public appSv: CentralappService) {

  }

  ngOnInit(): void {



    console.log(this.comp.toLocaleDateString());







  }

  bucarfecha(){








  }



public termino: string="";

}
