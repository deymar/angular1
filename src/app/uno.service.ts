import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnoService {
  public nombre_prenda ="Pantalones desde el servicio";
  public colleccion_ropa =["Polera","camiseta"];

  constructor()
  {}

  prueba()
  {
     return this.nombre_prenda;
  }


 addRopa(nombre_prenda:string):Array<string>
 {
   this.colleccion_ropa.push(nombre_prenda);
   return this.getRopa();
 }

 getRopa():Array<string>
 {
    return this.colleccion_ropa;
 }

 deleteRopa(indice:number)
 {
this.colleccion_ropa.splice(indice,1);

return this.getRopa();

 }
 




  
}


