import { Component, OnInit } from '@angular/core';
import { CentralappService } from 'src/app/centralapp.service';
import { Persona } from 'src/app/Models/Persona';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {

  public person: Persona[]=this.pps.getPersona();


  constructor(public pps: CentralappService) { }

  ngOnInit(): void {

    this.pps.getPersona();
  }

}
