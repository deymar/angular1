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
  constructor(   public _unoservice: UnoService  ) 
  { 
    ///instanciando el servicio
    
    /////

  }

  ngOnInit() 
  {
    this._unoservice.prueba();
    console.log(this._unoservice.prueba());
    ////
    this.servicio_dato=this._unoservice.prueba();
   }

}
