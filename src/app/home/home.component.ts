import { Component, OnInit } from '@angular/core';
import { UnoService } from '../uno.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UnoService]
})
export class HomeComponent implements OnInit {

public titulo = " TAG de pagina principal";
public servicio_dato:string;
/// array apra capturar los datos de servicio
public listado_ropa:Array<string>;
// variable para prenda a guardar
public prenda_guardar:string;



  constructor(   public _unoservice: UnoService  ) 
  { 


  }

  ngOnInit() 
  {
    this._unoservice.prueba();
    console.log(this._unoservice.prueba());
    ////
    this.servicio_dato=this._unoservice.prueba();

    this.listado_ropa=this._unoservice.getRopa();
   console.log(this.listado_ropa);

   }

   guardarPrenda()
   {
     var parametro:string =this.prenda_guardar;
     this._unoservice.addRopa(parametro);
     this.prenda_guardar=null;
   }

   eliminarPrenda(indice:number)
   {

     this._unoservice.deleteRopa(indice);
      alert(indice);

   }

}
