import { Type } from "./Type";


export interface Transaccion
{
  id: string;
  monto: number;
  date: Date;
  namet:string;
  descripcion: string;
  type: Type;


}
