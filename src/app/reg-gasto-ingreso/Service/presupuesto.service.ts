
import { Injectable } from '@angular/core';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CentralappService } from 'src/app/centralapp.service';
import { Transaccion } from 'src/app/Models/Transaccion';
import { Type } from 'src/app/Models/Type';
import { Typenun } from 'src/app/Models/Typenun';
@Injectable()
export class PresupuestoService {
  public form : FormGroup;
  public comp = new Date()
  //estableciendo las lista de las categoria de ingreso y Gasto.
  public types: Type[]=[


    {
      name: "Alimento", type: Typenun.GASTO

    },

    {
      name: "Entretenimiento", type: Typenun.GASTO

    },


    {
      name: "Transporte", type: Typenun.GASTO

    },

    {
      name:  "Educacion", type: Typenun.GASTO

    },
    {
      name:"Salario Quincenal", type: Typenun.INGRESO

    },

    {
      name:"Salario Mensual", type: Typenun.INGRESO

    },

    {
      name: "Ingreso Por Venta", type: Typenun.INGRESO

    },

    {
      name:  "Otros Ingreso", type: Typenun.INGRESO

    }

  ]





  constructor( private formBu: FormBuilder, private appSv : CentralappService ) {
    //contruyendo formulario en Angular los parametro del formgroud
  this.form = this.formBu.group({

    monto : ['',[Validators.required,Validators.min(200)]],
    date :['',[Validators.required]],
    descripcion:[''],
    type: ['',Validators.required],
    namet: ['']



  });

  }

//Anadir Transacion recibiendo como parametro el tipo : ingreso o Gasto
  public addTrans(tipo: Typenun){



    //validacion si el formulario es valido
    console.log(this.form)
if(this.form.valid){

  const tran: Transaccion={
    id:this.getId(),
    monto: this.form.get('monto')?.value,
    descripcion: this.form.get('descripcion')?.value,
    date: this.form.get('date')?.value,
    type:  this.form.get('type')?.value,
    namet: tipo




  };

  this.appSv.addTransaccion(tran);
 this.form.reset();

}
else if(this.form.invalid) {


    return Object.values(this.form.controls).forEach(control=>{
      control.markAllAsTouched();


    });



}

  }


  //metodo para cancelar la Transacion
  cancelar(){

    let conf : Boolean = confirm("Esta Seguro Que Desea Abandonar")
    if(conf){

      this.form.reset()

    }
    else{
     alert("Debe de Continuar Con la Transacion");
    }


  }

  //filtar Por Tipo
  public getTypes(type: Typenun) : Type[] {
    return this.types.filter(t=> t.type === type)
  }
//Conseguir id automatico Randon
  private getId(): string {
    return Math.random().toString().substr(2);
  }

//campo para Realizar Validacion
  get monto() {
    return this.form.get("monto")?.invalid && this.form.get('monto')?.touched
  }

  get date() {
    return this.form.get("date")?.invalid && this.form.get('date')?.touched
  }

  get type() {
    return this.form.get("type")?.invalid && this.form.get('type')?.touched
  }

  get descripcion() {
    return this.form.get("descripcion")
  }



}
