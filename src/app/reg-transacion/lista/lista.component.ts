import { Component, OnInit } from '@angular/core';
import { CentralappService } from 'src/app/centralapp.service';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  filterPost='';
  constructor(public appSv: CentralappService) {

  }

  ngOnInit(): void {

    console.log(this.appSv.getTransaccion());

 


  }



public termino: string='';


}
