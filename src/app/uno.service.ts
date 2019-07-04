import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnoService {
  public nombre_prenda ="pantalones desde el servicio";

  prueba()
  {return this.nombre_prenda;}
 
 
 
  constructor() { }
}


