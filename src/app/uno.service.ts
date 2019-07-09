import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnoService {
  public nombre_prenda ="Pantalones desde el servicio";
  public colleccion_ropa =["Pantalones desde el servicio","camiseta"];
  
 
  prueba()
  {
     return this.nombre_prenda;
  }
 
 
  constructor() 
  { 
    
  }

  addRopa(nombre_prenda)
  {
     return this.colleccion_ropa.push(this.nombre_prenda);
  }

  
}


